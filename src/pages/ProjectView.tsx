import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import { profileData } from '../data/profile';
import SEO from '../components/ui/SEO';

export default function ProjectView() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  // Datos estructurados Schema.org vinculando el proyecto con Miguel Ángel Acevedo Amaya
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    alternateName: project.shortTitle,
    description: project.fullDescription,
    programmingLanguage: project.technologies,
    codeRepository: project.repoUrl || undefined,
    url: `${profileData.contact.domain.replace(/\/$/, '')}/proyectos/${project.slug}`,
    author: {
      '@type': 'Person',
      name: profileData.name,
      jobTitle: profileData.role,
      url: profileData.contact.domain
    }
  };

  return (
    <div className="relative w-full bg-grid-pattern min-h-screen pb-24">
      {/* SEO Dinámico + Schema.org del Proyecto */}
      <SEO
        title={`${project.shortTitle} — Proyecto de Software`}
        description={project.shortDescription}
        path={`/proyectos/${project.slug}`}
        jsonLd={projectSchema}
      />

      {/* Luces ambientales */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[130px]" />
      </div>

      <article className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="mb-8">
          <Link
            to="/#proyectos"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface/80 border border-white/10 text-textMuted hover:text-primary hover:border-primary/40 transition-all text-sm font-mono"
          >
            <span>← Volver al portafolio de proyectos</span>
          </Link>
        </div>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-3xl bg-surface/80 border border-white/10 backdrop-blur-xl shadow-2xl mb-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-primary/15 text-primary border border-primary/30">
              {project.category}
            </span>
            <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Estado: {project.status}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            {project.title}
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-background/80 border border-white/10 text-xs font-mono text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-cyan-400 text-background font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-primary/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <span>Ver Repositorio en GitHub</span>
                <ArrowRight size={16} />
              </a>
            )}
          </div>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 rounded-3xl bg-surface/60 border border-white/10">
              <span className="font-mono text-xs text-primary uppercase tracking-wider">
                // 01. CONTEXTO Y NECESIDAD
              </span>
              <h2 className="text-xl font-bold text-white mt-1 mb-3">
                Problema o necesidad que resuelve
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-surface/60 border border-white/10">
              <span className="font-mono text-xs text-primary uppercase tracking-wider">
                // 02. METAS TRAZADAS
              </span>
              <h2 className="text-xl font-bold text-white mt-1 mb-4">
                Objetivos del proyecto
              </h2>
              <ul className="space-y-3">
                {project.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base">
                    <span className="font-mono text-xs text-primary bg-primary/10 border border-primary/30 px-2 py-0.5 rounded mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-surface/90 to-primary/5 border border-primary/30">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider mb-1">
                <Terminal size={15} />
                <span>// 03. ROL Y RESPONSABILIDAD TÉCNICA</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-3">
                Mi participación en el desarrollo
              </h2>
              <p className="text-gray-200 leading-relaxed">
                {project.participation}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-surface/60 border border-white/10">
              <span className="font-mono text-xs text-primary uppercase tracking-wider">
                // 04. ALCANCE FUNCIONAL
              </span>
              <h2 className="text-xl font-bold text-white mt-1 mb-4">
                Funcionalidades principales
              </h2>
              <ul className="space-y-2.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-[#090D16] border border-white/10">
              <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">
                // 05. DISEÑO DE SISTEMAS
              </span>
              <h2 className="text-xl font-bold text-white mt-1 mb-4">
                Arquitectura general
              </h2>
              <div className="space-y-4">
                {project.architecture.map((arch, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-surface/60 border border-white/5 text-xs sm:text-sm text-gray-300 font-mono leading-relaxed"
                  >
                    {arch}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="p-8 sm:p-10 rounded-3xl bg-surface/50 border border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <span className="font-mono text-xs text-primary uppercase tracking-wider">
                // 06. EVIDENCIA VISUAL Y GALERÍA
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Capturas de pantalla del proyecto
              </h2>
            </div>
            <span className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
              Espacios ilustrativos — Listos para reemplazar en src/assets/
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.galleryPlaceholders.map((caption, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-background/90 border border-dashed border-white/15 hover:border-primary/40 overflow-hidden flex flex-col justify-between transition-all"
              >
                <div className="aspect-video w-full bg-gradient-to-br from-slate-900 via-surface to-slate-900 flex flex-col items-center justify-center p-6 text-center relative">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-mono text-xs mb-3">
                    IMG 0{index + 1}
                  </div>
                  <p className="text-xs font-mono text-textMuted">
                    [Espacio reservado para captura real]
                  </p>
                </div>
                <div className="p-4 border-t border-white/10 bg-surface/40">
                  <p className="text-xs text-gray-300 leading-relaxed">{caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}