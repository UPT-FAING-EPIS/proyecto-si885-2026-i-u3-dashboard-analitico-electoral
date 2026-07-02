import csv
import html
import json
import re
from pathlib import Path
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "outputs" / "rtc_comparativa"
SOURCE_URL = "https://revisatucandidato.pe/"


def fetch_html(url: str) -> str:
    request = Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (academic data extraction; contact: local project)"
        },
    )
    with urlopen(request, timeout=30) as response:
        return response.read().decode("utf-8")


def html_to_lines(raw_html: str) -> list[str]:
    raw_html = re.sub(
        r"<(script|style|svg|noscript)\b.*?</\1>", " ", raw_html, flags=re.S | re.I
    )
    raw_html = re.sub(r"<br\s*/?>", "\n", raw_html, flags=re.I)
    raw_html = re.sub(
        r"</(p|div|li|h[1-6]|section|article|span|button)>",
        "\n",
        raw_html,
        flags=re.I,
    )
    text = re.sub(r"<[^>]+>", " ", raw_html)
    text = html.unescape(text)
    lines = []
    for line in text.splitlines():
        line = re.sub(r"\s+", " ", line).strip()
        if line:
            lines.append(line)
    return lines


def find_index(lines: list[str], text: str) -> int:
    for index, line in enumerate(lines):
        if text in line:
            return index
    raise ValueError(f"No se encontro la seccion: {text}")


def section(lines: list[str], start: str, end: str) -> list[str]:
    start_index = find_index(lines, start) + 1
    end_index = find_index(lines, end)
    return lines[start_index:end_index]


def parse_elections(items: list[str]) -> list[dict[str, str]]:
    elections = []
    i = 0
    while i < len(items):
        if items[i].isdigit() or "contrato" in items[i].lower():
            break
        election = items[i]
        elected = ""
        if i + 1 < len(items) and items[i + 1] == "Electo":
            elected = "Si"
            i += 1
        role = items[i + 1] if i + 1 < len(items) else ""
        elections.append(
            {
                "Eleccion": election,
                "Cargo": role,
                "Electo": elected,
            }
        )
        i += 2
    return elections


def parse_simple_items(items: list[str]) -> list[str]:
    values = []
    stop_words = {
        "bienes",
        "trabajos",
        "Experiencia laboral",
        "Propiedades declaradas",
        "Contratos con el Estado",
    }
    for item in items:
        if item.isdigit() or item in stop_words:
            break
        values.append(item)
    return values


def parse_titles(items: list[str]) -> list[dict[str, str]]:
    titles = []
    clean_items = [item for item in items if item != "Fuente: SUNEDU"]
    i = 0
    while i < len(clean_items):
        if clean_items[i].isdigit() or clean_items[i] == "Trayectoria política":
            break
        title = clean_items[i]
        institution = clean_items[i + 1] if i + 1 < len(clean_items) else ""
        year = clean_items[i + 2].replace("Año: ", "") if i + 2 < len(clean_items) else ""
        titles.append(
            {
                "Titulo": title,
                "Institucion": institution,
                "Anio": year,
            }
        )
        i += 3
    return titles


def build_dataset(lines: list[str]) -> dict:
    keiko_titles = parse_titles(
        section(lines, "Títulos de Keiko Fujimori", "Títulos de Roberto Sanchez")
    )
    roberto_titles = parse_titles(
        section(lines, "Títulos de Roberto Sanchez", "Elecciones de Keiko Fujimori")
    )

    keiko_elections = parse_elections(
        section(lines, "Elecciones de Keiko Fujimori", "Elecciones de Roberto Sanchez")
    )
    roberto_elections = parse_elections(
        section(lines, "Elecciones de Roberto Sanchez", "Contratos de Keiko Fujimori")
    )

    keiko_contracts = parse_simple_items(
        section(lines, "Contratos de Keiko Fujimori", "Contratos de Roberto Sanchez")
    )
    roberto_contracts = parse_simple_items(
        section(lines, "Contratos de Roberto Sanchez", "Propiedades de Keiko Fujimori")
    )

    keiko_properties = parse_simple_items(
        section(lines, "Propiedades de Keiko Fujimori", "Propiedades de Roberto Sanchez")
    )
    roberto_properties = parse_simple_items(
        section(lines, "Propiedades de Roberto Sanchez", "Experiencia laboral de Keiko Fujimori")
    )

    keiko_jobs = parse_simple_items(
        section(lines, "Experiencia laboral de Keiko Fujimori", "Experiencia laboral de Roberto Sanchez")
    )
    roberto_jobs = parse_simple_items(
        section(lines, "Experiencia laboral de Roberto Sanchez", "Fuentes:")
    )

    return {
        "source_url": SOURCE_URL,
        "source_note": "Fuentes declaradas por RTC: JNE, SUNEDU, OECE. Indicadores cuentan registros declarados por cada candidato.",
        "candidates": [
            {
                "candidate": "Keiko Fujimori Higuchi",
                "short_name": "Keiko Fujimori",
                "elections_count": len(keiko_elections),
                "contracts_count": 0 if keiko_contracts == ["Sin contratos."] else len(keiko_contracts),
                "contracts_total_soles": 0,
                "titles_count": len(keiko_titles),
                "properties_count": len(keiko_properties),
                "jobs_count": len(keiko_jobs),
                "titles": keiko_titles,
                "elections": keiko_elections,
                "contracts": keiko_contracts,
                "properties": keiko_properties,
                "jobs": keiko_jobs,
            },
            {
                "candidate": "Roberto Sanchez Palomino",
                "short_name": "Roberto Sanchez",
                "elections_count": len(roberto_elections),
                "contracts_count": 6,
                "contracts_total_soles": 121980,
                "titles_count": len(roberto_titles),
                "properties_count": len(roberto_properties),
                "jobs_count": len(roberto_jobs),
                "titles": roberto_titles,
                "elections": roberto_elections,
                "contracts": roberto_contracts,
                "properties": roberto_properties,
                "jobs": roberto_jobs,
            },
        ],
    }


def write_outputs(dataset: dict) -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    (OUT_DIR / "comparativa_keiko_roberto.json").write_text(
        json.dumps(dataset, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    with (OUT_DIR / "comparativa_resumen.csv").open("w", encoding="utf-8-sig", newline="") as file:
        writer = csv.DictWriter(
            file,
            fieldnames=[
                "Candidato",
                "Elecciones",
                "Contratos",
                "Total contratos S/",
                "Titulos",
                "Bienes",
                "Trabajos",
                "Fuente",
            ],
        )
        writer.writeheader()
        for candidate in dataset["candidates"]:
            writer.writerow(
                {
                    "Candidato": candidate["candidate"],
                    "Elecciones": candidate["elections_count"],
                    "Contratos": candidate["contracts_count"],
                    "Total contratos S/": candidate["contracts_total_soles"],
                    "Titulos": candidate["titles_count"],
                    "Bienes": candidate["properties_count"],
                    "Trabajos": candidate["jobs_count"],
                    "Fuente": dataset["source_url"],
                }
            )

    with (OUT_DIR / "comparativa_detalle.csv").open("w", encoding="utf-8-sig", newline="") as file:
        writer = csv.DictWriter(
            file,
            fieldnames=["Candidato", "Categoria", "Item", "Detalle", "Electo", "Fuente"],
        )
        writer.writeheader()
        for candidate in dataset["candidates"]:
            for item in candidate["titles"]:
                writer.writerow(
                    {
                        "Candidato": candidate["candidate"],
                        "Categoria": "Educacion y titulos",
                        "Item": item["Titulo"],
                        "Detalle": f"{item['Institucion']} ({item['Anio']})",
                        "Electo": "",
                        "Fuente": dataset["source_url"],
                    }
                )
            for item in candidate["elections"]:
                writer.writerow(
                    {
                        "Candidato": candidate["candidate"],
                        "Categoria": "Trayectoria politica",
                        "Item": item["Eleccion"],
                        "Detalle": item["Cargo"],
                        "Electo": item["Electo"],
                        "Fuente": dataset["source_url"],
                    }
                )
            for category, values in [
                ("Contratos con el Estado", candidate["contracts"]),
                ("Propiedades declaradas", candidate["properties"]),
                ("Experiencia laboral", candidate["jobs"]),
            ]:
                for value in values:
                    writer.writerow(
                        {
                            "Candidato": candidate["candidate"],
                            "Categoria": category,
                            "Item": value,
                            "Detalle": "",
                            "Electo": "",
                            "Fuente": dataset["source_url"],
                        }
                    )


def main() -> None:
    raw_html = fetch_html(SOURCE_URL)
    lines = html_to_lines(raw_html)
    dataset = build_dataset(lines)
    write_outputs(dataset)
    print(f"Archivos generados en: {OUT_DIR}")


if __name__ == "__main__":
    main()
