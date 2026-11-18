export interface ISkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: string[];
}

export const skillsData: ISkillCategory[] = [
  {
    id: '01',
    title: 'Desarrollo de Software & Web',
    subtitle: 'Construcción de aplicaciones Full Stack, arquitecturas escalables e interfaces modernas.',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'Python',
      'Django',
      'PHP',
      'HTML5 & CSS3',
      'Tailwind CSS',
      'EJS'
    ]
  },
  {
    id: '02',
    title: 'Bases de Datos & Análisis de Datos',
    subtitle: 'Administración, integridad, seguridad y análisis de información relacional y NoSQL.',
    skills: [
      'PostgreSQL',
      'MySQL',
      'SQL Server',
      'Firebase (NoSQL)',
      'SQLite3',
      'Prisma ORM',
      'Consultas SQL & Reportes',
      'Análisis Exploratorio de Datos'
    ]
  },
  {
    id: '03',
    title: 'Automatización, APIs e IA',
    subtitle: 'Interoperabilidad entre plataformas, optimización operativa e inteligencia artificial.',
    skills: [
      'Desarrollo y Consumo de APIs REST',
      'n8n (Workflow Automation)',
      'Inteligencia Artificial Aplicada',
      'Evolution API',
      'WhatsApp Business API',
      'Google Sheets API',
      'Automatización de Procesos'
    ]
  },
  {
    id: '04',
    title: 'Infraestructura, Servidores & Redes',
    subtitle: 'Despliegue en contenedores, seguridad informática, servidores y telecomunicaciones.',
    skills: [
      'Servidores Linux & Windows',
      'Docker & Contenedores',
      'EasyPanel',
      'Administración de VPS',
      'Redes de Datos y Telecomunicaciones',
      'Seguridad Informática & Respaldos',
      'Git & GitHub'
    ]
  },
  {
    id: '05',
    title: 'Telemetría GPS, Multimedia & UI/UX',
    subtitle: 'Sistemas de rastreo satelital, entornos interactivos 360° y diseño de experiencia de usuario.',
    skills: [
      'Sistemas de Rastreo Satelital (GPS)',
      'Plataformas de Telemetría (Traccar)',
      'Recorridos Virtuales 360° & A-Frame',
      'Mapas Interactivos (Leaflet)',
      'Diseño UI/UX (Adobe XD)',
      'Adobe Illustrator & InDesign'
    ]
  }
];