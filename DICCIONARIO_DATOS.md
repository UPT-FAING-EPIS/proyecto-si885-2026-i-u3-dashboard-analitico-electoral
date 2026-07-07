# Diccionario de Datos

## Proyecto

**Dashboard Analitico Electoral**  
Version del documento: **1.0**  
Fecha: **2026-07-07**

## 1. Objetivo

Este documento describe las estructuras de datos principales usadas por el sistema **Dashboard Analitico Electoral**. El sistema integra informacion electoral, perfiles de candidatos, partidos politicos, antecedentes, formacion academica, experiencia laboral, patrimonio, ingresos, visitas de campana, propuestas electorales y financiamiento de campana.

La informacion se almacena principalmente en archivos CSV dentro de `sistema/data/`, se carga a una base de datos SQL Server/Azure SQL mediante scripts de `sistema/database/` y se consume desde un tablero Power BI ubicado en `sistema/dashboard/`.

Los archivos CSV son fuentes estructuradas para analisis academico. No deben modificarse manualmente sin actualizar los procesos ETL, el modelo SQL y las medidas del dashboard.

## 2. Archivos de datos

| Archivo | Registros | Tipo | Responsable | Descripcion |
|---|---:|---|---|---|
| `sistema/data/Candidato.csv` | 36 | CSV | ETL / JNE | Candidatos presidenciales y datos generales. |
| `sistema/data/Partido.csv` | 36 | CSV | ETL / JNE | Partidos u organizaciones politicas asociadas a candidatos. |
| `sistema/data/Ubicacion.csv` | 72 | CSV | ETL / JNE | Ubicaciones de nacimiento o domicilio por candidato. |
| `sistema/data/EducacionBasica.csv` | 36 | CSV | ETL / JNE | Indicadores de educacion primaria y secundaria. |
| `sistema/data/EducacionUniversitaria.csv` | 59 | CSV | ETL / JNE | Estudios universitarios declarados por candidato. |
| `sistema/data/Posgrado.csv` | 45 | CSV | ETL / JNE | Estudios de posgrado declarados por candidato. |
| `sistema/data/EstudiosTecnicos.csv` | 5 | CSV | ETL / JNE | Estudios tecnicos declarados por candidato. |
| `sistema/data/EstudiosNoUniversitarios.csv` | 2 | CSV | ETL / JNE | Estudios no universitarios declarados por candidato. |
| `sistema/data/ExperienciaLaboral.csv` | 102 | CSV | ETL / JNE | Experiencia laboral declarada por candidato. |
| `sistema/data/CargoPartidario.csv` | 82 | CSV | ETL / JNE | Cargos dentro de organizaciones politicas. |
| `sistema/data/Ingresos.csv` | 36 | CSV | ETL / JNE | Remuneraciones publicas, privadas y total declarado. |
| `sistema/data/Bien.csv` | 384 | CSV | ETL / JNE | Bienes patrimoniales declarados por candidato. |
| `sistema/data/RelacionSentencias.csv` | 6 | CSV | ETL / JNE | Sentencias o procesos reportados. |
| `sistema/data/ClasificacionLegalPenal.csv` | 36 | CSV | Analisis legal | Clasificacion principal de riesgo legal o penal por candidato. |
| `sistema/data/ClasificacionVariable.csv` | 38 | CSV | Analisis legal | Variables secundarias asociadas a una clasificacion legal. |
| `sistema/data/VariableSecundaria.csv` | 9 | CSV | Analisis legal | Catalogo de variables secundarias. |
| `sistema/data/SubVariable.csv` | 10 | CSV | Analisis legal | Catalogo de subvariables. |
| `sistema/data/FuenteInformacion.csv` | 59 | CSV | ETL / Analisis | Fuentes web y mediaticas usadas como respaldo. |
| `sistema/data/NoticiasPendientes.csv` | 0 | CSV | Revision IA | Noticias pendientes de validacion manual. |
| `sistema/data/VisitaCampaña.csv` | 668 | CSV | ETL / campana | Lugares visitados por candidatos en campana. |
| `sistema/data/ONPE_GastosCampana.csv` | 266 | CSV | ONPE | Ingresos y gastos de campana electoral. |
| `sistema/data/ONPE_OrganizacionesPoliticas.csv` | 39 | CSV | ONPE | Catalogo de organizaciones politicas. |
| `sistema/data/Neocities_CandidatosPropuestas.csv` | 38 | CSV | Neocities | Ficha web de candidatos y propuestas. |
| `sistema/data/Neocities_OrientacionCandidato.csv` | 114 | CSV | Neocities | Orientacion politica y resumen por candidato. |
| `sistema/data/Neocities_PropuestasDetalle.csv` | 228 | CSV | Neocities | Detalle de propuestas por candidato y tema. |
| `sistema/data/RTC_ComparativaResumen.csv` | 2 | CSV | Revisa Tu Candidato | Resumen comparativo de candidatos seleccionados. |
| `sistema/data/RTC_ComparativaDetalle.csv` | 26 | CSV | Revisa Tu Candidato | Detalle comparativo por categoria. |

## 3. Modelo general de entidades

| Entidad | Tabla SQL / CSV | Llave principal | Descripcion |
|---|---|---|---|
| Partido | `dbo.Partido` / `Partido.csv` | `IdPartido` | Organizacion politica asociada a candidatos. |
| Candidato | `dbo.Candidato` / `Candidato.csv` | `IdCandidato` | Persona postulante y datos generales. |
| Ubicacion | `dbo.Ubicacion` / `Ubicacion.csv` | `IdUbicacion` | Lugar de nacimiento o domicilio del candidato. |
| EducacionBasica | `dbo.EducacionBasica` / `EducacionBasica.csv` | `IdEducacionBasica` | Indicadores de educacion basica. |
| EducacionUniversitaria | `dbo.EducacionUniversitaria` / `EducacionUniversitaria.csv` | `IdEducacion` | Estudios universitarios. |
| Posgrado | `dbo.Posgrado` / `Posgrado.csv` | `IdPosgrado` | Estudios de maestria, doctorado u otros posgrados. |
| EstudiosTecnicos | `dbo.EstudiosTecnicos` / `EstudiosTecnicos.csv` | `IdTecnico` | Estudios tecnicos. |
| EstudiosNoUniversitarios | `dbo.EstudiosNoUniversitarios` / `EstudiosNoUniversitarios.csv` | `IdEstudioNoUni` | Estudios no universitarios. |
| ExperienciaLaboral | `dbo.ExperienciaLaboral` / `ExperienciaLaboral.csv` | `IdExperiencia` | Trayectoria laboral. |
| CargoPartidario | `dbo.CargoPartidario` / `CargoPartidario.csv` | `IdCargoPartidario` | Trayectoria partidaria. |
| Ingresos | `dbo.Ingresos` / `Ingresos.csv` | `IdIngreso` | Ingresos declarados. |
| Bien | `dbo.Bien` / `Bien.csv` | `IdBien` | Bienes declarados. |
| RelacionSentencias | `dbo.RelacionSentencias` / `RelacionSentencias.csv` | `IdSentencia` | Sentencias o antecedentes reportados. |
| ClasificacionLegalPenal | `dbo.ClasificacionLegalPenal` / `ClasificacionLegalPenal.csv` | `IdClasificacion` | Nivel de riesgo legal/penal. |
| VisitaCampaña | `dbo.VisitaCampaña` / `VisitaCampaña.csv` | `IdVisita` | Lugares de visita en campana. |

## 4. Entidad Candidato

Archivo principal: `sistema/data/Candidato.csv`  
Tabla destino: `dbo.Candidato`

| Campo | Tipo SQL | Obligatorio | Ejemplo | Descripcion |
|---|---|:--:|---|---|
| `IdCandidato` | `INT` | Si | `1` | Identificador unico del candidato. |
| `NombreCompleto` | `NVARCHAR(200)` | Si | `PABLO ALFONSO LOPEZ CHAU NAVA` | Nombre completo del candidato. |
| `DNI` | `NVARCHAR(15)` | No | `25331980` | Documento nacional de identidad. |
| `Sexo` | `NVARCHAR(20)` | No | `Masculino` | Sexo registrado. |
| `CargoPostula` | `NVARCHAR(200)` | No | `PRESIDENTE DE LA REPUBLICA` | Cargo al que postula. |
| `IdPartido` | `INT` | No | `1` | Llave foranea hacia `Partido`. |
| `FechaNacimiento` | `DATE` | No | `1950-07-17` | Fecha de nacimiento. |
| `FotoUrl` | `NVARCHAR(500)` | No | `https://...jpg` | URL de fotografia del candidato. |

## 5. Entidad Partido

Archivo principal: `sistema/data/Partido.csv`  
Tabla destino: `dbo.Partido`

| Campo | Tipo SQL | Obligatorio | Ejemplo | Descripcion |
|---|---|:--:|---|---|
| `IdPartido` | `INT` | Si | `1` | Identificador unico del partido. |
| `NombrePartido` | `NVARCHAR(150)` | Si | `ALIANZA ELECTORAL VENCEREMOS` | Nombre de la organizacion politica. |
| `LogoUrl` | `NVARCHAR(500)` | No | `https://sroppublico.jne.gob.pe/...` | URL del simbolo o logo partidario. |

## 6. Perfil academico y laboral

Estas tablas dependen de `IdCandidato` y permiten construir el perfil profesional y educativo del candidato.

### 6.1 EducacionBasica

| Campo | Tipo | Descripcion |
|---|---|---|
| `IdEducacionBasica` | `INT` | Identificador unico. |
| `IdCandidato` | `INT` | Candidato relacionado. |
| `TieneEducacionBasica` | `BIT` | Indica si registra educacion basica. |
| `TienePrimaria` | `BIT` | Indica si registra primaria. |
| `TieneSecundaria` | `BIT` | Indica si registra secundaria. |

### 6.2 EducacionUniversitaria

| Campo | Tipo | Descripcion |
|---|---|---|
| `IdEducacion` | `INT` | Identificador unico del registro universitario. |
| `Universidad` | `NVARCHAR(200)` | Universidad o centro universitario. |
| `Grado` | `NVARCHAR(200)` | Grado, titulo o carrera declarada. |
| `Concluido` | `BIT` | Indica si el estudio fue concluido. |
| `AñoObtencion` | `DECIMAL(10,1)` | Anio de obtencion, si aplica. |
| `IdCandidato` | `INT` | Candidato relacionado. |

### 6.3 Posgrado

| Campo | Tipo | Descripcion |
|---|---|---|
| `IdPosgrado` | `INT` | Identificador unico. |
| `CentroEstudio` | `NVARCHAR(200)` | Centro de estudios. |
| `Especialidad` | `NVARCHAR(200)` | Especialidad del posgrado. |
| `Grado` | `NVARCHAR(200)` | Tipo de grado: maestria, doctorado u otro. |
| `Concluido` | `BIT` | Indica si fue concluido. |
| `AñoObtencion` | `DECIMAL(10,1)` | Anio de obtencion. |
| `IdCandidato` | `INT` | Candidato relacionado. |

### 6.4 ExperienciaLaboral

| Campo | Tipo | Descripcion |
|---|---|---|
| `IdExperiencia` | `INT` | Identificador unico. |
| `CentroTrabajo` | `NVARCHAR(250)` | Institucion o empresa. |
| `Cargo` | `NVARCHAR(250)` | Cargo desempenado. |
| `AnioInicio` | `INT` | Anio de inicio. |
| `AnioFin` | `DECIMAL(10,1)` | Anio de fin, si aplica. |
| `IdCandidato` | `INT` | Candidato relacionado. |

## 7. Patrimonio, ingresos y antecedentes

### 7.1 Ingresos

| Campo | Tipo | Descripcion |
|---|---|---|
| `IdIngreso` | `INT` | Identificador unico del registro. |
| `RemuneracionPublica` | `DECIMAL(18,2)` | Ingreso por remuneracion publica. |
| `RemuneracionPrivada` | `DECIMAL(18,2)` | Ingreso por remuneracion privada. |
| `Total` | `DECIMAL(18,2)` | Total declarado. |
| `IdCandidato` | `INT` | Candidato relacionado. |

### 7.2 Bien

| Campo | Tipo | Descripcion |
|---|---|---|
| `IdBien` | `INT` | Identificador unico del bien. |
| `IdCandidato` | `INT` | Candidato propietario o declarante. |
| `TipoBien` | `NVARCHAR(100)` | Tipo de bien, por ejemplo inmueble. |
| `Registro` | `NVARCHAR(150)` | Registro publico asociado. |
| `Descripcion` | `NVARCHAR(MAX)` | Descripcion del bien. |
| `ValorAutovaluo` | `DECIMAL(18,2)` | Valor declarado o autovaluo. |

### 7.3 RelacionSentencias

| Campo | Tipo | Descripcion |
|---|---|---|
| `IdSentencia` | `INT` | Identificador unico. |
| `IdCandidato` | `INT` | Candidato relacionado. |
| `MateriaDemanda` | `NVARCHAR(250)` | Materia de la demanda o proceso. |
| `FalloPena` | `NVARCHAR(MAX)` | Fallo, pena o resumen del resultado. |

### 7.4 ClasificacionLegalPenal

| Campo | Tipo | Descripcion |
|---|---|---|
| `IdClasificacion` | `INT` | Identificador de clasificacion. |
| `IdCandidato` | `INT` | Candidato evaluado. |
| `NivelPrincipal` | `NVARCHAR(20)` | Nivel principal de riesgo. |
| `SubNivel` | `NVARCHAR(20)` | Subnivel de clasificacion. |
| `SubSubNivel` | `NVARCHAR(20)` | Nivel especifico adicional. |
| `CodigoCompleto` | `NVARCHAR(50)` | Codigo consolidado, por ejemplo `N4-A (COR)`. |
| `Justificacion` | `NVARCHAR(MAX)` | Sustento de la clasificacion. |
| `FechaRegistro` | `DATETIME2` | Fecha de registro de la clasificacion. |

## 8. Propuestas electorales

Origen principal: archivos `Neocities_*`. Estos datos alimentan el comparador de propuestas.

### 8.1 Neocities_CandidatosPropuestas

| Campo | Tipo aproximado | Descripcion |
|---|---|---|
| `IdCandidatoWeb` | `STRING` | Codigo web del candidato. |
| `Candidato` | `STRING` | Nombre del candidato. |
| `Partido` | `STRING` | Partido politico. |
| `Info` | `STRING` | Resumen biografico o politico. |
| `WebOficial` | `URL` | Sitio oficial relacionado. |
| `VideoUrl` | `URL` | Video embebido o de referencia. |
| `FuenteDataset` | `URL` | Fuente del dataset. |

### 8.2 Neocities_PropuestasDetalle

| Campo | Tipo aproximado | Descripcion |
|---|---|---|
| `IdCandidatoWeb` | `STRING` | Codigo web del candidato. |
| `Candidato` | `STRING` | Nombre del candidato. |
| `Partido` | `STRING` | Partido politico. |
| `TemaCodigo` | `STRING` | Codigo del tema. |
| `Tema` | `STRING` | Tema de propuesta: seguridad, educacion, salud, etc. |
| `PropuestaCorta` | `STRING` | Resumen de la propuesta. |
| `PropuestaDetalle` | `STRING` | Desarrollo de la propuesta. |
| `Fuentes` | `URL/TEXTO` | Fuentes separadas por punto y coma. |
| `CantidadFuentes` | `INT` | Numero de fuentes asociadas. |
| `FuenteDataset` | `URL` | Fuente general del dataset. |

### 8.3 Neocities_OrientacionCandidato

| Campo | Tipo aproximado | Descripcion |
|---|---|---|
| `IdCandidatoWeb` | `STRING` | Codigo web del candidato. |
| `Candidato` | `STRING` | Nombre del candidato. |
| `Partido` | `STRING` | Partido politico. |
| `Orden` | `INT` | Orden de presentacion. |
| `Orientacion` | `STRING` | Descripcion de orientacion politica o ejes de campana. |
| `FuenteDataset` | `URL` | Fuente del dataset. |

## 9. Financiamiento de campana ONPE

### 9.1 ONPE_GastosCampana

| Campo | Tipo aproximado | Ejemplo | Descripcion |
|---|---|---|---|
| `Partido` | `STRING` | `Alianza para el Progreso` | Organizacion politica. |
| `Anexo` | `STRING` | `5B` | Codigo de anexo ONPE. |
| `Concepto` | `STRING` | `Aportaciones individuales...` | Concepto financiero. |
| `Tipo` | `STRING` | `Ingreso` | Tipo de movimiento: ingreso o gasto. |
| `Monto` | `DECIMAL` | `7196365.60` | Monto declarado. |
| `FechaPresentacion` | `DATE/TEXTO` | `20/03/2026` | Fecha de presentacion. |
| `ProcesoElectoral` | `STRING` | `` | Proceso electoral, si se registra. |
| `Fuente` | `URL` | `https://claridadportal.onpe.gob.pe/...` | Fuente oficial. |
| `Observacion` | `STRING` | `Registro cargado desde captura ONPE Claridad` | Observacion del registro. |

### 9.2 ONPE_OrganizacionesPoliticas

| Campo | Tipo aproximado | Descripcion |
|---|---|---|
| `Orden` | `INT` | Orden del catalogo. |
| `Partido` | `STRING` | Nombre de la organizacion politica. |
| `FuenteCatalogo` | `STRING` | Fuente o catalogo de origen. |

## 10. Visitas de campana

Archivo principal: `sistema/data/VisitaCampaña.csv`  
Tabla destino: `dbo.VisitaCampaña`

| Campo | Tipo | Descripcion |
|---|---|---|
| `IdVisita` | `INT` | Identificador unico de visita. |
| `TipoLugar` | `NVARCHAR(100)` | Tipo de lugar visitado: distrito, provincia u otro. |
| `NombreLugar` | `NVARCHAR(200)` | Nombre del lugar visitado. |
| `IdCandidato` | `INT` | Candidato relacionado. |

## 11. Revisa Tu Candidato

### 11.1 RTC_ComparativaResumen

| Campo | Tipo aproximado | Descripcion |
|---|---|---|
| `Candidato` | `STRING` | Nombre del candidato. |
| `Elecciones` | `INT` | Numero de procesos electorales registrados. |
| `Contratos` | `INT` | Cantidad de contratos. |
| `Total contratos S/` | `DECIMAL` | Monto total de contratos. |
| `Titulos` | `INT` | Cantidad de titulos registrados. |
| `Bienes` | `INT` | Cantidad de bienes. |
| `Trabajos` | `INT` | Cantidad de trabajos. |
| `Fuente` | `URL` | Fuente de informacion. |

### 11.2 RTC_ComparativaDetalle

| Campo | Tipo aproximado | Descripcion |
|---|---|---|
| `Candidato` | `STRING` | Nombre del candidato. |
| `Categoria` | `STRING` | Categoria comparativa. |
| `Item` | `STRING` | Elemento analizado. |
| `Detalle` | `STRING` | Detalle del elemento. |
| `Electo` | `STRING` | Indicador de eleccion, si aplica. |
| `Fuente` | `URL` | Fuente de informacion. |

## 12. Fuentes y noticias

### 12.1 FuenteInformacion

| Campo | Tipo | Descripcion |
|---|---|---|
| `IdFuente` | `INT` | Identificador unico de fuente. |
| `NombreFuente` | `NVARCHAR(250)` | Nombre del medio, portal o fuente. |
| `TipoFuente` | `NVARCHAR(100)` | Tipo de fuente: mediatica, oficial u otra. |
| `LinkFuente` | `NVARCHAR(1000)` | URL de consulta. |

### 12.2 NoticiasPendientes

| Campo | Tipo | Descripcion |
|---|---|---|
| `IdNoticia` | `INT` | Identificador de noticia pendiente. |
| `IdCandidato` | `INT` | Candidato relacionado. |
| `Titular` | `NVARCHAR(500)` | Titulo de la noticia. |
| `NombreMedio` | `NVARCHAR(250)` | Medio de comunicacion. |
| `URL` | `NVARCHAR(1000)` | Enlace de la noticia. |
| `FechaNoticia` | `DATETIME2` | Fecha de publicacion. |
| `NivelPrincipalSugerido` | `NVARCHAR(20)` | Nivel sugerido por revision preliminar. |
| `SubNivelSugerido` | `NVARCHAR(20)` | Subnivel sugerido. |
| `SubSubNivelSugerido` | `NVARCHAR(20)` | Subsubnivel sugerido. |
| `VariablesHSugeridas` | `NVARCHAR(200)` | Variables sugeridas. |
| `JustificacionIA` | `NVARCHAR(MAX)` | Justificacion generada para revision. |
| `EstadoRevision` | `NVARCHAR(100)` | Estado de revision manual. |

## 13. Redes sociales y TikTok

Estas tablas estan definidas en SQL y se usan para almacenar presencia digital de candidatos y partidos.

| Tabla | Llave principal | Descripcion |
|---|---|---|
| `dbo.RedSocial` | `IdRedSocial` | Catalogo de redes sociales. |
| `dbo.CandidatoRedSocial` | `IdCandidatoRed` | Indicadores de presencia digital por candidato. |
| `dbo.PartidoRedSocial` | `IdPartidoRed` | Indicadores de presencia digital por partido. |
| `dbo.HistorialTikTok` | `IdHistorial` | Historico de seguidores, likes y videos en TikTok. |

Campos principales:

| Campo | Tipo | Descripcion |
|---|---|---|
| `Usuario` | `NVARCHAR` | Usuario o cuenta en la red social. |
| `Tiene` | `BIT` | Indica si existe presencia registrada. |
| `Seguidores` | `INT/DECIMAL` | Cantidad de seguidores. |
| `Likes` | `BIGINT` | Cantidad de likes. |
| `Videos` | `INT` | Cantidad de videos publicados. |
| `FechaRegistro` | `DATETIME2` | Fecha de medicion historica. |

## 14. Vistas para Power BI

| Vista | Descripcion | Campos principales |
|---|---|---|
| `dbo.vw_resumen_candidatos` | Consolida candidato, partido, domicilio, ingresos, bienes y riesgo. | `IdCandidato`, `NombreCompleto`, `NombrePartido`, `TotalIngresos`, `CantidadBienes`, `MaximoCodigoRiesgo`. |
| `dbo.vw_riesgo_por_partido` | Resume cantidad de candidatos por partido y nivel de riesgo. | `NombrePartido`, `NivelPrincipal`, `CantidadCandidatos`. |

## 15. Relaciones principales

| Relacion | Tipo | Descripcion |
|---|---|---|
| `Partido.IdPartido` -> `Candidato.IdPartido` | 1:N | Un partido puede tener uno o mas candidatos. |
| `Candidato.IdCandidato` -> `Ubicacion.IdCandidato` | 1:N | Un candidato puede tener varias ubicaciones. |
| `Candidato.IdCandidato` -> `Educacion* .IdCandidato` | 1:N | Un candidato puede registrar varios estudios. |
| `Candidato.IdCandidato` -> `ExperienciaLaboral.IdCandidato` | 1:N | Un candidato puede registrar varias experiencias laborales. |
| `Candidato.IdCandidato` -> `Ingresos.IdCandidato` | 1:1/N | Un candidato puede tener registro de ingresos. |
| `Candidato.IdCandidato` -> `Bien.IdCandidato` | 1:N | Un candidato puede declarar varios bienes. |
| `Candidato.IdCandidato` -> `ClasificacionLegalPenal.IdCandidato` | 1:1/N | Un candidato puede tener clasificacion legal o penal. |
| `ClasificacionLegalPenal.IdClasificacion` -> `ClasificacionVariable.IdClasificacion` | 1:N | Una clasificacion puede tener variables secundarias. |
| `VariableSecundaria.IdVariable` -> `SubVariable.IdVariable` | 1:N | Una variable puede tener subvariables. |

## 16. Reglas de calidad de datos

- Las llaves primarias deben ser unicas y no nulas.
- Los campos `IdCandidato`, `IdPartido`, `IdClasificacion`, `IdVariable` e `IdSubVariable` deben mantener integridad referencial.
- Los montos monetarios deben almacenarse como valores numericos decimales.
- Las fechas deben normalizarse antes de cargar a SQL Server.
- Los enlaces web deben conservarse completos para trazabilidad.
- Las fuentes externas deben revisarse antes de usarse como evidencia final.
- Los CSV deben conservar codificacion UTF-8 para evitar perdida de caracteres especiales.
- Los campos vacios representan informacion no disponible, no necesariamente valor cero.

## 17. Scripts relacionados

| Archivo | Funcion |
|---|---|
| `sistema/database/schema_dw.sql` | Crea las tablas principales del modelo relacional. |
| `sistema/database/missing_powerbi_tables.sql` | Crea tablas adicionales para redes sociales e historial TikTok. |
| `sistema/database/views_powerbi.sql` | Crea vistas de resumen para Power BI. |
| `sistema/database/powerbi_test_queries.sql` | Consultas de prueba del modelo. |
| `sistema/etl/load_csv_to_azure_sql.py` | Carga archivos CSV hacia Azure SQL. |
| `sistema/scripts/exportar_todo.py` | Exporta o consolida informacion procesada. |
| `sistema/scripts/run_full_refresh.ps1` | Ejecuta refresco general del sistema. |

## 18. Notas de uso

- Este diccionario debe actualizarse cuando se agreguen nuevas columnas, tablas o fuentes.
- Para nuevas fuentes externas, se recomienda registrar responsable, fecha de extraccion y URL.
- Para Power BI, cualquier cambio en nombres de columnas debe reflejarse tambien en el modelo semantico y las medidas DAX.
- Para datos sensibles o personales, se debe usar solo informacion publica y relacionada con el objetivo academico del proyecto.
