import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { experienceData, educationData } from '../data/experience';
import fotoPerfil from '../assets/foto-perfil.jpg';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sent'>('idle');

  const pillars = [
    "Desarrollo Web Full Stack",
    "Experiencias Interactivas & 360°",
    "Automatización de Procesos",
    "Integración de Sistemas & APIs"
  ];

  const categories = [
    'Todos',
    'Web & Multimedia 360°',
    'Telemetría & Sistemas',
    'Automatización & APIs',
    'Arquitectura & UI/UX'
  ];

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Contacto desde Portafolio Web - ${formData.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Nombre: ${formData.name}\nCorreo: ${formData.email}\n\nMensaje:\n${formData.message}`
    );
    window.location.href = `mailto:${profileData.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormStatus('sent');
  };

  return (
    <div className="relative w-full bg-grid-pattern">
      {/* Luces ambientales de fondo (Aurora Glow) */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      {/* ================= HERO SECTION ================= */}
      <section
        id="inicio"
        className="relative z-10 min-h-[90vh] flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Columna Izquierda: Texto e Identidad */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface/90 border border-white/10 backdrop-blur-md shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-gray-300">
                {profileData.role} • {profileData.contact.location}
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-textMuted font-mono text-sm sm:text-base flex items-center gap-2">
                <Terminal size={16} className="text-primary" />
                <span>Hola, soy</span>
              </p>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-400">
                  Miguel Ángel
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyan-300 to-secondary">
                  Acevedo Amaya
                </span>
              </h1>
            </div>

            <h2 className="text-lg sm:text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
              Desarrollador de Software, Aplicaciones Web Interactivas,{' '}
              <span className="text-white font-semibold underline decoration-primary/60 decoration-2 underline-offset-4">
                Automatización de Procesos
              </span>{' '}
              e Integración Tecnológica.
            </h2>

            <p className="text-textMuted text-base sm:text-lg leading-relaxed max-w-2xl">
              {profileData.heroText}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="px-3 py-1 text-xs font-mono text-cyan-300 bg-primary/10 border border-primary/20 rounded-lg"
                >
                  {pillar}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center pt-4">
              <a
                href="#proyectos"
                className="group px-7 py-3.5 bg-gradient-to-r from-primary to-cyan-400 text-background font-bold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center gap-2"
              >
                Explorar proyectos
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#sobre-mi"
                className="px-7 py-3.5 bg-surface/80 hover:bg-surface text-textMain border border-white/10 hover:border-primary/40 font-semibold rounded-xl transition-all backdrop-blur-sm"
              >
                Conocer mi perfil
              </a>
              <a
                href="#contacto"
                className="px-6 py-3.5 bg-transparent hover:bg-white/5 text-primary border border-primary/40 font-semibold rounded-xl transition-all"
              >
                Contactarme
              </a>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 max-w-xl">
              <div className="flex items-center gap-3">
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-xl bg-surface border border-white/10 text-textMuted hover:text-primary hover:border-primary/40 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-xl bg-surface border border-white/10 text-textMuted hover:text-primary hover:border-primary/40 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  aria-label="Correo electrónico"
                  className="p-2.5 rounded-xl bg-surface border border-white/10 text-textMuted hover:text-primary hover:border-primary/40 transition-all"
                >
                  <Mail size={20} />
                </a>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-textMuted">
                <span>React • TypeScript • Node.js • Docker • n8n</span>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Marco Multimedia & Retrato Profesional */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative mx-auto w-full max-w-sm sm:max-w-md"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary/30 via-secondary/20 to-transparent rounded-3xl blur-2xl opacity-70" />

            <div className="relative rounded-3xl bg-surface/90 border border-white/15 shadow-2xl overflow-hidden backdrop-blur-xl">
              <div className="flex items-center justify-between px-4 py-3 bg-background/80 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-[11px] text-textMuted">
                  miguel-acevedo.profile
                </span>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-primary/15 text-primary">
                  v2026
                </span>
              </div>

              <div className="relative aspect-[4/5] w-full bg-gradient-to-b from-slate-800/40 to-background overflow-hidden">
                <img
                  src={fotoPerfil}
                  alt="Miguel Ángel Acevedo Amaya - Ingeniero de Sistemas"
                  className="w-full h-full object-cover object-top scale-95 rounded-b-2xl transition-transform duration-700 hover:scale-100"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/60 to-transparent" />

                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between px-4 py-2.5 rounded-xl bg-surface/85 backdrop-blur-md border border-white/10">
                  <div>
                    <p className="text-xs font-mono text-primary">ARQUITECTURA & WEB</p>
                    <p className="text-sm font-bold text-white">Soluciones Digitales</p>
                  </div>
                  <div className="h-8 w-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-mono text-xs font-bold">
                    360°
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex items-center gap-3 absolute -left-8 top-14 px-4 py-3 rounded-2xl bg-surface/90 backdrop-blur-xl border border-white/15 shadow-xl"
            >
              <div className="p-2 rounded-xl bg-primary/15 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-white">Web & Entornos 360°</p>
                <p className="text-[11px] font-mono text-textMuted">React • A-Frame • UI/UX</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex items-center gap-3 absolute -right-6 bottom-24 px-4 py-3 rounded-2xl bg-surface/90 backdrop-blur-xl border border-white/15 shadow-xl"
            >
              <div className="p-2 rounded-xl bg-secondary/15 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-white">Automatización & Cloud</p>
                <p className="text-[11px] font-mono text-textMuted">n8n • APIs • Docker VPS</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ================= SECCIÓN SOBRE MÍ (BENTO GRID) ================= */}
      <section id="sobre-mi" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            // 01. PERFIL PROFESIONAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Ingeniería de Sistemas orientada a{' '}
            <span className="text-primary">resultados reales</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 p-8 rounded-3xl bg-surface/70 border border-white/10 backdrop-blur-md flex flex-col justify-between space-y-6 hover:border-primary/30 transition-all">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">
                Sobre mí
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Soy <strong className="text-white">Miguel Ángel Acevedo Amaya</strong>, Ingeniero de Sistemas apasionado por diseñar y construir tecnología que resuelve necesidades reales en las organizaciones. Mi enfoque combina el desarrollo de software moderno con la automatización de procesos empresariales y la integración de múltiples plataformas digitales.
              </p>
              <p className="text-textMuted leading-relaxed">
                A lo largo de mi trayectoria tecnológica, he desarrollado desde plataformas interactivas con recorridos virtuales en 360° y asistentes de inteligencia artificial, hasta sistemas de telemetría GPS vehicular, digitalización de inspecciones operativas y flujos automatizados que conectan bases de datos, APIs REST y canales de comunicación corporativa.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <p className="text-xs font-mono text-textMuted">ENFOQUE</p>
                <p className="text-sm font-semibold text-white mt-0.5">Soluciones End-to-End</p>
              </div>
              <div>
                <p className="text-xs font-mono text-textMuted">INFRAESTRUCTURA</p>
                <p className="text-sm font-semibold text-white mt-0.5">Docker & Linux VPS</p>
              </div>
              <div>
                <p className="text-xs font-mono text-textMuted">ARQUITECTURA</p>
                <p className="text-sm font-semibold text-white mt-0.5">Web, APIs & Automatización</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl bg-[#090D16] border border-white/10 overflow-hidden flex flex-col shadow-xl">
            <div className="px-4 py-3 bg-surface/80 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-mono text-xs text-textMuted">bash — miguel@devops:~</span>
            </div>
            <div className="p-6 font-mono text-xs sm:text-sm space-y-3 text-gray-300 leading-relaxed">
              <p className="text-emerald-400">$ whoami</p>
              <p className="pl-2 text-white">Miguel Ángel Acevedo Amaya — Ingeniero de Sistemas</p>
              
              <p className="text-emerald-400 pt-2">$ cat especialidades.json</p>
              <pre className="pl-2 text-cyan-300 overflow-x-auto">
{`{
  "desarrollo": ["React", "TypeScript", "Node.js"],
  "multimedia": ["Recorridos 360°", "A-Frame", "Mapas"],
  "automatizacion": ["n8n", "Evolution API", "REST"],
  "infraestructura": ["Docker", "EasyPanel", "Linux VPS"]
}`}
              </pre>
              <p className="text-emerald-400 pt-2 flex items-center gap-1">
                <span>$ status --production</span>
                <span className="w-2 h-4 bg-primary animate-pulse inline-block" />
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-3xl bg-surface/50 border border-white/10 hover:border-primary/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4 font-mono font-bold">
              01
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Desarrollo Web & Multimedia</h4>
            <p className="text-sm text-textMuted leading-relaxed">
              Construcción de aplicaciones web modernas, interfaces intuitivas, mapas interactivos y visualización de espacios en 360° orientados a la experiencia del usuario.
            </p>
          </div>

          <div className="lg:col-span-4 p-6 rounded-3xl bg-surface/50 border border-white/10 hover:border-primary/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center mb-4 font-mono font-bold">
              02
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Automatización Empresarial</h4>
            <p className="text-sm text-textMuted leading-relaxed">
              Optimización de flujos operativos mediante n8n, integración de bots y notificaciones por WhatsApp, procesamiento de datos y conexión entre sistemas.
            </p>
          </div>

          <div className="lg:col-span-4 p-6 rounded-3xl bg-surface/50 border border-white/10 hover:border-primary/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-4 font-mono font-bold">
              03
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Integración & Telemetría</h4>
            <p className="text-sm text-textMuted leading-relaxed">
              Despliegue en servidores Linux con Docker, administración de bases de datos SQL/NoSQL e integración de plataformas de monitoreo satelital GPS en tiempo real.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECCIÓN PORTAFOLIO DE PROYECTOS ================= */}
      <section id="proyectos" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              // 02. PORTAFOLIO DE SOFTWARE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Proyectos &{' '}
              <span className="text-primary">Soluciones Tecnológicas</span>
            </h2>
          </div>
          <p className="text-textMuted text-sm max-w-md">
            Explora cada proyecto en detalle para conocer su arquitectura, las tecnologías implementadas y el problema real que resuelve.
          </p>
        </div>

        {/* Filtros por Categoría */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl font-mono text-xs transition-all cursor-pointer ${
                  active
                    ? 'bg-primary text-background font-bold shadow-lg shadow-primary/20'
                    : 'bg-surface/70 text-textMuted border border-white/10 hover:border-primary/40 hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Grilla de Tarjetas de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="group rounded-3xl bg-surface/75 border border-white/10 hover:border-primary/50 overflow-hidden flex flex-col justify-between transition-all hover:shadow-2xl hover:shadow-primary/10"
            >
              <div>
                <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-slate-900 via-[#131C31] to-background border-b border-white/10 p-6 flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-lg bg-background/80 border border-white/10 text-primary">
                      #{project.id}
                    </span>
                    <span className="font-mono text-[11px] px-2.5 py-1 rounded-lg bg-background/80 border border-white/10 text-gray-300">
                      {project.category}
                    </span>
                  </div>

                  <div className="my-auto text-center px-2 z-10">
                    <p className="font-mono text-xs text-cyan-300/90 mb-1">
                      [Vista Previa Ilustrativa]
                    </p>
                    <p className="text-xs text-textMuted line-clamp-2">
                      {project.coverPlaceholderLabel}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 z-10">
                    <span>● {project.status}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.shortTitle}
                  </h3>
                  <p className="text-sm text-textMuted leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-background/70 border border-white/5 text-[11px] font-mono text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 rounded-md bg-primary/10 text-[11px] font-mono text-primary">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3">
                <Link
                  to={`/proyectos/${project.slug}`}
                  className="w-full py-3 px-4 rounded-xl bg-background/90 hover:bg-primary text-textMain hover:text-background border border-white/10 hover:border-primary font-semibold text-sm transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Ver documentación técnica</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ================= SECCIÓN HABILIDADES TÉCNICAS ================= */}
      <section id="habilidades" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            // 03. STACK TECNOLÓGICO
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Habilidades <span className="text-primary">Técnicas</span>
          </h2>
          <p className="text-textMuted text-sm sm:text-base mt-2 max-w-2xl">
            Tecnologías, lenguajes, motores de bases de datos y herramientas de infraestructura con las que diseño e implemento soluciones digitales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => (
            <div
              key={category.id}
              className="p-7 rounded-3xl bg-surface/65 border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-primary bg-primary/10 border border-primary/30 px-2.5 py-1 rounded-lg">
                    CAT // {category.id}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-xs text-textMuted mb-6 leading-relaxed">
                  {category.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl bg-background/80 border border-white/10 text-xs font-mono text-gray-200 hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECCIÓN EXPERIENCIA Y FORMACIÓN ================= */}
      <section id="experiencia" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            // 04. TRAYECTORIA & ACADEMIA
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Experiencia Profesional &{' '}
            <span className="text-primary">Formación Académica</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Columna Experiencia Profesional (7 columnas) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-mono text-sm uppercase tracking-wider text-cyan-300 flex items-center gap-2">
              <span>● Trayectoria y Práctica Profesional</span>
            </h3>

            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className="p-8 rounded-3xl bg-surface/70 border border-white/10 space-y-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <p className="text-sm text-primary font-medium mt-1">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-background/80 border border-white/10 font-mono text-xs text-gray-300">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <p className="font-mono text-xs uppercase text-textMuted mb-3">
                    Responsabilidades principales:
                  </p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <span className="text-primary mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase text-textMuted mb-3">
                    Logros y soluciones implementadas:
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <span className="text-emerald-400 mt-1">✓</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-background/80 border border-white/10 font-mono text-xs text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Columna Formación Académica (5 columnas) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-mono text-sm uppercase tracking-wider text-cyan-300 flex items-center gap-2">
              <span>● Formación Académica</span>
            </h3>

            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="p-8 rounded-3xl bg-surface/70 border border-white/10 space-y-5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/15 border border-primary/30 font-mono text-xs text-primary">
                    {edu.period}
                  </span>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white">{edu.degree}</h4>
                  <p className="text-sm text-gray-300 mt-1">{edu.institution}</p>
                </div>

                <p className="text-sm text-textMuted leading-relaxed">
                  {edu.description}
                </p>

                {edu.complementary && (
                  <div className="pt-4 border-t border-white/10">
                    <p className="font-mono text-xs uppercase text-white mb-3">
                      Áreas de Enfoque y Especialización:
                    </p>
                    <ul className="space-y-2.5">
                      {edu.complementary.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                          <span className="text-primary">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            {/* Nota de arquitectura escalable */}
            <div className="p-6 rounded-3xl bg-[#090D16] border border-white/10 font-mono text-xs text-textMuted space-y-2">
              <p className="text-primary">// ESTRUCTURA EDITABLE</p>
              <p>
                Los registros de experiencia, cargos, instituciones y certificaciones se administran de forma centralizada desde <span className="text-white">src/data/experience.ts</span>.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECCIÓN CONTACTO ================= */}
      <section id="contacto" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Información de Contacto Directo (5 columnas) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                // 05. CANALES DE CONTACTO
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">
                Hablemos sobre tu{' '}
                <span className="text-primary">próximo proyecto</span>
              </h2>
            </div>

            <p className="text-textMuted leading-relaxed">
              Estoy disponible para oportunidades profesionales, desarrollo de software a medida, automatización de procesos empresariales e integración de plataformas tecnológicas.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${profileData.contact.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-surface/70 border border-white/10 hover:border-primary/40 transition-all"
              >
                <div className="p-3 rounded-xl bg-primary/15 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-mono text-textMuted">CORREO ELECTRÓNICO</p>
                  <p className="text-sm font-semibold text-white">{profileData.contact.email}</p>
                </div>
              </a>

              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-surface/70 border border-white/10 hover:border-primary/40 transition-all"
              >
                <div className="p-3 rounded-xl bg-primary/15 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </div>
                <div>
                  <p className="text-xs font-mono text-textMuted">GITHUB</p>
                  <p className="text-sm font-semibold text-white">github.com/Miglio39</p>
                </div>
              </a>

              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-surface/70 border border-white/10 hover:border-primary/40 transition-all"
              >
                <div className="p-3 rounded-xl bg-primary/15 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div>
                  <p className="text-xs font-mono text-textMuted">LINKEDIN</p>
                  <p className="text-sm font-semibold text-white">Perfil Profesional</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface/40 border border-white/5">
                <div className="p-3 rounded-xl bg-secondary/15 text-secondary font-mono text-sm font-bold">
                  CO
                </div>
                <div>
                  <p className="text-xs font-mono text-textMuted">UBICACIÓN</p>
                  <p className="text-sm font-semibold text-white">{profileData.contact.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto (7 columnas) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-surface/80 border border-white/10 backdrop-blur-xl shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Envíame un mensaje directo
            </h3>
            <p className="text-xs sm:text-sm text-textMuted mb-6">
              Completa los campos a continuación para iniciar una conversación profesional.
            </p>

            <form onSubmit={handleContactSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase text-gray-300 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre o empresa"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-white text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase text-gray-300 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@empresa.com"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-white text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono uppercase text-gray-300 mb-2">
                  Asunto *
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Desarrollo de software / Automatización / Oportunidad laboral"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-white text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntame sobre tu proyecto, requerimiento técnico o propuesta..."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 text-white text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary to-cyan-400 text-background font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-primary/20 cursor-pointer"
              >
                Redactar y enviar mensaje
              </button>

              {formStatus === 'sent' && (
                <p className="text-xs font-mono text-emerald-400 text-center pt-2">
                  ✓ Se ha preparado el mensaje en tu cliente de correo hacia {profileData.contact.email}.
                </p>
              )}
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}