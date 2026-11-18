export interface IExperience {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface IEducation {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  complementary?: string[];
}

export const experienceData: IExperience[] = [
  {
    id: 'exp-01',
    role: 'Ingeniero de Sistemas | Desarrollo de Software, Telemetría & Automatización',
    company: 'Industria de Hidrocarburos — Campo Chichimene / Acacías',
    startDate: 'Sector Hidrocarburos',
    endDate: 'Actualidad',
    description:
      'Liderazgo técnico en el desarrollo de software a medida, administración de plataformas de rastreo satelital GPS, integración de inteligencia artificial y automatización de procesos operativos e infraestructura tecnológica.',
    responsibilities: [
      'Desarrollar, implementar y mantener aplicaciones de software de acuerdo con los requerimientos operativos de la organización.',
      'Diseñar, automatizar y optimizar procesos operativos mediante herramientas tecnológicas e inteligencia artificial.',
      'Integrar soluciones de inteligencia artificial para mejorar la productividad y apoyar las actividades del personal administrativo.',
      'Administrar, mantener y optimizar bases de datos relacionales y no relacionales, garantizando su disponibilidad, integridad y seguridad.',
      'Desarrollar e integrar servicios web, APIs REST y aplicaciones para asegurar la interoperabilidad entre diferentes plataformas.',
      'Administrar, actualizar y dar mantenimiento a sitios web, aplicaciones web y servidores asociados (Windows y Linux).',
      'Configurar, implementar y administrar plataformas de rastreo satelital (GPS), realizando análisis de información, monitoreo en tiempo real y generación de reportes.',
      'Analizar datos provenientes de sistemas de telemetría GPS para apoyar la toma de decisiones y optimizar la operación vehicular.',
      'Brindar soporte técnico especializado a aplicaciones, plataformas tecnológicas, redes de datos y sistemas de información.',
      'Elaborar documentación técnica de desarrollos, procesos, integraciones y manuales de usuario.',
      'Participar en proyectos de innovación y transformación digital, implementando buenas prácticas de seguridad informática, respaldo de información y control de accesos.',
      'Realizar pruebas, mantenimiento y mejoras continuas a los sistemas de información existentes.'
    ],
    achievements: [
      'Digitalización del control preoperacional de vehículos y equipos, análisis de datos de flotas y generación automatizada de reportes de auditoría.',
      'Consolidación de flujos automatizados e integraciones con IA para reducir tiempos operativos del área administrativa.',
      'Alta disponibilidad y seguridad en la administración de bases de datos, servidores y plataformas de monitoreo satelital.'
    ],
    technologies: [
      'Node.js',
      'React',
      'Next.js',
      'PostgreSQL',
      'MySQL',
      'SQL Server',
      'APIs REST',
      'n8n',
      'Inteligencia Artificial',
      'Telemetría GPS',
      'Linux & Windows Server',
      'Docker'
    ]
  },
  {
    id: 'exp-02',
    role: 'Desarrollador Web & Soporte de Plataformas Tecnológicas',
    company: 'Universidad Cooperativa de Colombia',
    startDate: 'Sector Educativo',
    endDate: 'Experiencia Institucional',
    description:
      'Gestión de plataformas tecnológicas universitarias, monitoreo de sistemas de información internos, optimización de reportes en bases de datos y desarrollo de interfaces web.',
    responsibilities: [
      'Apoyo en la gestión y administración de plataformas tecnológicas institucionales.',
      'Mantenimiento preventivo, correctivo y monitoreo continuo de sistemas de información internos.',
      'Participación en la mejora y generación de reportes internos mediante consultas SQL.',
      'Desarrollo y participación en proyectos web institucionales, diseño de interfaces (UI) y optimización de la experiencia de usuario (UX) en plataformas digitales.'
    ],
    achievements: [
      'Optimización de la usabilidad y experiencia de usuario en portales digitales institucionales.',
      'Agilización en la entrega de reportes operativos mediante consultas estructuradas en bases de datos SQL.'
    ],
    technologies: [
      'Desarrollo Web',
      'SQL',
      'Diseño UI/UX',
      'Sistemas de Información',
      'Plataformas Institucionales'
    ]
  },
  {
    id: 'exp-03',
    role: 'Desarrollador Web & Productor de Contenidos Digitales',
    company: 'Escuelas de Conducción — Contenidos Digitales',
    startDate: 'Sector Formación Vial',
    endDate: 'Experiencia Digital',
    description:
      'Administración integral de presencia web, creación de recursos educativos interactivos y soporte técnico a la infraestructura tecnológica.',
    responsibilities: [
      'Desarrollo, actualización y mantenimiento continuo de la página web institucional.',
      'Creación y estructuración de contenido educativo digital orientado a la formación vial.',
      'Producción de piezas gráficas, multimedia y contenido estratégico para redes sociales.',
      'Soporte técnico a equipos, plataformas digitales y usuarios de la organización.'
    ],
    achievements: [
      'Modernización del portal web y digitalización de materiales pedagógicos para los estudiantes.',
      'Consolidación de la identidad visual y comunicación digital de la escuela.'
    ],
    technologies: [
      'Desarrollo Web',
      'Diseño Multimedia',
      'Adobe Illustrator',
      'Adobe InDesign',
      'Diseño UI/UX',
      'Soporte Técnico'
    ]
  }
];

export const educationData: IEducation[] = [
  {
    id: 'edu-01',
    degree: 'Ingeniero de Sistemas',
    institution: 'Corporación Universitaria del Meta (UNIMETA)',
    period: 'Título Profesional Universitario',
    description:
      'Formación profesional en arquitectura y desarrollo de software, ingeniería de bases de datos, redes y telecomunicaciones, automatización, inteligencia artificial y gestión de proyectos de transformación digital.'
  },
  {
    id: 'edu-02',
    degree: 'Tecnólogo en Desarrollo de Software Multimedia y Web',
    institution: 'Servicio Nacional de Aprendizaje (SENA)',
    period: 'Título Tecnológico',
    description:
      'Formación especializada en construcción de aplicaciones web, diseño de interfaces interactivas, experiencia de usuario (UI/UX), integración de contenidos multimedia y bases de datos.'
  },
  {
    id: 'edu-03',
    degree: 'Formación Complementaria y Especialización Técnica',
    institution: 'Actualización Continua en Ingeniería, Datos, Redes y Diseño Digital',
    period: 'Cursos y Diplomados',
    description:
      'Capacitación continua en ciencia de datos, inteligencia artificial, telecomunicaciones, desarrollo backend/frontend y herramientas de diseño interactivo:',
    complementary: [
      'Análisis exploratorio de datos en Python',
      'Introducción a la inteligencia artificial',
      'Introducción al análisis de datos',
      'Construcción de bases de datos con MySQL',
      'Desarrollo web con PHP',
      'Diseño UI/UX con Adobe Experience Design',
      'Diseño vectorial con Adobe Illustrator CC',
      'Creación de publicaciones digitales e interactivas con InDesign',
      'Diseño y maquetación de publicaciones con Adobe InDesign',
      'Marketing digital para E-commerce',
      'Redes y medios de transmisión',
      'Aplicación del reglamento técnico para redes internas de telecomunicaciones',
      'Modulación en sistemas de radio digital',
      'Comunicaciones analógicas'
    ]
  }
];