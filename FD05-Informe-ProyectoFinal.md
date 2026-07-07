<!-- Archivo generado desde `FD05-EPIS-Informe ProyectoFinal.pdf` para visualizacion en GitHub. -->

# Informe Proyecto Final

## Pagina 1

## UNIVERSIDAD PRIVADA DE TACNA

## FACULTAD DE INGENIERIA

Escuela Profesional de Ingeniería de Sistemas

## UNIVERSIDAD PRIVADA DE TACNA

## FACULTAD DE INGENIERIA

Escuela Profesional de Ingeniería de Sistemas Proyecto “Dashboard de análisis electoral Perú 2026” Curso: Inteligencia de Negocios Docente: Mag. Patrick Jose Cuadros Quiroga Integrantes: Chura Ticona, Mary Luz (2019065163) Diego Chara Apaza (2019065026) Tacna – Perú 2026

## Pagina 2

Logo de Mi Empresa Logo de mi Cliente

## CONTROL DE VERSIONES

Versión Hecha por Revisada por Aprobada por Fecha Motivo

### 1.0 MPV ELV ARV 10/10/2020 Versión Original

## INDICE

1. ANTECEDENTES ...................................................................................................................3

2. TITULO .................................................................................................................................4

3. AUTORES .............................................................................................................................4

## 4. PLANTEAMIENTO DEL PROBLEMA .......................................................................................4

4.1. Problema .....................................................................................................................4 4.2. Justificacion .................................................................................................................5 4.3. Alcance ........................................................................................................................5

5. OBJETIVOS ...........................................................................................................................6

6. MARCO TEORICO .................................................................................................................6

7. DESARROLLO DE LA SOLUCION ............................................................................................8

### 7.1. Análisis de Factibilidad (técnico, económica, operativa, social, legal, ambiental) ......8

7.2. Tecnología de Desarrollo ..........................................................................................10

### 7.3. Metodología de implementación (Documento de VISION, SRS, SAD) .......................12

8. CRONOGRAMA ..................................................................................................................13

9. PRESUPUESTO ...................................................................................................................15

10. CONCLUCIONES .............................................................................................................17

12. RECOMENDACIONES .....................................................................................................19

13. BIBLIOGRAFIA ................................................................................................................19

2

## Pagina 3

Logo de Mi Empresa Logo de mi Cliente

## RESUMEN

El presente proyecto consiste en el desarrollo de un dashboard interactivo para analizar el perfil de los candidatos presidenciales del Perú en las Elecciones Generales 2026. La herramienta integra información oficial sobre ingresos, patrimonio, antecedentes legales, presencia en TikTok y cobertura de campaña por regiones, todo centralizado en Power BI con base de datos en Azure SQL. El objetivo es transformar información electoral dispersa en una plataforma visual accesible para ciudadanos, estudiantes y analistas. El proyecto demostró ser viable técnica, económica y socialmente, con un VAN de S/ 2,242.94 y una relación B/C de 1.33, contribuyendo a la transparencia y la toma de decisiones informadas.

## ABSTRACT

This project consists of developing an interactive dashboard to analyze the profile of presidential candidates in Peru's 2026 General Elections. The tool integrates official data on income, assets, legal records, TikTok presence, and regional campaign coverage, centralized in Power BI with an Azure SQL database. The goal is to transform scattered electoral information into a visual platform accessible to citizens, students, and analysts. The project proved to be technically, economically, and socially viable, with a NPV of S/ 2,242.94 and a B/C ratio of 1.33, contributing to transparency and informed decision- making.

## 1. ANTECEDENTES

En el Perú, cada proceso electoral genera una gran cantidad de información pública sobre los candidatos presidenciales, como sus declaraciones juradas de bienes e ingresos registradas en la ONPE, sus antecedentes legales y penales disponibles en el JNE, así como su actividad en redes sociales y campaña política. Sin embargo, toda esta información se encuentra dispersa en distintas fuentes y en formatos poco accesibles para el ciudadano común. 3

## Pagina 4

Logo de Mi Empresa Logo de mi Cliente Durante las últimas elecciones generales del 2021, muchos ciudadanos tuvieron dificultades para encontrar información clara y comparativa sobre los candidatos. No existía una herramienta que reuniera todo en un solo lugar de forma visual y organizada, lo que limitaba la capacidad de análisis de estudiantes, analistas y ciudadanos en general. Ante esta situación, las herramientas de Business Intelligence como Power BI representan una alternativa viable para transformar datos complejos en visualizaciones interactivas que cualquier persona pueda interpretar. Este proyecto nace con esa finalidad: aprovechar las tecnologías de inteligencia de negocios para desarrollar un dashboard que centralice el perfil de los candidatos presidenciales de las Elecciones Generales 2026 y facilite su análisis de manera transparente y accesible.

## 2. TITULO

Dashboard de análisis electoral de candidatos presidenciales - Perú 2026

## 3. AUTORES

Dashboard de análisis electoral de candidatos presidenciales - Perú 2026 ▪ Chura Ticona, Mary Luz (2019065163) ▪ Chara Apaza, Diego (2019065026)

## 4. PLANTEAMIENTO DEL PROBLEMA

4.1.Problema La información sobre los candidatos presidenciales en el Perú se encuentra distribuida en múltiples fuentes oficiales como la ONPE y el JNE, así como en medios digitales y redes sociales. Esta dispersión dificulta que los ciudadanos puedan acceder, analizar y comparar el perfil real de cada candidato de manera sencilla y objetiva. En el contexto de las Elecciones Generales 2026, datos como ingresos, patrimonio, antecedentes legales y actividad de campaña están disponibles de forma fragmentada y en formatos poco amigables, lo que impide una evaluación comparativa clara entre los postulantes. Además, no existe una herramienta 4

## Pagina 5

Logo de Mi Empresa Logo de mi Cliente integrada que permita visualizar conjuntamente el perfil socioeconómico, legal y digital de los candidatos, limitando así la capacidad del ciudadano de evaluar objetivamente a quienes aspiran al cargo. 4.2.Justificacion Este proyecto se justifica porque existe una necesidad real de transparencia en los procesos electorales del Perú. Los ciudadanos tienen derecho a conocer de forma clara quiénes son los candidatos que aspiran a la presidencia, cuánto ganan, qué bienes declaran, si tienen antecedentes penales y cómo desarrollan su campaña. Al desarrollar este dashboard se busca poner esa información al alcance de todos de manera visual y organizada. Además, el uso de herramientas como Power BI y Azure SQL permite que la solución sea escalable y pueda adaptarse a futuros procesos electorales. Desde el punto de vista académico, el proyecto permite aplicar los conocimientos del curso de Inteligencia de Negocios en un caso real con impacto social directo. 4.3.Alcance El sistema abarca el análisis del perfil de los candidatos presidenciales de las Elecciones Generales del Perú 2026 e incluye las siguientes funcionalidades: ▪ Visualización del perfil de cada candidato (datos personales, nivel educativo, partido político) ▪ Análisis de ingresos y patrimonio declarados ante la ONPE ▪ Clasificación de candidatos según su nivel de riesgo legal y penal ▪ Análisis de cobertura de visitas de campaña por región ▪ Comparación entre candidatos mediante filtros dinámicos No se contempla la integración en tiempo real con sistemas oficiales ni el manejo de datos sensibles de los usuarios. El sistema tiene fines académicos y está orientado a ciudadanos, estudiantes y analistas interesados en el análisis electoral. 5

## Pagina 6

Logo de Mi Empresa Logo de mi Cliente

## 5. OBJETIVOS

## 5.1.GENERAL

Desarrollar un dashboard interactivo en Power BI que permita analizar el perfil integral de los candidatos presidenciales del Perú para las Elecciones Generales 2026, integrando información socioeconómica, legal y de campaña proveniente de fuentes oficiales, mediante visualizaciones dinámicas que faciliten su comprensión y comparación.

## 5.2.ESPECIFICOS

▪ Recopilar y estructurar información de los candidatos presidenciales desde fuentes oficiales como la ONPE y el JNE. ▪ Diseñar visualizaciones que permitan analizar individualmente a cada candidato mediante filtros dinámicos. ▪ Analizar los ingresos y patrimonio declarados por cada candidato ante la

## ONPE.

▪ Clasificar a los candidatos según su nivel de riesgo legal y penal mediante indicadores visuales. ▪ Analizar la cobertura geográfica de las visitas de campaña por candidato y región. ▪ Implementar herramientas de comparación entre candidatos según indicadores clave. ▪ Publicar el dashboard en un entorno accesible que permita su visualización desde cualquier dispositivo con conexión a internet.

## 6. MARCO TEORICO

### 6.1. Business Intelligence (BI)

El Business Intelligence es definido por Negash (2004) como un conjunto de herramientas y procesos que permiten recopilar, transformar y analizar datos para apoyar la toma de decisiones en las organizaciones. Según Turban et al. (2011), el BI convierte datos en información significativa y conocimiento útil, ayudando a los usuarios a comprender mejor su entorno y actuar de forma más informada. En el contexto de este proyecto, el BI se aplica para transformar datos electorales dispersos en visualizaciones claras y accesibles. 6

## Pagina 7

Logo de Mi Empresa Logo de mi Cliente 6.2.Power BI Microsoft Power BI es una plataforma de análisis empresarial que permite visualizar datos y compartir información a través de una organización o integrarla en una aplicación o sitio web (Microsoft, 2023). Según Ferrari y Russo (2016), Power BI destaca por su capacidad de conectarse a múltiples fuentes de datos, su motor de análisis DAX y su facilidad de uso, lo que lo convierte en una de las herramientas de BI más utilizadas a nivel mundial. En este proyecto se utilizó Power BI Desktop para el desarrollo del dashboard y Power BI Service para su publicación. 6.3.Azure SQL Azure SQL Database es un servicio de base de datos relacional totalmente administrado basado en el motor de Microsoft SQL Server (Microsoft, 2023). Rountree y Catuhe (2012) señalan que los servicios de base de datos en la nube ofrecen ventajas significativas en términos de escalabilidad, disponibilidad y reducción de costos operativos. En este proyecto, Azure SQL fue utilizado como repositorio centralizado de los datos de los candidatos presidenciales. 6.4.ETL (Extract, Transform, Load) El proceso ETL consiste en extraer datos de diversas fuentes, transformarlos para asegurar su calidad y consistencia, y cargarlos en un sistema de almacenamiento para su posterior análisis (Kimball y Caserta, 2004). Este proceso es fundamental en proyectos de inteligencia de negocios, ya que garantiza que los datos utilizados sean confiables y estén correctamente estructurados antes de ser visualizados. 6.5.DAX (Data Analysis Expressions) DAX es un lenguaje de fórmulas desarrollado por Microsoft para realizar cálculos y análisis de datos en herramientas como Power BI, Power Pivot y Analysis Services (Ferrari y Russo, 2019). Permite crear medidas, columnas calculadas e indicadores clave de rendimiento (KPIs) que enriquecen los reportes e informes interactivos. En este proyecto se utilizó DAX para calcular 7

## Pagina 8

Logo de Mi Empresa Logo de mi Cliente indicadores como niveles de riesgo legal, porcentajes de género y comparativos de patrimonio entre candidatos. 6.6.Transparencia electoral y acceso a la información Según la ONPE (2026), la transparencia en los procesos electorales es un principio fundamental para garantizar la legitimidad democrática. La disponibilidad de información pública sobre los candidatos, como sus declaraciones juradas de bienes e ingresos, permite que los ciudadanos ejerzan su derecho al voto de manera más informada. En ese sentido, herramientas tecnológicas que faciliten el acceso a esta información contribuyen directamente al fortalecimiento de la democracia.

## 7. DESARROLLO DE LA SOLUCION

7.1.Análisis de Factibilidad (técnico, económica, operativa, social, legal, ambiental)

#### 7.1.1. Factibilidad Técnica

El proyecto es técnicamente viable ya que se basa en herramientas ampliamente utilizadas en el análisis y visualización de datos como Power BI, Microsoft Excel y Python. Estas tecnologías permiten la recopilación, procesamiento y representación gráfica de información electoral de manera eficiente, sin requerir infraestructura compleja. El desarrollo se realizó de manera progresiva, iniciando con la recopilación y limpieza de datos provenientes de fuentes oficiales como la ONPE, seguido de la estructuración de la información en Azure SQL y finalmente la implementación del dashboard interactivo en Power BI. Este enfoque incremental permitió reducir riesgos técnicos y asegurar la correcta construcción del sistema.

#### 7.1.2. Factibilidad Económica

El proyecto presenta resultados económicos favorables. El costo total de desarrollo fue de S/ 8,275.70, considerando recursos humanos, herramientas tecnológicas y costos operativos durante tres meses. Los indicadores financieros obtenidos fueron los siguientes: 8

## Pagina 9

Logo de Mi Empresa Logo de mi Cliente ▪ Relación Beneficio/Costo (B/C): 1.33 ▪ Valor Actual Neto (VAN): S/ 2,242.94 ▪ Tasa Interna de Retorno (TIR): 4.6% La relación B/C mayor a 1 indica que los beneficios superan los costos de implementación. El VAN positivo demuestra que el proyecto genera valor económico después de recuperar la inversión inicial. Si bien la TIR es menor a la tasa de descuento del 8%, el proyecto se considera viable dado su enfoque académico y los beneficios indirectos que genera, como la reducción del tiempo de análisis y el acceso a información organizada.

#### 7.1.3. Factibilidad Operativa

La factibilidad operativa es alta, dado que los usuarios objetivo cuentan con conocimientos básicos en el uso de herramientas digitales, lo que facilita la adopción del sistema. El dashboard fue diseñado con una interfaz intuitiva basada en gráficos interactivos, filtros dinámicos y visualizaciones claras que no requieren conocimientos técnicos avanzados para su uso. Asimismo, el sistema presenta una alta adaptabilidad, ya que puede integrarse fácilmente con diferentes fuentes de datos y actualizarse para futuros procesos electorales sin necesidad de realizar cambios estructurales significativos.

#### 7.1.4. Factibilidad Social

El proyecto presenta una alta viabilidad social ya que responde a la necesidad de mejorar el acceso a la información electoral de manera clara y comprensible. La implementación del dashboard contribuye a fortalecer la transparencia informativa, permitiendo a los ciudadanos comprender mejor el perfil de los candidatos y promoviendo una participación ciudadana más consciente e informada. Además, el proyecto tiene un impacto positivo en el ámbito educativo, ya que puede ser utilizado como herramienta de aprendizaje para estudiantes interesados en temas de análisis de datos, política y ciencias sociales. 9

## Pagina 10

Logo de Mi Empresa Logo de mi Cliente

#### 7.1.5. Factibilidad Legal

El proyecto es legalmente viable ya que utiliza únicamente información pública proveniente de fuentes oficiales como la ONPE y el JNE, lo que garantiza que no se infringen derechos de propiedad privada ni normas de confidencialidad. Asimismo, cumple con la Ley N° 29733, Ley de Protección de Datos Personales del Perú, dado que el sistema no recopila ni almacena datos sensibles de los usuarios finales. Se respetan también las licencias de las herramientas utilizadas, como Power BI, Python y otras tecnologías de uso libre o educativo, asegurando el desarrollo legal y sostenible del sistema.

#### 7.1.6. Factibilidad Ambiental

El proyecto es ambientalmente viable ya que se basa enteramente en herramientas digitales que no requieren el uso de recursos físicos significativos. Al centralizar la información en un entorno digital, se reduce el consumo de papel y otros materiales tradicionalmente utilizados para la difusión de información electoral. El sistema utiliza infraestructura tecnológica ya existente, como computadoras personales y servicios en la nube, minimizando el impacto ambiental adicional. Por tanto, el proyecto no genera impactos negativos significativos en el medio ambiente. 7.2.Tecnología de Desarrollo Para el desarrollo del presente proyecto se utilizaron las siguientes herramientas y tecnologías:

#### 7.2.1. Power BI Desktop

Herramienta principal utilizada para el diseño y desarrollo del dashboard interactivo. Permitió conectarse a la base de datos en Azure SQL, transformar los datos mediante Power Query, crear medidas con DAX y generar visualizaciones dinámicas como gráficos de barras, mapas, tarjetas de indicadores y tablas comparativas. 10

## Pagina 11

Logo de Mi Empresa Logo de mi Cliente

#### 7.2.2. Microsoft Azure SQL

Servicio de base de datos relacional en la nube utilizado como repositorio centralizado de toda la información electoral. Las tablas almacenadas incluyen datos del perfil de los candidatos, ingresos y patrimonio declarado, antecedentes legales, historial en TikTok y visitas de campaña por región.

#### 7.2.3. Microsoft Excel

Utilizado en la etapa inicial de recopilación y limpieza de datos. Permitió organizar la información proveniente de fuentes oficiales antes de ser cargada en Azure SQL mediante procesos ETL.

#### 7.2.4. Python

Se utilizó para el procesamiento y limpieza de algunos conjuntos de datos, especialmente para la extracción y estructuración de información de fuentes digitales. Las librerías principales utilizadas fueron Pandas para la manipulación de datos y openpyxl para el manejo de archivos Excel.

#### 7.2.5. Power Query

Herramienta integrada en Power BI utilizada para la transformación y carga de datos desde Azure SQL hacia el modelo de datos del dashboard. Permitió aplicar filtros, combinar tablas y asegurar la calidad de la información antes de su visualización.

#### 7.2.6. DAX (Data Analysis Expressions)

Lenguaje de fórmulas utilizado dentro de Power BI para la creación de medidas e indicadores calculados. Se desarrollaron medidas para calcular porcentajes de género, niveles de riesgo legal, comparativos de patrimonio e ingresos y otros KPIs del dashboard.

#### 7.2.7. GitHub

Se utilizó como repositorio de control de versiones para gestionar el código, los datasets y la documentación del proyecto. Permitió llevar un registro 11

## Pagina 12

Logo de Mi Empresa Logo de mi Cliente ordenado de los cambios realizados durante el desarrollo y facilitar la colaboración entre los integrantes del equipo.

#### 7.2.8. Visual Studio Code

Editor de código utilizado para la escritura de scripts en Python y la gestión de archivos del proyecto. 7.3.Metodología de implementación (Documento de VISION, SRS, SAD) Para el desarrollo del presente proyecto se siguió una metodología basada en fases secuenciales, que permitió organizar el trabajo de manera ordenada y progresiva, desde la recopilación de datos hasta la publicación del dashboard final.

#### 7.3.1. FASE 1: Levantamiento de información

En esta primera fase se identificaron las fuentes de información oficiales disponibles sobre los candidatos presidenciales de las Elecciones Generales

## 2026. Se consultaron los portales de la ONPE y el JNE para obtener datos

sobre declaraciones juradas de bienes e ingresos, antecedentes legales y penales, y datos personales de cada candidato. Adicionalmente se recopiló información sobre presencia en TikTok y visitas de campaña por región.

#### 7.3.2. FASE 2: Procesamiento y limpieza de datos (ETL)

Una vez recopilada la información, se procedió a limpiar y estructurar los datos utilizando Microsoft Excel y Python. En esta fase se eliminaron inconsistencias, se estandarizaron formatos y se organizó la información en tablas relacionales. Posteriormente los datos fueron cargados en la base de datos Azure SQL, donde quedaron almacenados de forma centralizada y lista para ser consumidos por Power BI.

#### 7.3.3. FASE 3: Modelado de datos

Con los datos cargados en Azure SQL, se procedió a diseñar el modelo de datos en Power BI. Se establecieron las relaciones entre las distintas tablas del modelo, asegurando la correcta vinculación entre los datos del perfil de los 12

## Pagina 13

Logo de Mi Empresa Logo de mi Cliente candidatos, sus indicadores económicos, legales y digitales. Se crearon medidas en DAX para calcular los indicadores clave del dashboard.

#### 7.3.4. Fase 4: Diseño y desarrollo del dashboard

En esta fase se desarrollaron las visualizaciones interactivas del dashboard en Power BI Desktop. Se diseñaron páginas temáticas que incluyen el perfil general de los candidatos, análisis de ingresos y patrimonio, clasificación por nivel de riesgo legal, presencia en TikTok y cobertura de campaña por región. Se aplicaron filtros dinámicos que permiten al usuario explorar la información por candidato, partido o indicador.

#### 7.3.5. FASE 5: Publicación y validación

Finalmente el dashboard fue publicado en Power BI Service, permitiendo su acceso desde cualquier dispositivo con conexión a internet. Se realizaron pruebas de funcionamiento para verificar la correcta carga de datos, el comportamiento de los filtros y la claridad de las visualizaciones. Los documentos de metodología generados durante el proyecto, incluyendo el Documento de Visión, el SRS y el SAD, se encuentran disponibles de manera individual en la carpeta de Metodología de Implementación anexa al presente informe.

## 8. CRONOGRAMA

El proyecto se desarrolló en un período aproximado de dos meses y medio, desde el 13 de abril hasta el 25 de junio del 2026. A continuación se presenta la distribución de actividades, responsables y tiempos estimados: N° Actividad Responsable Inicio Fin Duración

## 1 Levantamiento de información y Ambos 13/04/2026 25/04/2026 2 semanas

revisión de fuentes oficiales

## 2 Elaboración del Informe de Ambos 26/04/2026 2/05/2026 1 semana

Factibilidad

## 3 Elaboración del Documento de Visión Ambos 3/05/2026 9/05/2026 1 semana

13

## Pagina 14

Logo de Mi Empresa Logo de mi Cliente

## 4 Recopilación y limpieza de datos Chara 10/05/2026 20/05/2026 1.5 semanas

(ETL) Apaza, Diego

## 5 Elaboración del Documento SRS Ambos 10/05/2026 16/05/2026 1 semana

## 6 Carga de datos en Azure SQL Chara 21/05/2026 27/05/2026 1 semana

Apaza, Diego

## 7 Elaboración del Documento SAD Ambos 17/05/2026 23/05/2026 1 semana

## 8 Modelado de datos y creación de Chura 28/05/2026 7/06/2026 1.5 semanas

medidas DAX Ticona, Mary Luz

## 9 Diseño y desarrollo del dashboard en Ambos 8/06/2026 18/06/2026 1.5 semanas

Power BI

## 10 Publicación en Power BI Service y Ambos 19/06/2026 25/06/2026 1 semana

pruebas Chura Ticona, Mary Luz – Desarrolladora y analista de datos Recursos humanos: Chara Apaza, Diego – Desarrollador y gestor de base de datos Computadoras personales Microsoft Power BI Desktop y Power BI Service Recursos tecnológicos Microsoft Azure SQL Microsoft Excel Python (Pandas, openpyxl) GitHub 14

## Pagina 15

Logo de Mi Empresa Logo de mi Cliente Portal de la ONPE: www.onpe.gob.pe Portal del JNE: www.jne.gob.pe Recursos de información Datos abiertos del Estado peruano: www.datosabiertos.gob.pe

## 9. PRESUPUESTO

El presupuesto del proyecto considera todos los costos involucrados en su desarrollo, incluyendo recursos humanos, herramientas tecnológicas y costos operativos durante el período de ejecución. 9.1.Costos Generales

## COSTOS GENERALES

Descripcion cantidad costo Costo total Unitario Hojas 1/2 millar S/20.00 S/10.00 Lapiceros 6 S/1.00 S/6.00 notas 1 S/5.00 S/5.00 adhesivas total S/21.00 9.2.Costos operativos durante el desarrollo

## COSTOS OPERATIVOS

Descripción mes/cantidad costo Costo total Unitario Luz 3 S/40.00 S/120.00 Agua 3 S/25.00 S/75.00 Costos legales 1 S/100.00 S/100.00 Servicios de 1 S/15.00 S/15.00 limpieza total S/310.00 9.3.Costos del ambiente 15

## Pagina 16

Logo de Mi Empresa Logo de mi Cliente

## COSTOS AMBIENTE

Descripcion mes/cantida costo Costo total Unitario Dominio sitio 3 S/220.00 S/55.00 web Acceso de 3 S/69.90 S/209.70 internet software 3 S/0.00 S/0.00 total S/264.70 9.4.Costos de personal

## COSTOS DEL PERSONAL

Descripción mes/cantidad Salario Total Unitario Desarrollador 3 S/ S/ Full Stack 1,280.00 3,840.00 Desarrollador 3 S/ S/ Data / BI 1,280.00 3,840.00 total S/ 7,680.00

#### 9.4.5. Costos totales del desarrollo del sistema

## COSTOS TOTALES

COSTOS mes/cantida

## GENERALES S/21.00

## OPERATIVOS S/310.00

## AMBIENTE S/264.70

## PERSONAL S/7,680.00

## TOTAL S/8,275.70

#### 9.4.6. Análisis de Viabilidad Económica

16

## Pagina 17

Logo de Mi Empresa Logo de mi Cliente Para evaluar la viabilidad económica del proyecto se consideró un horizonte de evaluación de un año, tomando en cuenta la inversión inicial y los beneficios económicos generados durante la operación del sistema. Período Egresos Ingresos Flujo Neto

## 0 - - -S/ 8,275.70

## 1 al 12 S/ 285.00 S/ 1,200.00 S/ 915.00

Los indicadores financieros obtenidos fueron los siguientes: ▪ Relación Beneficio/Costo (B/C): 1.33 → por cada sol invertido se obtiene S/ 1.33 de beneficio ▪ Valor Actual Neto (VAN): S/ 2,242.94 → el proyecto genera valor económico positivo considerando una tasa de descuento del 8% ▪ Tasa Interna de Retorno (TIR): 4.6% → si bien es menor a la tasa de descuento, el proyecto se considera viable dado su enfoque académico y los beneficios indirectos que genera

## 10. CONCLUCIONES

El desarrollo de este proyecto nos permitió aplicar de manera práctica los conocimientos adquiridos en el curso de Inteligencia de Negocios, enfrentándonos a un caso real con impacto social directo. A lo largo del proceso aprendimos no solo a manejar herramientas como Power BI y Azure SQL, sino también a entender la importancia de la calidad de los datos y la claridad en la presentación de la información. El dashboard desarrollado cumple con los objetivos planteados al inicio del proyecto, permitiendo visualizar y comparar el perfil socioeconómico, legal y digital de los candidatos presidenciales del Perú 2026 de manera clara e interactiva, transformando información electoral dispersa en visualizaciones accesibles para cualquier ciudadano, estudiante o analista. Desde el punto de vista técnico, el proyecto demostró ser viable gracias al uso de herramientas accesibles y bien documentadas, mientras que económicamente se obtuvo un VAN de S/ 2,242.94 y 17

## Pagina 18

Logo de Mi Empresa Logo de mi Cliente una relación B/C de 1.33, confirmando que los beneficios superan la inversión realizada. No obstante, el camino no estuvo libre de dificultades. La recopilación de datos fue uno de los mayores retos, ya que la información de los candidatos no siempre estaba disponible en formatos estructurados y en varios casos debió extraerse manualmente de documentos PDF o páginas web. A esto se sumaron problemas de limpieza y estandarización y las visitas de campaña por región, donde la información era incompleta o inconsistente. A nivel técnico, también enfrentamos dificultades iniciales para establecer las relaciones entre tablas en el modelo de Power BI, generando errores en los primeros cálculos DAX que fueron resueltos con pruebas constantes. Finalmente, la reducción del tiempo de desarrollo de tres meses a dos meses y medio nos obligó a priorizar funcionalidades y postergar algunas mejoras visuales. Pese a ello, consideramos que el resultado es satisfactorio y que este tipo de herramientas son necesarias en el contexto electoral peruano, donde la información existe pero no siempre está organizada ni es fácilmente comparable para el ciudadano común.

## 11. RECOMENDACIONES

Se recomienda para futuras versiones del proyecto incorporar datos en tiempo real mediante conexiones directas a los portales de la ONPE y el JNE, lo que permitiría mantener el dashboard actualizado de forma automática durante el proceso electoral. Asimismo, sería valioso ampliar el análisis incluyendo variables adicionales como el nivel de aprobación en encuestas, el alcance en otras redes sociales más allá de TikTok y la cobertura mediática de cada candidato. También se sugiere realizar pruebas con usuarios finales para evaluar la usabilidad del dashboard y recoger retroalimentación que permita mejorar la experiencia de navegación y la claridad de las visualizaciones. 18

## Pagina 19

Logo de Mi Empresa Logo de mi Cliente Por último, se recomienda considerar la posibilidad de adaptar esta herramienta para futuros procesos electorales, tanto a nivel presidencial como regional o municipal, aprovechando la arquitectura ya desarrollada.

## 12. RECOMENDACIONES

## 13. BIBLIOGRAFIA

▪ Ferrari, A. y Russo, M. (2016). Introducing Microsoft Power BI. Microsoft Press. ▪ Ferrari, A. y Russo, M. (2019). The Definitive Guide to DAX (2.a ed.). Microsoft Press. ▪ Jurado Nacional de Elecciones. (2026). Candidatos presidenciales – Elecciones Generales 2026. https://www.jne.gob.pe ▪ Kimball, R. y Caserta, J. (2004). The Data Warehouse ETL Toolkit. Wiley Publishing. ▪ Kimball, R. y Ross, M. (2013). The Data Warehouse Toolkit: The Definitive Guide to Dimensional Modeling (3.a ed.). Wiley Publishing. ▪ Ley N° 29733. (2011). Ley de Protección de Datos Personales. Congreso de la República del Perú. https://www.gob.pe/institucion/congreso-de-la- republica/normas-legales/243470-29733 ▪ Microsoft. (2023). Azure SQL Database – Servicio de base de datos en la nube. https://learn.microsoft.com/es-es/azure/azure-sql/ ▪ Microsoft. (2023). Documentación oficial de Power BI. https://learn.microsoft.com/es-es/power-bi/ ▪ Negash, S. (2004). Business Intelligence. Communications of the Association for Information Systems, 13(1), 177–195. https://doi.org/10.17705/1CAIS.01315 ▪ Oficina Nacional de Procesos Electorales. (2026). Declaraciones juradas de candidatos presidenciales – Elecciones Generales 2026. https://www.onpe.gob.pe ▪ Plataforma Nacional de Datos Abiertos. (2026). Datos abiertos del Estado peruano. https://www.datosabiertos.gob.pe 19

## Pagina 20

Logo de Mi Empresa Logo de mi Cliente ▪ Turban, E., Sharda, R. y Delen, D. (2011). Decision Support and Business Intelligence Systems (9.a ed.). Pearson Education. 20
