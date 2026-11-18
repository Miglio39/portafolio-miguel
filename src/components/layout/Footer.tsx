import { profileData } from '../../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-[#070A12] border-t border-white/10 text-textMuted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Identidad */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/40 flex items-center justify-center font-mono font-bold text-primary text-sm">
                MA
              </div>
              <span className="font-bold text-white tracking-wide">
                {profileData.name}
              </span>
            </div>
            <p className="text-sm text-textMuted max-w-md leading-relaxed">
              {profileData.title}
            </p>
            <p className="text-xs font-mono text-primary">
              📍 {profileData.contact.location}
            </p>
          </div>

          {/* Navegación rápida */}
          <div className="md:col-span-3 space-y-2">
            <p className="font-mono text-xs uppercase tracking-wider text-white mb-3">
              Secciones
            </p>
            <ul className="space-y-2 text-sm">
              <li><a href="/#inicio" className="hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="/#sobre-mi" className="hover:text-primary transition-colors">Sobre mí</a></li>
              <li><a href="/#proyectos" className="hover:text-primary transition-colors">Proyectos</a></li>
              <li><a href="/#habilidades" className="hover:text-primary transition-colors">Habilidades</a></li>
              <li><a href="/#experiencia" className="hover:text-primary transition-colors">Experiencia</a></li>
            </ul>
          </div>

          {/* Enlaces Profesionales */}
          <div className="md:col-span-3 space-y-2">
            <p className="font-mono text-xs uppercase tracking-wider text-white mb-3">
              Conectar
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GitHub (@Miglio39)
                </a>
              </li>
              <li>
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn Oficial
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="hover:text-primary transition-colors break-all"
                >
                  {profileData.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© {currentYear} {profileData.name}. Todos los derechos reservados.</p>
          <p className="text-gray-500">
            Desarrollado con React • TypeScript • Tailwind CSS • Docker
          </p>
        </div>
      </div>
    </footer>
  );
}