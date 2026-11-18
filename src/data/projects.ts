export interface IProject {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: 'Web & Multimedia 360°' | 'Telemetría & Sistemas' | 'Automatización & APIs' | 'Arquitectura & UI/UX';
  status: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  objectives: string[];
  features: string[];
  technologies: string[];
  architecture: string[];
  participation: string;
  repoUrl?: string;
  liveUrl?: string;
  coverPlaceholderLabel: string;
  galleryPlaceholders: string[];
}

export const projectsData: IProject[] = [
  {
    id: '01',
    slug: 'plataforma-unimeta',
    shortTitle: 'UNIMETA 360° & Asistente Rau IA',
    title: 'Plataforma web con mapa interactivo, recorridos en 360° e inteligencia artificial (Rau IA)',
    category: 'Web & Multimedia 360°',
    status: 'Proyecto desarrollado y desplegado',
    shortDescription:
      'Guía virtual interactiva que permite explorar espacios universitarios mediante cartografía digital, entornos panorámicos en 360° y el asistente de inteligencia artificial Rau IA.',
    fullDescription:
      'Desarrollo de una plataforma web multimedia e interactiva diseñada para la visualización espacial del campus de la Corporación Universitaria del Meta (UNIMETA). Combina navegación por mapa interactivo, recorridos inmersivos en 360 grados y atención automatizada mediante inteligencia artificial.',
    problem:
      'La comunidad universitaria y los nuevos aspirantes necesitaban una herramienta digital accesible desde cualquier dispositivo para conocer la ubicación de bloques, laboratorios y oficinas, además de resolver consultas académicas e institucionales al instante.',
    objectives: [
      'Diseñar e implementar un mapa interactivo que georreferencie los espacios del campus universitario.',
      'Construir un visor inmersivo de fotografías panorámicas en 360° interconectadas.',
      'Integrar el asistente virtual de inteligencia artificial Rau IA mediante flujos automatizados en n8n.',
      'Ofrecer una interfaz moderna, rápida y adaptable a móviles y escritorio.'
    ],
    features: [
      'Mapa interactivo del campus universitario',
      'Recorridos virtuales inmersivos en 360°',
      'Navegación fluida entre bloques y dependencias',
      'Asistente de inteligencia artificial integrado (Rau IA)',
      'Consulta de información institucional en tiempo real',
      'Diseño responsive y multimedia'
    ],
    technologies: [
      'React',
      'JavaScript',
      'A-Frame',
      'Fotografías 360°',
      'n8n',
      'Inteligencia Artificial'
    ],
    architecture: [
      'Frontend SPA en React encargado de la interfaz gráfica, el mapa interactivo y la gestión de escenas.',
      'Motor WebVR/WebXR basado en A-Frame para el renderizado esférico de fotografías equirectangulares en 360°.',
      'Integración mediante webhooks con n8n para conectar el chat del usuario con el agente inteligente Rau IA.'
    ],
    participation:
      'Proyecto individual de grado e innovación tecnológica: estuve a cargo del diseño de arquitectura, producción y conexión de entornos 360°, programación Full Stack en React y A-Frame, y entrenamiento e integración del asistente Rau IA.',
    repoUrl: 'https://github.com/Miglio39/plataforma-unimeta/tree/main/src',
    coverPlaceholderLabel: 'Ilustración: Recorrido Virtual 360° + Asistente Rau IA — UNIMETA',
    galleryPlaceholders: [
      'Vista Ilustrativa 1 — Mapa interactivo y selector de espacios universitarios (Reemplazable por captura real)',
      'Vista Ilustrativa 2 — Visor inmersivo 360° con A-Frame (Reemplazable por captura real)',
      'Vista Ilustrativa 3 — Interfaz conversacional del asistente Rau IA (Reemplazable por captura real)'
    ]
  },
  {
    id: '02',
    slug: 'monitoreo-gps',
    shortTitle: 'NexoTrack / Monitoreo Satelital GPS',
    title: 'Plataforma de monitoreo satelital GPS vehicular, telemetría y análisis operativo',
    category: 'Telemetría & Sistemas',
    status: 'En producción (Operación continua)',
    shortDescription:
      'Solución tecnológica de rastreo satelital, integración de telemetría GPS, mapas en tiempo real y generación de reportes para la toma de decisiones operativas.',
    fullDescription:
      'Implementación, integración y desarrollo de una plataforma web para el monitoreo satelital, seguimiento en tiempo real y administración de flotas vehiculares mediante dispositivos GPS y servidores Linux contenerizados.',
    problem:
      'Las operaciones de transporte y logística requieren control estricto de ubicaciones en tiempo real, trazabilidad de recorridos, control de excesos de velocidad, geocercas de seguridad y análisis de datos confiables para optimizar costos y seguridad vial.',
    objectives: [
      'Configurar y administrar una infraestructura de telemetría GPS de alta disponibilidad en servidores Linux.',
      'Integrar y homologar múltiples dispositivos GPS vehiculares para la recepción continua de datos.',
      'Desarrollar interfaces y servicios con Node.js, React y Leaflet para visualización cartográfica y reportes.',
      'Analizar datos de telemetría para apoyar la toma de decisiones y automatizar alertas operativas.'
    ],
    features: [
      'Seguimiento vehicular satelital en tiempo real',
      'Visualización cartográfica interactiva con Leaflet',
      'Configuración y monitoreo de geocercas operativas',
      'Generación de reportes históricos de recorridos y paradas',
      'Control y alertas de límites de velocidad',
      'Homologación e integración de dispositivos GPS',
      'Automatización de alertas y procesos de monitoreo',
      'Interoperabilidad mediante APIs REST'
    ],
    technologies: [
      'Traccar',
      'Node.js',
      'React',
      'Leaflet',
      'APIs REST',
      'Docker',
      'EasyPanel',
      'Servidores Linux'
    ],
    architecture: [
      'Infraestructura desplegada en servidor VPS Linux administrada con Docker y EasyPanel.',
      'Motor de recepción de protocolos satelitales basado en Traccar comunicado vía API.',
      'Capa de aplicación y servicios en Node.js y React con mapas Leaflet para visualización personalizada y análisis de datos.'
    ],
    participation:
      'Integración y desarrollo tecnológico: configuración y administración del servidor Linux y contenedores Docker, parametrización del motor Traccar, homologación de equipos GPS, análisis de datos de operación y desarrollo de integraciones web y APIs.',
    coverPlaceholderLabel: 'Ilustración: Plataforma de Telemetría y Rastreo Satelital GPS',
    galleryPlaceholders: [
      'Vista Ilustrativa 1 — Mapa de monitoreo de flota en tiempo real (Reemplazable por captura real)',
      'Vista Ilustrativa 2 — Módulo de geocercas, alertas y control de velocidad (Reemplazable por captura real)',
      'Vista Ilustrativa 3 — Reportes analíticos de recorridos y telemetría (Reemplazable por captura real)'
    ]
  },
  {
    id: '03',
    slug: 'inspeccion-vehicular',
    shortTitle: 'Transporte-SST – Inspección Vehicular',
    title: 'Sistema web de inspecciones preoperacionales de vehículos, equipos y reportes PDF',
    category: 'Telemetría & Sistemas',
    status: 'Proyecto desarrollado e implementado',
    shortDescription:
      'Aplicación web empresarial para digitalizar inspecciones preoperacionales de vehículos y equipos, con evidencias fotográficas, firma digital, analítica y exportación a PDF.',
    fullDescription:
      'Plataforma web desarrollada para estandarizar y digitalizar los procesos de seguridad y salud en el trabajo (SST) aplicados al control preoperacional de vehículos y maquinaria, garantizando trazabilidad documental e informes de auditoría.',
    problem:
      'Las planillas físicas de inspección preoperacional dificultaban la consolidación de hallazgos mecánicos, retrasaban la toma de acciones correctivas y complicaban el almacenamiento de respaldos para auditorías de seguridad.',
    objectives: [
      'Digitalizar los formularios de lista dechequeo preoperacional para su diligenciamiento desde dispositivos móviles o escritorio.',
      'Incorporar respaldo mediante evidencias fotográficas y firma digital del conductor o inspector.',
      'Administrar la persistencia de datos de forma segura en motores SQL relacionales.',
      'Generar tableros estadísticos y reportes automáticos en formato PDF listos para auditoría.'
    ],
    features: [
      'Autenticación de usuarios y control de accesos',
      'Formularios digitales de lista de verificación (checklists)',
      'Captura y almacenamiento de evidencias fotográficas',
      'Registro de firma digital en pantalla',
      'Administración de registros con tablas dinámicas (DataTables)',
      'Tablero de indicadores y estadísticas con Chart.js',
      'Generación automatizada de informes de auditoría en PDF'
    ],
    technologies: [
      'Node.js',
      'Express',
      'Prisma ORM',
      'EJS',
      'PostgreSQL',
      'MySQL',
      'SQL Server',
      'Chart.js',
      'DataTables'
    ],
    architecture: [
      'Backend sobre Node.js y Express estructurado para gestionar sesiones, validaciones operativas y generación de documentos PDF.',
      'Persistencia en bases de datos relacionales (PostgreSQL / MySQL / SQL Server) gestionada mediante consultas estructuradas y Prisma ORM.',
      'Interfaz web dinámica con EJS, DataTables para filtrado avanzado y Chart.js para métricas de cumplimiento.'
    ],
    participation:
      'Desarrollo Full Stack completo: levantamiento de requerimientos, diseño de base de datos, programación backend y frontend, implementación de firma digital y generador de reportes PDF.',
    coverPlaceholderLabel: 'Ilustración: Sistema Transporte-SST — Inspección Preoperacional y PDF',
    galleryPlaceholders: [
      'Vista Ilustrativa 1 — Formulario digital de inspección y firma en pantalla (Reemplazable por captura real)',
      'Vista Ilustrativa 2 — Panel administrativo con métricas Chart.js (Reemplazable por captura real)',
      'Vista Ilustrativa 3 — Reporte oficial de auditoría generado en PDF (Reemplazable por captura real)'
    ]
  },
  {
    id: '04',
    slug: 'mismonas',
    shortTitle: 'Mismonas – Inventarios Mundial 2026',
    title: 'Mismonas – Aplicación de gestión de inventarios e intercambio de láminas del Mundial 2026',
    category: 'Web & Multimedia 360°',
    status: 'Proyecto individual desarrollado',
    shortDescription:
      'Aplicación interactiva adaptable a móviles para controlar el inventario del álbum del Mundial 2026, gestionar repetidas y automatizar intercambios entre coleccionistas.',
    fullDescription:
      'Desarrollo de una aplicación web con enfoque móvil (Mobile-First) que digitaliza el control de inventarios del álbum del Mundial 2026, permitiendo registrar láminas en tiempo real, visualizar estadísticas de avance y coordinar intercambios.',
    problem:
      'Llevar el control manual de cientos de láminas y encontrar otros coleccionistas para intercambiar repetidas suele ser un proceso desorganizado y lento sin una herramienta digital sincronizada.',
    objectives: [
      'Construir una interfaz ágil e intuitiva para marcar láminas obtenidas y repetidas desde el celular.',
      'Sincronizar el inventario en la nube en tiempo real utilizando Firebase.',
      'Implementar un sistema de cruce de láminas repetidas y propuestas de intercambio entre usuarios.',
      'Incluir estadísticas de progreso, mapa de ciudades y panel de administración.'
    ],
    features: [
      'Control de inventario digital de láminas en tiempo real',
      ' Contador y gestión de láminas repetidas y faltantes',
      'Estadísticas detalladas de porcentaje de completitud',
      'Módulo de propuestas y gestión de intercambios',
      'Mapa interactivo de ciudades sedes',
      'Panel administrativo y gestión de usuarios'
    ],
    technologies: [
      'React',
      'Firebase',
      'JavaScript',
      'Diseño Mobile-First'
    ],
    architecture: [
      'Frontend reactivo en React optimizado para navegación táctil en dispositivos móviles y escritorio.',
      'Servicios Cloud en Google Firebase para autenticación de coleccionistas y base de datos NoSQL en tiempo real.'
    ],
    participation:
      'Proyecto individual: concepción del producto, diseño de interfaz UI/UX, estructuración de base de datos en Firebase y programación completa en React.',
    coverPlaceholderLabel: 'Ilustración: App Mismonas — Inventario e Intercambios Mundial 2026',
    galleryPlaceholders: [
      'Vista Ilustrativa 1 — Grilla interactiva de control de inventario móvil (Reemplazable por captura real)',
      'Vista Ilustrativa 2 — Módulo de emparejamiento e intercambio de repetidas (Reemplazable por captura real)',
      'Vista Ilustrativa 3 — Estadísticas de colección y mapa interactivo (Reemplazable por captura real)'
    ]
  },
  {
    id: '05',
    slug: 'omnicheck-compliance',
    shortTitle: 'OmniCheck / Prisma Compliance',
    title: 'Plataforma centralizada de verificación de antecedentes, cumplimiento y consulta de fuentes públicas',
    category: 'Automatización & APIs',
    status: 'Proyecto desarrollado',
    shortDescription:
      'Plataforma tecnológica de cumplimiento (Compliance) para automatizar y centralizar la consulta de antecedentes, registros vehiculares y listas restrictivas en una sola búsqueda.',
    fullDescription:
      'Desarrollo de una solución centralizada de validación y debida diligencia que automatiza la consulta en múltiples bases de datos públicas nacionales e internacionales para procesos de contratación, seguridad y control operativo.',
    problem:
      'Los procesos de verificación de personal, contratistas y vehículos exigían ingresar manualmente a más de diez portales gubernamentales y listas internacionales por separado, consumiendo horas operativas por cada validación.',
    objectives: [
      'Unificar en una sola consulta la verificación de fuentes públicas nacionales y listas restrictivas internacionales.',
      'Automatizar la extracción, estructuración y presentación de los resultados de validación.',
      'Reducir drásticamente los tiempos de respuesta en procesos de selección, contratación y cumplimiento normativo.'
    ],
    features: [
      'Consulta unificada por documento de identidad o placa',
      'Integración de consultas a entidades de control y antecedentes (Policía, Procuraduría, Contraloría)',
      'Verificación de tránsito y transporte (SIMIT, RUNT)',
      'Consulta de registros sociales y de seguridad social (SISBEN, RUAF, ADRES, SENA)',
      'Validación en listas restrictivas y cumplimiento internacional (PEP, OFAC, Interpol)',
      'Consolidación de reporte único de verificación'
    ],
    technologies: [
      'Node.js',
      'JavaScript',
      'APIs REST',
      'Automatización de Consultas',
      'Integración de Servicios'
    ],
    architecture: [
      ' Capa de servicios de consulta y conectores automatizados para la interoperabilidad con portales públicos y APIs de validación.',
      'Interfaz web centralizada que consolida el estado de cada fuente y presenta el informe unificado al analista.'
    ],
    participation:
      'Diseño de la arquitectura de integración, programación de los conectores automatizados de consulta y desarrollo de la interfaz centralizada de reportes.',
    coverPlaceholderLabel: 'Ilustración: OmniCheck / Prisma Compliance — Consulta Unificada',
    galleryPlaceholders: [
      'Vista Ilustrativa 1 — Buscador centralizado de cumplimiento y antecedentes (Reemplazable por captura real)',
      'Vista Ilustrativa 2 — Tablero de estado de fuentes públicas y listas restrictivas (Reemplazable por captura real)',
      'Vista Ilustrativa 3 — Consolidado de validación y debida diligencia (Reemplazable por captura real)'
    ]
  },
  {
    id: '06',
    slug: 'sistema-erp',
    shortTitle: 'Sistema ERP Empresarial a Medida',
    title: 'Aplicación web ERP para gestión de propuestas comerciales y control de costos operativos',
    category: 'Telemetría & Sistemas',
    status: 'Proyecto en desarrollo / evolutivo',
    shortDescription:
      'Software ERP corporativo construido con Next.js, Prisma ORM y PostgreSQL para administrar cotizaciones comerciales, recursos y costos de operación.',
    fullDescription:
      'Desarrollo de un sistema de planificación de recursos empresariales (ERP) adaptado a las necesidades operativas y comerciales de la organización, centralizando la estructuración de propuestas económicas y el seguimiento financiero de proyectos.',
    problem:
      'El manejo disperso de cotizaciones, costos de operación y seguimiento de servicios en hojas de cálculo independientes dificultaba la trazabilidad financiera y la estandarización de propuestas comerciales.',
    objectives: [
      'Centralizar la creación y seguimiento de propuestas comerciales en una plataforma web segura.',
      'Controlar de manera estructurada los costos operativos asociados a cada proyecto o servicio.',
      'Implementar una arquitectura moderna y escalable con Next.js y bases de datos PostgreSQL.'
    ],
    features: [
      'Módulo de estructuración de propuestas comerciales y cotizaciones',
      'Registro y seguimiento de costos operativos por proyecto',
      'Gestión centralizada de clientes, servicios y recursos',
      'Modelado relacional robusto con integridad referencial',
      'Tablero gerencial para control administrativo'
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Prisma ORM',
      'PostgreSQL',
      'Tailwind CSS'
    ],
    architecture: [
      'Aplicación Full Stack basada en Next.js para renderizado híbrido y rutas de API seguras.',
      'Capa de datos gestionada con Prisma ORM sobre motor relacional PostgreSQL.'
    ],
    participation:
      'Diseño del modelo de datos empresarial, arquitectura en Next.js y desarrollo de los módulos de propuestas comerciales y control de costos.',
    coverPlaceholderLabel: 'Ilustración: Sistema ERP — Gestión Comercial y Costos Operativos',
    galleryPlaceholders: [
      'Vista Ilustrativa 1 — Módulo de generación de propuestas comerciales (Reemplazable por captura real)',
      'Vista Ilustrativa 2 — Control de costos operativos y rentabilidad (Reemplazable por captura real)',
      'Vista Ilustrativa 3 — Arquitectura de datos en PostgreSQL y Prisma (Reemplazable por captura real)'
    ]
  },
  {
    id: '07',
    slug: 'reservas-pro',
    shortTitle: 'ReservasPro – Agendamiento Web',
    title: 'ReservasPro – Sistema web para la gestión y reserva de canchas sintéticas en línea',
    category: 'Web & Multimedia 360°',
    status: 'Proyecto desarrollado',
    shortDescription:
      'Aplicación web desarrollada con Python y Django para digitalizar la disponibilidad horaria, reserva en línea y administración de escenarios deportivos.',
    fullDescription:
      'Plataforma web creada para automatizar el agendamiento de canchas sintéticas, permitiendo a los usuarios consultar horarios disponibles en tiempo real y a los administradores gestionar reservas, clientes y ocupación.',
    problem:
      'La coordinación manual de turnos por teléfono o mensajería provocaba cruces de horarios, reservas duplicadas y falta de visibilidad sobre la disponibilidad real de las canchas.',
    objectives: [
      'Automatizar el calendario de disponibilidad de canchas por fecha y franja horaria.',
      'Evitar cruces de horarios mediante validación transaccional en base de datos.',
      'Ofrecer un panel administrativo intuitivo para el control diario de reservas.'
    ],
    features: [
      'Calendario interactivo de disponibilidad horaria',
      'Flujo de reserva en línea para usuarios',
      'Validación automática contra reservas duplicadas',
      'Panel de administración de escenarios y turnos',
      'Interfaz adaptable construida con Bootstrap'
    ],
    technologies: [
      'Python',
      'Django',
      'Bootstrap',
      'SQLite3',
      'HTML5 & CSS3'
    ],
    architecture: [
      'Arquitectura MVT (Model-View-Template) implementada sobre el framework Django en Python.',
      'Persistencia relacional en SQLite3 e interfaz responsive estilizada con Bootstrap.'
    ],
    participation:
      'Proyecto individual: diseño del modelo de datos, programación backend en Python/Django y construcción de las vistas de usuario y administración.',
    coverPlaceholderLabel: 'Ilustración: ReservasPro — Calendario y Gestión de Escenarios',
    galleryPlaceholders: [
      'Vista Ilustrativa 1 — Selección de canchas y horarios disponibles (Reemplazable por captura real)',
      'Vista Ilustrativa 2 — Confirmación de reserva en línea (Reemplazable por captura real)',
      'Vista Ilustrativa 3 — Panel de control administrativo en Django (Reemplazable por captura real)'
    ]
  },
  {
    id: '08',
    slug: 'automatizacion-empresarial',
    shortTitle: 'Automatización de Procesos & IA',
    title: 'Automatización e integración de procesos empresariales con n8n, APIs e Inteligencia Artificial',
    category: 'Automatización & APIs',
    status: 'Implementado en entornos productivos',
    shortDescription:
      'Ecosistema de flujos automatizados para optimizar la comunicación y el procesamiento de datos mediante n8n, Evolution API, WhatsApp Business API, Google Sheets e IA.',
    fullDescription:
      'Implementación de flujos de trabajo automatizados y asistentes inteligentes orientados a eliminar tareas operativas repetitivas, gestionar alertas de vencimientos vehiculares y conectar sistemas empresariales mediante APIs.',
    problem:
      'El seguimiento manual de vencimientos documentales de flotas, la atención repetitiva por WhatsApp y el traspaso manual de información entre plataformas generaban cuellos de botella en la operación.',
    objectives: [
      'Orquestar flujos de trabajo automatizados mediante n8n conectando bases de datos, hojas de cálculo y APIs REST.',
      'Integrar canales de WhatsApp mediante Evolution API y WhatsApp Business API para consultas y alertas automáticas.',
      'Incorporar capacidades de inteligencia artificial para clasificar solicitudes y apoyar procesos administrativos.'
    ],
    features: [
      'Automatización de consultas operativas mediante WhatsApp',
      'Integración bidireccional con Google Sheets y bases de datos',
      'Control y alertas tempranas de vencimientos vehiculares',
      'Integración de agentes de inteligencia artificial en flujos empresariales',
      'Conexión de servicios externos mediante APIs REST y Webhooks',
      'Procesamiento y transformación automatizada de información'
    ],
    technologies: [
      'n8n',
      'Inteligencia Artificial',
      'Evolution API',
      'WhatsApp Business API',
      'Google Sheets',
      'APIs REST',
      'JavaScript'
    ],
    architecture: [
      'Motor de orquestación n8n autohospedado en servidor Linux con Docker.',
      'Interconexión mediante Webhooks, nodos de código JavaScript, servicios de IA y pasarelas de WhatsApp API.'
    ],
    participation:
      'Diseño e implementación integral de los flujos de automatización, despliegue de infraestructura n8n/Evolution API e integración de modelos de IA y APIs empresariales.',
    coverPlaceholderLabel: 'Ilustración: Orquestación de Flujos n8n + WhatsApp API + IA',
    galleryPlaceholders: [
      'Vista Ilustrativa 1 — Arquitectura de nodos y webhooks en n8n (Reemplazable por captura real)',
      'Vista Ilustrativa 2 — Alertas automatizadas de vencimientos por WhatsApp (Reemplazable por captura real)',
      'Vista Ilustrativa 3 — Sincronización de datos en tiempo real (Reemplazable por captura real)'
    ]
  },
  {
    id: '09',
    slug: 'mercapopuli',
    shortTitle: 'Mercapopuli – Tienda Virtual',
    title: 'Mercapopuli – Arquitectura de software y diseño UI/UX para tienda virtual de moda',
    category: 'Arquitectura & UI/UX',
    status: 'Proyecto colaborativo documentado',
    shortDescription:
      'Participación colaborativa en el diseño de interfaces de usuario, experiencia de compra, estándares de accesibilidad y documentación de arquitectura para e-commerce.',
    fullDescription:
      'Proyecto colaborativo enfocado en el diseño de componentes visuales, experiencia de usuario (UX), criterios de accesibilidad y documentación de la arquitectura de software para una plataforma de comercio electrónico de moda.',
    problem:
      'El desarrollo colaborativo de una plataforma e-commerce requería lineamientos claros de arquitectura de software y un sistema de diseño UI/UX accesible que facilitara la navegación y compra.',
    objectives: [
      'Diseñar interfaces de usuario limpias, modernas y centradas en la experiencia de compra.',
      'Aplicar pautas de accesibilidad web y diseño modular de componentes.',
      'Documentar la arquitectura de software para alinear el trabajo del equipo de desarrollo.'
    ],
    features: [
      'Diseño de interfaces de usuario (UI)',
      'Optimización de flujos de experiencia de usuario (UX)',
      'Aplicación de criterios de accesibilidad web',
      'Diseño de biblioteca de componentes',
      'Documentación de arquitectura de software'
    ],
    technologies: [
      'Arquitectura de Software',
      'Diseño UI/UX',
      'Adobe XD',
      'Diseño de Componentes',
      'Accesibilidad Web'
    ],
    architecture: [
      'Estructuración basada en componentes reutilizables para catálogo, detalle de producto y flujo de compra.',
      'Documentación técnica de vistas, estados e interacción de usuario.'
    ],
    participation:
      'Participación colaborativa enfocada específicamente en el diseño de interfaces (UI), experiencia de usuario (UX), accesibilidad, diseño de componentes y documentación de arquitectura de software.',
    coverPlaceholderLabel: 'Ilustración: Diseño UI/UX y Arquitectura — Mercapopuli',
    galleryPlaceholders: [
      'Vista Ilustrativa 1 — Prototipado de interfaces y componentes UI/UX (Reemplazable por captura real)',
      'Vista Ilustrativa 2 — Flujo de experiencia de usuario y accesibilidad (Reemplazable por captura real)',
      'Vista Ilustrativa 3 — Documentación de arquitectura de software (Reemplazable por captura real)'
    ]
  }
];