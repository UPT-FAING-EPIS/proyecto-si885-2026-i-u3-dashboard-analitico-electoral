import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataset = JSON.parse(
  await fs.readFile(path.join(__dirname, "comparativa_keiko_roberto.json"), "utf8"),
);

const workbook = Workbook.create();
const resumen = workbook.worksheets.add("Resumen");
const detalle = workbook.worksheets.add("Detalle");
const fuentes = workbook.worksheets.add("Fuentes");

for (const sheet of [resumen, detalle, fuentes]) {
  sheet.showGridLines = false;
}

const palette = {
  dark: "#16324F",
  blue: "#2563EB",
  slate: "#E8EEF7",
  soft: "#F6F8FB",
  line: "#C8D3E3",
  green: "#118C5A",
  red: "#B42318",
  white: "#FFFFFF",
};

function styleTitle(sheet, range, title, subtitle) {
  sheet.getRange(range).merge();
  sheet.getRange(range).values = [[title]];
  sheet.getRange(range).format = {
    fill: palette.dark,
    font: { bold: true, color: palette.white, size: 16 },
    horizontalAlignment: "center",
    verticalAlignment: "center",
  };
  const subtitleRange = range.replace(/\d+:\w+\d+/, "2:H2");
  sheet.getRange(subtitleRange).merge();
  sheet.getRange(subtitleRange).values = [[subtitle]];
  sheet.getRange(subtitleRange).format = {
    fill: palette.slate,
    font: { italic: true, color: "#334155", size: 10 },
    horizontalAlignment: "center",
  };
  sheet.getRange("1:1").format.rowHeight = 30;
  sheet.getRange("2:2").format.rowHeight = 22;
}

styleTitle(
  resumen,
  "A1:H1",
  "Comparativa RTC: Keiko Fujimori vs Roberto Sanchez",
  "Datos extraidos de la pagina publica revisatucandidato.pe el dia de generacion del archivo.",
);

const summaryHeaders = [
  "Candidato",
  "Elecciones",
  "Contratos",
  "Total contratos S/",
  "Titulos",
  "Bienes",
  "Trabajos",
  "Fuente",
];
const summaryRows = dataset.candidates.map((candidate) => [
  candidate.candidate,
  candidate.elections_count,
  candidate.contracts_count,
  candidate.contracts_total_soles,
  candidate.titles_count,
  candidate.properties_count,
  candidate.jobs_count,
  dataset.source_url,
]);

resumen.getRange("A4:H4").values = [summaryHeaders];
resumen.getRangeByIndexes(4, 0, summaryRows.length, summaryHeaders.length).values = summaryRows;
resumen.tables.add(`A4:H${4 + summaryRows.length}`, true, "ResumenComparativa");
resumen.getRange("A4:H4").format = {
  fill: palette.dark,
  font: { bold: true, color: palette.white },
  horizontalAlignment: "center",
};
resumen.getRange("A5:H6").format = {
  fill: palette.white,
  borders: { preset: "inside", style: "thin", color: palette.line },
};
resumen.getRange("B5:G6").format.horizontalAlignment = "center";
resumen.getRange("D5:D6").setNumberFormat('"S/ "#,##0');
resumen.getRange("A:A").format.columnWidth = 30;
resumen.getRange("B:G").format.columnWidth = 15;
resumen.getRange("H:H").format.columnWidth = 34;

resumen.getRange("A9:C9").values = [["Indicador", "Keiko Fujimori", "Roberto Sanchez"]];
resumen.getRange("A10:C14").values = [
  ["Elecciones registradas", dataset.candidates[0].elections_count, dataset.candidates[1].elections_count],
  ["Titulos", dataset.candidates[0].titles_count, dataset.candidates[1].titles_count],
  ["Contratos", dataset.candidates[0].contracts_count, dataset.candidates[1].contracts_count],
  ["Bienes", dataset.candidates[0].properties_count, dataset.candidates[1].properties_count],
  ["Trabajos", dataset.candidates[0].jobs_count, dataset.candidates[1].jobs_count],
];
resumen.getRange("A9:C9").format = {
  fill: palette.blue,
  font: { bold: true, color: palette.white },
  horizontalAlignment: "center",
};
resumen.getRange("A10:C14").format = {
  fill: palette.soft,
  borders: { preset: "all", style: "thin", color: palette.line },
};
resumen.getRange("B10:C14").format.horizontalAlignment = "center";

const chart = resumen.charts.add("bar", resumen.getRange("A9:C14"));
chart.title = "Comparacion de indicadores";
chart.hasLegend = true;
chart.xAxis = { axisType: "textAxis", textStyle: { fontSize: 9 } };
chart.yAxis = { numberFormatCode: "#,##0" };
chart.setPosition("E9", "H24");

const winnerRows = [
  ["Mayor trayectoria electoral", "=IF(B10>C10,B$9,IF(B10<C10,C$9,\"Empate\"))"],
  ["Mayor total en contratos", "=IF(B12>C12,B$9,IF(B12<C12,C$9,\"Empate\"))"],
  ["Mayor experiencia laboral", "=IF(B14>C14,B$9,IF(B14<C14,C$9,\"Empate\"))"],
];
resumen.getRange("A17:B17").values = [["Lectura rapida", "Resultado"]];
resumen.getRange("A18:A20").values = winnerRows.map((row) => [row[0]]);
resumen.getRange("B18:B20").formulas = winnerRows.map((row) => [row[1]]);
resumen.getRange("A17:B17").format = {
  fill: palette.dark,
  font: { bold: true, color: palette.white },
};
resumen.getRange("A18:B20").format = {
  fill: "#FFF7ED",
  borders: { preset: "all", style: "thin", color: "#FED7AA" },
};

const detailHeaders = ["Candidato", "Categoria", "Item", "Detalle", "Electo", "Fuente"];
const detailRows = [];
for (const candidate of dataset.candidates) {
  for (const title of candidate.titles) {
    detailRows.push([
      candidate.candidate,
      "Educacion y titulos",
      title.Titulo,
      `${title.Institucion} (${title.Anio})`,
      "",
      dataset.source_url,
    ]);
  }
  for (const election of candidate.elections) {
    detailRows.push([
      candidate.candidate,
      "Trayectoria politica",
      election.Eleccion,
      election.Cargo,
      election.Electo,
      dataset.source_url,
    ]);
  }
  for (const [category, values] of [
    ["Contratos con el Estado", candidate.contracts],
    ["Propiedades declaradas", candidate.properties],
    ["Experiencia laboral", candidate.jobs],
  ]) {
    for (const value of values) {
      detailRows.push([candidate.candidate, category, value, "", "", dataset.source_url]);
    }
  }
}

styleTitle(detalle, "A1:F1", "Detalle de registros extraidos", "Cada fila conserva la URL publica usada como fuente.");
detalle.getRange("A4:F4").values = [detailHeaders];
detalle.getRangeByIndexes(4, 0, detailRows.length, detailHeaders.length).values = detailRows;
detalle.tables.add(`A4:F${4 + detailRows.length}`, true, "DetalleComparativa");
detalle.getRange("A4:F4").format = {
  fill: palette.dark,
  font: { bold: true, color: palette.white },
  horizontalAlignment: "center",
};
detalle.getRangeByIndexes(4, 0, detailRows.length, detailHeaders.length).format = {
  borders: { preset: "inside", style: "thin", color: palette.line },
};
detalle.getRange("A:A").format.columnWidth = 28;
detalle.getRange("B:B").format.columnWidth = 24;
detalle.getRange("C:C").format.columnWidth = 100;
detalle.getRange("D:D").format.columnWidth = 48;
detalle.getRange("E:E").format.columnWidth = 10;
detalle.getRange("F:F").format.columnWidth = 34;
detalle.getRange("C:D").format.wrapText = true;
detalle.getRangeByIndexes(4, 0, detailRows.length, detailHeaders.length).format.rowHeight = 36;
detalle.freezePanes.freezeRows(4);

styleTitle(fuentes, "A1:D1", "Fuentes y metodologia", "Notas para auditar la extraccion.");
fuentes.getRange("A4:B9").values = [
  ["Sitio consultado", dataset.source_url],
  ["Pagina metodologica RTC", "https://revisatucandidato.pe/datos"],
  ["Robots.txt", "https://revisatucandidato.pe/robots.txt"],
  ["Fuentes declaradas por RTC", "JNE, SUNEDU, OECE"],
  ["Metodo", "Extraccion de HTML publico de la comparativa de segunda vuelta."],
  ["Nota", "Los indicadores cuentan registros declarados por cada candidato segun RTC."],
];
fuentes.getRange("A4:A9").format = {
  fill: palette.slate,
  font: { bold: true },
};
fuentes.getRange("A4:B9").format = {
  borders: { preset: "all", style: "thin", color: palette.line },
  wrapText: true,
};
fuentes.getRange("A:A").format.columnWidth = 28;
fuentes.getRange("B:B").format.columnWidth = 86;

for (const sheet of [resumen, detalle, fuentes]) {
  const used = sheet.getUsedRange();
  used.format.font.name = "Aptos";
  used.format.verticalAlignment = "top";
}

const inspect = await workbook.inspect({
  kind: "table",
  range: "Resumen!A4:H6",
  include: "values,formulas",
  tableMaxRows: 5,
  tableMaxCols: 8,
});
console.log(inspect.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 50 },
});
console.log(errors.ndjson);

for (const sheetName of ["Resumen", "Detalle", "Fuentes"]) {
  const preview = await workbook.render({
    sheetName,
    autoCrop: "all",
    scale: 1,
    format: "png",
  });
  await fs.writeFile(
    path.join(__dirname, `comparativa_keiko_roberto_${sheetName.toLowerCase()}_preview.png`),
    new Uint8Array(await preview.arrayBuffer()),
  );
}

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(path.join(__dirname, "comparativa_keiko_roberto.xlsx"));
console.log("XLSX generado:", path.join(__dirname, "comparativa_keiko_roberto.xlsx"));
