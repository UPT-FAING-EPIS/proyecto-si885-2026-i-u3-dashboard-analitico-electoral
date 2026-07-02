const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const input = path.join(root, "outputs", "neocities_propuestas", "app.js");
const outputDir = path.join(root, "data");

const js = fs.readFileSync(input, "utf8");
const start = js.indexOf("const DATASET =");
const endMarker = "// === FIN DE DATASET ===";
const end = js.indexOf(endMarker, start);

if (start < 0 || end < 0) {
  throw new Error("No se encontro el bloque DATASET en app.js");
}

let objectLiteral = js.slice(start, end).replace(/^const\s+DATASET\s*=\s*/, "").trim();
objectLiteral = objectLiteral.replace(/;\s*$/, "");

const DATASET = vm.runInNewContext(`(${objectLiteral})`, {});
const items = Array.isArray(DATASET.items) ? DATASET.items : [];

function csvCell(value) {
  if (value === null || value === undefined) return "";
  const text = String(value).replace(/\r?\n/g, " ").replace(/\s+/g, " ").trim();
  return `"${text.replace(/"/g, '""')}"`;
}

function writeCsv(fileName, headers, rows) {
  const content = [
    headers.map(csvCell).join(","),
    ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(",")),
  ].join("\n");
  fs.writeFileSync(path.join(outputDir, fileName), "\uFEFF" + content, "utf8");
}

const topicLabels = {
  seguridad: "Seguridad",
  educacion: "Educacion",
  mineria: "Mineria",
  produccion: "Produccion",
  economia: "Economia",
  social: "Social",
};

const resumenRows = [];
const detalleRows = [];
const orientacionRows = [];
const fuentePrincipal = "https://candidatosperu2026.neocities.org/";

for (const item of items) {
  if (item.type && item.type !== "candidate") continue;

  const candidato = item.nombre || "";
  const partido = item.partido || "";
  const id = item.id || "";

  resumenRows.push({
    IdCandidatoWeb: id,
    Candidato: candidato,
    Partido: partido,
    Info: item.info || "",
    WebOficial: (item.websOficiales || []).join("; "),
    VideoUrl: item.videoUrl || "",
    FuenteDataset: fuentePrincipal,
  });

  (item.orientacion || []).forEach((texto, index) => {
    orientacionRows.push({
      IdCandidatoWeb: id,
      Candidato: candidato,
      Partido: partido,
      Orden: index + 1,
      Orientacion: texto,
      FuenteDataset: fuentePrincipal,
    });
  });

  const keys = new Set([
    ...Object.keys(item.posiciones || {}),
    ...Object.keys(item.posicionesDetalle || {}),
  ]);

  for (const key of keys) {
    const detail = item.posicionesDetalle?.[key] || {};
    const fuentes = Array.isArray(detail.fuentes) ? detail.fuentes : [];
    detalleRows.push({
      IdCandidatoWeb: id,
      Candidato: candidato,
      Partido: partido,
      TemaCodigo: key,
      Tema: topicLabels[key] || key,
      PropuestaCorta: item.posiciones?.[key] || "",
      PropuestaDetalle: detail.resumen || "",
      Fuentes: fuentes.join("; "),
      CantidadFuentes: fuentes.length,
      FuenteDataset: fuentePrincipal,
    });
  }
}

writeCsv(
  "Neocities_CandidatosPropuestas.csv",
  ["IdCandidatoWeb", "Candidato", "Partido", "Info", "WebOficial", "VideoUrl", "FuenteDataset"],
  resumenRows,
);

writeCsv(
  "Neocities_PropuestasDetalle.csv",
  [
    "IdCandidatoWeb",
    "Candidato",
    "Partido",
    "TemaCodigo",
    "Tema",
    "PropuestaCorta",
    "PropuestaDetalle",
    "Fuentes",
    "CantidadFuentes",
    "FuenteDataset",
  ],
  detalleRows,
);

writeCsv(
  "Neocities_OrientacionCandidato.csv",
  ["IdCandidatoWeb", "Candidato", "Partido", "Orden", "Orientacion", "FuenteDataset"],
  orientacionRows,
);

console.log(`Candidatos: ${resumenRows.length}`);
console.log(`Propuestas detalle: ${detalleRows.length}`);
console.log(`Orientaciones: ${orientacionRows.length}`);
console.log(`CSV generados en ${outputDir}`);
