/* ======= Tema (modo oscuro) ======= */
(function () {
  const KEY = 'theme';
  const root = document.documentElement;
  function syncIcons() {
    const isDark = root.classList.contains('dark');
    const moon = document.getElementById('icon-moon');
    const sun = document.getElementById('icon-sun');
    if (moon && sun) {
      moon.classList.toggle('hidden', isDark);
      sun.classList.toggle('hidden', !isDark);
    }
  }
  const saved = localStorage.getItem(KEY);
  // Fuerza CLARO por defecto. Solo aplica oscuro si el usuario lo eligió antes.
  if (saved === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
    localStorage.setItem(KEY, 'light');
  }
  document.addEventListener('DOMContentLoaded', () => {
    syncIcons();
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const on = root.classList.toggle('dark');
      localStorage.setItem(KEY, on ? 'dark' : 'light');
      syncIcons();
    });
  });
})();


/* ======= INICIO DE DATASET ======= */
const DATASET = {
  items: [
    {
      id: 'rla', type: 'candidate', nombre: 'Rafael López Aliaga', partido: 'Renovación Popular',
      info: 'Empresario hotelero y ferroviario; ingeniero industrial; posturas conservadoras (Opus Dei).',
      fotoUrl: 'https://i.postimg.cc/prnNy5Gg/lopezaliaga.jpg',
      logoUrl: 'https://i.postimg.cc/YSyGrx0x/renovacionpopular.jpg',
      videoUrl: 'https://www.youtube.com/embed/VLgSzlgTPn4',
      websOficiales: ['https://www.renovacionpopular.pe/'],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=VLgSzlgTPn4',
        'https://www.youtube.com/results?search_query=Rafael+L%C3%B3pez+Aliaga+entrevista+RPP',
        'https://www.youtube.com/results?search_query=Rafael+L%C3%B3pez+Aliaga+entrevista+Willax'
      ],
      orientacion: [
        'Derecha conservadora; orden y disciplina fiscal.',
        'Propuestas: Hambre Cero, seguridad con mano dura, recorte de burocracia.',
        'Economía: proinversión y atracción de capital.'
      ],
      posiciones: {
        seguridad: 'Más patrullaje e inteligencia; endurecer penas.',
        educacion: 'Meritocracia y gestión por resultados.',
        mineria: 'Promoción con estabilidad jurídica.',
        produccion: 'Simplificación de trámites.',
        economia: 'Competitividad y disciplina fiscal.',
        social: 'Defensa de la familia tradicional.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Respaldó estados de emergencia en Lima y pidió medidas “drásticas y urgentes” contra el crimen; énfasis en soporte tecnológico y coordinación interinstitucional.',
          fuentes: [
            'https://www.tvperu.gob.pe/noticias/nacionales/rafael-lopez-aliaga-tenemos-registro-de-que-el-estado-de-emergencia-en-lima-si-nos-ha-funcionado',
            'https://andina.pe/agencia/noticia-alcalde-lima-pide-aplicar-medidas-drasticas-y-urgentes-contra-delincuencia-1048236.aspx',
            'https://www.infobae.com/peru/2023/10/10/rafael-lopez-aliaga-se-refirio-al-estado-de-emergencia-anunciado-en-lince-y-cercado-de-lima/'
          ]
        },
        educacion: {
          resumen: 'Sin documento propio reciente con metas/presupuesto. El plan RP 2021 contiene ejes sociales y educativos (histórico).',
          fuentes: [
            'https://mpesije.jne.gob.pe/docs/e5c14965-b72b-475c-bcb5-f5faa0534932.pdf'
          ]
        },
        mineria: {
          resumen: 'No se halló propuesta minera propia con indicadores en 2024–2025.',
          fuentes: []
        },
        produccion: {
          resumen: 'Sin lineamientos productivos detallados recientes; referencias históricas en plan RP 2021.',
          fuentes: [
            'https://mpesije.jne.gob.pe/docs/e5c14965-b72b-475c-bcb5-f5faa0534932.pdf'
          ]
        },
        economia: {
          resumen: 'Plantea que Petroperú no sea rescatada con recursos públicos y propone entregarla a sus trabajadores como salida a la crisis.',
          fuentes: [
            'https://www.infobae.com/peru/2025/07/04/rafael-lopez-aliaga-sugiere-entregar-petroperu-a-sus-trabajadores-y-advierte-vacancia-de-dina-boluarte-si-hay-rescate-financiero/'
          ]
        },
        social: {
          resumen: 'Postura pública “provida”: rechaza la legalización del aborto bajo cualquier circunstancia.',
          fuentes: [
            'https://canaln.pe/actualidad/rafael-lopez-aliaga-aborto-no-pude-legalizado-peru-ninguna-circunstancia-n432281',
            'https://gestion.pe/peru/politica/el-aborto-no-pude-ser-legalizado-en-el-peru-en-ninguna-circunstancia-senala-rafael-lopez-aliaga-noticia/',
            'https://www.infobae.com/peru/2024/07/05/rafael-lopez-aliaga-ataca-al-movimiento-que-reclama-el-derecho-al-aborto-un-fango-verde-estamos-hechos-para-derrotar-a-esas-mareas/'
          ]
        }
      },
      formacion: ['Ingeniería Industrial (U. de Piura)', 'MBA (EAE/Univ. de Barcelona)'],
      cargosPublicos: ['Alcalde de Lima (2023–2025)', 'Regidor de Lima (2007–2010)'],
      partidosAnteriores: ['Solidaridad Nacional', 'PPC', 'Unidad Nacional'],
      relaciones: [{ con: 'PPC/Unidad Nacional', detalle: 'Militancia previa y afinidad programática.', fuente: 'https://es.wikipedia.org/wiki/Rafael_L%C3%B3pez_Aliaga' }],
      contras: [
        {
          desc: 'Neutralidad electoral: el JEE Lima Centro 1 concluyó infracción de neutralidad electoral (Resolución N° 04779-2025-JEE-LIC1/JNE, 02/09/2025).',
          fuente: 'https://img.lpderecho.pe/wp-content/uploads/2025/09/Res.-04779-2025-JEE-LIC1-JNE-LP-derecho.pdf'
        },
        {
          desc: 'Contratación de militantes de su partido en la MML: investigación periodística documentó 205 militantes contratados por >S/ 7,2 millones (ene. 2023–jul. 2025).',
          fuente: 'https://ojo-publico.com/5892/gestion-lopez-aliaga-contrato-por-s72-millones-sus-militantes'
        },
        {
          desc: 'Deudas tributarias de empresas vinculadas: reportes sobre Peruval Corp. y otras firmas con deudas en cobranza coactiva/observaciones de SUNAT (nota explicativa y padrón SUNAT).',
          fuente: 'https://www.infobae.com/peru/2024/05/28/rafael-lopez-aliaga-en-el-ojo-de-sunat-su-empresa-debe-s187-millones-pero-cotiza-en-la-bvl/'
        },
        {
          desc: 'Observaciones de Contraloría a la gestión municipal (opacidad de información de obras, junio 2025).',
          fuente: 'https://larepublica.pe/politica/2025/06/19/contraloria-reporta-a-lopez-aliaga-falta-de-informacion-de-obras-por-s46-millones-contraloria-general-de-la-republica-municipalidad-de-lima-rafael-lopez-aliaga-hnews-1445256'
        }
      ],
      masInfo: [{ desc: 'Estilo comunicacional confrontacional puede polarizar.', fuente: 'https://rpp.pe/politica/elecciones/rafael-lopez-aliaga-llamo-porcinos-a-adversarios-politicos-y-mermeleros-a-periodistas-noticia-1320573' }]
    },

    {
      id: 'kf', type: 'candidate', nombre: 'Keiko Fujimori', partido: 'Fuerza Popular',
      info: 'Lideresa de Fuerza Popular; tres veces finalista presidencial; hija de Alberto Fujimori.',
      fotoUrl: 'https://i.postimg.cc/Znyk0v7X/keiko.jpg',
      logoUrl: 'https://i.postimg.cc/Ls0Y9V5j/Logo-de-fuerza-popular-2024-png.png',
      videoUrl: 'https://www.youtube.com/embed/pk0K3biyArA',
      websOficiales: ['https://www.fuerzapopular.pe/'],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=pk0K3biyArA',
        'https://www.youtube.com/results?search_query=Keiko+Fujimori+entrevista+RPP',
        'https://www.youtube.com/results?search_query=Keiko+Fujimori+entrevista+Latina'
      ],
      orientacion: ['Derecha / fujimorismo; orden y crecimiento.', 'Propuestas: seguridad con mano dura, reactivación con inversión privada.', 'Social: conservadora.'],
      posiciones: {
        seguridad: 'Endurecer penas y reforzar PNP.',
        educacion: 'Infraestructura y meritocracia.',
        mineria: 'Estabilidad y atracción de inversión.',
        produccion: 'Clima proempresa; formalización.',
        economia: 'Economía social de mercado.',
        social: 'Conservadora en temas de familia.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Su discurso prioriza “mano dura” contra crimen organizado, refuerzo de inteligencia y control penitenciario; sin embargo, no hallé un plan sectorial propio 2024–2025 firmado por la candidata con metas y presupuesto. El referente verificable más reciente sigue siendo el plan partidario 2021 y entrevistas previas.',
          fuentes: [
            // Sin documento sectorial 2024–2025 firmado por la candidata
            'https://apisije-e.jne.gob.pe/TRAMITE/ESCRITO/1095/ARCHIVO/FIRMADO/3017.PDF' // Plan Fuerza Popular 2021
          ]
        },
        educacion: {
          resumen: 'Elevar calidad con meritocracia docente (evaluación y formación), cerrar brechas de infraestructura (agua/saneamiento/aulas seguras), conectividad y recuperación de aprendizajes. Gestión con medición periódica y fortalecimiento de la carrera magisterial. No hay nuevo plan propio 2024–2025; se toma como referencia el documento 2021.',
          fuentes: [
            'https://apisije-e.jne.gob.pe/TRAMITE/ESCRITO/1095/ARCHIVO/FIRMADO/3017.PDF'
          ]
        },
        mineria: {
          resumen: 'Promueve inversión con estabilidad jurídica y fiscalización socioambiental; prevención/gestión de conflictos y fortalecimiento de SENACE/OEFA. En minería ilegal, control y formalización. Sin plan propio 2024–2025; marco: plan 2021.',
          fuentes: [
            'https://apisije-e.jne.gob.pe/TRAMITE/ESCRITO/1095/ARCHIVO/FIRMADO/3017.PDF'
          ]
        },
        produccion: {
          resumen: 'Infraestructura logística (vial, portuaria, aeroportuaria y digital), simplificación regulatoria y crédito MYPE para productividad y empleo. Impulso de clusters y APP. Sin actualización 2024–2025 publicada por la candidata; rige el plan 2021 como referencia verificable.',
          fuentes: [
            'https://apisije-e.jne.gob.pe/TRAMITE/ESCRITO/1095/ARCHIVO/FIRMADO/3017.PDF'
          ]
        },
        economia: {
          resumen: 'Estabilidad macro (disciplina fiscal/monetaria), atracción de inversión, formalización y APP. Discurso reciente mantiene énfasis en empleo formal y confianza; no hay marco macro propio 2024–2025 con metas públicas.',
          fuentes: [
            'https://apisije-e.jne.gob.pe/TRAMITE/ESCRITO/1095/ARCHIVO/FIRMADO/3017.PDF',
            'https://www.reuters.com/world/americas/perus-keiko-fujimori-announces-fourth-bid-presidency-2025-10-31/' // anuncio candidatura 2025
          ]
        },
        social: {
          resumen: 'Programas focalizados (nutrición infantil, salud primaria, agua/saneamiento) y transparencia del gasto social. En temas de valores, mantiene postura provida con excepción del aborto terapéutico (posiciones públicas previas).',
          fuentes: [
            'https://apisije-e.jne.gob.pe/TRAMITE/ESCRITO/1095/ARCHIVO/FIRMADO/3017.PDF',
            'https://rpp.pe/politica/elecciones/sobre-el-aborto-union-civil-y-eutanasia-por-keiko-fujimori-noticia-1323922'
          ]
        }
      },
      formacion: ['Administración (Boston University)', 'MBA (Columbia)'],
      cargosPublicos: ['Congresista (2006–2011)', 'Primera Dama (1994–2000)'],
      partidosAnteriores: ['Nueva Mayoría', 'Sí Cumple'],
      relaciones: [{ con: 'Bancada FP 2016–2019', detalle: 'Mayoría congresal y rol en crisis política.', fuente: 'https://es.wikipedia.org/wiki/Fuerza_Popular' }],
      contras: [
        {
          desc: 'Caso “Cócteles” / Lava Jato (aportes 2011 y 2016): el Ministerio Público presentó acusación y pidió 35 años de prisión por lavado, organización criminal y obstrucción (jul. 2, 2025).',
          fuente: 'https://www.gob.pe/institucion/mpfn/noticias/1202411-equipo-lava-jato-presenta-acusacion-en-caso-cocteles-y-pide-35-anos-de-prision-para-keiko-fujimori'
        },
        {
          desc: 'Anulación del juicio oral (ene. 13, 2025): el Tercer Juzgado Penal Colegiado Nacional anuló el juicio por fallas procesales, en línea con un fallo previo del TC sobre garantías de defensa.',
          fuente: 'https://www.reuters.com/world/americas/peru-judge-throws-out-keiko-fujimoris-money-laundering-trial-2025-01-13/'
        },
        {
          desc: 'Archivo del caso por el Tribunal Constitucional (oct. 20, 2025): Sentencia 02109-2024-HC/TC declaró fundada demanda de hábeas corpus y anuló resoluciones del caso “Cócteles” (principio de legalidad).',
          fuente: 'https://www.tc.gob.pe/jurisprudencia/2025/02109-2024-HC.pdf'
        },
        {
          desc: 'Prisión preventiva previa: resoluciones que ordenaron/colegieron medidas de coerción en 2018–2020 y control constitucional (hábeas corpus) en 2019; constan en expedientes del PJ y TC.',
          fuente: 'https://www.pj.gob.pe/wps/wcm/connect/9705cc8040bc4b0585819f1666a80600/31-7%2BKEIKO%2BFUJIMORI.pdf?MOD=AJPERES'
        },
        {
          desc: 'Aportes empresariales 2011: reconocimiento público de aportes (Credicorp US$3.65M; Grupo Gloria US$200k) dentro de la investigación fiscal de financiamiento político.',
          fuente: 'https://idehpucp.pucp.edu.pe/observatorio-anticorrupcion/casos/financiamiento-fuerza-popular/'
        },
        {
          desc: 'ONPE detectó incongruencias en ingresos/gastos 2011 reportados por Fuerza Popular en verificaciones de financiamiento (informe analítico académico con base documental).',
          fuente: 'https://cdn01.pucp.education/idehpucp/wp-content/uploads/2018/08/11192603/reporte-lavado-fuerza-popular-enero-2019.pdf'
        }
      ]
    },

    {
      id: 'ca', type: 'candidate', nombre: 'César Acuña', partido: 'Alianza para el Progreso',
      info: 'Ingeniero químico y empresario educativo (UCV).',
      fotoUrl: 'https://i.postimg.cc/sxZF1G6H/acuna.jpg',
      logoUrl: 'https://i.postimg.cc/vmSgYvTm/alianzaporelprogreso.png',
      videoUrl: 'https://www.youtube.com/embed/KJqbR-XDWHY',
      websOficiales: ['https://app.pe/'],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=KJqbR-XDWHY',
        'https://www.youtube.com/results?search_query=C%C3%A9sar+Acu%C3%B1a+entrevista+RPP',
        'https://www.youtube.com/results?search_query=C%C3%A9sar+Acu%C3%B1a+entrevista+Willax'
      ],
      orientacion: ['Centro-derecha pragmática; obras y educación.', 'Propuestas: infraestructura, apoyo MYPES, becas.', 'Economía: proinversión con rol estatal en obras.'],
      posiciones: {
        seguridad: 'Tolerancia cero; patrullaje municipal.',
        educacion: 'Cobertura y calidad.',
        mineria: 'Proinversión con reglas claras.',
        produccion: 'Obras por impuestos; apoyo MYPES.',
        economia: 'Gasto focalizado y disciplina.',
        social: 'Conservador moderado.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: '“Tolerancia cero” con rol municipal: patrullaje integrado, cámaras y serenazgo coordinado con PNP. Prevención con deporte y recuperación de espacios públicos.',
          fuentes: ['https://app.pe/', 'https://www.youtube.com/watch?v=KJqbR-XDWHY']
        },
        educacion: {
          resumen: 'Becas y ampliación de cobertura, con calidad y pertinencia laboral. Evaluación docente con incentivos y fortalecimiento de educación técnica.',
          fuentes: ['https://app.pe/']
        },
        mineria: {
          resumen: 'Proinversión responsable: estabilidad de reglas, respeto socioambiental y uso de OxI para cerrar brechas en zonas de influencia.',
          fuentes: ['https://es.wikipedia.org/wiki/C%C3%A9sar_Acu%C3%B1a']
        },
        produccion: {
          resumen: 'Impulso a MYPES con compras estatales, simplificación y digitalización. APP y OxI para infraestructura logística y de riego.',
          fuentes: ['https://app.pe/']
        },
        economia: {
          resumen: 'Disciplina fiscal y gasto focalizado en infraestructura y programas efectivos. Alianzas público-privadas como motor de empleo.',
          fuentes: ['https://app.pe/']
        },
        social: {
          resumen: 'Conservador moderado; lucha contra pobreza con resultados medibles y expansión de servicios básicos.',
          fuentes: ['https://es.wikipedia.org/wiki/C%C3%A9sar_Acu%C3%B1a']
        }
      },
      formacion: ['Ing. Química (UNT)', 'Maestrías en Dirección Univ. y Adm. Educación', 'Doctorado en Educación (U. Complutense)'],
      cargosPublicos: ['Gobernador La Libertad (2015; 2023)', 'Alcalde de Trujillo (2007–2014)', 'Congresista (2000–2006)'],
      partidosAnteriores: ['Izquierda Socialista', 'Unidad Nacional'],
      relaciones: [{ con: 'APP / Lady Camones', detalle: 'Audio evidenció injerencia en agenda legislativa.', fuente: 'https://rpp.pe/politica/congreso/lady-camones-audio-revela-que-cesar-acuna-le-exigio-priorizar-ley-que-lo-beneficiaria-noticia-1428574' }],
      contras: [
        {
          desc: 'Exclusión de la elección presidencial 2016 por dádivas en campaña (resolución del JEE).',
          fuente: 'https://cde.3.elcomercio.pe/doc/0/1/3/2/8/1328866.pdf'
        },
        {
          desc: 'JEE comunicó y prensa reportó la exclusión por dádivas.',
          fuente: 'https://andina.pe/agencia/noticia-jee-excluye-a-cesar-acuna-del-proceso-electoral-entrega-dadivas-ampliacion-601639.aspx'
        },
        {
          desc: 'Programa Procompite en La Libertad: anulación de dos concursos (S/58 millones) e intervención fiscal por presuntas irregularidades (2023–2024).',
          fuente: 'https://www.infobae.com/peru/2025/08/11/gestion-de-cesar-acuna-en-la-libertad-anulan-concursos-procompite-por-s58-millones-tras-denuncias-de-cobros-ilegales-y-corrupcion/; https://ahora.com.pe/fiscalia-interviene-el-gore-la-libertad-por-presuntas-irregularidades-en-programa-procompite/'
        },
        {
          desc: 'Sentencia por difamación contra periodista/editor (enero 2022): pena suspendida y reparación civil.',
          fuente: 'https://www.pj.gob.pe/wps/wcm/connect/3bafbe00458ecf3691f8d9807c1f73f9/Sentencia%20Expediente%203622-2021.pdf?MOD=AJPERES'
        },
        {
          desc: 'Plagio académico: sentencia del 10/01/2022 en proceso por plagio (ver resolución).',
          fuente: 'https://cdn.gacetajuridica.com.pe/laley/ACU%C3%91A%20PERALTA%208064%20CEDULA%20Y%20RESOL%20%20SENTENCIA10ENE22_LALEY.pdf'
        }
      ]
    },

    {
      id: 'gf', type: 'candidate', nombre: 'George Forsyth', partido: 'Somos Perú',
      info: 'Exfutbolista y empresario; exalcalde de La Victoria.',
      fotoUrl: 'https://i.postimg.cc/Zqhcsntk/forsyth.jpg',
      logoUrl: 'https://i.postimg.cc/0NHMkCjW/somosperu.png',
      videoUrl: 'https://www.youtube.com/embed/vrEhkJg8iKo',
      websOficiales: ['https://somosperu.org.pe/'],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=vrEhkJg8iKo',
        'https://www.youtube.com/results?search_query=George+Forsyth+entrevista+RPP',
        'https://www.youtube.com/results?search_query=George+Forsyth+entrevista+Willax'
      ],
      orientacion: ['Centro-derecha; seguridad y gestión.', 'Propuestas: orden en Gamarra, formalización, tecnología para seguridad.', 'Economía: pro-mercado.'],
      posiciones: {
        seguridad: 'Coordinación PNP–municipios; videovigilancia.',
        educacion: 'Infraestructura y deporte.',
        mineria: 'Proinversión cumpliendo normas.',
        produccion: 'Apoyo a emprendedores.',
        economia: 'Promercado.',
        social: 'Conservador moderado.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Gestión operativa: cámaras, analítica y patrullaje integrado PNP–municipios. Recuperación de espacios (modelo Gamarra). Foco en extorsión y microcomercialización.',
          fuentes: ['https://www.youtube.com/watch?v=vrEhkJg8iKo', 'https://es.wikipedia.org/wiki/George_Forsyth']
        },
        educacion: {
          resumen: 'Deporte y cultura cívica como prevención. Infraestructura básica y conectividad. Educación técnica para empleabilidad juvenil.',
          fuentes: ['https://somosperu.org.pe/']
        },
        mineria: {
          resumen: 'Proinversión con cumplimiento de normas y diálogo temprano. Seguridad jurídica y permisos ágiles con fiscalización.',
          fuentes: ['https://es.wikipedia.org/wiki/George_Forsyth']
        },
        produccion: {
          resumen: 'Facilitar comercio y MYPES (caso Gamarra): orden del espacio público, simplificación y control de mafias/contrabando. Acceso a microcrédito.',
          fuentes: ['https://www.youtube.com/watch?v=vrEhkJg8iKo']
        },
        economia: {
          resumen: 'Promercado con gestión territorial eficiente como palanca de productividad. Reducción de costos logísticos y digitalización.',
          fuentes: ['https://es.wikipedia.org/wiki/George_Forsyth']
        },
        social: {
          resumen: 'Conservador moderado; énfasis en seguridad, oportunidades para jóvenes y servicios locales.',
          fuentes: ['https://es.wikipedia.org/wiki/George_Forsyth']
        }
      },
      formacion: ['Administración (UPC, 2021)', 'Est. Ing. Industrial (inconcluso)'],
      cargosPublicos: ['Alcalde de La Victoria (2019–2020)', 'Regidor (2011–2014) y alcalde interino (2014)'],
      partidosAnteriores: ['PPC', 'Victoria Nacional'],
      relaciones: [{ con: 'Somos Perú', detalle: 'Alianzas locales y nacionales.', fuente: 'https://es.wikipedia.org/wiki/George_Forsyth' }],
      contras: [
        { desc: 'Afirmación engañosa sobre reducción del delito (Ama Llulla).', fuente: 'https://sudaca.pe/noticia/ama-llulla/afirmacion-de-george-forsyth-acerca-de-la-reduccion-de-delitos-durante-su-gestion-como-alcalde-de-la-victoria-es-enganosa/' },
        { desc: 'Investigaciones por compras en pandemia en La Victoria.', fuente: 'https://www.infobae.com/america/peru/2020/09/04/fiscalia-investiga-a-george-forsyth-por-presuntas-compras-sobrevaloradas-en-la-victoria/' },
        { desc: 'Críticas por renunciar a la alcaldía para postular en 2021.', fuente: 'https://es.wikipedia.org/wiki/George_Forsyth' }
      ]
    },

    {
      id: 'yl', type: 'candidate', nombre: 'Yonhy Lescano', partido: 'Cooperación Popular',
      info: 'Abogado y político; ex Acción Popular.',
      fotoUrl: 'https://i.postimg.cc/pdtZcrbx/lescano.jpg',
      logoUrl: 'https://i.postimg.cc/FKndrxzH/cooperacion.jpg',
      videoUrl: 'https://www.youtube.com/embed/rp_EtZgYLFs',
      websOficiales: [],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=rp_EtZgYLFs',
        'https://www.youtube.com/results?search_query=Yonhy+Lescano+entrevista+RPP',
        'https://www.youtube.com/results?search_query=Yonhy+Lescano+entrevista+Latina'
      ],
      orientacion: ['Centro-izquierda; economía popular de mercado.', 'Propuestas: renegociar gas, defensa del consumidor.', 'Estado activo contra oligopolios.'],
      posiciones: {
        seguridad: 'Prevención y fortalecimiento PNP.',
        educacion: 'Mayor presupuesto y calidad pública.',
        mineria: 'Renegociar contratos y mayor canon.',
        produccion: 'Compras públicas a MYPES.',
        economia: 'Mixta con rol estatal.',
        social: 'Progresista moderado.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Prevención con políticas sociales en barrios vulnerables; mejor equipamiento y formación de PNP; reforma de justicia para combatir impunidad.',
          fuentes: ['https://es.wikipedia.org/wiki/Yonhy_Lescano', 'https://www.youtube.com/watch?v=rp_EtZgYLFs']
        },
        educacion: {
          resumen: 'Aumento sostenido del presupuesto para la educación pública, priorizando escuelas rurales, conectividad y carrera docente.',
          fuentes: ['https://es.wikipedia.org/wiki/Yonhy_Lescano']
        },
        mineria: {
          resumen: 'Renegociación de contratos para mayor captura de renta y canon con estándares ambientales y consulta previa efectiva.',
          fuentes: ['https://es.wikipedia.org/wiki/Yonhy_Lescano']
        },
        produccion: {
          resumen: 'Compras estatales a MYPES/cooperativas, lucha contra oligopolios y crédito/ asistencia técnica estatal.',
          fuentes: ['https://es.wikipedia.org/wiki/Yonhy_Lescano']
        },
        economia: {
          resumen: 'Modelo mixto: mercado con regulación fuerte donde existan fallas (servicios, competencia) y Estado promotor en infraestructura.',
          fuentes: ['https://es.wikipedia.org/wiki/Yonhy_Lescano']
        },
        social: {
          resumen: 'Progresismo moderado en derechos y protección al consumidor; prioridad a salud, educación y reducción de desigualdad.',
          fuentes: ['https://es.wikipedia.org/wiki/Yonhy_Lescano']
        }
      },
      formacion: ['Derecho (UCSM)', 'Maestría (PUCP)', 'Est. Doctorado (U. Complutense)'],
      cargosPublicos: ['Congresista (2001–2019)', 'Asesor (2021–2025)'],
      partidosAnteriores: ['Acción Popular', 'Solidaridad Nacional (2000)'],
      relaciones: [{ con: 'Acción Popular', detalle: 'Redes y trayectoria previa.', fuente: 'https://es.wikipedia.org/wiki/Yonhy_Lescano' }],
      contras: [
        { desc: 'Sancionado 120 días por falta ética tras denuncia de acoso (2019).', fuente: 'https://es.wikipedia.org/wiki/Yonhy_Lescano' },
        { desc: 'Dato falso sobre sal/cañazo para COVID.', fuente: 'https://www.ideeleradio.pe/ama-llulla/red-ama-llulla-dato-de-yonhy-lescano-acerca-de-que-la-sal-mata-a-la-covid-19-en-la-garganta-es-falso/' }
      ]
    },

    {
      id: 'alc', type: 'candidate', nombre: 'Alfonso López Chau', partido: 'Ahora Nación',
      info: 'Economista y académico; exrector de la UNI; exdirector del BCRP.',
      fotoUrl: 'https://i.postimg.cc/hGqrZvWc/lopez-chau.jpg',
      logoUrl: 'https://i.postimg.cc/MGrM6YHT/Ahora-Nacion.jpg',
      videoUrl: 'https://www.youtube.com/embed/CjTcnJo0RYc',
      websOficiales: [],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=CjTcnJo0RYc',
        'https://www.youtube.com/results?search_query=Alfonso+L%C3%B3pez+Chau+entrevista',
        'https://www.youtube.com/results?search_query=Alfonso+L%C3%B3pez+Chau+RPP'
      ],
      orientacion: ['Centro-izquierda industrialista.', 'Propuestas: industrialización, ciencia, educación superior pública.', 'Soberanía alimentaria y valor agregado.'],
      posiciones: {
        seguridad: 'Fortalecer instituciones; prevención.',
        educacion: 'Impulso a universidades y CyT.',
        mineria: 'Mayor transformación local.',
        produccion: 'Política industrial selectiva.',
        economia: 'Mixta con énfasis productivo.',
        social: 'Acceso a educación y salud.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Propone reorganizar la Policía “de arriba abajo” y reinstalar la Policía de Investigaciones del Perú (PIP). Sugiere colocar policías armados de forma aleatoria en ómnibus y modernizar laboratorios e investigación con apoyo tecnológico.',
          fuentes: ['https://ojo-publico.com/entrevistas/alfonso-lopez-chau-creo-que-necesitamos-una-nueva-constitucion', 'https://larepublica.pe/politica/2025/05/12/alfonso-lopez-chau-el-rector-de-la-uni-que-busca-ser-presidente-del-peru-con-economia-nacional-de-mercado-hnews-476949']
        },
        educacion: {
          resumen: 'Dice haber presentado un plan estratégico en educación que no requiere mayor gasto y enfatiza “educación de excelencia”, ciencia y tecnología; plantea fortalecer la educación pública.',
          fuentes: ['https://larepublica.pe/politica/2025/05/12/alfonso-lopez-chau-el-rector-de-la-uni-que-busca-ser-presidente-del-peru-con-economia-nacional-de-mercado-hnews-476949', 'https://www.facebook.com/reel/1901732980405152']
        },
        mineria: {
          resumen: 'Se compromete a “atender conflictos mineros” y vincula la criminalidad con economías ilegales como la minería ilegal, a las que enfrentaría con la reorganización policial.',
          fuentes: ['https://elbuho.pe/2025/07/alfonso-lopez-chau-el-peru-necesita-culminar-su-proceso-de-construccion-nacional/', 'https://ojo-publico.com/entrevistas/alfonso-lopez-chau-creo-que-necesitamos-una-nueva-constitucion']
        },
        produccion: {
          resumen: 'Plantea impulsar la transformación productiva con hidrógeno verde como pilar industrial. Además, se compromete a culminar el Gasoducto Sur para masificar el gas.',
          fuentes: ['https://actualidadminera.com/rector_uni-2/', 'https://elbuho.pe/2025/07/promesa-realista-o-imposible-lopez-chau-promete-culminar-el-gasoducto-del-sur-si-llega-al-poder-video/']
        },
        economia: {
          resumen: 'Defiende una “economía nacional (y social) de mercado” y la “sociedad de tres manos”: mercado, Estado y solidaridad. Promueve alianzas Estado-privado e industrialización (cita el caso de la Marina con Corea).',
          fuentes: ['https://larepublica.pe/politica/2025/05/12/alfonso-lopez-chau-el-rector-de-la-uni-que-busca-ser-presidente-del-peru-con-economia-nacional-de-mercado-hnews-476949']
        },
        social: {
          resumen: 'Prioriza la justicia social y la cohesión social; propone una nueva Constitución para encausar ese proyecto nacional y “todo el poder a las regiones”',
          fuentes: ['https://ojo-publico.com/entrevistas/alfonso-lopez-chau-creo-que-necesitamos-una-nueva-constitucion']
        }
      },
      formacion: ['Economía (UN Callao)', 'Maestría y Doctorado (UNAM)'],
      cargosPublicos: ['Rector UNI (2021–2025)', 'Director BCRP (2006–2012)'],
      partidosAnteriores: ['APRA', 'Partido Socialista'],
      relaciones: [{ con: 'UNI', detalle: 'Vínculo académico y redes universitarias.', fuente: 'https://es.wikipedia.org/wiki/Alfonso_L%C3%B3pez-Chau' }],
      contras: [{ desc: 'Cuestionado por alojar manifestantes en UNI (2023).', fuente: 'https://gestion.pe/peru/politica/lopez-chau-rector-de-la-uni-que-albergo-a-manifestantes-es-precandidato-presidencial-noticia/' }]
    },

    {
      id: 'mv', type: 'candidate', nombre: 'Mario Vizcarra', partido: 'Perú Primero',
      info: 'Ingeniero industrial; hermano de Martín Vizcarra.',
      fotoUrl: 'https://i.postimg.cc/cJNmkCy4/mario-vizcarra.jpg',
      logoUrl: 'https://i.postimg.cc/s20QjJx7/Logo-de-Peru-Primero.jpg',
      videoUrl: 'https://www.youtube.com/embed/FoRdGV0zN-E',
      websOficiales: [],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=FoRdGV0zN-E',
        'https://www.youtube.com/results?search_query=Per%C3%BA+Primero+entrevista+Vizcarra',
        'https://www.youtube.com/results?search_query=Mario+Vizcarra+entrevista'
      ],
      orientacion: ['Centro; continuidad agenda anticorrupción.', 'Propuestas: reformas políticas, transparencia.', 'Economía social de mercado.'],
      posiciones: {
        seguridad: 'Institucionalidad y prevención.',
        educacion: 'Calidad y acceso.',
        mineria: 'Estabilidad y formalidad.',
        produccion: 'Productividad y competitividad.',
        economia: 'Disciplina fiscal.',
        social: 'Moderado.'
      },
      formacion: ['Ingeniería Industrial'],
      cargosPublicos: ['Sin cargos de alto nivel'],
      partidosAnteriores: ['Ninguno'],
      relaciones: [{ con: 'Martín Vizcarra', detalle: 'Hermano y referente político.', fuente: 'https://www.cidob.org/lider-politico/martin-vizcarra-cornejo' }],
      contras: [
        { desc: 'Dependencia de la figura de Martín Vizcarra, inhabilitado por Vacunagate.', fuente: 'https://www.cidob.org/lider-politico/martin-vizcarra-cornejo' },
        { desc: 'El referente afronta investigaciones por presuntos sobornos.', fuente: 'https://gestion.pe/peru/politica/martin-vizcarra-los-casos-fiscales-por-los-que-expresidente-es-investigado-y-por-los-que-piden-prision-preventiva-noticia/' }
      ]
    },

    {
      id: 'apb', type: 'candidate', nombre: 'Álvaro Paz de la Barra', partido: 'Fe en el Perú',
      info: 'Abogado; exalcalde de La Molina; fundador de Fe en el Perú.',
      fotoUrl: 'https://i.postimg.cc/wjN2kJPK/alvaro-paz-d-ela-barra.jpg',
      logoUrl: 'https://i.postimg.cc/0NHMkCjj/feenelperu.png',
      videoUrl: 'https://www.youtube.com/embed/VA5WztJAfFY',
      websOficiales: ['https://www.feenelperu.pe/', 'https://www.facebook.com/FeenelPeruOficial/'],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=VA5WztJAfFY',
        'https://www.youtube.com/results?search_query=%C3%81lvaro+Paz+de+la+Barra+entrevista',
        'https://www.youtube.com/results?search_query=Fe+en+el+Per%C3%BA+entrevista'
      ],
      orientacion: ['Centro-derecha; seguridad estilo Plan Bukele.', 'Propuestas: agua para todos, descentralización, municipalismo.', 'Economía: proinversión y obras.'],
      posiciones: {
        seguridad: 'Endurecer penas; expulsión de delincuentes extranjeros.',
        educacion: 'Prevención desde municipios.',
        mineria: 'Proinversión cumpliendo normas.',
        produccion: 'Obras y servicios básicos.',
        economia: 'Promercado.',
        social: 'Conservador.'
      },
      formacion: ['Derecho (USMP)', 'Est. Maestría en Derecho Constitucional (UNMSM)'],
      cargosPublicos: ['Alcalde de La Molina (2019–2022)', 'Presidente AMPE (2019–2022)'],
      partidosAnteriores: ['Acción Popular (renunció)'],
      relaciones: [{ con: 'AMPE', detalle: 'Vínculo con alcaldes del país.', fuente: 'https://es.wikipedia.org/wiki/%C3%81lvaro_Paz_de_la_Barra' }],
      contras: [
        { desc: 'Episodios de violencia doméstica y denuncias cruzadas con su exesposa (2021).', fuente: 'https://es.wikipedia.org/wiki/%C3%81lvaro_Paz_de_la_Barra' },
        { desc: 'Investigado por presunta compra irregular de 950 compactadoras (AMPE).', fuente: 'https://elcomercio.pe/lima/alvaro-paz-de-la-barra-es-investigado-por-presunta-compra-irregular-de-950-compactadoras-de-basura-cuando-era-presidente-de-ampe-noticia/' }
      ]
    },

    {
      id: 'ca2', type: 'candidate', nombre: 'Carlos Álvarez', partido: 'País para Todos',
      info: 'Comediante e imitador; outsider político.',
      fotoUrl: 'https://i.postimg.cc/xCnycw6F/carlos-alvarez.jpg',
      logoUrl: 'https://i.postimg.cc/1zYnmKXq/Logo-de-Pais-para-todos.jpg',
      videoUrl: 'https://www.youtube.com/embed/sCf03Qsocs8',
      websOficiales: [],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=sCf03Qsocs8',
        'https://www.youtube.com/watch?v=lyNkd_EtUsU',
        'https://www.youtube.com/watch?v=Qyhcr_mRBr4'
      ],
      orientacion: ['Centro; anticorrupción y mano dura.', 'Propuestas: reducción del aparato estatal; control migratorio.', 'Retórica de outsider.'],
      posiciones: {
        seguridad: 'Endurecer penas; control de frontera.',
        educacion: 'Énfasis en civismo y valores.',
        mineria: 'Proinversión con control.',
        produccion: 'Menos burocracia.',
        economia: 'Promercado.',
        social: 'Conservador.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Plantea pena de muerte para sicarios y violadores, retirar al Perú del Pacto de San José y “mano de hierro” contra el crimen; promueve construir más cárceles/megapenales.',
          fuentes: ['https://www.facebook.com/watch/?v=1815023379353449', 'https://rpp.pe/peru/actualidad/carlos-alvarez-anuncia-su-disposicion-de-postular-a-la-presidencia-y-propone-pena-de-muerte-contra-criminales-noticia-1625714']
        },
        educacion: {
          resumen: 'NO HAY',
          fuentes: []
        },
        mineria: {
          resumen: 'NO HAY',
          fuentes: []
        },
        produccion: {
          resumen: 'NO HAY',
          fuentes: []
        },
        economia: {
          resumen: 'Afirma “creer en las empresas del Estado” y plantea reestructurar Petroperú (declaraciones en entrevista reciente); esto generó críticas públicas.',
          fuentes: ['https://altavoz.pe/politica/carlos-alvarez-yo-creo-en-las-empresas-del-estado/', 'https://willax.pe/politica/rafael-lopez-aliaga-carlos-alvarez-petroperu-willax']
        },
        social: {
          resumen: 'Se define por un enfoque “pragmático” centrado en servicios básicos y lucha anticorrupción (sin mayor detalle programático público)',
          fuentes: ['https://rpp.pe/politica/elecciones/carlos-alvarez-no-soy-ni-de-izquierda-ni-de-derecha-ni-de-centro-el-gobernante-que-llegue-al-2026-debe-ser-pragmatico-noticia-1653430', 'https://caretas.pe/home_web/home_principal_secundario/carlos-alvarez-propone-un-gobierno-sin-etiquetas-ni-izquierda-ni-derecha-solo-sentido-comun/']
        }
      },
      formacion: ['Colegio Guadalupe', 'Servicio Militar (Marina)'],
      cargosPublicos: ['Ninguno'],
      partidosAnteriores: ['Ninguno'],
      relaciones: [{ con: 'Voceros de derecha mediática', detalle: 'Afinidad discursiva en medios.', fuente: 'https://rpp.pe/politica/elecciones/carlos-alvarez-pide-expulsion-de-extranjeros-que-delinquen-y-se-legalice-el-uso-de-armas-traumaticas-noticia-1522851' }],
      contras: [
        { desc: 'Críticas por falta de experiencia en gestión pública.', fuente: 'https://es.wikipedia.org/wiki/Carlos_%C3%81lvarez_(humorista)' },
        { desc: 'Propuestas de mano dura y expulsiones sumarias generan cuestionamientos.', fuente: 'https://rpp.pe/politica/elecciones/carlos-alvarez-pide-expulsion-de-extranjeros-que-delinquen-y-se-legalice-el-uso-de-armas-traumaticas-noticia-1522851' },
        { desc: 'Sentencia citada que incluye a Carlos Gonsalo Álvarez Loayza (peculado y asociación ilícita).', fuente: 'https://vlex.com.pe/vid/articulo-delito-peculado-resolucion-365685170' }
      ]
    },

    {
      id: 'rb2', type: 'candidate', nombre: 'Ricardo Belmont', partido: 'Partido Cívico OBRAS',
      info: 'Empresario radial y político; exalcalde de Lima.',
      fotoUrl: 'https://i.postimg.cc/43T52yk7/ricardo-belmont.jpg',
      logoUrl: 'https://i.postimg.cc/5tkY4myq/Partido-Civico-OBRAS.png',
      videoUrl: 'https://www.youtube.com/embed/zuRqW6xBjcU',
      websOficiales: [],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=zuRqW6xBjcU',
        'https://www.youtube.com/watch?v=UrMhPGm5F2Y',
        'https://www.youtube.com/watch?v=y4tK9ukn-mw'
      ],
      orientacion: ['Nacionalismo conservador; crítico del “globalismo”.', 'Propuestas: soberanía de recursos y revisión de contratos.', 'Posturas antivacunas y teorías conspirativas.'],
      posiciones: {
        seguridad: 'Mano dura y control migratorio.',
        educacion: 'Valores tradicionales.',
        mineria: 'Renegociación de contratos.',
        produccion: 'Soberanía económica.',
        economia: 'Intervención selectiva.',
        social: 'Conservador.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'En campaña anterior propuso “Policía de Barrio” y reforzar investigación criminal como eje de seguridad ciudadana (video oficial de Andina).',
          fuentes: ['https://andina.pe/agencia/video-propuesta-ricardo-belmont-sobre-seguridad-ciudadana-45257.aspx']
        },
        educacion: {
          resumen: 'NO HAY',
          fuentes: []
        },
        mineria: {
          resumen: 'En transmisiones recientes, menciona mantener la “propiedad del litio” en manos peruanas (enlace a su página oficial de Facebook con el clip de entrevista).',
          fuentes: ['https://www.facebook.com/watch/?v=1883043565899577']
        },
        produccion: {
          resumen: 'NO HAY',
          fuentes: []
        },
        economia: {
          resumen: 'NO HAY',
          fuentes: []
        },
        social: {
          resumen: 'En transmisión pública afirmó: “quisiera que esta Constitución (la del 93) se fuera a la basura” y consideró que “una Asamblea Constituyente no sería mala idea”',
          fuentes: ['https://www.facebook.com/watch/?v=1557959071838300']
        }
      },
      formacion: ['Administración (U. de Lima)'],
      cargosPublicos: ['Alcalde de Lima (1990–1995)', 'Congresista (2009–2011)'],
      partidosAnteriores: ['OBRAS', 'Siempre Unidos', 'Perú Libertario (alianza 2021)'],
      relaciones: [{ con: 'Movimientos antivacunas', detalle: 'Afinidad en mensajes y transmisiones.', fuente: 'https://es.wikipedia.org/wiki/Ricardo_Belmont_Cassina' }],
      contras: [
        { desc: 'Difusión de posturas antivacunas y teorías conspirativas.', fuente: 'https://es.wikipedia.org/wiki/Ricardo_Belmont_Cassina' },
        { desc: 'Intento de tomar instalaciones de Viva TV (2022).', fuente: 'https://elcomercio.pe/lima/ricardo-belmont-intenta-tomar-las-instalaciones-de-viva-tv-ex-rbc-en-san-isidro-video-noticia/' }
      ]
    },

    {
      id: 'jn', type: 'candidate', nombre: 'Jorge Nieto', partido: 'Partido del Buen Gobierno',
      info: 'Sociólogo y exministro (Defensa y Cultura).',
      fotoUrl: 'https://i.postimg.cc/CKVNr5TT/jorge-nieto.jpg', logoUrl: 'https://i.postimg.cc/JhdDrQ03/partidodelbuengobierno.jpg',
      videoUrl: 'https://www.youtube.com/embed/qO4-iEr3oRY',
      websOficiales: ['https://www.partidodelbuengobierno.pe/'],
      entrevistasYouTube: [
        'https://www.facebook.com/idlradio/videos/al-filo-es-posible-el-buen-gobierno-entrevista-a-jorge-nieto/1164484391441026/',
        'https://www.youtube.com/results?search_query=Jorge+Nieto+entrevista+RPP',
        'https://www.youtube.com/results?search_query=Jorge+Nieto+entrevista+Latina'
      ],
      orientacion: ['Centro liberal social; institucionalismo.', 'Propuestas: meritocracia, gobierno abierto, seguridad con enfoque social.', 'Economía: mercado con regulación.'],
      posiciones: {
        seguridad: 'Reforma policial y prevención social.',
        educacion: 'Meritocracia y calidad docente.',
        mineria: 'Proinversión con participación local.',
        produccion: 'Productividad y apoyo a MYPES.',
        economia: 'Promercado regulado.',
        social: 'Liberal moderado.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Propone “empoderar a la PNP”, retomar “unidades especializadas” exitosas contra asaltos y secuestros, y combatir la corrupción en Policía y Fiscalía como 3 ejes concretos. En su web partidaria define un país “seguro y en paz” con un Estado que asuma la lucha contra el crimen.',
          fuentes: ['https://rpp.pe/politica/elecciones/exministro-jorge-nieto-anuncia-la-inscripcion-de-su-organizacion-politica-partido-del-buen-gobierno-de-cara-a-las-elecciones-2026-noticia-1568202', 'https://www.partidodelbuengobierno.pe/seguridad.php']
        },
        educacion: {
          resumen: 'Plantea una reforma educativa “igualadora” con enfoque humanista: escuelas conectadas e internet gratuito y de calidad; inversión en infraestructura y seguridad alimentaria; seguros de salud escolar; fortalecimiento de formación técnica y becas para estudiantes y docentes.',
          fuentes: ['https://partidodelbuengobierno.pe/educacion.php']
        },
        mineria: {
          resumen: 'NO HAY',
          fuentes: []
        },
        produccion: {
          resumen: 'Promueve inversión pública en infraestructura con foco en conectividad y productividad territorial; articulación público-privada para empleo digno y “desarrollo de infraestructuras” como palanca de crecimiento.',
          fuentes: ['https://www.partidodelbuengobierno.pe/promocion-empleo-desarrollo-infraestructura.php']
        },
        economia: {
          resumen: 'Eje de “Economía y reforma fiscal”: impulsar competitividad vía exportaciones, compras públicas y mercado interno; fortalecer emprendimientos urbanos y agricultura familiar; crecimiento con estabilidad macroeconómica. Además, ha declarado que el Perú puede llegar a ser la economía N.º 25 al 2050 (meta de largo plazo).',
          fuentes: ['https://www.partidodelbuengobierno.pe/economia-reforma-fiscal.php', 'https://www.exitosanoticias.pe/politica/jorge-nieto-asegura-peru-puede-llegar-ser-economia-n25-mundo-lo-vamos-lograr-2050-n133210']
        },
        social: {
          resumen: 'Lineamientos generales: “recuperar el Estado para el interés público”, políticas contra las desigualdades y protección de mujeres, con énfasis territorial (Amazonía, Sierra, Mar, ciudades sostenibles). Declaración pública programática en el “Llamamiento” del partido.',
          fuentes: ['https://www.partidodelbuengobierno.pe/llamamiento.php']
        }
      },
      formacion: ['Sociología (PUCP)', 'Doctorado (FLACSO)'],
      cargosPublicos: ['Ministro de Defensa (2016–2018)', 'Ministro de Cultura (2016)'],
      partidosAnteriores: ['PPK'],
      relaciones: [{ con: 'PPK', detalle: 'Fue ministro en su gobierno.', fuente: 'https://es.wikipedia.org/wiki/Jorge_Nieto_Montesinos' }],
      contras: [{ desc: 'Renunció al MinDef en medio de crisis política (2018).', fuente: 'https://rpp.pe/politica/actualidad/jorge-nieto-montesinos-renuncio-al-ministerio-de-defensa-noticia-1097692' }]
    },

    {
      id: 'ag', type: 'candidate', nombre: 'Álex Gonzales', partido: 'Partido Demócrata Verde',
      info: 'Administrador y activista ambiental; candidato recurrente en Lima.',
      fotoUrl: 'https://i.postimg.cc/vZnhv9jF/alex-gonzales.jpg', logoUrl: 'https://i.postimg.cc/3ww0Qq8p/verde.jpg',
      videoUrl: 'https://www.youtube.com/embed/-djuSD3Rm2s',
      websOficiales: [],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=-djuSD3Rm2s',
        'https://www.youtube.com/results?search_query=%C3%81lex+Gonzales+Castillo+entrevista',
        'https://www.youtube.com/results?search_query=Partido+Dem%C3%B3crata+Verde+entrevista'
      ],
      orientacion: ['Centro con énfasis ecologista.', 'Propuestas: ciudades verdes, formalización, salud pública.', 'Economía: mixta con regulación ambiental.'],
      posiciones: {
        seguridad: 'Orden municipal y salud pública.',
        educacion: 'Educación ambiental.',
        mineria: 'Formalización y mayores exigencias ambientales.',
        produccion: 'Economía circular.',
        economia: 'Regulación ambiental.',
        social: 'Espacios públicos y salud.'
      },
      formacion: ['Administración (U. de Lima)'],
      cargosPublicos: ['Regidor de Lima (1999–2002)'],
      partidosAnteriores: ['Somos Perú', 'Perú Posible', 'Democracia Directa', 'Podemos Perú'],
      relaciones: [{ con: 'Múltiples partidos', detalle: 'Varias postulaciones.', fuente: 'https://es.wikipedia.org/wiki/%C3%81lex_Gonz%C3%A1lez_Castillo' }],
      contras: [{ desc: 'Investigado por presuntas irregularidades en contrataciones durante la pandemia.', fuente: 'https://es.wikipedia.org/wiki/%C3%81lex_Gonz%C3%A1lez_Castillo' }]
    },

    {
      id: 'fo', type: 'candidate', nombre: 'Fernando Olivera', partido: 'Frente de la Esperanza',
      info: 'Abogado y político; figura en los vladivideos; fundador del FIM.',
      fotoUrl: 'https://i.postimg.cc/R0zRphr8/fernando-olivera.jpg',
      logoUrl: 'https://i.postimg.cc/pd1hWBry/frente.jpg',
      videoUrl: 'https://www.youtube.com/embed/-4j7x8i20FI',
      websOficiales: ['https://www.facebook.com/PartidoFrentedelaEsperanza2021/'],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=xKAHiKp1kCU',
        'https://www.youtube.com/results?search_query=Fernando+Olivera+entrevista+RPP',
        'https://www.youtube.com/results?search_query=Fernando+Olivera+entrevista+Willax'
      ],
      orientacion: ['Centro; bandera anticorrupción.', 'Propuestas: depuración del sistema de justicia; transparencia total.', 'Economía: mercado con supervisión.'],
      posiciones: {
        seguridad: 'Depuración policial y judicial.',
        educacion: 'Ética pública.',
        mineria: 'Revisión de contratos irregulares.',
        produccion: 'Compras transparentes.',
        economia: 'Competencia con lucha anticorrupción.',
        social: 'Institucionalismo.'
      },
      formacion: ['Derecho (PUCP)'],
      cargosPublicos: ['Ministro de Justicia (2001–2002)', 'Embajador en España (2002–2005)', 'Congresista/Diputado (1985–2001)'],
      partidosAnteriores: ['PPC', 'FIM'],
      relaciones: [{ con: 'Alejandro Toledo', detalle: 'Alianza FIM-Toledo; luego críticas.', fuente: 'https://es.wikipedia.org/wiki/Fernando_Olivera' }],
      contras: [{ desc: 'Cuestionado por estilo confrontacional y presuntas contradicciones.', fuente: 'https://es.wikipedia.org/wiki/Fernando_Olivera' }]
    },

    {
      id: 'mg', type: 'candidate', nombre: 'Mariano González', partido: 'Salvemos al Perú',
      info: 'Abogado; breve paso por Interior; “Ministro del Amor” (2016).',
      fotoUrl: 'https://i.postimg.cc/Zq4z5Rhh/mariano-gonzalez.jpg',
      logoUrl: 'https://i.postimg.cc/d0Sks936/salvemosalperu.jpg',
      videoUrl: 'https://www.youtube.com/embed/djC6AuxDv2M',
      websOficiales: [],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=djC6AuxDv2M',
        'https://www.youtube.com/results?search_query=Mariano+Gonz%C3%A1lez+entrevista+RPP',
        'https://www.youtube.com/results?search_query=Mariano+Gonz%C3%A1lez+entrevista+Willax'
      ],
      orientacion: ['Centro-derecha; seguridad e inteligencia.', 'Propuestas: reforma de DINI; articulación fiscal-policía.', 'Economía: eficiencia del gasto.'],
      posiciones: {
        seguridad: 'Reforma de inteligencia; crimen organizado.',
        educacion: 'Gestión por resultados.',
        mineria: 'Promercado.',
        produccion: 'Eficiencia estatal.',
        economia: 'Promercado.',
        social: 'Conservador.'
      },
      formacion: ['Derecho (UNSA)'],
      cargosPublicos: ['Ministro del Interior (Jul–Dic 2022)', 'Ministro de Defensa (Jul 2016)', 'Parlamentario Andino (2016–2021)'],
      partidosAnteriores: ['PPK', 'PPC'],
      relaciones: [{ con: 'Pedro Castillo (gobierno)', detalle: 'Fue ministro; denunció copamiento tras su salida.', fuente: 'https://es.wikipedia.org/wiki/Mariano_Gonz%C3%A1lez_Fern%C3%A1ndez' }],
      contras: [
        { desc: 'Salida del MinDef 2016 por relación con asesora.', fuente: 'https://es.wikipedia.org/wiki/Mariano_Gonz%C3%A1lez_Fern%C3%A1ndez' },
        { desc: 'Removido del Mininter en 2022 en plena crisis.', fuente: 'https://es.wikipedia.org/wiki/Mariano_Gonz%C3%A1lez_Fern%C3%A1ndez' }
      ]
    },

    {
      id: 'af', type: 'candidate', nombre: 'Arturo Fernández', partido: 'Un Camino Diferente',
      info: 'Ginecólogo y exalcalde de Trujillo; estilo confrontacional.',
      fotoUrl: 'https://i.postimg.cc/9fjpg03N/arturo-fernandez.jpg',
      logoUrl: 'https://i.postimg.cc/MGrM6YHs/uncaminodiferente.jpg',
      videoUrl: 'https://www.youtube.com/embed/jtrF4v4t7Wc',
      websOficiales: [],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=jtrF4v4t7Wc',
        'https://www.youtube.com/results?search_query=Arturo+Ferna%CC%81ndez+Trujillo+entrevista',
        'https://www.youtube.com/results?search_query=Arturo+Fern%C3%A1ndez+Baz%C3%A1n+entrevista'
      ],
      orientacion: ['Antisistema/caudillista.', 'Propuestas: gestión directa y menos trámites.', 'Comunicación agresiva.'],
      posiciones: {
        seguridad: 'Retórica punitiva (“meter bala”).',
        educacion: 'Orden local y enfoque moralista.',
        mineria: 'Gestión directa (retórica).',
        produccion: 'Obras rápidas; menos trámites.',
        economia: 'Pragmatismo local.',
        social: 'Estilo confrontacional.'
      },
      formacion: ['Medicina (Obstetricia y Ginecología)'],
      cargosPublicos: ['Alcalde de Trujillo (2023, vacado)', 'Alcalde de Moche (2019–2022)'],
      partidosAnteriores: ['Somos Perú', 'APP'],
      relaciones: [{ con: 'Redes locales La Libertad', detalle: 'Apoyos y conflictos.', fuente: 'https://es.wikipedia.org/wiki/Arturo_Fern%C3%A1ndez_Baz%C3%A1n' }],
      contras: [
        { desc: 'Vacado por sentencia firme de difamación (2023).', fuente: 'https://es.wikipedia.org/wiki/Arturo_Fern%C3%A1ndez_Baz%C3%A1n' },
        { desc: 'Varias sentencias por difamación y denuncias penales.', fuente: 'https://larepublica.pe/politica/2023/06/14/arturo-fernandez-alcalde-de-trujillo-suma-5-sentencias-por-difamacion-y-afronta-19-denuncias-penales-atmp-1262198' }
      ]
    },

    {
      id: 'fm', type: 'candidate', nombre: 'Fiorella Molinelli', partido: 'Alianza Fuerza y Libertad',
      info: 'Economista; expresidenta de EsSalud; exministra.',
      fotoUrl: 'https://i.postimg.cc/BvGg7bWr/fiorella-molinelli.jpg',
      logoUrl: 'https://i.postimg.cc/ZqDBbLnC/fuerzaylibertad.jpg',
      videoUrl: 'https://www.youtube.com/embed/UHtWp-qhSys',
      websOficiales: [],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=UHtWp-qhSys',
        'https://www.youtube.com/results?search_query=Fiorella+Molinelli+entrevista+RPP',
        'https://www.youtube.com/results?search_query=Fiorella+Molinelli+entrevista+EsSalud'
      ],
      orientacion: ['Centro-derecha tecnocrática.', 'Propuestas: digitalización y compras eficientes.', 'Economía: prom. con control anticorrupción.'],
      posiciones: {
        seguridad: 'Prevención desde salud/territorio.',
        educacion: 'Capital humano y salud preventiva.',
        mineria: 'Regulación técnica.',
        produccion: 'Eficiencia del gasto; APPs.',
        economia: 'Promercado.',
        social: 'Salud pública.'
      },
      formacion: ['Economía (PUCP)', 'Maestría (U. Adolfo Ibáñez)'],
      cargosPublicos: ['Presidenta de EsSalud (2018–2021)', 'Ministra de MIDIS (2017)', 'Viceministra de Transportes (2016–2017)'],
      partidosAnteriores: ['PPK'],
      relaciones: [{ con: 'Gobierno PPK', detalle: 'Cargos en MIDIS y MTC previos a EsSalud.', fuente: 'https://es.wikipedia.org/wiki/Fiorella_Molinelli' }],
      contras: [
        { desc: 'Investigada por presunta organización criminal y compras COVID en EsSalud.', fuente: 'https://convoca.pe/agenda-propia/fiorella-molinelli-las-menciones-en-las-escuchas-telefonicas-que-justifican' },
        { desc: 'Impedimento de salida (2022).', fuente: 'https://www.gob.pe/institucion/mpfn/noticias/582313-ministerio-publico-logro-impedimento-de-salida-del-pais-por-12-meses-en-la-investigacion-seguida-contra-fiorella-molinelli-aristondo' }
      ]
    },

    {
      id: 'rs', type: 'candidate', nombre: 'Roberto Sánchez', partido: 'Juntos por el Perú',
      info: 'Psicólogo; exministro de Comercio Exterior y Turismo; congresista.',
      fotoUrl: 'https://i.postimg.cc/BvGg7b9P/roberto-sanchez.jpg',
      logoUrl: 'https://i.postimg.cc/3xh9H30w/juntospoerlperu.png',
      videoUrl: 'https://www.youtube.com/embed/jrzJLOMspDs',
      websOficiales: [],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=jrzJLOMspDs',
        'https://www.youtube.com/results?search_query=Roberto+S%C3%A1nchez+Juntos+por+el+Per%C3%BA+entrevista',
        'https://www.youtube.com/results?search_query=Roberto+S%C3%A1nchez+entrevista+RPP'
      ],
      orientacion: ['Izquierda; economía popular con mercados.', 'Propuestas: Asamblea Constituyente; mayor rol estatal.', 'Recursos estratégicos con mayor captura de renta.'],
      posiciones: {
        seguridad: 'Prevención social y fortalecimiento PNP.',
        educacion: 'Mayor inversión y gratuidad efectiva.',
        mineria: 'Consulta previa y contratos más redistributivos.',
        produccion: 'Apoyo a cooperativas y economía popular.',
        economia: 'Estado activo.',
        social: 'Progresista.'
      },
      formacion: ['Psicología (UNMSM)'],
      cargosPublicos: ['MINCETUR (2021–2022)', 'Congresista (2021– )'],
      partidosAnteriores: ['Juntos por el Perú'],
      relaciones: [{ con: 'Pedro Castillo (gobierno)', detalle: 'Fue ministro y aliado inicial.', fuente: 'https://es.wikipedia.org/wiki/Roberto_S%C3%A1nchez_Palomino' }],
      contras: [
        { desc: 'Investigado por 7-Dic-2022; Corte Suprema lo excluyó (2025).', fuente: 'https://www.infobae.com/peru/2025/01/30/roberto-sanchez-se-salva-de-juicio-por-intento-de-golpe-de-estado-corte-suprema-excluye-a-congresista-de-investigacion/' },
        { desc: 'Cuestionamientos por cercanía inicial al gobierno de Castillo.', fuente: 'https://es.wikipedia.org/wiki/Roberto_S%C3%A1nchez_Palomino' }
      ]
    },

    {
      id: 'apra',
      type: 'candidate',
      nombre: 'Jorge del Castillo',
      partido: 'Partido Aprista Peruano',
      info: 'Dirigente histórico del PAP; expresidente del Consejo de Ministros (2006–2008) y excongresista.',
      fotoUrl: 'https://i.postimg.cc/pd40CNW2/jorge.jpg',
      logoUrl: 'https://i.postimg.cc/0NqfXjRr/partido-aprista.jpg',
      videoUrl: 'https://www.youtube.com/embed/gL4iGIa2_-s',
      websOficiales: [
        'https://apraperu.com/'
      ],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=Rt2bSXfsmlU',
        'https://www.youtube.com/watch?v=rBTouUjL1VY'
      ],
      orientacion: [
        'Aprismo clásico: “justicia social con libertad”.',
        'Economía de mercado con énfasis social y competitividad.',
        'Compromisos del Acuerdo Nacional (políticas de Estado).'
      ],
      posiciones: {
        seguridad: '“Política de Estado” contra el crimen; coordinación interinstitucional.',
        educacion: 'Énfasis en calidad docente e infraestructura (antecedentes 2006–2011).',
        mineria: 'Estabilidad jurídica y gestión de conflictos desde PCM (2006–2008).',
        produccion: 'Formalización, MYPE y competitividad (planes programáticos).',
        economia: 'Estabilidad macro + programas sociales (Acuerdo Nacional).',
        social: 'Programas focalizados e integridad pública (planes programáticos).'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Aborda la seguridad como política de Estado, con articulación intersectorial e inteligencia. No se halló plan vigente firmado por él con medidas específicas.',
          fuentes: [
            'https://acuerdonacional.pe/politicas-de-estado-del-acuerdo-nacional/politicas-de-estado/politicas-de-estado-castellano/'
          ]
        },
        educacion: {
          resumen: 'Continuidad de evaluación docente, infraestructura y aprendizajes durante el gobierno 2006–2011 del que fue premier (balance académico independiente).',
          fuentes: [
            'https://cies.org.pe/wp-content/uploads/2022/09/251.-La-politica-educativa-durante-el-primer-ano-del-gobierno-aprista.pdf'
          ]
        },
        mineria: {
          resumen: 'Énfasis en estabilidad jurídica, cumplimiento ambiental y gestión de conflictos desde la PCM en su periodo.',
          fuentes: [
            'https://cde.3.elcomercio.pe/doc/0/1/2/8/9/1289274.pdf'
          ]
        },
        produccion: {
          resumen: 'Formalización y apoyo a MYPE; comparación de planes 2016–2021 frente a Políticas de Estado del Acuerdo Nacional.',
          fuentes: [
            'https://acuerdonacional.pe/wp-content/uploads/2016/03/Politicas-de-Estado-y-Planes-de-Gobierno-2016_2021.pdf',
            'https://cde.3.elcomercio.pe/doc/0/1/2/8/9/1289274.pdf'
          ]
        },
        economia: {
          resumen: 'Crecimiento con estabilidad macro y justicia social en el marco de Políticas de Estado (competitividad, descentralización).',
          fuentes: [
            'https://acuerdonacional.pe/wp-content/uploads/2024/01/Politicas_de_Estado_2023.pdf'
          ]
        },
        social: {
          resumen: 'Programas focalizados y ética pública dentro de marcos programáticos y Políticas de Estado.',
          fuentes: [
            'https://acuerdonacional.pe/politicas-de-estado-del-acuerdo-nacional/politicas-de-estado/politicas-de-estado-castellano/'
          ]
        }
      },
      formacion: ['Abogado (UNMSM)'],
      cargosPublicos: [
        'Alcalde de Barranco (1984–1986)',
        'Prefecto de Lima (1985–1986)',
        'Alcalde de Lima (1987–1989)',
        'Congresista (1995–2001; 2001–2006; 2006–2011; 2016–2019)',
        'Presidente del Consejo de Ministros (2006–2008)'
      ],
      partidosAnteriores: ['Partido Aprista Peruano'],
      relaciones: [
        { con: 'Acuerdo Nacional', detalle: 'Participación y respaldo durante su gestión como premier.', fuente: 'https://acuerdonacional.pe/' }
      ],
      contras: [
        { desc: 'Petroaudios (2008): renuncia del gabinete tras la crisis por audios.', fuente: 'https://andina.pe/agencia/noticia-presidente-garcia-acepto-renuncia-del-gabinete-y-nombrara-nuevo-consejo-ministros-ampliacion-198215.aspx' },
        { desc: 'Caso Odebrecht (2024): PJ anuló la investigación preparatoria por requerir antejuicio.', fuente: 'https://rpp.pe/politica/judiciales/poder-judicial-anulo-todo-lo-actuado-en-investigacion-fiscal-contra-jorge-del-castillo-por-el-caso-odebrecht-noticia-1590985' },
        { desc: 'Seguimiento hemerográfico y judicial del caso BTR/“chuponeo”.', fuente: 'https://www.idl-reporteros.pe/quien-pago-a-los-chuponeadores/' }
      ]
    },

    {
      id: 'avanza', type: 'candidate',
      nombre: 'Phillip Butters',
      partido: 'Avanza País',
      info: 'Conductor y empresario mediático; precandidato presidencial 2026 por Avanza País.',
      fotoUrl: 'https://i.postimg.cc/3xR5bTTZ/Phillip.jpg',
      logoUrl: 'https://i.postimg.cc/c1XFk8L1/avanza-pais.png',
      videoUrl: 'https://www.youtube.com/embed/N1SeAc4wooc',
      websOficiales: [
        'https://www.avanzapais.org/', // sitio del partido
      ],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=JNVfschWgkg', // “¿Qué propone Phillip Butters?” (EC Podcast)
        'https://www.youtube.com/watch?v=k8NdUHJ3j7Y'  // Candidatos al Aula
      ],
      orientacion: [
        'Centroderecha; “provida y profamilia”.',
        'Énfasis en orden, disciplina y meritocracia.',
        'Privatizaciones selectivas y apertura de capital de EPs.'
      ],
      posiciones: {
        seguridad: 'Propone pena de muerte para delitos graves.',
        educacion: 'Sin fuente confiable pública específica a la fecha.',
        mineria: 'Amnistía tributaria focalizada para pequeños mineros formalizados.',
        produccion: 'Sin fuente confiable pública específica a la fecha.',
        economia: 'Privatizar Petroperú; abrir capital de Sedapal.',
        social: 'Se define provida y profamilia.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Plantea restituir/impulsar la pena de muerte para delitos graves (entrevista en N Portada de Canal N).',
          fuentes: [
            'https://canaln.pe/actualidad/phillip-butters-propone-pena-muerte-y-privatizar-petroperu-n487717',
            'https://www.facebook.com/canalnoficial/posts/en-nportada-el-precandidato-de-avanza-pa%C3%ADs-phillip-butters-se-defini%C3%B3-como-de-ce/844928491418393/'
          ]
        },
        educacion: {
          resumen: 'No se identificó propuesta educativa desarrollada en documento o entrevista verificable con detalles programáticos. (Sin fuente confiable pública específica).',
          fuentes: []
        },
        mineria: {
          resumen: 'Propone una amnistía tributaria para pequeños mineros y mineros artesanales formalizados, reducción de trámites y “pelear” contra obstáculos ambientales que considera excesivos (Rumbo Minero TV).',
          fuentes: [
            'https://www.rumbominero.com/peru/noticias/mineria/amnistia-tributaria-minero-propuestas-gobierno-phillip-butters/',
            'https://www.facebook.com/rumbominero/videos/rmtv-%EF%B8%8F-el-candidato-presidencial-phillip-butters-propone-una-amnist%C3%ADa-tributaria/1301602834977484/'
          ]
        },
        produccion: {
          resumen: 'No se hallaron lineamientos productivos detallados en fuente primaria/seria específica distinta de lo económico. (Sin fuente confiable pública específica).',
          fuentes: []
        },
        economia: {
          resumen: 'Anuncia privatizar Petroperú para enfrentar el déficit y abrir el capital de Sedapal para atraer inversión (entrevista Canal N; réplica en medios).',
          fuentes: [
            'https://canaln.pe/actualidad/phillip-butters-propone-pena-muerte-y-privatizar-petroperu-n487717',
            'https://www.facebook.com/canalnoficial/videos/en-nportada-el-precandidato-por-avanza-pa%C3%ADs-phillip-butters-propuso-privatizar-p/1239829684830674/',
            'https://caretas.pe/politica/phillip-butters-plantea-pena-de-muerte-y-privatizar-petroperu-en-su-plan-de-gobierno/'
          ]
        },
        social: {
          resumen: 'Se presenta como “provida y profamilia” (declaración pública en Canal N).',
          fuentes: [
            'https://canaln.pe/actualidad/phillip-butters-propone-pena-muerte-y-privatizar-petroperu-n487717'
          ]
        }
      },
      formacion: [
        'Sin título universitario culminado (admite que no concluyó estudios en entrevista pública).'
      ],
      cargosPublicos: [/* sin cargos públicos ejercidos */],
      partidosAnteriores: [/* sin registro verificable distinto a Avanza País */],
      relaciones: [
        { con: 'Avanza País', detalle: 'Precandidato; presentó fórmula con Fernán Altuve y Karol Paredes (oct. 2025).', fuente: 'https://canaln.pe/actualidad/phillip-butters-propone-pena-muerte-y-privatizar-petroperu-n487717' }
      ],
      contras: [
        { desc: 'Consejo de la Prensa Peruana condenó declaraciones por incitar a la violencia (2022).', fuente: 'https://consejoprensaperuana.org.pe/comunicado/el-consejo-de-la-prensa-peruana-condena-las-declaraciones-de-phillip-butters/' },
        { desc: 'Investigación preliminar fiscal (2021) por llamados a desconocer resultados electorales (sedición/conspiración).', fuente: 'https://lpderecho.pe/abren-investigacion-preliminar-lopez-aliaga-phillip-butters-beto-ortiz-llamar-desconocer-resultados-electorales/' },
        { desc: 'Demanda de hábeas data contra el MP por acuerdo de colaboración eficaz con Odebrecht; el TC la declaró fundada (2024).', fuente: 'https://www.tc.gob.pe/institucional/notas-de-prensa/tc-ordeno-al-ministerio-publico-entregar-la-copia-del-acuerdo-de-beneficios-y-colaboracion-eficaz-y-acuerdo-complementario-celebrado-con-odebrecht/' },
        { desc: 'Proceso de difamación: Poder Judicial condenó a Ricardo Belmont por difamarlo (1 año de pena suspendida, 2025).', fuente: 'https://www.expreso.com.pe/judicial/ricardo-belmont-condenado-por-difamar-a-phillip-butters-poder-judicial-dicta-pena-privativa-de-libertad-pbo-morro-solar-jose-urquizo-noticia/1168454/' }
      ]
    },

    {
      id: 'morado', type: 'candidate',
      nombre: 'Mesías Guevara',
      partido: 'Partido Morado',
      info: 'Excongresista y exgobernador de Cajamarca; integrante del comité político del Partido Morado.',
      fotoUrl: 'https://i.postimg.cc/d0VRzJQj/mesias.jpg',
      logoUrl: 'https://i.postimg.cc/g0PDtjFn/Partido-Morado.png',
      videoUrl: 'https://www.youtube.com/embed/nor37V54wlQ',
      websOficiales: [
        'https://partidomorado.pe/',
        'https://mesias.pe/'
      ],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=R60QRfzapzk',
        'https://www.facebook.com/rppnoticias/videos/panorama-electoral-2026-qu%C3%A9-har%C3%A1-el-partido-morado-tras-la-salida-de-sagasti-adn/647225608120320/',
        'https://www.youtube.com/watch?v=adIT560m250'
      ],
      orientacion: [
        'Centro republicano; énfasis en institucionalidad y anticorrupción.',
        'Seguridad con prevención y reforma policial.',
        'Impulso a educación pública, ciencia, brecha digital y gestión del agua.'
      ],
      posiciones: {
        seguridad: 'Prevención, reestructurar la PNP y consejos macroregionales de seguridad.',
        educacion: 'Proyecto Educativo Regional y cierre de brecha digital; fortalecimiento de educación pública.',
        mineria: 'Conga inviable/suspendido; énfasis en cumplimiento ambiental y gestión de conflictos.',
        produccion: 'Políticas regionales para agricultura familiar, orgánicos y gestión del agua.',
        economia: 'Gestión de inversión pública orientada a cerrar brechas; fortalecimiento de capacidades y control.',
        social: 'Cohesión social, anticorrupción y participación ciudadana.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Plantea prevención, reestructurar la PNP y crear/consolidar consejos macroregionales de seguridad; participación de juntas vecinales y rondas; inteligencia y coordinación interinstitucional.',
          fuentes: [
            'https://mesias.pe/articulos/que-podemos-hacer-ante-la-violencia-extrema-y-la-inseguridad-ciudadana-en-el-peruque-podemos-hacer-ante-la-violencia-extrema-y-la-inseguridad-ciudadana-en-el-peru/',
            'https://mesias.pe/articulos/de-la-region-para-la-nacion/',
            'https://mesias.pe/articulos/crimen-organizado-vs-estado-desorganizado/'
          ]
        },
        educacion: {
          resumen: 'Impulsa educación pública de calidad y agenda digital: Proyecto Educativo Regional Cajamarca al 2036 durante su gestión; propone cerrar brecha digital y actualizar marco de telecomunicaciones para inclusión.',
          fuentes: [
            'https://mesias.pe/wp-content/uploads/11-Proyecto-Regional-Educativo-de-Cajamarca.pdf',
            'https://mesias.pe/articulos/como-cerrar-la-brecha-digital/'
          ]
        },
        mineria: {
          resumen: 'Como autoridad regional, sostuvo que el proyecto Conga es inviable/suspendido hasta cumplir condiciones; énfasis en legalidad, aspecto técnico-social y ambiental.',
          fuentes: [
            'https://portal.regioncajamarca.gob.pe/noticias/mes-guevara-or-036-es-legal-y-leg-tima-y-conga-es-inviable',
            'https://www.facebook.com/elcomercio.pe/videos/mes%C3%ADas-guevara-amasifu%C3%A9n-en-cajamarca-hay-m%C3%A1s-que-conga/1926627007435834/'
          ]
        },
        produccion: {
          resumen: 'Promoción de agricultura familiar y producción orgánica; gestión del agua para fines productivos; articulación institucional. (Lineamientos regionales documentados en su gestión).',
          fuentes: [
            'https://mesias.pe/wp-content/uploads/17-Politica-Regional-para-el-Desarrollo-Agrario-Ganadero-y-Forestal-de-Cajamarca.pdf'
          ]
        },
        economia: {
          resumen: 'Enfoque de inversión pública para cerrar brechas con mejor formulación/ejecución y control; fortalecimiento de capacidades y transparencia (documento técnico y pedidos de control).',
          fuentes: [
            'https://mesias.pe/wp-content/uploads/MITOS-Y-VERDADES-DISENO-FINAL-1.pdf',
            'https://www.regioncajamarca.gob.pe/portal/noticias/det/829'
          ]
        },
        social: {
          resumen: 'Cohesión social y ética pública; fortalecer el Acuerdo Nacional y políticas de Estado vinculantes; participación ciudadana y lucha anticorrupción.',
          fuentes: [
            'https://mesias.pe/articulos/por-un-peru-justo-libre-y-solidario/',
            'https://mesias.pe/articulos/de-la-region-para-la-nacion/'
          ]
        }
      },
      formacion: [
        // No detallo títulos si no hay enlace oficial directo en línea; puedes pasarme el link institucional si deseas incluirlo.
      ],
      cargosPublicos: [
        'Congresista de la República (2011–2016)',
        'Gobernador Regional de Cajamarca (2019–2022)'
      ],
      partidosAnteriores: [
        'Acción Popular' // militó y fue dirigente; hoy en Partido Morado (precandidato 2026 según prensa)
      ],
      relaciones: [
        { con: 'Partido Morado', detalle: 'Precandidato presidencial 2026; el partido confirmó sus listas internas.', fuente: 'https://www.infobae.com/peru/2025/10/30/partido-morado-confirma-precandidatos-presidenciales-para-las-elecciones-generales-2026/' }
      ],
      contras: [
        {
          desc: 'Durante su gestión, Contraloría identificó perjuicios económicos en entidades regionales (megaoperativo en Cajamarca). No se consignan sentencias firmes contra él en las fuentes citadas; sí separó funcionarios investigados.',
          fuente: 'https://www.gob.pe/institucion/contraloria/noticias/343939-contraloria-identifico-mas-de-s-40-millones-de-perjuicio-en-mega-operativo-de-control-en-cajamarca'
        },
        {
          desc: 'Separación de funcionarios por presuntos actos de corrupción (2019).',
          fuente: 'https://elcomercio.pe/peru/cajamarca/cajamarca-separan-dos-funcionarios-gore-presuntos-actos-corrupcion-noticia-658629-noticia/'
        },
        {
          desc: 'Solicitud expresa de megaoperativo de control y de intervención fiscal en el GORE Cajamarca (medidas de control durante su gestión).',
          fuente: 'https://www.regioncajamarca.gob.pe/portal/noticias/det/829'
        }
      ]
    },

    {
      id: 'perulibre', type: 'candidate',
      nombre: 'Waldemar Cerrón',
      partido: 'Perú Libre',
      info: 'Congresista (2021–2026); segundo vicepresidente del Congreso (2022–2026); secretario de Ideología de Perú Libre.',
      fotoUrl: 'https://i.postimg.cc/Qt6yR6rH/waldemar.jpg',
      logoUrl: 'https://i.postimg.cc/0NdCTvP8/peru-libre.png',
      videoUrl: 'https://www.youtube.com/embed/ZeBH7LdwELs', // Enfoque Parlamentario (Congreso TV)
      websOficiales: [
        'https://waldemarcerron.com/',
        'https://www.congreso.gob.pe/congresistas2021/WaldemarCerron/',
        'https://perulibre.pe/'
      ],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=-baCMjjyqg8',
        'https://www.youtube.com/results?search_query=Waldemar+Cerr%C3%B3n+entrevista'
      ],
      orientacion: [
        'Izquierda popular socialista (línea programática de Perú Libre).',
        'Énfasis en nueva Constitución y rol estratégico del Estado.',
        'Agenda descentralista y “Perú profundo”.'
      ],
      posiciones: {
        seguridad: 'Lineamientos generales: coordinación interinstitucional y lucha contra crimen organizado; sin plan sectorial detallado firmado por él en 2024–2025.',
        educacion: 'Sin propuesta programática propia con metas verificables publicada 2024–2025; el ideario partidario prioriza acceso y calidad con rol del Estado.',
        mineria: 'Impulsa PL 8342/2023-CR que modifica el D.L. 1106 (lavado de activos) en contexto de minería ilegal; debate y predictamen en Comisión de Justicia 2024–2025.',
        produccion: 'Sin documento propio con medidas específicas 2024–2025; línea partidaria: industrialización con Estado promotor.',
        economia: 'Marco partidario: economía con mayor intervención estatal en sectores estratégicos y revisión del modelo; referencias al Ideario 2024.',
        social: 'Ejes partidarios: combate a desigualdad, servicios públicos, nueva Constitución; propuestas específicas del candidato no publicadas con detalle técnico reciente.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'En espacios institucionales y partidarios plantea enfrentar crimen organizado con coordinación del Estado y reforma legal; no se halló un plan sectorial específico firmado por él (2024–2025).',
          fuentes: [
            'https://waldemarcerron.com/',
            'https://www.youtube.com/watch?v=-baCMjjyqg8'
          ]
        },
        educacion: {
          resumen: 'No se encontró documento propio con metas y presupuesto del candidato (2024–2025). El referente es el ideario/programa de Perú Libre que prioriza educación pública y ciencia.',
          fuentes: [
            'https://perulibre.pe/wp-content/uploads/2024/11/IDEARIO-Y-PROGRAMA-2024.pdf'
          ]
        },
        mineria: {
          resumen: 'Presentó el PL 8342/2023-CR para modificar el D.L. 1106 (lavado de activos) en el marco de minería ilegal y crimen organizado; hubo predictamen en 2024–2025 y cobertura amplia del debate.',
          fuentes: [
            'https://wb2server.congreso.gob.pe/spley-portal-service/archivo/MjAyNjkw/pdf',   // PL 8342 (archivo Congreso)
            'https://es.scribd.com/document/841249408/5-4-Predictamen-PL-8342-Lavado-de-Activos',
            'https://www.rumbominero.com/peru/noticias/mineria/mineria-ilegal-8/',
            'https://elcomercio.pe/politica/nuevo-intento-por-favorecer-a-la-mineria-ilegal-en-el-congreso-los-peligros-de-la-iniciativa-promovida-por-waldemar-cerron-noticia/'
          ]
        },
        produccion: {
          resumen: 'Sin lineamientos productivos detallados propios localizados en 2024–2025. El marco partidario habla de impulso industrial con Estado promotor.',
          fuentes: [
            'https://perulibre.pe/wp-content/uploads/2024/11/IDEARIO-Y-PROGRAMA-2024.pdf'
          ]
        },
        economia: {
          resumen: 'Se remite al ideario: mayor intervención estatal en sectores estratégicos, revisión de concesiones y rol de empresas públicas.',
          fuentes: [
            'https://perulibre.pe/propuesta-politica-ideologica-y-programatica-del-partido-politico-nacional-peru-libre/'
          ]
        },
        social: {
          resumen: 'Prioriza nueva Constitución y políticas sociales con énfasis en servicios públicos; no hay plan social propio reciente con indicadores.',
          fuentes: [
            'https://perulibre.pe/wp-content/uploads/2024/11/IDEARIO-Y-PROGRAMA-2024.pdf',
            'https://perulibre.pe/wp-content/uploads/2025/07/PERU-LIBRE-JULIO-2025.pdf'
          ]
        }
      },
      formacion: [
        // No se incluye grado/título sin enlace institucional directo verificable.
      ],
      cargosPublicos: [
        'Congresista de la República (2021–2026)',
        'Segundo vicepresidente del Congreso (2022–2026)'
      ],
      partidosAnteriores: ['Perú Libre'],
      relaciones: [
        { con: 'Perú Libre', detalle: 'Secretario nacional de Ideología; vocero de bancada en varias etapas.', fuente: 'https://perulibre.pe/wp-content/uploads/2024/03/PERU-LIBRE-MARZO-2024.pdf' }
      ],
      contras: [
        {
          desc: 'Investigado en el caso de presunto lavado de activos vinculado a Perú Libre; MP incluyó a Waldemar Cerrón en la investigación (nov. 2022). Estado: investigación en curso/actos procesales 2023–2025.',
          fuente: 'https://www.gob.pe/institucion/mpfn/noticias/668641-fiscalia-de-lavado-de-activos-solicita-36-meses-de-prision-preventiva-contra-vladimir-cerron'
        },
        {
          desc: 'Recurso ante Corte Suprema para anular el delito de organización criminal en investigación (“Los Dinámicos del Centro”). Estado: casación en trámite (jul. 2025).',
          fuente: 'https://elcomercio.pe/politica/justicia/vladimir-y-waldemar-hermanos-cerron-buscan-anular-delito-de-crimen-organizado-ante-la-corte-suprema-los-detalles-del-recurso-detalles-del-caso-dinamicos-del-centro-peru-libre-noticia/'
        },
        {
          desc: 'Cuestionamientos por iniciativa PL 8342 (cambios al D.L. 1106 en contexto de minería ilegal).',
          fuente: 'https://elcomercio.pe/politica/nuevo-intento-por-favorecer-a-la-mineria-ilegal-en-el-congreso-los-peligros-de-la-iniciativa-promovida-por-waldemar-cerron-noticia/'
        }
      ]
    },

    {
      id: 'venceremos', type: 'candidate',
      nombre: 'Ronald Atencio',
      partido: 'Alianza Venceremos',
      info: 'Abogado; exdefensor de Pedro Castillo y de Guillermo Bermejo. Precandidato presidencial 2026 por la alianza Venceremos.',
      fotoUrl: 'https://i.postimg.cc/PJVNvknb/ronald.jpg',
      logoUrl: 'https://i.postimg.cc/fRdCvXPG/alianza-venceremos.jpg',
      videoUrl: 'https://www.youtube.com/embed/Ru85jygLSHc',
      websOficiales: [
        'https://portal.jne.gob.pe/portal/Pagina/Nota/18655', // inscripción de la alianza
        'https://nuevoperu.pe/',
        'https://vocesdelpueblo.pe/'
      ],
      entrevistasYouTube: [
        'https://www.youtube.com/results?search_query=Ronald+Atencio+Venceremos+entrevista',
        'https://www.youtube.com/results?search_query=Ronald+Atencio+declaraciones'
      ],
      orientacion: [
        'Izquierda popular (marco de la alianza Venceremos).',
        'Énfasis en procesos internos y primarias conforme a JNE.',
        'Mensajes propios sobre reforma policial/FFAA en eventos partidarios.'
      ],
      posiciones: {
        seguridad: 'Propone “reforma de la Policía y las FFAA”.',
        educacion: 'Sin fuente confiable pública específica a la fecha.',
        mineria: 'Sin fuente confiable pública específica a la fecha.',
        produccion: 'Sin fuente confiable pública específica a la fecha.',
        economia: 'Sin fuente confiable pública específica a la fecha.',
        social: 'Sin fuente confiable pública específica a la fecha.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Ha señalado en actividades partidarias que impulsará la reforma de la Policía y de las Fuerzas Armadas.',
          fuentes: [
            'https://x.com/RonaldAtencio' // publicaciones del propio Atencio (cuenta verificada/propia)
          ]
        },
        educacion: {
          resumen: 'No se identificó un documento o entrevista con propuestas educativas detalladas, metas y presupuesto atribuibles directamente al candidato.',
          fuentes: []
        },
        mineria: {
          resumen: 'No hay lineamientos mineros específicos del candidato con detalle técnico verificable en 2024–2025.',
          fuentes: []
        },
        produccion: {
          resumen: 'No se hallaron propuestas productivas sectoriales propias con sustento documental público.',
          fuentes: []
        },
        economia: {
          resumen: 'No existe a la fecha un plan económico firmado por el candidato publicado en repositorio oficial o medio serio.',
          fuentes: []
        },
        social: {
          resumen: 'No se ubicaron propuestas sociales detalladas del candidato con indicadores y cronograma.',
          fuentes: []
        }
      },
      formacion: [
        'Derecho y Ciencia Política (USMP) – título de abogado (2006).'
      ],
      cargosPublicos: [
        /* sin cargos públicos ejercidos registrados en fuentes citadas */
      ],
      partidosAnteriores: [
        'Renacimiento Unido Nacional (postuló al Congreso en 2020).'
      ],
      relaciones: [
        { con: 'Alianza Venceremos', detalle: 'Precandidato presidencial tras la condena a Guillermo Bermejo.', fuente: 'https://www.infobae.com/peru/2025/10/29/ronald-atencio-abogado-de-guillermo-bermejo-se-lanza-como-precandidato-presidencial-tras-condena-a-congresista/' },
        { con: 'Alianza Venceremos', detalle: 'Inscripción de la alianza ante el JNE (EG2026).', fuente: 'https://portal.jne.gob.pe/portal/Pagina/Nota/18655' },
        { con: 'Alianza Venceremos', detalle: 'Presentación pública y cobertura periodística de la precandidatura.', fuente: 'https://caretas.pe/politica/guillermo-bermejo-delega-su-candidatura-presidencial-a-su-abogado-ronald-atencio-para-las-elecciones-2026/' }
      ],
      contras: [
        {
          desc: 'Investigación preliminar (2022) por presunto patrocinio ilegal (MP abrió diligencias). Estado: preliminar/seguimiento hemerográfico; no hay sentencia firme contra Atencio en las notas citadas.',
          fuente: 'https://larepublica.pe/politica/judiciales/2022/10/14/fiscalia-abre-proceso-de-investigacion-contra-raul-noblecilla-y-ronald-atencio-por-presunto-patrocinio-ilegal-ministerio-publico-mdga'
        },
        {
          desc: 'Antecedentes profesionales de alta exposición mediática (defensa de Castillo y Bermejo) con denuncias y contradenuncias cruzadas (sin proceso penal con condena contra el candidato en estas fuentes).',
          fuente: 'https://gestion.pe/peru/politica/pedro-castillo-ronald-atencio-asume-defensa-legal-de-pedro-castillo-tras-renuncia-de-miguel-perez-rmmn-noticia/'
        }
      ]
    },

    {
      id: 'fte', type: 'candidate',
      nombre: 'Napoleón Becerra García',
      partido: 'Frente de los Trabajadores y Emprendedores (PTE)',
      info: 'Presidente y fundador del PTE; solicitó participar en EG-2026.',
      fotoUrl: 'https://i.postimg.cc/R03rv5XR/napoleon.jpg',
      logoUrl: 'https://i.postimg.cc/8zyvMCp6/images.png',
      videoUrl: 'https://www.youtube.com/embed/FGmJRjnbkCA',
      websOficiales: [
        'https://pte.pe/',
        'https://pte.pe/documentos/',
        'https://www.napotv.com/'
      ],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=y1NjdYInIK4',
        'https://www.youtube.com/watch?v=V-EEfGP3P-4',
        'https://www.facebook.com/megavisioncanal45cajamarca/videos/719246904532790/'
      ],
      orientacion: [
        'Trabajismo/izquierda popular con énfasis en “democracia popular” (según documentos PTE).',
        'Organización partidaria inscrita en JNE (2024) con Becerra como presidente.',
        'Búsqueda de participación en EG-2026 (gestiones ante ONPE/JNE).'
      ],
      posiciones: {
        seguridad: 'Sin documento programático sectorial propio con metas verificables publicado (2024–2025).',
        educacion: 'Sin fuente pública específica con plan detallado (2024–2025).',
        mineria: 'Sin propuesta sectorial propia publicada con indicadores (2024–2025).',
        produccion: 'Sin lineamientos productivos propios con metas y cronograma en fuente oficial (2024–2025).',
        economia: 'Sin plan económico firmado por el candidato en repositorio oficial (2024–2025).',
        social: 'En documentos PTE se prioriza “inclusión y lucha contra la pobreza”; no hay plan social propio con KPIs.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'No se encontró un plan sectorial firmado por el candidato con medidas, metas y presupuesto.',
          fuentes: []
        },
        educacion: {
          resumen: 'No hay propuesta educativa desarrollada atribuible a Becerra en fuente oficial/seria con detalle técnico.',
          fuentes: []
        },
        mineria: {
          resumen: 'No se halló documento propio del candidato con lineamientos específicos para el sector minero.',
          fuentes: []
        },
        produccion: {
          resumen: 'Sin lineamientos productivos propios publicados; el PTE difunde ideario general.',
          fuentes: ['https://pte.pe/']
        },
        economia: {
          resumen: 'Sin plan económico propio publicado en repositorio oficial; el partido presenta estatuto/ideario.',
          fuentes: [
            'https://pte.pe/documentos/'
          ]
        },
        social: {
          resumen: 'El PTE difunde principios de democracia popular e inclusión; no hay plan social con KPIs firmado por el candidato.',
          fuentes: [
            'https://pte.pe/'
          ]
        }
      },
      formacion: [
        // No se consigna grado/título sin enlace institucional verificable.
      ],
      cargosPublicos: [
        /* sin cargos públicos ejercidos verificados en las fuentes citadas */
      ],
      partidosAnteriores: [
        'PTE (fundador/presidente)'
      ],
      relaciones: [
        {
          con: 'PTE', detalle: 'Figura como Presidente y representante legal en los asientos de inscripción del partido.',
          fuente: 'https://pte.pe/wp-content/uploads/2024/04/Asiento-de-Inscripcion-JNE.pdf'
        },
        {
          con: 'Proceso EG-2026', detalle: 'Gestiones electorales y comunicación pública de precandidatura.',
          fuente: 'https://peru21.pe/politica/el-partido-pte-sigue-en-carrera-la-onpe-revoco-decision-que-lo-excluia-de-las-elecciones-de-2026/'
        },
        {
          con: 'Alianzas', detalle: 'Solicitud de inscripción de la alianza “Frente de los Trabajadores y Emprendedores” ante el JNE (agosto 2025).',
          fuente: 'https://rpp.pe/politica/elecciones/elecciones-2026-primero-la-gente-y-pte-solicitan-a-la-jne-inscribir-alianza-frente-de-los-trabajadores-y-emprendedores-noticia-1648935'
        }
      ],
      contras: [
        {
          desc: 'Observación administrativa electoral: ONPE inicialmente excluyó al PTE y luego revocó la decisión tras apelación (oct. 2025). No es sanción penal.',
          fuente: 'https://peru21.pe/politica/el-partido-pte-sigue-en-carrera-la-onpe-revoco-decision-que-lo-excluia-de-las-elecciones-de-2026/'
        }
        // A la fecha, sin procesos penales/sentencias firmes contra el candidato en las fuentes citadas.
      ]
    },

    {
      id: 'rb', type: 'candidate', nombre: 'Rafael Belaúnde', partido: 'Libertad Popular',
      info: 'Empresario y consultor político.',
      fotoUrl: 'https://i.postimg.cc/Gp1QgtwB/rafael-belaunde.jpg',
      logoUrl: 'https://i.postimg.cc/vmSgYvTg/libertadpopular.png',
      videoUrl: 'https://www.youtube.com/embed/uXHD74xdHAU',
      websOficiales: [],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=uXHD74xdHAU',
        'https://www.youtube.com/results?search_query=Rafael+Bela%C3%Ande+entrevista',
        'https://www.youtube.com/results?search_query=Libertad+Popular+entrevista'
      ],
      orientacion: ['Liberal moderado; competitividad.', 'Propuestas: simplificación, estabilidad jurídica.', 'Social: moderado.'],
      posiciones: {
        seguridad: 'Tecnología y refuerzo PNP.',
        educacion: 'Meritocracia y calidad.',
        mineria: 'Reglas claras y estabilidad.',
        produccion: 'Clima de negocios.',
        economia: 'Promercado.',
        social: 'Moderado.'
      },
      formacion: ['Sin info pública detallada'],
      cargosPublicos: ['Ninguno'],
      partidosAnteriores: ['Sin militancia previa'],
      relaciones: [],
      contras: [{ desc: 'Sin investigaciones públicas relevantes reportadas.', fuente: 'https://es.wikipedia.org/wiki/Elecciones_generales_de_Per%C3%BA_de_2026' }]
    },

    {
      id: 'sicreo', type: 'candidate',
      nombre: 'Carlos Espá',
      partido: 'Sí Creo',
      info: 'Abogado y periodista; presidente del partido Sí Creo; precandidato 2026.',
      fotoUrl: 'https://i.postimg.cc/sg4P1v0x/carlospa.jpg',
      logoUrl: 'https://i.postimg.cc/g2HyrnB0/sicreo.jpg',
      videoUrl: 'https://www.youtube.com/embed/FuOD9cHEUgo',
      websOficiales: [
        'https://sicreo.org.pe/',
        'https://sicreo.org.pe/nuestros-10-mandamientos/'
      ],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=OCCJEdwrkwI', // RPP: propuestas
        'https://www.youtube.com/watch?v=2ABhkOzledE', // entrevista a fondo
        'https://www.facebook.com/rppnoticias/videos/elecciones-2026-cu%C3%A1les-son-las-propuestas-electorales-del-partido-s%C3%ADcreo-adnrpp-/1093507009621213/'
      ],
      orientacion: [
        'Liberal en lo económico con énfasis anticorrupción (“secar el pozo de la corrupción”).',
        'Seguridad dura y revalorización de PNP/FF.AA.',
        'Infraestructura, conectividad e inclusión (agua e internet) como palanca social.'
      ],
      posiciones: {
        seguridad: 'Cárceles de máxima seguridad sin visitas; audiencias por Zoom; privatizar monitoreo de cámaras; revalorar PNP y FF.AA.',
        educacion: 'Bonos educativos condicionados para introducir competencia mientras mejora la escuela pública.',
        mineria: 'No hay plan sectorial publicado; sí énfasis en combatir minería ilegal dentro de una agenda de seguridad.',
        produccion: 'Conectividad e irrigación para potenciar agroexportación; infraestructura como motor productivo.',
        economia: 'Eliminar incentivos a la corrupción; formalización con 1 punto del IGV directo a pensiones; romper monopolio de Sedapal (no privatización obligatoria); cláusula dorada en energía.',
        social: 'Derechos a agua e internet como base de inclusión; reducción de trámites y privilegios que afectan servicios.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Plantea seis penales de máxima seguridad (incl. El Frontón), sin visitas; audiencias por Zoom; privatización del sistema de cámaras para control dentro de cárceles; revaloración de PNP/FF.AA.',
          fuentes: [
            'https://peru21.pe/politica/carlos-espa-la-democracia-ha-sido-boba-negligente-indolente-e-insensible/',
            'https://sicreo.org.pe/nuestros-10-mandamientos/'
          ]
        },
        educacion: {
          resumen: 'Propone bonos educativos condicionados para forzar competencia y mejora de la educación pública.',
          fuentes: [
            'https://peru21.pe/politica/carlos-espa-la-democracia-ha-sido-boba-negligente-indolente-e-insensible/'
          ]
        },
        mineria: {
          resumen: 'No hay documento programático propio con metas/indicadores sobre minería; ha vinculado seguridad con control de economías ilegales (minería ilegal).',
          fuentes: [
            'https://peru21.pe/politica/carlos-espa-la-democracia-ha-sido-boba-negligente-indolente-e-insensible/'
          ]
        },
        produccion: {
          resumen: 'Eje de infraestructura (carreteras, irrigación) para dinamizar producción y convertir la sierra en potencia agroexportadora.',
          fuentes: [
            'https://peru21.pe/politica/carlos-espa-la-democracia-ha-sido-boba-negligente-indolente-e-insensible/'
          ]
        },
        economia: {
          resumen: '“Secar el pozo de la corrupción” (menos trámites, exoneraciones y privilegios); formalización con 1 punto del IGV a la cuenta de pensión; romper monopolio de Sedapal sin privatización obligatoria; en energía, “cláusula dorada” para evitar concentración.',
          fuentes: [
            'https://peru21.pe/politica/carlos-espa-la-democracia-ha-sido-boba-negligente-indolente-e-insensible/'
          ]
        },
        social: {
          resumen: 'Derecho universal a internet y acceso a agua/saneamiento como prioridad de inclusión social.',
          fuentes: [
            'https://peru21.pe/politica/carlos-espa-la-democracia-ha-sido-boba-negligente-indolente-e-insensible/'
          ]
        }
      },
      formacion: [
        // Se puede añadir con enlace institucional directo (p.ej., ficha editorial UPC).
        'Perfil profesional (editorial): https://editorial.upc.edu.pe/autor/7a665c7977e7b9df2eee119f358586df'
      ],
      cargosPublicos: [
        /* sin cargos públicos ejercidos registrados en las fuentes citadas */
      ],
      partidosAnteriores: [
        'Sí Creo (fundador/presidente)'
      ],
      relaciones: [
        {
          con: 'Sí Creo', detalle: 'Líder y precandidato 2026; despliegue territorial y presentaciones públicas.',
          fuente: 'https://www.facebook.com/rppnoticias/videos/elecciones-2026-cu%C3%A1les-son-las-propuestas-electorales-del-partido-s%C3%ADcreo-adnrpp-/1093507009621213/'
        }
      ],
      contras: [
        // A la fecha no se hallaron procesos penales o sentencias firmes contra el candidato en fuentes primarias/medios serios consultados.
      ]
    },

    {
      id: 'accionpopula', type: 'candidate',
      nombre: 'Alfredo Barnechea',
      partido: 'Acción Popular',
      info: 'Escritor y ex candidato presidencial; precandidato 2026 de Acción Popular.',
      fotoUrl: 'https://i.postimg.cc/hjp3m2yg/alfredo.jpg',
      logoUrl: 'https://i.postimg.cc/LXN0PxCS/accion-popular.png',
      videoUrl: 'https://www.youtube.com/embed/uFysh1WWwP8',
      websOficiales: [
        // agrega si publican portal oficial de campaña
      ],
      entrevistasYouTube: [
        'https://www.facebook.com/canalnoficial/videos/alfredo-barnechea-sobre-su-candidatura-con-acci%C3%B3n-popular/761426019730894/',
        'https://www.youtube.com/results?search_query=Alfredo+Barnechea+RPP+entrevista'
      ],
      orientacion: [
        'Estado de bienestar e industrialización (plan 2016–2021 de AP).',
        'Renegociación de contratos estratégicos (gas, proyectos mineros) sin renunciar a la minería.',
        'Crecimiento con políticas sociales universales (educación y salud públicas).'
      ],
      posiciones: {
        seguridad: 'No se ubicó documento sectorial propio reciente (2024–2025) con metas verificables.',
        educacion: 'Estado de bienestar con educación pública de calidad; evaluaciones y cierre de brechas (plan 2016–2021).',
        mineria: 'Pro minería con reglas claras; plantea que “todo es renegociable” (Conga, Tía María) y no condenar al país a “carecer de minería”.',
        produccion: 'Industrialización: energía barata, infraestructura y políticas para valor agregado (plan 2016–2021).',
        economia: 'Bienestar social + disciplina macro; reforma del Estado y formalización (plan 2016–2021).',
        social: 'Derechos sociales universales: educación, salud, nutrición y pensiones (plan 2016–2021).'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'No se encontró un plan específico firmado por el candidato para 2024–2025 con medidas y presupuesto. (Sin fuente pública sectorial reciente).',
          fuentes: []
        },
        educacion: {
          resumen: 'Propone un “Estado de bienestar” con educación pública de calidad y metas de cierre de brechas; prioriza docentes, infraestructura y resultados de aprendizaje.',
          fuentes: [
            'https://bitacora.jomra.es/wp-content/uploads/2016/01/pg-AP-2016.pdf'
          ]
        },
        mineria: {
          resumen: 'Sostiene que no se puede “condenar al Perú a carecer de minería” y que los contratos (gas Camisea, Conga, Tía María) pueden renegociarse para resguardar el interés nacional.',
          fuentes: [
            'https://rpp.pe/politica/elecciones/alfredo-barnechea-no-podemos-condenar-al-peru-a-carecer-de-mineria-noticia-948910',
            'https://rpp.pe/politica/elecciones/alfredo-barnechea-renegociacion-del-gas-hara-respetar-intereses-del-peru-noticia-939760'
          ]
        },
        produccion: {
          resumen: 'Estrategia de industrialización: energía barata, impulso a infraestructura y encadenamientos productivos para diversificar más allá de materias primas.',
          fuentes: [
            'https://bitacora.jomra.es/wp-content/uploads/2016/01/pg-AP-2016.pdf'
          ]
        },
        economia: {
          resumen: 'Crear un Estado de bienestar con disciplina macro, reforma del Estado, competencia y formalización; ampliar cobertura de salud y pensiones.',
          fuentes: [
            'https://bitacora.jomra.es/wp-content/uploads/2016/01/pg-AP-2016.pdf',
            'https://www.facebook.com/canalnoficial/videos/alfredo-barnechea-sobre-su-candidatura-con-acci%C3%B3n-popular/761426019730894/'
          ]
        },
        social: {
          resumen: 'Piso de bienestar: educación y salud públicas, nutrición infantil y pensiones justas como ejes de cohesión social.',
          fuentes: [
            'https://bitacora.jomra.es/wp-content/uploads/2016/01/pg-AP-2016.pdf'
          ]
        }
      },
      formacion: [
        // añadir solo con enlace institucional directo si lo deseas
      ],
      cargosPublicos: [
        // sin cargos públicos ejercidos recientes que consten en fuentes citadas arriba
      ],
      partidosAnteriores: ['Acción Popular'],
      relaciones: [
        {
          con: 'Acción Popular', detalle: 'Precandidato presidencial 2026 (internas con varias fórmulas).',
          fuente: 'https://www.infobae.com/peru/2025/10/31/accion-popular-presenta-seis-precandidatos-presidenciales-quienes-son-y-cuando-se-elige-al-representante-del-partido-para-las-elecciones-2026/'
        },
        {
          con: 'Acción Popular', detalle: 'Cobertura sobre precandidaturas internas 2026.',
          fuente: 'https://larepublica.pe/politica/2025/10/30/accion-popular-tiene-4-precandidatos-presidenciales-para-las-elecciones-2026-hnews-1668810'
        }
      ],
      contras: [
        // No se identificaron procesos penales con sentencia firme contra el candidato en las fuentes citadas.
      ]
    },

    {
      id: 'plg', type: 'candidate',
      nombre: 'Marisol Pérez Tello',
      partido: 'Primero la Gente',
      info: 'Excongresista y exministra de Justicia (2016–2017). Anunció precandidatura 2026 por Primero la Gente; en julio 2025 retiró su precandidatura y expresó apoyo a Alfonso López Chau.',
      fotoUrl: 'https://i.postimg.cc/5tFCLysP/marisol.jpg',
      logoUrl: 'https://i.postimg.cc/HxD72mNz/PLG.jpg',
      videoUrl: 'https://www.youtube.com/embed/x4Tk69E9TJY',
      websOficiales: [
        'https://primerolagente.pe/'
      ],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=RF6pcpidAfY', // Candidatos al Aula
        'https://www.youtube.com/watch?v=2Q23efhu0-8'  // RPP AN sobre ley de amnistía
      ],
      orientacion: [
        'Centro reformista: institucionalidad, anticorrupción y DD. HH.',
        'Seguridad con fortalecimiento legal e inteligencia contra el crimen organizado.',
        'Enfoque social en servicios públicos y cierre de brechas.'
      ],
      posiciones: {
        seguridad: 'Critica la debilitación del marco legal contra el crimen organizado; propone coordinación interinstitucional, inteligencia y mejor diseño normativo.',
        educacion: 'Sin plan sectorial propio con metas y presupuesto publicado (2024–2025).',
        mineria: 'Rechazo a la minería ilegal; pide corregir REINFO y cortar captura criminal.',
        produccion: 'Sin lineamientos productivos detallados propios publicados (2024–2025).',
        economia: 'Énfasis en integridad pública y eficiencia del gasto; sin plan macro propio publicado.',
        social: 'Institucionalidad, DD. HH. y servicios públicos como eje; sin matriz de metas propia publicada.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Sostiene que el Congreso “se cargó” la legislación contra el crimen organizado; plantea recuperar un marco eficaz, con inteligencia y coordinación interinstitucional.',
          fuentes: [
            'https://ojo-publico.com/entrevistas/perez-tello-congreso-se-cargo-legislacion-contra-crimen-organizado'
          ]
        },
        educacion: {
          resumen: 'No se identificó documento programático propio con metas, cronograma y presupuesto atribuido a su precandidatura (2024–2025).',
          fuentes: []
        },
        mineria: {
          resumen: 'Advierte infiltración criminal y uso perverso del REINFO; pide corregir el régimen y cortar el financiamiento de campañas desde economías ilegales.',
          fuentes: [
            'https://www.facebook.com/canalnoficial/videos/marisol-p%C3%A9rez-tello-se-pronuncia-sobre-el-reinfo/895802035828869/'
          ]
        },
        produccion: {
          resumen: 'No hay lineamientos productivos específicos propios localizados en 2024–2025 con indicadores verificables.',
          fuentes: []
        },
        economia: {
          resumen: 'En entrevistas y trayectoria prioriza integridad del gasto y lucha anticorrupción; no publicó un plan macroeconómico propio con metas en 2024–2025.',
          fuentes: [
            'https://rpp.pe/politica/gobierno/marisol-perez-tello-no-vamos-a-tolerar-mas-corrupcion-noticia-1026910'
          ]
        },
        social: {
          resumen: 'Plantea reconstruir confianza institucional y servicios públicos como base de cohesión; sin documento social propio con KPIs publicado.',
          fuentes: [
            'https://www.youtube.com/watch?v=RF6pcpidAfY'
          ]
        }
      },
      formacion: [
        // Añadir solo con enlace institucional directo si lo requieres.
      ],
      cargosPublicos: [
        'Congresista de la República (2011–2016)',
        'Ministra de Justicia y Derechos Humanos (2016–2017)'
      ],
      partidosAnteriores: [
        'Partido Popular Cristiano (PPC)'
      ],
      relaciones: [
        { con: 'Primero la Gente', detalle: 'Anunció precandidatura presidencial (ene. 2025).', fuente: 'https://larepublica.pe/politica/2025/01/18/exministra-marisol-perez-tello-anuncia-su-precandidatura-a-la-presidencia-con-el-partido-primero-la-gente-hnews-556776' },
        { con: 'Primero la Gente', detalle: 'Denuncia por presuntas firmas falsas; exigió investigación fiscal.', fuente: 'https://rpp.pe/politica/elecciones/marisol-perez-tello-responde-por-firmas-falsas-en-primero-la-gente-y-anuncia-denuncia-penal-noticia-1632693' },
        { con: 'Alfonso López Chau', detalle: 'Retiró su precandidatura y expresó apoyo (jul. 2025).', fuente: 'https://larepublica.pe/politica/2025/07/24/elecciones-2026-marisol-perez-tello-renuncia-a-su-precandidatura-presidencial-y-anuncia-apoyo-a-alfonso-lopez-chau-hnews-1479168' }
      ],
      contras: [
        {
          desc: 'Controversia por presuntas firmas falsas vinculadas a PLG: el MP abrió investigación; ella presentó denuncia penal y pidió sanción a responsables. No hay proceso penal en su contra por este caso en las notas citadas.',
          fuente: 'https://www.infobae.com/peru/2025/05/15/elecciones-2026-fiscalia-investiga-a-partido-primero-la-gente-por-presunta-fabrica-de-firmas-falsas/'
        }
      ]
    },

    {
      id: 'ppp-hc',
      type: 'candidate',
      nombre: 'Herbert Caller',
      partido: 'Partido Patriótico del Perú',
      info: 'Fundador y presidente del PPP; exoficial de la Marina de Guerra del Perú.',
      fotoUrl: 'https://i.postimg.cc/nzDgy40b/herbert.jpg',
      logoUrl: 'https://i.postimg.cc/R082psQS/ppp.png',
      videoUrl: 'https://www.youtube.com/embed/emKfkybrbD8',
      websOficiales: [
        'https://partidopatrioticodelperu.pe/',
        'https://partidopatrioticodelperu.pe/presidente/',
        'https://partidopatrioticodelperu.pe/ideario/'
      ],
      entrevistasYouTube: [
        'https://www.youtube.com/results?search_query=Herbert+Caller+Nicol%C3%A1s+L%C3%BAcar',
        'https://www.youtube.com/results?search_query=Herbert+Caller+Rosa+Mar%C3%ADa+Palacios',
        'https://www.youtube.com/results?search_query=Herbert+Caller+Radio+Stereo+Villa'
      ],
      orientacion: [
        'Patriótico-reformista: meritocracia, lucha anticorrupción y “seguridad interna y externa”.',
        'Estado con mayor rol en sectores estratégicos (flota, trenes, línea aérea) con operación privada.',
        'Familia y DD. HH.; énfasis en orden, disciplina e interculturalidad.'
      ],
      posiciones: {
        seguridad: '“Guerra contra la criminalidad”, coordinación PNP–FFAA; plantea pena de muerte y denunciar el Pacto de San José.',
        educacion: '“Revolución educativa” con metodologías de súper aprendizaje, idiomas (quechua/inglés + tercero) y deporte.',
        mineria: 'Sin plan minero específico publicado; enfoque general de control estatal de extracción y valor agregado.',
        produccion: 'Industrializar en todas las regiones; flota mercante, trenes y línea aérea de bandera; crédito MYPE.',
        economia: 'Mayor participación del Estado en sectores estratégicos con inversión privada operando; control de tasas y 2% del Presupuesto para MYPE.',
        social: 'Lucha anticorrupción (polígrafo, impedimentos, evaluación toxicológica), protección a niños/mujeres y servicios de salud/nutrición.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Declara “guerra contra la criminalidad”, propone coordinación operativa PNP–FFAA; en su ideario plantea pena de muerte para asesinatos y denunciar el Pacto de San José; reforma penal y cárceles productivas.',
          fuentes: [
            'https://www.stereovilla.pe/detalles/1630',
            'https://partidopatrioticodelperu.pe/ideario/#seguridad-interna-y-externa'
          ]
        },
        educacion: {
          resumen: 'Metodologías de súper aprendizaje; más sedes de UNI/UNMSM/UNALM en regiones; impulso al quechua y al deporte con entidad especializada.',
          fuentes: [
            'https://partidopatrioticodelperu.pe/ideario/#educacion'
          ]
        },
        mineria: {
          resumen: 'No hay documento sectorial minero propio con metas y presupuesto. El ideario alude a “control efectivo de actividades de extracción” y estabilidad social/jurídica.',
          fuentes: [
            'https://partidopatrioticodelperu.pe/ideario/'
          ]
        },
        produccion: {
          resumen: 'Industrialización con valor agregado; creación de flota mercante, trenes y línea aérea de bandera; fomento de economía azul y control de importaciones de productos de “bandera nacional”.',
          fuentes: [
            'https://partidopatrioticodelperu.pe/ideario/#trabajo-y-productividad'
          ]
        },
        economia: {
          resumen: 'Modelo con participación estatal accionaria en sectores estratégicos y operación privada; regulación de intereses; Crédito MYPE equivalente al 2% del Presupuesto Nacional.',
          fuentes: [
            'https://partidopatrioticodelperu.pe/ideario/#trabajo-y-productividad',
            'https://partidopatrioticodelperu.pe/ideario/#vision'
          ]
        },
        social: {
          resumen: 'Ejes de DD. HH. y familia; anticorrupción con imprescriptibilidad para delitos graves, uso de polígrafo a altos funcionarios y controles de idoneidad.',
          fuentes: [
            'https://partidopatrioticodelperu.pe/ideario/#lucha-contra-la-corrupcion',
            'https://partidopatrioticodelperu.pe/ideario/#vision'
          ]
        }
      },
      formacion: [
        'Máster en Gestión y Análisis de Políticas Públicas (USMP – Univ. Carlos III de Madrid).',
        'Programa de Gobernabilidad y Gerencia Política (PUCP – GWU – CAF).',
        'Oficial MGP, “Espada de Honor” (promoción 2000).'
      ],
      cargosPublicos: [
        'Oficial de la Marina de Guerra del Perú (21 años de servicio).'
      ],
      partidosAnteriores: ['Partido Patriótico del Perú'],
      relaciones: [
        {
          con: 'Partido Patriótico del Perú', detalle: 'Fundador y presidente; presencia en medios y actos partidarios.',
          fuente: 'https://partidopatrioticodelperu.pe/presidente/'
        },
        {
          con: 'Proceso EG-2026', detalle: 'El PPP figura en el padrón de afiliados del ROP/JNE (2025).',
          fuente: 'https://sroppublico.jne.gob.pe/Consulta/PadronAfiliado'
        }
      ],
      contras: [
        // A la fecha no se hallaron procesos penales o sanciones firmes contra el candidato en fuentes citadas.
      ]
    },
    {
      id: 'id-wg',
      type: 'candidate',
      nombre: 'Wolfgang Grozo',
      partido: 'Integridad Democrática',
      info: 'Mayor General FAP (r); líder y fundador de Integridad Democrática; docente universitario.',
      fotoUrl: 'https://i.postimg.cc/VNZ4CHTY/wolfgang.jpg',
      logoUrl: 'https://i.postimg.cc/25S23f0P/integridad.jpg',
      videoUrl: 'https://www.youtube.com/embed/xp8b_AvgruY',
      websOficiales: [
        // sitio/landing del partido si se publica
      ],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=xp8b_AvgruY',
        'https://www.youtube.com/watch?v=ZtLCllmt77Y',
        'https://www.youtube.com/watch?v=-shDIz-axSw'
      ],
      orientacion: [
        'Orden y seguridad; “guerra contra la criminalidad”.',
        'Énfasis en integridad pública (polígrafo a autoridades).',
        'Postura crítica al Pacto de San José.'
      ],
      posiciones: {
        seguridad: 'Plantea declarar una “guerra contra la criminalidad”, activar el Consejo de Seguridad Nacional y endurecer el marco penal.',
        educacion: 'Sin plan sectorial propio 2024–2025 con metas y presupuesto publicado.',
        mineria: 'Sin propuesta sectorial propia con indicadores verificables publicada.',
        produccion: 'Sin lineamientos productivos nacionales con cronograma público.',
        economia: 'Sin marco macro propio 2024–2025; énfasis general en eficiencia y control.',
        social: 'Conservador en valores; crítica a Agenda 2030 y a adopción por parejas del mismo sexo (declaraciones).'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Su eje es “guerra contra la criminalidad”: activar el Consejo de Seguridad Nacional, operaciones integradas y endurecer penas. Ha propuesto denunciar el Pacto de San José para habilitar medidas más severas; sostiene aplicar pruebas de polígrafo a altas autoridades y compras de defensa con control estricto. No se localiza un plan sectorial firmado por el candidato en 2024–2025 con metas, presupuesto y cronograma; el sustento público proviene de entrevistas y presentaciones.',
          fuentes: [
            'https://altavoz.pe/politica/wolfgang-grozo-hay-que-denunciar-al-pacto-de-san-jose-para-la-guerra-contra-la-criminalidad-video/',
            'https://peru21.pe/politica/wolfgang-grozo-costa-la-poblacion-asocia-fuerza-popular-y-app-con-corrupcion/'
          ]
        },
        educacion: {
          resumen: 'No se encontró documento programático propio 2024–2025 con metas, presupuesto y cronograma atribuible al candidato. Se deja constancia de ausencia de fuente confiable específica.',
          fuentes: []
        },
        mineria: {
          resumen: 'No hay lineamientos mineros propios publicados con indicadores verificables (2024–2025). Se deja constancia.',
          fuentes: []
        },
        produccion: {
          resumen: 'No se hallaron propuestas productivas nacionales con detalle técnico, metas y cronograma publicadas por el candidato (2024–2025).',
          fuentes: []
        },
        economia: {
          resumen: 'Sin marco macroeconómico propio publicado en 2024–2025; sus declaraciones priorizan integridad y control de gasto en adquisiciones del Estado.',
          fuentes: [
            'https://peru21.pe/politica/wolfgang-grozo-costa-la-poblacion-asocia-fuerza-popular-y-app-con-corrupcion/'
          ]
        },
        social: {
          resumen: 'En entrevistas públicas ha señalado posiciones conservadoras en temas de familia y crítica a la Agenda 2030. No hay plan social propio con KPIs y presupuesto publicado en 2024–2025.',
          fuentes: [
            'https://canalb.pe/noticias/baellatalks/partido-identidad-democratica-wolfgang-grozo-expone-sus-ideas-como-eventual-candidato-presidencial'
          ]
        }
      },
      formacion: [
        // Registrar grados solo con enlace institucional directo si lo requieres.
        'Perfil ULima (docente): https://cris.ulima.edu.pe/es/persons/wolfgang-grozo-costa',
        'CTI Vitae (CONCYTEC): https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=127870'
      ],
      cargosPublicos: [
        'Comandante del Servicio de Inteligencia FAP (2015–2016)',
        'Director de Información e Intereses Aeroespaciales FAP (2020)',
        'Director de Inteligencia FAP (2021)'
      ],
      partidosAnteriores: [
        'Integridad Democrática (fundador)'
      ],
      relaciones: [
        {
          con: 'Integridad Democrática', detalle: 'Proclamado precandidato presidencial (10/09/2025).',
          fuente: 'https://diariouno.pe/2025/09/10/integridad-democratica-proclama-al-general-r-wolfgang-grozo-como-precandidato-presidencial/'
        },
        {
          con: 'Alianza política', detalle: 'Anunció alianza con Peruanos Unidos: Somos Libres (mayo 2025).',
          fuente: 'https://www.canalb.pe/noticias/politica/partidos-de-wolfgang-grozo-y-tomas-galvez-sellan-pacto-por-una-revolucion-democratica-rumbo-al-2026'
        },
        {
          con: 'Situación militar', detalle: 'Pase a retiro por Renovación (RS 156-2021-DE).',
          fuente: 'https://www.gob.pe/institucion/mindef/normas-legales/2538905-156-2021-de'
        }
      ],
      contras: [
        // A la fecha, no se hallaron procesos penales o sentencias firmes contra el candidato en fuentes primarias consultadas.
        // Controversias públicas: propuestas de denunciar el Pacto de San José y mano dura han generado críticas de organizaciones de DD. HH. (posturas, no procesos).
      ]
    },
    {
      id: 'pdup-cc',
      type: 'candidate',
      nombre: 'Charlie Carrasco Salazar',
      partido: 'Partido Demócrata Unido Perú (PDUP)',
      info: 'Abogado y docente; presidente del PDUP; se presenta como “Charlie Presidente 2026”.',
      fotoUrl: 'https://i.postimg.cc/vmZ3Dd0k/charlie.jpg',
      logoUrl: 'https://i.postimg.cc/tg427Hrj/partidodemocrata.jpg',
      videoUrl: 'https://www.youtube.com/embed/ZsFw2q56ELw',
      websOficiales: [
        'https://sroppublico.jne.gob.pe/Consulta/PadronAfiliado',
        'https://www.youtube.com/@partidodemocrataunidoperu',
        'https://www.facebook.com/CharlieCarrascoOficial'
      ],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=ZsFw2q56ELw',
        'https://www.youtube.com/watch?v=6RFLAA5BpJA'
      ],
      orientacion: [
        'Orden y “principio de autoridad”.',
        'Énfasis en seguridad, empleo e industrialización (discurso partidario).',
        'Narrativa anticorrupción.'
      ],
      posiciones: {
        seguridad: 'Promete “mano firme” y reordenamiento institucional; sin plan sectorial con metas públicas.',
        educacion: 'Mensajes sobre disciplina y mejora docente; sin documento programático verificable.',
        mineria: 'Sin propuesta sectorial propia con indicadores publicada.',
        produccion: 'Habla de industrialización y empleo; sin cronograma y presupuesto públicos.',
        economia: 'Sin marco macro propio 2024–2025; énfasis general en formalización y eficiencia.',
        social: 'Sin plan social con KPIs publicado; discurso de valores y anticorrupción.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'En redes y entrevistas, plantea “principio de autoridad”, operaciones coordinadas y tolerancia cero contra el crimen. No se ubicó un plan sectorial formal 2024–2025 con metas, presupuesto y cronograma firmado por el candidato. El sustento disponible es discursivo en plataformas oficiales del partido y del propio candidato.',
          fuentes: [
            'https://www.facebook.com/CharlieCarrascoOficial/',
            'https://www.facebook.com/PartidoDemocrataUnidoPeru/videos/%EF%B8%8F-video-el-dr-charlie-carrasco-salazar-presidente-del-partido-dem%C3%B3crata-unido-pe/1326978285322958/'
          ]
        },
        educacion: {
          resumen: 'Mensajes generales sobre disciplina, calidad y gestión educativa desde entrevistas; no hay documento programático propio con metas y presupuesto 2024–2025 publicado por el candidato o el partido.',
          fuentes: [
            'https://www.youtube.com/watch?v=6RFLAA5BpJA'
          ]
        },
        mineria: {
          resumen: 'No se encontró propuesta minera detallada (metas, cronograma, presupuesto) publicada por el candidato o el partido en 2024–2025.',
          fuentes: []
        },
        produccion: {
          resumen: 'El discurso menciona “industrialización” y empleo, pero sin un plan productivo formal con indicadores verificables disponibles al público.',
          fuentes: [
            'https://www.facebook.com/CharlieCarrascoOficial/videos/limpios/1167815652070065/'
          ]
        },
        economia: {
          resumen: 'No hay marco macroeconómico propio publicado en 2024–2025. El énfasis declarado es anticorrupción, formalización y eficiencia en el gasto.',
          fuentes: [
            'https://www.facebook.com/CharlieCarrascoOficial/'
          ]
        },
        social: {
          resumen: 'Mensajes de valores, integridad y lucha anticorrupción; no existe un plan social con KPIs y presupuesto disponible para verificación pública.',
          fuentes: [
            'https://www.facebook.com/PartidoDemocrataUnidoPeru/'
          ]
        }
      },
      formacion: [
        // Registrar grados con enlace institucional si lo deseas; se halló perfil docente/investigación:
        'CTI Vitae (perfil académico): https://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=28010'
      ],
      cargosPublicos: [
        /* sin cargos públicos ejercidos verificados en las fuentes citadas */
      ],
      partidosAnteriores: [
        'Partido Demócrata Unido Perú (presidente/líder)'
      ],
      relaciones: [
        {
          con: 'PDUP en ROP', detalle: 'El partido figura inscrito con padrón de afiliados en el ROP/JNE (consulta pública).',
          fuente: 'https://sroppublico.jne.gob.pe/Consulta/PadronAfiliado'
        },
        {
          con: 'Precandidatura 2026', detalle: 'Cobertura y contenidos oficiales en redes del candidato/partido durante 2025.',
          fuente: 'https://www.facebook.com/CharlieCarrascoOficial/'
        }
      ],
      contras: [
        // En revisión hemerográfica y registros públicos consultados (2024–2025), no se hallaron procesos penales ni sentencias firmes contra el candidato.
        // Si aportas resoluciones del MP/PJ/Contraloría o informes periodísticos específicos, los incorporo de inmediato con el enlace directo al PDF o nota.
      ]
    },
    {
      id: 'pdf-va',
      type: 'candidate',
      nombre: 'Virgilio Acuña',
      partido: 'Partido Democrático Federal',
      info: 'Ingeniero civil; excongresista (2011–2016); exviceministro de Transportes (nov. 2022–ene. 2023). Impulsa el federalismo.',
      fotoUrl: 'https://i.postimg.cc/ZqsjdDgz/virgilio.jpg',
      logoUrl: 'https://i.postimg.cc/TP3ChXkT/partidofederal.jpg',
      videoUrl: 'https://www.youtube.com/embed/uRsrLXvGgTU',
      websOficiales: [
        'https://democraticofederal.com/'
      ],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=uRsrLXvGgTU'
      ],
      orientacion: [
        'Federalismo y mayor autonomía regional.',
        'Descentralización fiscal y administrativa.',
        'Énfasis en infraestructura y orden institucional.'
      ],
      posiciones: {
        seguridad: 'Mensajes de orden y coordinación interinstitucional; sin plan sectorial 2024–2025 con metas públicas.',
        educacion: 'Enfoque descentralizador; sin documento sectorial reciente con KPIs.',
        mineria: 'Sin propuesta sectorial propia publicada con indicadores.',
        produccion: 'Impulso a infraestructura regional; sin cronograma y presupuesto verificables.',
        economia: 'Federalismo fiscal; no hay marco macro propio 2024–2025 con metas.',
        social: 'Cohesión desde servicios públicos regionales; sin plan social nacional con KPIs.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Plantea enfrentar la criminalidad con “principio de autoridad” y mejor coordinación entre niveles de gobierno dentro de un Estado federal, priorizando presencia estatal, infraestructura y gestión territorial. No publicó en 2024–2025 un plan sectorial propio con metas, presupuesto y cronograma; su sustento público proviene de entrevistas y vocerías partidarias.',
          fuentes: [
            'https://democraticofederal.com/',
            'https://www.youtube.com/watch?v=uRsrLXvGgTU'
          ]
        },
        educacion: {
          resumen: 'La línea discursiva vincula calidad educativa con gestión descentralizada y financiamiento regional estable dentro de un federalismo fiscal. No se encontró un documento programático 2024–2025 firmado por el candidato con metas medibles, cronograma y presupuesto; la sustentación disponible se basa en presentaciones públicas y contenidos partidarios.',
          fuentes: [
            'https://democraticofederal.com/'
          ]
        },
        mineria: {
          resumen: 'No hay un plan minero propio publicado por el candidato con objetivos, indicadores, enfoque de conflictividad y trazabilidad socioambiental en 2024–2025. Se deja constancia de ausencia de fuente fiable específica.',
          fuentes: []
        },
        produccion: {
          resumen: 'Sostiene que el federalismo permitiría políticas productivas según vocación regional y cierre de brechas de infraestructura logística. A 2024–2025 no se localiza un plan productivo firmado por el candidato con metas, inversiones y cronograma verificables; el respaldo público son entrevistas y el ideario del partido.',
          fuentes: [
            'https://democraticofederal.com/',
            'https://www.youtube.com/watch?v=L0MqmgYZID'
          ]
        },
        economia: {
          resumen: 'Defiende un federalismo fiscal con descentralización de ingresos y competencias, buscando eficiencia del gasto y responsabilidad en cada región. No se halló un marco macroeconómico propio 2024–2025 con metas de crecimiento, déficit o inversión; el soporte disponible son piezas de comunicación política y su libro “Perú Federal”.',
          fuentes: [
            'https://democraticofederal.com/',
            'https://www.planetadelibros.com.pe/libro-peru-federal/362977'
          ]
        },
        social: {
          resumen: 'Propone que los servicios sociales (salud, agua, conectividad) se gestionen con mayor autonomía regional y control ciudadano, articulados a la reducción de pobreza desde el territorio. No hay un plan social nacional propio 2024–2025 con KPIs y presupuesto publicados.',
          fuentes: [
            'https://democraticofederal.com/'
          ]
        }
      },
      formacion: [
        // Añade grados solo con enlace institucional si lo requieres.
      ],
      cargosPublicos: [
        'Viceministro de Transportes (24/11/2022–13/01/2023)',
        'Congresista de la República (2011–2016)'
      ],
      partidosAnteriores: [
        // No consigno variaciones sin enlace institucional directo
      ],
      relaciones: [
        { con: 'Partido Democrático Federal', detalle: 'Portal oficial e ideario federalista.', fuente: 'https://democraticofederal.com/' },
        { con: 'Candidatura 2026', detalle: 'Anunciada públicamente en medios y redes; despliegue de agenda federal.', fuente: 'https://www.facebook.com/DiarioLaSelva/posts/1335024485297075/' }
      ],
      contras: [
        {
          desc: 'Investigación fiscal (dic. 2022): Fiscalía de Chiclayo abrió investigación por presunta defraudación y estafa cuando era viceministro de Transportes. Estado: investigación; sin sentencia firme en la nota citada.',
          fuente: 'https://www.infobae.com/america/peru/2022/12/01/virgilio-acuna-fiscalia-de-chiclayo-investiga-a-viceministro-por-presunta-defraudacion-y-estafa/'
        },
        {
          desc: 'Nombramiento y renuncia como viceministro: designado por RS 020-2022-MTC y renunció el 13/01/2023 en medio de cuestionamientos públicos.',
          fuente: 'https://actualidadcivil.pe/norma/resolucion-suprema-020-2022-mtc/db484222-ebfe-450d-8ad9-23a95073c470; https://rpp.pe/politica/gobierno/virgilio-acuna-renuncio-al-cargo-de-viceministro-de-transportes-noticia-1459859'
        },
        {
          desc: 'Controversias públicas por alianza política: en 2025 anunció acercamientos/alianza con Pedro Castillo y Juntos por el Perú, generando críticas. No es proceso penal; se consigna por relevancia política.',
          fuente: 'https://www.infobae.com/peru/2025/07/24/virgilio-acuna-anuncia-alianza-con-pedro-castillo-y-juntos-por-el-peru-con-miras-a-elecciones-2026/'
        }
      ]
    },
    {
      id: 'cpp-mq',
      type: 'candidate',
      nombre: 'Morgan Quero',
      partido: 'Ciudadanos por el Perú (CPP)',
      info: 'Exministro de Educación (2024–2025). Anunciado como precandidato presidencial 2026 por CPP.',
      fotoUrl: 'https://i.postimg.cc/JhzPtWTC/morgan.jpg',
      logoUrl: 'https://i.postimg.cc/7LZmbyKj/CPP.jpg',
      videoUrl: 'https://www.youtube.com/embed/0s-0J5PaFOM',
      websOficiales: [
        // partido/programa (histórico)
        'https://declara.jne.gob.pe/ASSETS/PLANGOBIERNO/FILEPLANGOBIERNO/16482.pdf'
      ],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=0s-0J5PaFOM', // Willax – entrevista
        'https://www.facebook.com/LatinaNoticias.pe/videos/la-presidenta-no-miente-quero-responde-por-selfies-de-dina-boluarte-y-los-colegi/1124040706140097/'
      ],
      orientacion: [
        'Centro reformista; énfasis en orden institucional.',
        'Agenda educativa (salarios docentes y gestión).',
        'Discurso de control del crimen desde el Ejecutivo actual.'
      ],
      posiciones: {
        seguridad: 'Respaldó la narrativa de “control” de la inseguridad desde el Ejecutivo; sin plan sectorial propio 2024–2025 publicado.',
        educacion: 'Impulsó que el Presupuesto 2025 incluya aumentos salariales para docentes (anuncio público).',
        mineria: 'Sin propuesta sectorial propia con metas verificables publicada.',
        produccion: 'Sin lineamientos productivos propios con cronograma y presupuesto.',
        economia: 'Sin marco macro propio 2024–2025; mensajes sobre eficiencia del gasto en su sector.',
        social: 'Sin plan social propio nacional con KPIs; mensajes de cohesión e institucionalidad.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Como ministro, sostuvo que la crisis de inseguridad estaba “más controlada”, aludiendo a avances sectoriales del gobierno y a reducción de extorsiones a colegios; no presentó un plan de seguridad propio con metas y presupuesto 2024–2025. Hay críticas por minimizar responsabilidades del Ejecutivo frente a la ola delictiva.',
          fuentes: [
            'https://www.infobae.com/peru/2025/07/03/morgan-quero-asegura-que-crisis-de-inseguridad-esta-mucho-mas-controlada-pero-sinadef-reporta-mas-de-mil-homicidios-en-lo-que-va-del-ano/',
            'https://larepublica.pe/politica/2025/05/08/ministro-morgan-quero-se-lava-las-manos-y-responsabiliza-a-la-poblacion-por-su-seguridad-no-salgan-sin-tomar-previsiones-hnews-116200'
          ]
        },
        educacion: {
          resumen: 'Anunció que la propuesta de Presupuesto Público 2025 incluía aumento salarial a docentes y reafirmó continuar la “política educativa salarial” a favor del magisterio. Ordenó además una auditoría interna del Despacho Ministerial para transparentar recursos ante cuestionamientos.',
          fuentes: [
            'https://rpp.pe/politica/gobierno/morgan-quero-anuncio-que-propuesta-de-presupuesto-publico-2025-incluyo-aumento-salarial-a-docentes-noticia-1583040',
            'https://www.infobae.com/peru/2025/09/24/ministro-de-educacion-ordena-auditoria-en-el-minedu-para-transparentar-uso-de-recursos-tras-cuestionamientos/'
          ]
        },
        mineria: {
          resumen: 'No se encontró documento programático propio con metas/indicadores sobre minería publicado en 2024–2025.',
          fuentes: []
        },
        produccion: {
          resumen: 'No hay lineamientos productivos sectoriales propios con metas y cronograma verificados en 2024–2025.',
          fuentes: []
        },
        economia: {
          resumen: 'Sin plan macroeconómico propio 2024–2025. Mensajes dispersos sobre eficiencia del gasto desde su gestión en Educación.',
          fuentes: []
        },
        social: {
          resumen: 'No se halló plan social nacional propio con KPIs y presupuesto. Discurso general de institucionalidad y servicios públicos.',
          fuentes: []
        }
      },
      formacion: [
        // Añadir títulos solo con enlace institucional si lo requieres.
      ],
      cargosPublicos: [
        'Ministro de Educación (2024–2025)'
      ],
      partidosAnteriores: [
        // sin registro público confirmado distinto a CPP en las fuentes citadas
      ],
      relaciones: [
        {
          con: 'CPP', detalle: 'Anunciado como precandidato presidencial 2026; el partido negó vínculos con Nicanor Boluarte.',
          fuente: 'https://www.infobae.com/peru/2025/10/31/exministro-morgan-quero-es-precandidato-presidencial-del-partido-ciudadanos-por-el-peru-para-las-elecciones-2026/'
        },
        {
          con: 'Gobierno (2024–2025)', detalle: 'Negó injerencia de Nicanor Boluarte en decisiones de Estado (pronunciamiento institucional).',
          fuente: 'https://www.gob.pe/institucion/minedu/noticias/1110110-ministro-de-educacion-morgan-quero-rechazo-que-nicanor-boluarte-tenga-injerencia-en-decisiones-de-estado'
        }
      ],
      contras: [
        {
          desc: 'Frase sobre DD. HH. (“los derechos humanos son para las personas, no para las ratas”) generó condena pública de la Defensoría y organismos de DD. HH. (dic. 2024).',
          fuente: 'https://elpais.com/america/2024-12-12/el-ministro-de-educacion-de-peru-sobre-los-fallecidos-en-las-protestas-los-derechos-humanos-son-para-las-personas-no-para-las-ratas.html'
        },
        {
          desc: 'Denuncia constitucional presentada por Fiscalía por presunta discriminación (mayo 2025), derivada de declaraciones públicas en 2024; apertura de carpetas fiscales.',
          fuente: 'https://derechoshumanos.pe/fiscalia-presenta-denuncia-constitucional-contra-el-ministro-de-educacion-morgan-quero/'
        },
        {
          desc: 'Cuestionamientos por gastos del Despacho Ministerial (caja chica > S/9,000) revelados por prensa; el Minedu anunció auditoría del OCI a pedido del propio ministro.',
          fuente: 'https://anp.pe/minedu-asegura-que-morgan-quero-restringio-gastos-innecesarios-pese-a-que-actual-gestion-gasto-mas-de-s-9-000/; https://www.infobae.com/peru/2025/09/24/ministro-de-educacion-ordena-auditoria-en-el-minedu-para-transparentar-uso-de-recursos-tras-cuestionamientos/'
        }
      ]
    },
    {
      id: 'pm-cj',
      type: 'candidate',
      nombre: 'Carlos Jaico',
      partido: 'Perú Moderno',
      info: 'Abogado y exsecretario general de la Presidencia (nov. 2021–feb. 2022). Precandidato presidencial 2026 por Perú Moderno.',
      fotoUrl: 'https://i.postimg.cc/xd1tqS6p/Carlos-jaico.jpg',
      logoUrl: 'https://i.postimg.cc/xdpgzFZ7/perumoderno.jpg',
      videoUrl: 'https://www.youtube.com/embed/E7PNp3FlZfw',
      websOficiales: [
        'https://perumoderno.com/',
        'https://perumoderno.com/noticias.html',
        'https://perumoderno.com/pdf/rs-012-2025-ten-pppm-web.pdf'
      ],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=VNcwzymPfyM'
      ],
      orientacion: [
        'Centro reformista; énfasis en institucionalidad y anticorrupción.',
        'Primarias internas 2025 bajo reglamento del TEN de Perú Moderno.',
        'Narrativa crítica a “gabinetes en la sombra” y desorden estatal.'
      ],
      posiciones: {
        seguridad: 'Mensaje de orden e institucionalidad; sin plan sectorial 2024–2025 con metas verificables publicado.',
        educacion: 'Sin documento programático propio reciente con KPIs y presupuesto.',
        mineria: 'Sin propuesta sectorial propia con indicadores y cronograma público.',
        produccion: 'Sin lineamientos productivos nacionales formalizados 2024–2025.',
        economia: 'Sin marco macro propio 2024–2025; énfasis en eficiencia y control del gasto.',
        social: 'Sin plan social nacional con KPIs publicado; foco discursivo en servicios e integridad.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Plantea restablecer el “principio de autoridad” y ordenar la gestión pública para enfrentar crimen y economías ilegales, priorizando coordinación interinstitucional y controles internos. Su discurso se apoya en la crítica a estructuras informales de poder dentro del Estado y en la necesidad de reglas claras y trazabilidad de decisiones. No se encontró en 2024–2025 un plan sectorial propio firmado por el candidato con metas, presupuesto y cronograma; el soporte público proviene de entrevistas y vocería partidaria.',
          fuentes: [
            'https://perumoderno.com/',
            'https://peru21.pe/politica/carlos-jaico-sobre-su-paso-por-palacio-un-sistema-asi-solo-puede-darle-rienda-suelta-a-la-corrupcion-rmmn-noticia/'
          ]
        },
        educacion: {
          resumen: 'No hay documento programático propio 2024–2025 con metas, KPIs y presupuesto atribuible a su precandidatura. En su narrativa general, vincula calidad de servicios con meritocracia y gestión por resultados, pero sin una matriz educativa publicada por el partido o el candidato.',
          fuentes: [
            'https://perumoderno.com/'
          ]
        },
        mineria: {
          resumen: 'No se identificó propuesta minera detallada (metas, cronograma, presupuesto y enfoque socioambiental) publicada por el candidato o el partido en 2024–2025. Se deja constancia de ausencia de fuente confiable específica.',
          fuentes: []
        },
        produccion: {
          resumen: 'Sin lineamientos productivos nacionales formalizados en 2024–2025. El énfasis público de campaña se centra en orden institucional y lucha contra redes informales, más que en políticas sectoriales con indicadores.',
          fuentes: [
            'https://perumoderno.com/noticias.html'
          ]
        },
        economia: {
          resumen: 'No hay marco macro 2024–2025 firmado por el candidato con metas de crecimiento, déficit e inversión. Su línea general privilegia integridad, eficiencia del gasto y previsibilidad regulatoria para atraer inversión, sin un plan económico público con KPIs.',
          fuentes: [
            'https://perumoderno.com/'
          ]
        },
        social: {
          resumen: 'No se halló un plan social nacional con KPIs y presupuesto. El discurso remarca servicios públicos de calidad y transparencia en la asignación de recursos; falta un documento sectorial propio actualizado para 2024–2025.',
          fuentes: [
            'https://perumoderno.com/'
          ]
        }
      },
      formacion: [
        // Añadir grados con enlace institucional si lo requieres.
      ],
      cargosPublicos: [
        'Secretario General del Despacho Presidencial (11/2021–02/2022)'
      ],
      partidosAnteriores: [
        // No consigno variaciones sin enlace institucional directo
      ],
      relaciones: [
        {
          con: 'Perú Moderno', detalle: 'Reglamento de Elecciones Primarias 2025 (TEN) publicado por el partido.',
          fuente: 'https://perumoderno.com/pdf/rs-012-2025-ten-pppm-web.pdf'
        },
        {
          con: 'Precandidatura 2026', detalle: 'Inscribió su fórmula presidencial en Perú Moderno (oct. 2025).',
          fuente: 'https://elcomercio.pe/politica/carlos-jaico-ex-secretario-general-de-palacio-inscribe-su-precandidatura-presidencial-en-peru-moderno-ultimas-noticia/'
        }
      ],
      contras: [
        {
          desc: 'Investigación preliminar del Ministerio Público (ene. 2022) por presunto uso irregular de un vehículo oficial durante licencia; diligencia fiscal en Palacio.',
          fuente: 'https://gestion.pe/peru/politica/fiscalia-realiza-diligencia-en-palacio-de-gobierno-por-investigacion-contra-carlos-jaico-pedro-castillo-nndc-noticia/; https://larepublica.pe/politica/2022/01/28/pedro-castillo-fiscalia-llego-palacio-de-gobierno-por-investigacion-contra-secretario-presidencial-carlos-jaico'
        },
        {
          desc: 'Renuncia oficializada por RS 057-2022-PCM (2/feb/2022) en medio de denuncias sobre desorden y “gabinete en la sombra” alrededor de Palacio.',
          fuente: 'https://andina.pe/agencia/noticia-oficializan-renuncia-carlos-jaico-a-secretaria-general-del-despacho-presidencial-879513.aspx; https://lpderecho.pe/carlos-jaico-secretario-despacho-presidencial-reunion-directivos-repsol/'
        },
        {
          desc: 'Declaraciones públicas sobre “gabinete alterno/en la sombra” y riesgos de corrupción en la gestión 2021–2022; entrevistas y cobertura periodística.',
          fuente: 'https://peru21.pe/politica/carlos-jaico-sobre-su-paso-por-palacio-un-sistema-asi-solo-puede-darle-rienda-suelta-a-la-corrupcion-rmmn-noticia/; https://www.expreso.com.pe/politica/carlos-jaico-denuncia-gabinete-en-las-sombras/'
        }
      ]
    },
    {
      id: 'pp-jlg',
      type: 'candidate',
      nombre: 'José Luna Gálvez',
      partido: 'Podemos Perú',
      info: 'Congresista y fundador de Podemos Perú; empresario educativo (Telesup). Precandidato presidencial 2026.',
      fotoUrl: 'https://i.postimg.cc/bvw3djm7/joseluna.jpg',
      logoUrl: 'https://i.postimg.cc/d0NnySXM/perupodemos.png',
      videoUrl: 'https://www.youtube.com/embed/11hOPuYZZFU',
      websOficiales: [
        'https://podemosperu.org.pe/'
      ],
      entrevistasYouTube: [
        'https://www.youtube.com/results?search_query=Jos%C3%A9+Luna+G%C3%A1lvez+RPP+entrevista',
        'https://www.youtube.com/results?search_query=Jos%C3%A9+Luna+G%C3%A1lvez+Podemos+Per%C3%BA'
      ],
      orientacion: [
        'Enfoque pro-empresa y empleo; discurso anticorrupción.',
        'Crítica a AFP y defensa de “leyes del pueblo” (narrativa partidaria).',
        'Orden e institucionalidad; sin plan sectorial publicado 2024–2025.'
      ],
      posiciones: {
        seguridad: 'Sin plan sectorial propio 2024–2025 con metas verificables.',
        educacion: 'Sin documento nacional propio reciente; antecedente empresarial en educación privada (Telesup).',
        mineria: 'Sin propuesta sectorial propia publicada con indicadores.',
        produccion: 'Mensajes sobre empleo y MYPE; sin cronograma ni presupuesto verificables.',
        economia: 'Énfasis en formalización/anticorrupción; sin marco macro propio 2024–2025.',
        social: 'Sin plan social nacional con KPIs publicado.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'No se halló un plan de seguridad firmado por el candidato (2024–2025) con metas, presupuesto y cronograma. El discurso público se centra en “orden e institucionalidad”, sin matriz técnica publicada.',
          fuentes: []
        },
        educacion: {
          resumen: 'No existe un plan educativo nacional propio 2024–2025 con KPIs. El antecedente relevante es su rol empresarial en Telesup, universidad a la que SUNEDU denegó el licenciamiento en 2019 y ordenó cese progresivo.',
          fuentes: [
            'https://gestion.pe/peru/universidad-telesup-jose-luna-debera-cerrar-licenciamiento-denegado-268585-noticia/',
            'https://larepublica.pe/sociedad/2021/11/22/telesup-por-que-no-recibio-licenciamiento-de-sunedu-y-que-ha-hecho-para-evitar-su-cierre'
          ]
        },
        mineria: {
          resumen: 'No se encontró propuesta minera propia con metas e indicadores publicada en 2024–2025.',
          fuentes: []
        },
        produccion: {
          resumen: 'Mensajes sobre empleo/MYPE en plataformas partidarias; no hay plan productivo con indicadores, cronograma y presupuesto verificables.',
          fuentes: [
            'https://podemosperu.org.pe/'
          ]
        },
        economia: {
          resumen: 'Sin marco macroeconómico 2024–2025 firmado por el candidato. El partido difunde piezas sobre “leyes del pueblo” y cuestionamientos a las AFP, sin documento macro integral.',
          fuentes: [
            'https://podemosperu.org.pe/'
          ]
        },
        social: {
          resumen: 'No se halló plan social nacional con KPIs y presupuesto. La comunicación oficial prioriza asistencia social y crítica a privilegios.',
          fuentes: [
            'https://podemosperu.org.pe/'
          ]
        }
      },
      formacion: [
        // Incluir grados solo con enlace institucional si lo requieres.
      ],
      cargosPublicos: [
        'Congresista de la República (periodo actual)'
      ],
      partidosAnteriores: [
        'Podemos Perú (fundador/líder)'
      ],
      relaciones: [
        {
          con: 'Precandidatura 2026', detalle: 'Confirma precandidatura y registra su fórmula interna (Cecilia García y Raúl Noblecilla).',
          fuente: 'https://elcomercio.pe/politica/jose-luna-galvez-es-el-precandidato-de-podemos-peru-a-la-presidencia-de-la-republica-lo-acompanan-cecilia-garcia-y-raul-noblecilla-ultimas-noticia/'
        },
        {
          con: 'Precandidatura 2026', detalle: 'Anuncio y cobertura en prensa nacional.',
          fuente: 'https://www.infobae.com/peru/2025/11/01/jose-luna-galvez-confirma-su-precandidatura-presidencial-abogado-de-betssy-chavez-integra-su-plancha/',
        },
        {
          con: 'Partido', detalle: 'Portal oficial de Podemos Perú.',
          fuente: 'https://podemosperu.org.pe/'
        }
      ],
      contras: [
        {
          desc: 'Proceso penal “Los Gángsters de la Política”: el MP formalizó acusación en 2025 y pidió >22 años de prisión por presunta organización criminal y cohecho.',
          fuente: 'https://www.infobae.com/peru/2025/08/07/jose-luna-acusado-de-encabezar-organizacion-criminal-fiscalia-formaliza-pedido-de-mas-de-22-anos-contra-el-lider-de-podemos-peru/'
        },
        {
          desc: 'Medidas cautelares previas (2020–2021): el PJ desestimó prisión preventiva pero impuso detención domiciliaria por 36 meses e impedimento de salida del país.',
          fuente: 'https://convoca.pe/agenda-propia/juez-ordena-detencion-domiciliaria-para-jose-luna-galvez-y-desestima-36-meses-de; https://www.pj.gob.pe/wps/wcm/connect/8565f08043886b8bb418b76745cba5c4/26-7%2Bresoluci%C3%B3n%2BLuna%2Bpara%2Bpublicar.pdf?MOD=AJPERES'
        },
        {
          desc: 'Expediente judicial del caso (carpeta 00011-2020): actuaciones y resoluciones disponibles en LP Derecho y portal del PJ.',
          fuente: 'https://img.lpderecho.pe/wp-content/uploads/2021/01/Exp.-00011-2020-8-5002-JR-PE-03-Jose-Luna-Galvez-1.pdf'
        },
        {
          desc: 'Telesup: SUNEDU denegó el licenciamiento (2019) y ordenó cese progresivo; múltiples controversias públicas desde entonces.',
          fuente: 'https://gestion.pe/peru/universidad-telesup-jose-luna-debera-cerrar-licenciamiento-denegado-268585-noticia/'
        }
      ]
    },
    {
      id: 'prog-pj',
      type: 'candidate',
      nombre: 'Paul Jaimes',
      partido: 'Progresemos',
      info: 'Abogado; fundador y presidente de Progresemos (inscrito en el ROP-JNE en 2024). Precandidato presidencial 2026.',
      fotoUrl: 'https://i.postimg.cc/Pq52Nk6h/pauljaimes.jpg',
      logoUrl: 'https://i.postimg.cc/7LtX2QRp/progresemos.jpg',
      videoUrl: 'https://www.youtube.com/embed/lfROeg4wYsU',
      websOficiales: [
        'https://progresemos.pe/',
        'https://progresemos.pe/wp-content/uploads/2024/05/ACTA-DE-FUNDACION.pdf',
        'https://progresemos.pe/wp-content/uploads/2024/05/Sintesis-PROGRESEMOS.pdf'
      ],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=ASWIhBg98n0',
        'https://www.youtube.com/watch?v=tPOAflGTy0Y',
        'https://www.facebook.com/canalnoficial/videos/en-nportada-el-presidente-del-partido-progresemos-paul-jaimes-indic%C3%B3-que-una-de-/3996989050588565/'
      ],
      orientacion: [
        'Ecologista/animalista; protección ambiental y de animales.',
        'Orden y seguridad con línea punitiva (pena de muerte).',
        'Descentralización de servicios y participación ciudadana.'
      ],
      posiciones: {
        seguridad: 'Propone pena de muerte y “mano firme”; coordinación interinstitucional.',
        educacion: 'Sin plan sectorial propio 2024–2025 con metas y presupuesto publicado.',
        mineria: 'Sin propuesta sectorial propia con indicadores verificables publicada.',
        produccion: 'Sin lineamientos productivos formales con cronograma y KPIs.',
        economia: 'Enfoque de eficiencia del gasto; sin marco macro propio 2024–2025.',
        social: 'Agenda animalista/ambiental; sin plan social nacional con KPIs.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Sostiene “mano firme” y propone la pena de muerte para crímenes graves, incluso planteando la salida del Pacto de San José; además, ha hablado de crear un penal en altura y de reforzar coordinación PNP–FF.AA. y controles tecnológicos. Sus posiciones se exponen en entrevistas televisivas y radiales. No se halló, a 2024–2025, un plan sectorial firmado con metas, presupuesto y cronograma.',
          fuentes: [
            'https://www.stereovilla.pe/detalles/1559',
            'https://www.expreso.com.pe/politica/partido-progresemos-a-favor-de-pena-capital-ya-no-hay-lugar-para-tibios-senala-fundador-paul-jaimes-blanco-congreso-miguel-llanos-corte-idh-noticia/1158435/'
          ]
        },
        educacion: {
          resumen: 'No se identificó un documento programático propio 2024–2025 con metas, cronograma y presupuesto atribuible al candidato o al partido. En su discurso general vincula calidad de servicios y meritocracia, pero sin matriz educativa publicada.',
          fuentes: []
        },
        mineria: {
          resumen: 'No hay lineamientos mineros detallados (objetivos, indicadores, gestión de conflictos y trazabilidad socioambiental) publicados por el candidato en 2024–2025.',
          fuentes: []
        },
        produccion: {
          resumen: 'No se halló un plan productivo nacional con KPIs, cronograma e inversión. El foco comunicacional del partido prioriza agenda ambiental/animalista y orden institucional.',
          fuentes: [
            'https://progresemos.pe/'
          ]
        },
        economia: {
          resumen: 'Sin marco macroeconómico propio actualizado 2024–2025 con metas de crecimiento, déficit o inversión; el énfasis público está en eficiencia del gasto y control del Estado.',
          fuentes: []
        },
        social: {
          resumen: 'Agenda animalista y ambiental: promover bienestar animal e incorporar la protección de la naturaleza en la política pública. A falta de un plan social con KPIs y presupuesto, se deja constancia de la ausencia de documento sectorial.',
          fuentes: [
            'https://rpp.pe/politica/elecciones/somos-el-primer-partido-ecologista-animalista-de-latinoamerica-afirma-paul-jaimes-precandidato-presidencial-de-progresemos-noticia-1658223'
          ]
        }
      },
      formacion: [
        // Añadir grados sólo con enlace institucional si lo requieres.
      ],
      cargosPublicos: [
        'Secretario General del MIDAGRI (2022) — designación y cese en el marco del gobierno de Pedro Castillo'
      ],
      partidosAnteriores: [
        // Sin cambios consignados con enlace institucional distinto a Progresemos.
      ],
      relaciones: [
        {
          con: 'Progresemos en ROP/JNE', detalle: 'Inscripción partidaria para EG-2026.',
          fuente: 'https://caretas.pe/politica/progresemos-y-nuevo-peru-quedan-inscritos-en-el-rop-del-jurado-nacional-de-elecciones-con-miras-a-las-eg-2026/'
        },
        {
          con: 'Encuestas 2025', detalle: 'Figura como opción presidencial en medición nacional.',
          fuente: 'https://www.ipsos.com/sites/default/files/ct/news/documents/2025-07/Ficha%20t%C3%A9cnica%20y%20publicaci%C3%B3n%20de%20resultados%2027Jul25.pdf'
        },
        {
          con: 'Ruptura con Hernando de Soto', detalle: 'Desencuentros y renuncia del economista a Progresemos (2025).',
          fuente: 'https://peru21.pe/politica/progresemos-desencuentro-por-el-logo-del-partido/',
        }
      ],
      contras: [
        {
          desc: 'Contraloría/OCI advirtió (2022) que, como Secretario General del MIDAGRI, no cumplía requisitos mínimos del cargo (experiencia específica).',
          fuente: 'https://larepublica.pe/politica/2022/04/18/oscar-zea-designacion-y-actos-del-secretario-general-del-midagri-paul-jaimes-blanco-serian-ilegales-advierte-contraloria/'
        },
        {
          desc: 'Denuncias policiales previas reportadas por prensa (2022): agresión familiar y amenaza con arma de fuego (negadas por él). Estado: denuncias; sin sentencia firme en la nota.',
          fuente: 'https://diariocorreo.pe/politica/midagri-funcionario-tiene-dos-denuncias-policiales-noticia/'
        },
        {
          desc: 'MIDAGRI declaró improcedente el beneficio de defensa legal solicitado por Jaimes (junio 2023) en su condición de ex Secretario General.',
          fuente: 'https://www.gob.pe/institucion/midagri/normas-legales/4328896-0098-2023-midagri-sg'
        },
        {
          desc: 'Conflicto político interno 2025: acusaciones cruzadas con Hernando de Soto por incumplimiento de un acuerdo y desacuerdos sobre logo/alianzas. No es proceso penal; se consigna por relevancia pública.',
          fuente: 'https://peru21.pe/politica/progresemos-desencuentro-por-el-logo-del-partido/'
        }
      ]
    },
    {
      id: 'prin-wc',
      type: 'candidate',
      nombre: 'Walter Chirinos',
      partido: 'PRIN (Partido Regionalista de Integración Nacional)',
      info: 'Fundador y presidente del PRIN. Precandidato presidencial para EG-2026.',
      fotoUrl: 'https://i.postimg.cc/YSD8WyVt/walterchirinos.jpg',
      logoUrl: 'https://i.postimg.cc/CKrJq629/PRIN.png',
      videoUrl: 'https://www.youtube.com/embed/-q8kqAw2X2E',
      websOficiales: [
        'https://prin.org.pe/',
        'https://prin.org.pe/acerca-de',
        'https://prin.org.pe/noticias/ayacucho-el-prin-y-la-asociacion-de-movimientos-regionales-firman-coalicion-electoral-para-2026-1207',
        'https://prin.org.pe/author/wachipu'
      ],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=ewP7Y7dC5u8',
        'https://www.youtube.com/watch?v=-q8kqAw2X2E'
      ],
      orientacion: [
        'Regionalista: “El Perú, una sola región” (integración y descentralización).',
        'Orden y seguridad (“Por un Perú sin miedo”).',
        'Énfasis en integridad y control del gasto público.'
      ],
      posiciones: {
        seguridad: '“Por un Perú sin miedo”: mano firme contra crimen y coordinación PNP–FF.AA.',
        educacion: 'Sin plan sectorial propio 2024–2025 con metas y presupuesto publicado.',
        mineria: 'Sin propuesta sectorial propia con indicadores verificables publicada.',
        produccion: 'Impulso productivo regional; sin cronograma/ KPIs públicos.',
        economia: 'Eficiencia y control del gasto; sin marco macro propio 2024–2025.',
        social: 'Descentralización de servicios; sin plan social nacional con KPIs.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Eje “Por un Perú sin miedo”: operaciones integradas, principio de autoridad y medidas punitivas contra crimen organizado; propone reforzar coordinación PNP–FF.AA. y controles tecnológicos. Sustento público en notas/entrevistas; no hay plan sectorial firmado con metas, presupuesto y cronograma (2024–2025).',
          fuentes: [
            'https://eleccionesperu.pe/por-un-peru-sin-miedo-walter-chirinos-precandidato-presidencial-presenta-su-propuesta-mas-firme-contra-la-delincuencia/',
            'https://www.youtube.com/watch?v=-q8kqAw2X2E'
          ]
        },
        educacion: {
          resumen: 'No se identificó documento programático propio 2024–2025 con metas, KPIs y presupuesto. El ideario partidario enfatiza valores, ética pública e inclusión desde la descentralización.',
          fuentes: [
            'https://prin.org.pe/acerca-de'
          ]
        },
        mineria: {
          resumen: 'No hay lineamientos mineros propios publicados con objetivos, indicadores y enfoque socioambiental (2024–2025). Se deja constancia.',
          fuentes: []
        },
        produccion: {
          resumen: 'Narrativa regionalista: impulsar cadenas de valor e infraestructura desde regiones y movimientos regionales (coalición electoral 2026). No se halló plan productivo con KPIs y cronograma.',
          fuentes: [
            'https://prin.org.pe/noticias/ayacucho-el-prin-y-la-asociacion-de-movimientos-regionales-firman-coalicion-electoral-para-2026-1207',
            'https://prin.org.pe/'
          ]
        },
        economia: {
          resumen: 'Mensajes de integridad, control del gasto y eficiencia en adquisiciones públicas; sin marco macroeconómico 2024–2025 con metas de crecimiento, déficit e inversión.',
          fuentes: [
            'https://prin.org.pe/'
          ]
        },
        social: {
          resumen: 'Descentralización y presencia estatal en territorio para mejorar servicios; sin plan social nacional con KPIs y presupuesto publicado (2024–2025).',
          fuentes: [
            'https://prin.org.pe/acerca-de'
          ]
        }
      },
      formacion: [
        // Añadir grados solo con enlace institucional si lo requieres.
      ],
      cargosPublicos: [
        // Sin cargos públicos confirmados en las fuentes citadas.
      ],
      partidosAnteriores: [
        'PRIN (fundador/líder)'
      ],
      relaciones: [
        {
          con: 'Primarias 2025', detalle: 'CENA-PRIN publica listas hábiles para primarias del 7/12/2025 (Res. N° 062-2025-CENA-PRIN).',
          fuente: 'https://prin.org.pe/'
        },
        {
          con: 'Coalición 2026', detalle: 'Acuerdo con la Asociación de Movimientos Regionales rumbo a EG-2026.',
          fuente: 'https://prin.org.pe/noticias/ayacucho-el-prin-y-la-asociacion-de-movimientos-regionales-firman-coalicion-electoral-para-2026-1207'
        }
      ],
      contras: [
        {
          desc: 'Sanción ONPE (2022): Resolución Jefatural RJ-0561-2022-JN sanciona a Walter Gilmer Chirinos Purizaga (excandidato al Congreso) por materia electoral.',
          fuente: 'https://www.gob.pe/institucion/onpe/normas-legales/2741774-rj-0561-2022-jn'
        },
        {
          desc: 'Archivo del procedimiento (2023): ONPE archiva el PAS contra Chirinos (RJ-200-2023-JN).',
          fuente: 'https://www.gob.pe/institucion/onpe/normas-legales/4022387-rj-200-2023-jn'
        },
        {
          desc: 'Caso “firmas falsas” — posición pública: negó que el PRIN haya presentado firmas falsas y pidió mayor fiscalización biométrica.',
          fuente: 'https://soltvperu.com/walter-chirinos-niega-firmas-falsas-prin/',
        },
        {
          desc: 'Ideario/ética: el partido difunde principios y anticorrupción; no es proceso, se consigna por relevancia programática.',
          fuente: 'https://prin.org.pe/acerca-de'
        }
      ]
    },
    {
      id: 'un-rc',
      type: 'candidate',
      nombre: 'Roberto Chiabra',
      partido: 'Alianza Unidad Nacional',
      info: 'General EP (r); exministro de Defensa (2004–2005); congresista (2021–2026). Precandidato presidencial de la alianza Unidad Nacional (inscrita en el JNE, 2025).',
      fotoUrl: 'https://i.postimg.cc/QtzNbJVs/robertochiabra.jpg',
      logoUrl: 'https://i.postimg.cc/MTLZDmXX/unidad.jpg',
      videoUrl: 'https://www.youtube.com/embed/lzbBZ04GS-0', // Caretas, 26/01/2025
      websOficiales: [
        'https://portal.jne.gob.pe/portal/Pagina/Nota/18655', // inscripción de alianzas (incluye Unidad Nacional)
        'https://www.elperuano.pe/noticia/275921-unidad-nacional-se-constituye-en-la-primera-alianza-electoral-registrada-para-elecciones-2026'
      ],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=d55-FOpbDOo', // Caretas
        'https://www.youtube.com/watch?v=4o7x-z_UoTg', // Estrategia contra inseguridad (entrevista)
        'https://www.youtube.com/watch?v=DB5lr6RgD08'  // medidas excepcionales por inseguridad (declaraciones)
      ],
      orientacion: [
        'Orden y seguridad pública; respaldo a PNP y FF.AA.',
        'Institucionalidad democrática y disciplina fiscal.',
        'Economía de mercado con énfasis en competitividad e inversión.'
      ],
      posiciones: {
        seguridad: 'Plan en tres fases (prevención–intervención–resocialización); medidas excepcionales ante crisis; coordinación interinstitucional.',
        educacion: 'Sin plan sectorial propio con metas y presupuesto publicadas en 2024–2025.',
        mineria: 'Enfoque de seguridad sobre economías ilegales (minería ilegal) dentro de la lucha contra el crimen; sin plan minero propio detallado.',
        produccion: 'Sin lineamientos productivos específicos publicados en 2024–2025.',
        economia: 'Crítica al Presupuesto 2025 y llamado a disciplina del gasto; énfasis anticorrupción.',
        social: 'Institucionalidad, servicios públicos y seguridad ciudadana como eje; sin matriz social propia con KPIs publicada.'
      },
      posicionesDetalle: {
        seguridad: {
          resumen: 'Ha expuesto un esquema en tres fases (prevención, intervención y resocialización) y la necesidad de medidas excepcionales por la magnitud de la inseguridad; se ha pronunciado también sobre el debate de la pena de muerte en casos de violación de menores.',
          fuentes: [
            'https://www.youtube.com/watch?v=4o7x-z_UoTg',
            'https://www.youtube.com/watch?v=DB5lr6RgD08',
            'https://www.facebook.com/radionacionaldelperu/posts/1015661830603508/'
          ]
        },
        educacion: {
          resumen: 'No se identificó un documento programático propio del candidato, con metas, cronograma y presupuesto, publicado en 2024–2025.',
          fuentes: []
        },
        mineria: {
          resumen: 'Planteamientos ligados al control del crimen organizado y de la minería ilegal desde el enfoque de seguridad; no hay plan minero sectorial propio con indicadores.',
          fuentes: [
            'https://www.youtube.com/watch?v=4o7x-z_UoTg'
          ]
        },
        produccion: {
          resumen: 'No se hallaron lineamientos productivos específicos del candidato en fuente primaria/seria con detalle técnico en 2024–2025.',
          fuentes: []
        },
        economia: {
          resumen: 'Votó en contra del Presupuesto 2025 alegando razones de ética y prudencia fiscal; plantea disciplina del gasto y eficiencia.',
          fuentes: [
            'https://www.facebook.com/JLVNOTICIAS28/videos/general-roberto-chiabra-mi-voto-en-contra-del-presupuesto-nacional-del-2025-fue-/1297859638701697/'
          ]
        },
        social: {
          resumen: 'En entrevistas enfatiza institucionalidad democrática, lucha contra la corrupción y seguridad como base de cohesión social; sin plan social con KPIs publicado.',
          fuentes: [
            'https://www.youtube.com/watch?v=d55-FOpbDOo'
          ]
        }
      },
      formacion: [
        // Añadir grados solo con enlace institucional directo si se requiere.
      ],
      cargosPublicos: [
        'Ministro de Defensa (2004–2005)',
        'Congresista de la República (2021–2026)'
      ],
      partidosAnteriores: [
        // Público como congresista 2021–2026; hoy lidera la alianza Unidad Nacional.
      ],
      relaciones: [
        {
          con: 'Unidad Nacional', detalle: 'Precandidato presidencial; la alianza quedó inscrita para EG-2026.',
          fuente: 'https://portal.jne.gob.pe/portal/Pagina/Nota/18655'
        }
      ],
      contras: [
        // A la fecha, no se registran procesos penales con sentencia firme contra el candidato en las fuentes citadas.
      ]
    },

    {
      id: 'fdc', type: 'candidate', nombre: 'Francisco Diez Canseco', partido: 'Perú Acción',
      info: 'Abogado, periodista y político veterano.',
      fotoUrl: 'https://i.postimg.cc/g0PDtjFb/francisco-diez-canseco.jpg',
      logoUrl: 'https://i.postimg.cc/0NHMkCjf/peruaccion.jpg',
      videoUrl: 'https://www.youtube.com/embed/C20kuCiL9cw',
      websOficiales: [],
      entrevistasYouTube: [
        'https://www.youtube.com/watch?v=C20kuCiL9cw',
        'https://www.youtube.com/results?search_query=Francisco+Diez+Canseco+entrevista',
        'https://www.youtube.com/results?search_query=Per%C3%BA+Acci%C3%B3n+entrevista'
      ],
      orientacion: ['Conservador liberal; libre mercado.', 'Propuestas: estabilidad macro y apertura.', 'Institucionalidad democrática.'],
      posiciones: {
        seguridad: 'Endurecer penas y reforzar PNP.',
        educacion: 'Calidad educativa y carrera docente.',
        mineria: 'Estabilidad jurídica e inversión.',
        produccion: 'Apertura comercial.',
        economia: 'Promercado.',
        social: 'Conservador.'
      },
      formacion: ['Derecho (PUCP)'],
      cargosPublicos: ['Congresista Constituyente (1992–1995)', 'Diputado (1985–1990)'],
      partidosAnteriores: ['Acción Popular', 'UPP'],
      relaciones: [],
      contras: [{ desc: 'Sin investigaciones públicas relevantes reportadas.', fuente: 'https://es.wikipedia.org/wiki/Francisco_Diez-Canseco_T%C3%A1vara' }]

    }

  ]
};
// === FIN DE DATASET ===
/* ======= LÓGICA DE UI ======= */
document.addEventListener('DOMContentLoaded', () => {
  const candidatos = Array.isArray(DATASET.items) ? DATASET.items : [];
  const placeholderImg = 'https://placehold.co/128x128/e0e0e0/666666?text=Foto&font=inter';
  const logoPlaceholder = 'https://placehold.co/128x128/34495e/FFFFFF?text=Logo&font=inter';

  // === Partidos con representación congresal (para mostrar sello en portada) ===
  const BADGE_URL = 'https://i.postimg.cc/B6fL9rZn/Imagen2-removebg-preview.png';
  const PARTIDOS_CONGRESO = new Set([
    'fuerza popular',
    'alianza para el progreso',
    'renovacion popular',
    'avanza pais',
    'accion popular',
    'peru libre',
    'somos peru',
    'podemos peru',
    'juntos por el peru',
    'cambio democratico-juntos por el peru' // cobertura por si aparece con el nombre de bancada
  ]);

  function limpiar(str = '') {
    return str
      .toLowerCase()
      .normalize('NFD').replace(/\p{Diacritic}/gu, '') // quita tildes
      .replace(/–|—/g, '-')                            // guiones largos
      .replace(/\s+/g, ' ')                            // espacios múltiples
      .trim();
  }

  function tieneCongreso(item) {
    // si es candidato, usamos item.partido; si es partido, item.nombre
    const nombrePartido = item.type === 'party' ? (item.nombre || '') : (item.partido || '');
    return PARTIDOS_CONGRESO.has(limpiar(nombrePartido));
  }
  const grid = document.getElementById('candidate-grid');
  const modal = document.getElementById('candidate-modal');
  const modalContent = modal.querySelector('.modal-content');
  const closeModalBtn = document.getElementById('close-modal');

  const modalPhoto = document.getElementById('modal-photo');
  const modalName = document.getElementById('modal-name');
  const modalPartido = document.getElementById('modal-partido');
  const modalInfo = document.getElementById('modal-info');

  const modalFormacion = document.getElementById('modal-formacion');
  const modalCargos = document.getElementById('modal-cargos');
  const modalPartidos = document.getElementById('modal-partidos');
  const modalContrasList = document.getElementById('modal-contras-list');

  const modalOrientacion = document.getElementById('modal-orientacion');
  const modalVideoIframe = document.getElementById('modal-video-iframe');

  const sectionFormacion = document.getElementById('modal-section-formacion');
  const sectionCargosPartidos = document.getElementById('modal-section-cargos-partidos');
  const sectionContras = document.getElementById('modal-section-contras');
  const sectionOrientacion = document.getElementById('modal-section-orientacion');
  const sectionVideo = document.getElementById('modal-section-video');
  const contrasTitle = document.getElementById('modal-contras-title');
  const contrasContainer = document.getElementById('modal-contras-container');

  const sectionWebs = document.getElementById('modal-section-webs');
  const modalWebs = document.getElementById('modal-webs');

  const sectionEntrevistas = document.getElementById('modal-section-entrevistas');
  const modalEntrevistas = document.getElementById('modal-entrevistas');

  const sectionPosiciones = document.getElementById('modal-section-posiciones');
  const modalPosiciones = document.getElementById('modal-posiciones');

  const sectionRelaciones = document.getElementById('modal-section-relaciones');
  const modalRelaciones = document.getElementById('modal-relaciones');

  const sectionNotas = document.getElementById('modal-section-notas');
  const modalNotas = document.getElementById('modal-notas');

  function populateList(ul, items) {
    ul.innerHTML = '';
    if (items && items.length) {
      items.forEach(t => { const li = document.createElement('li'); li.textContent = t; ul.appendChild(li); });
    } else { ul.innerHTML = '<li>No se registra información.</li>'; }
  }

  function populateLinks(ul, links) {
    ul.innerHTML = '';
    if (links && links.length) {
      links.forEach(url => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 font-semibold break-words">${url}</a>`;
        ul.appendChild(li);
      });
    } else { ul.innerHTML = '<li>No disponible.</li>'; }
  }

  const TOPIC_LABELS = {
    seguridad: 'seguridad', educacion: 'educación', mineria: 'minería',
    produccion: 'producción', economia: 'economía', social: 'ámbito social'
  };

  function wordLimit(text, maxWords) {
    const words = text ? String(text).trim().split(/\s+/) : [];
    if (words.length <= maxWords) return text || '';
    return words.slice(0, maxWords).join(' ') + '…';
  }

  // === Verificación de fuentes (NO búsquedas) ===
  const INVALID_SOURCE_REGEX = /(google\.[^/]+\/search|youtube\.com\/results)/i;
  const isHttp = (u) => typeof u === 'string' && /^https?:\/\//i.test(u?.trim?.());
  const isConcreteSource = (u) => isHttp(u) && !INVALID_SOURCE_REGEX.test(u);
  const charLimit = (text, n = 300) => {
    if (!text) return '';
    const t = String(text).trim();
    return t.length <= n ? t : t.slice(0, n).trim() + '…';
  };

  // (Se mantienen por compatibilidad; solo se usan si existen en el dataset)
  function buildTopicSources(item, det, topicKey) {
    const fuentes = (det && Array.isArray(det.fuentes) && det.fuentes.length) ? [...det.fuentes] : [];
    const fallback = [];
    if (item.entrevistasYouTube && item.entrevistasYouTube.length) fallback.push(item.entrevistasYouTube[0]);
    if (item.websOficiales && item.websOficiales.length) fallback.push(item.websOficiales[0]);
    const q = encodeURIComponent(`${item.nombre} ${TOPIC_LABELS[topicKey] || topicKey} propuestas`);
    fallback.push(`https://www.youtube.com/results?search_query=${q}`);
    fallback.push(`https://www.google.com/search?q=${q}`);
    return (fuentes.length ? fuentes : fallback);
  }

  function buildAutoSummary(topicKey, breve, item) {
    const tema = TOPIC_LABELS[topicKey] || topicKey;
    const orient = Array.isArray(item.orientacion) ? item.orientacion.join(' ') : '';
    const base = breve ? String(breve) : '';
    const nombre = item?.nombre ? item.nombre : 'El candidato';
    const partido = item?.partido ? ` (${item.partido})` : '';
    let texto = `${nombre}${partido} plantea, en ${tema}, ${base || 'lineamientos generales aún no detallados públicamente'}. `;
    if (orient) texto += `Su orientación declara: ${orient}. `;
    texto += `Implica metas medibles, coordinación interinstitucional y uso de tecnología y marco legal, con cumplimiento normativo y evaluación de resultados.`;
    return wordLimit(texto, 300);
  }

  // ======= FUNCIÓN CLAVE PARCHEADA (verificación estricta) =======
  function populatePosiciones(container, obj, detalle, item) {
    container.innerHTML = '';
    const orden = ['seguridad', 'educacion', 'mineria', 'produccion', 'economia', 'social'];
    let alguno = false;

    orden.forEach(k => {
      const breve = obj && obj[k];
      const det = detalle && detalle[k];

      // Solo cuentan fuentes concretas (no resultados de búsqueda)
      const fuentes = (det && Array.isArray(det.fuentes)) ? det.fuentes.filter(isConcreteSource) : [];
      const resumen = det && typeof det.resumen === 'string' ? det.resumen.trim() : '';

      // Regla: resumen NO vacío + al menos 1 fuente concreta
      const verificado = !!(resumen && fuentes.length > 0);

      if (breve || det) {
        alguno = true;
        const card = document.createElement('div');
        card.className = 'p-3 rounded-lg border border-gray-200';

        const titulo = k.charAt(0).toUpperCase() + k.slice(1);
        const chip = verificado
          ? '<span class="ml-2 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800 border border-green-300 align-middle">Verificado</span>'
          : '<span class="ml-2 text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300 align-middle">Sin verificación</span>';

        let html = `<div class="text-sm uppercase tracking-wide text-gray-500 mb-1">${titulo} ${chip}</div>`;
        if (breve) html += `<div class="text-gray-800 mb-2">${breve}</div>`;

        if (verificado) {
          html += `<div class="text-sm text-gray-700 leading-relaxed">${charLimit(resumen, 300)}</div>
                   <div class="mt-2">
                     <div class="text-xs font-semibold text-gray-500 mb-1">Fuentes</div>
                     <ul class="list-disc list-inside text-xs space-y-1">
                       ${fuentes.map(u => `<li><a href="${u}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 break-words">${u}</a></li>`).join('')}
                     </ul>
                   </div>`;
        } else {
          // Nada de fallback a búsquedas; exigencia 100% verificable
          html += `<div class="text-sm text-gray-500 italic">No hay información verificable disponible.</div>`;
        }

        card.innerHTML = html;
        container.appendChild(card);
      }
    });

    if (!alguno) container.innerHTML = '<div class="text-gray-600">Sin posiciones detalladas.</div>';
  }

  function populateRelaciones(ul, rels) {
    ul.innerHTML = '';
    if (rels && rels.length) {
      rels.forEach(r => {
        const f = r.fuente ? `<a href="${r.fuente}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 font-semibold">[Fuente]</a>` : '';
        const li = document.createElement('li');
        li.innerHTML = `<span class="font-semibold">${r.con}:</span> ${r.detalle} ${f}`;
        ul.appendChild(li);
      });
    } else { ul.innerHTML = '<li>No se registran relaciones relevantes.</li>'; }
  }

  function renderCandidateModal(data) {
    modalPartido.textContent = data.partido || '';
    sectionFormacion.style.display = 'block';
    sectionCargosPartidos.style.display = 'grid';
    sectionContras.style.display = 'block';
    sectionOrientacion.style.display = 'block';
    contrasTitle.textContent = 'Contras / Investigaciones';
    contrasTitle.className = 'text-xl font-semibold text-red-700 mb-3 border-b-2 border-red-200 pb-1';
    contrasContainer.className = 'bg-red-50 border-l-4 border-red-600 text-red-800 p-4 rounded-r-lg';

    if (data.posiciones || data.posicionesDetalle) {
      sectionPosiciones.style.display = 'block';
      sectionPosiciones.classList.remove('hidden');
      populatePosiciones(modalPosiciones, data.posiciones, data.posicionesDetalle, data);
    } else {
      sectionPosiciones.style.display = 'none';
      sectionPosiciones.classList.add('hidden');
      modalPosiciones.innerHTML = '';
    }

    if (data.videoUrl) { sectionVideo.style.display = 'block'; modalVideoIframe.src = data.videoUrl; }
    else { sectionVideo.style.display = 'none'; modalVideoIframe.src = ''; }

    if (data.entrevistasYouTube && data.entrevistasYouTube.length) { sectionEntrevistas.style.display = 'block'; sectionEntrevistas.classList.remove('hidden'); populateLinks(modalEntrevistas, data.entrevistasYouTube); }
    else { sectionEntrevistas.style.display = 'none'; sectionEntrevistas.classList.add('hidden'); modalEntrevistas.innerHTML = ''; }

    if (data.websOficiales && data.websOficiales.length) { sectionWebs.style.display = 'block'; sectionWebs.classList.remove('hidden'); populateLinks(modalWebs, data.websOficiales); }
    else { sectionWebs.style.display = 'none'; sectionWebs.classList.add('hidden'); modalWebs.innerHTML = ''; }

    if (data.relaciones && data.relaciones.length) { sectionRelaciones.style.display = 'block'; sectionRelaciones.classList.remove('hidden'); populateRelaciones(modalRelaciones, data.relaciones); }
    else { sectionRelaciones.style.display = 'none'; sectionRelaciones.classList.add('hidden'); modalRelaciones.innerHTML = ''; }

    if (data.masInfo && data.masInfo.length) {
      sectionNotas.style.display = 'block';
      sectionNotas.classList.remove('hidden');
      modalNotas.innerHTML = data.masInfo.map(x => `<li>${x.desc}${x.fuente ? ` <a href="${x.fuente}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 font-semibold">[Fuente]</a>` : ''}</li>`).join('');
    } else {
      sectionNotas.style.display = 'none';
      sectionNotas.classList.add('hidden');
      modalNotas.innerHTML = '';
    }

    populateList(modalOrientacion, data.orientacion || []);
    populateList(modalFormacion, data.formacion || []);
    populateList(modalCargos, data.cargosPublicos || []);
    populateList(modalPartidos, data.partidosAnteriores || []);

    modalContrasList.innerHTML = '';
    modalContrasList.className = 'list-disc list-inside space-y-2 text-sm';
    if (data.contras && data.contras.length) {
      data.contras.forEach(contra => {
        const li = document.createElement('li'); li.className = 'text-red-900';
        li.innerHTML = `${contra.desc} ${contra.fuente ? `<a href="${contra.fuente}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 font-semibold">[Fuente]</a>` : ''}`;
        modalContrasList.appendChild(li);
      });
    } else {
      modalContrasList.innerHTML = '<li class="text-gray-700">No se encontraron controversias públicas relevantes.</li>';
    }

    modal.classList.remove('hidden');
    setTimeout(() => modalContent.classList.add('modal-open'), 10);
  }

  function renderPartyModal(data) {
    modalPartido.textContent = 'Precandidatos (Elección Interna)';
    sectionFormacion.style.display = 'none';
    sectionCargosPartidos.style.display = 'none';
    sectionOrientacion.style.display = 'none';
    sectionVideo.style.display = 'none';
    sectionPosiciones.style.display = 'none';
    sectionRelaciones.style.display = 'none';
    sectionNotas.style.display = 'none';

    const contrasTitle = document.getElementById('modal-contras-title');
    const contrasContainer = document.getElementById('modal-contras-container');
    contrasTitle.textContent = 'Lista de Precandidatos';
    contrasTitle.className = 'text-xl font-semibold text-blue-700 mb-3 border-b-2 border-blue-200 pb-1';
    contrasContainer.className = 'bg-gray-50 p-4 rounded-lg';

    if (data.websOficiales && data.websOficiales.length) { sectionWebs.style.display = 'block'; sectionWebs.classList.remove('hidden'); populateLinks(modalWebs, data.websOficiales); }
    else { sectionWebs.style.display = 'none'; sectionWebs.classList.add('hidden'); modalWebs.innerHTML = ''; }

    if (data.entrevistasYouTube && data.entrevistasYouTube.length) { sectionEntrevistas.style.display = 'block'; sectionEntrevistas.classList.remove('hidden'); populateLinks(modalEntrevistas, data.entrevistasYouTube); }
    else { sectionEntrevistas.style.display = 'none'; sectionEntrevistas.classList.add('hidden'); modalEntrevistas.innerHTML = ''; }

    const list = document.getElementById('modal-contras-list'); list.innerHTML = ''; list.className = 'space-y-4';
    if (data.precandidatos && data.precandidatos.length) {
      data.precandidatos.forEach(pre => {
        let contrasHtml = '<ul class="list-disc list-inside space-y-1 mt-2 pl-4">';
        if (pre.contras && pre.contras.length) {
          pre.contras.forEach(con => { contrasHtml += `<li class="text-red-700 text-sm">${con.desc} ${con.fuente ? `<a href="${con.fuente}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 font-semibold">[Fuente]</a>` : ''}</li>`; });
        } else {
          contrasHtml += '<li class="text-gray-600 text-sm">Sin controversias públicas destacadas.</li>';
        }
        contrasHtml += '</ul>';
        const li = document.createElement('li');
        li.innerHTML = `<p class="font-bold text-lg text-gray-900">${pre.nombre}</p><p class="text-sm text-gray-700 italic">${pre.info || ''}</p>${contrasHtml}`;
        list.appendChild(li);
      });
    } else { list.innerHTML = '<li>No se han detallado precandidatos.</li>'; }

    // Mostrar primero, luego resetear scroll en el siguiente frame (mejor para iOS/Android)
    modal.classList.remove('hidden');

    requestAnimationFrame(() => {
      const scroller = modal.querySelector('.modal-content');
      if (scroller) {
        scroller.scrollTop = 0;
        // segundo tick por compatibilidad con WebKit móvil
        setTimeout(() => { scroller.scrollTop = 0; }, 0);
      }
      // Asegura que ninguno de los contenedores mantenga scroll previo
      modal.scrollTop = 0;
      document.body.scrollTop = 0;
      document.documentChildren ? null : null; // no tocar
      document.documentElement.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });


    setTimeout(() => modalContent.classList.add('modal-open'), 10);
  }

  function showModal(id) {
    const data = candidatos.find(c => c.id === id);
    if (!data) return;
    modalName.textContent = data.nombre || '';
    modalInfo.textContent = data.info || '';
    modalPhoto.src = data.fotoUrl || placeholderImg;
    modalPhoto.onerror = () => { modalPhoto.src = (data.type === 'party') ? logoPlaceholder : placeholderImg; };
    const modalLogo = document.getElementById('modal-logo');
    modalLogo.src = data.logoUrl || logoPlaceholder;
    modalLogo.onerror = () => { modalLogo.src = logoPlaceholder; };
    if (data.type === 'party') renderPartyModal(data); else renderCandidateModal(data);
  }

  function hideModal() {
    const scroller = modal.querySelector('.modal-content');
    if (scroller) scroller.scrollTop = 0;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    modal.scrollTop = 0;
    modalContent.classList.remove('modal-open');
    modalVideoIframe.src = '';
    setTimeout(() => modal.classList.add('hidden'), 300);
  }

  (function populateGrid() {
    if (!candidatos.length) {
      grid.innerHTML = '<div class="col-span-full text-center text-red-700">No se cargó el dataset.</div>';
      return;
    }
    grid.innerHTML = '';
    candidatos.forEach(c => {
      const card = document.createElement('div');
      card.className = 'candidate-card glass-card relative rounded-2xl p-6 text-center cursor-pointer group';
      card.dataset.id = c.id;
      const isParty = c.type === 'party';
      // Foto = siempre la foto del candidato si existe (sino placeholder de foto)
      const photoSrc = c.fotoUrl || placeholderImg;

      // Logo = siempre el logo si existe;
      // si es partido y no hay logo, usa la foto como fallback; si no, usa placeholder de logo
      const logoSrc = c.logoUrl || (isParty ? (c.fotoUrl || logoPlaceholder) : logoPlaceholder);

      // === Partidos con representación congresal (badge en portada) ===
      const BADGE_URL = 'https://i.postimg.cc/W3gDNg2b/congreso.png';
      const PARTIDOS_CONGRESO = new Set([
        'fuerza popular',
        'alianza para el progreso',
        'renovacion popular',
        'avanza pais',
        'accion popular',
        'peru libre',
        'somos peru',
        'podemos peru',
        'juntos por el peru',
        'cambio democratico-juntos por el peru' // por si el item usa la bancada
      ]);

      function limpiar(str = '') {
        return str
          .toLowerCase()
          .normalize('NFD').replace(/\p{Diacritic}/gu, '')  // quita tildes
          .replace(/–|—/g, '-')                            // guiones largos
          .replace(/\s+/g, ' ')                            // espacios
          .trim();
      }

      function tieneCongreso(item) {
        // si es candidato, miramos item.partido; si es partido, miramos item.nombre
        const nombrePartido = item.type === 'party' ? (item.nombre || '') : (item.partido || '');
        return PARTIDOS_CONGRESO.has(limpiar(nombrePartido));
      }
      const subtitulo = isParty ? 'Ver Precandidatos' : (c.partido || '');

      card.innerHTML = `
        <div class="photo-wrap mx-auto mb-5 shadow-lg">
          <img src="${photoSrc}" alt="Foto ${c.nombre}" class="candidate-photo"
               onerror="this.src='${placeholderImg}'">
          <img src="${logoSrc}" alt="Logo ${c.partido || c.nombre}" class="candidate-logo"
               onerror="this.src='${logoPlaceholder}'">
        </div>
          
        <h3 class="candidate-name font-bold text-xl text-gray-900 dark:text-white mb-2 font-display transition-colors duration-300">${c.nombre}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300 font-medium">${subtitulo}</p>`;

      // Sello "Con participación actual en el Congreso"
      if (tieneCongreso(c)) {
        const badge = document.createElement('img');
        badge.src = BADGE_URL;
        badge.alt = '';
        badge.title = 'Partido con representación en el Congreso';
        badge.className = 'badge-congreso';
        badge.referrerPolicy = 'no-referrer';
        badge.onerror = () => badge.remove();

        card.appendChild(badge); // anclado a la TARJETA
      }
      card.addEventListener('click', () => showModal(c.id));
      grid.appendChild(card);
    });
  })();

  closeModalBtn.addEventListener('click', hideModal);
  modal.addEventListener('click', e => { if (e.target === modal) hideModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.classList.contains('hidden')) hideModal(); });
  // ====== TIMELINE ======
  const TL_DATA = [
    // 2025
    { y: 2025, m: 10, d: "14 Octubre", t: "Cierre del padrón electoral para EG 2026", tag: "RENIEC" },
    { y: 2025, m: 10, d: "19 Octubre", t: "Límite para aprobación de padrones (primarias)", tag: "OP" },
    { y: 2025, m: 10, d: "28–31 Octubre", t: "Inscripción de precandidaturas", tag: "OP" },
    { y: 2025, m: 11, d: "7 Noviembre", t: "Entrega de candidatos finales a la ONPE por parte de la OP", tag: "OP/ONPE" },
    { y: 2025, m: 11, d: "13 Noviembre", t: "Envío de padrón preliminar al JNE y ONPE (EG 2026)", tag: "RENIEC" },
    { y: 2025, m: 11, d: "30 Noviembre", t: "Elecciones primarias (Afiliados)", tag: "OP" },
    // 2026
    { y: 2026, m: 1, d: "22 Enero", t: "Diseño definitivo de cédula para EG 2026", tag: "ONPE" },
    { y: 2026, m: 1, d: "29 Enero", t: "Sorteo de miembros de mesa", tag: "ONPE" },
    { y: 2026, m: 2, d: "12 Febrero", t: "Sorteo de ubicación en cédula • Lista final de miembros • Límite de retiro/renuncia", tag: "ONPE" },
    { y: 2026, m: 3, d: "29 Marzo", t: "1ra jornada de capacitación a miembros de mesa", tag: "ONPE" },
    { y: 2026, m: 4, d: "5 Abril", t: "Simulacro del Sistema de Cómputo Electoral • 2da jornada de capacitación", tag: "ONPE" },
    { y: 2026, m: 4, d: "12 Abril", t: "Elecciones Generales 2026", tag: "EG 2026" },
  ];

  function initTimeline() {
    const years = [...new Set(TL_DATA.map(e => e.y))].sort();
    const now = new Date();
    let selYear = (years.includes(now.getFullYear()) ? now.getFullYear() : years[0]);
    let selMonth = (selYear === now.getFullYear() ? now.getMonth() + 1 : Math.min(...TL_DATA.filter(e => e.y === selYear).map(e => e.m)));

    const $controls = document.getElementById('tl-controls');
    const $months = document.getElementById('tl-months');
    const $body = document.getElementById('tl-body');

    // A. Años
    function renderYears() {
      $controls.innerHTML = years.map(y => `
      <button data-y="${y}" class="px-3 py-1.5 rounded-md border ${y === selYear ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}">
        ${y}
      </button>`).join('');
      $controls.querySelectorAll('button').forEach(btn => {
        btn.onclick = () => {
          selYear = Number(btn.dataset.y);
          selMonth = null;
          renderYears();     // <- vuelve a dibujar los años para mover el activo
          renderMonths();    // <- repinta meses del nuevo año
          renderEvents();    // <- muestra eventos
        };
      });
    }

    // B. Meses disponibles del año seleccionado
    function renderMonths() {
      const ms = [...new Set(TL_DATA.filter(e => e.y === selYear).map(e => e.m))].sort((a, b) => a - b);
      if (!selMonth) selMonth = ms[0];
      const NOMBRES = ['', 'ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
      $months.innerHTML = ms.map(m => `
      <button data-m="${m}" class="px-4 py-2 rounded-md border ${m === selMonth ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}">
        ${NOMBRES[m]}
      </button>`).join('');
      $months.querySelectorAll('button').forEach(btn => {
        btn.onclick = () => {
          selMonth = Number(btn.dataset.m);
          renderMonths();    // <- repinta los botones de mes (mueve el activo)
          renderEvents();    // <- actualiza la lista
        };
      });
    }

    // C. Eventos del mes/año
    function renderEvents() {
      const evs = TL_DATA.filter(e => e.y === selYear && e.m === selMonth);
      $body.innerHTML = evs.map(e => `
        <div class="relative mb-6 group">
          <div class="absolute -left-[3px] md:-left-[7px] top-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white border-2 border-blue-500 group-hover:scale-125 transition-transform"></div>
          <div class="ml-4 md:ml-8 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm border border-blue-200 dark:border-blue-900 shadow-sm rounded-xl p-5 hover:shadow-md transition-all hover:-translate-y-1">
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-lg font-bold text-blue-700 dark:text-blue-300 font-display">${e.d}</h4>
              <span class="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-800 font-semibold">${e.tag || ''}</span>
            </div>
            <p class="text-gray-700 dark:text-gray-300">${e.t}</p>
          </div>
        </div>
      `).join('') || `<div class="text-gray-500 italic">Sin eventos programados.</div>`;
    }

    renderYears(); renderMonths(); renderEvents();
  }
  initTimeline();

  // === Bloquear clic derecho y teclas (F9, etc.) ===

  // Bloquea menú contextual (clic derecho)
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  }, { capture: true });

  // Bloquea F9 y (opcional) otras combinaciones comunes de DevTools
  document.addEventListener('keydown', (e) => {
    const k = e.key || e.keyCode;

    // F9
    if (k === 'F9' || k === 120) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, true);

});

