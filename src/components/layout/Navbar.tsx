import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '/#inicio' },
    { name: 'Sobre mí', href: '/#sobre-mi' },
    { name: 'Proyectos', href: '/#proyectos' },
    { name: 'Habilidades', href: '/#habilidades' },
    { name: 'Experiencia', href: '/#experiencia' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav className="max-w-7xl mx-auto bg-surface/75 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo estilo Desarrollador */}
          <a href="/#inicio" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/40 flex items-center justify-center font-mono font-bold text-primary group-hover:border-primary transition-all">
              MA
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-wide text-textMain group-hover:text-primary transition-colors">
                Miguel Acevedo
              </span>
              <span className="font-mono text-[11px] text-textMuted">
                Systems & Web Eng.
              </span>
            </div>
          </a>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center space-x-1 bg-background/50 px-3 py-1.5 rounded-xl border border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-textMuted hover:text-textMain hover:bg-white/5 transition-all text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Botón Contacto Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/#contacto"
              className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-sm text-background bg-gradient-to-r from-primary to-cyan-400 rounded-xl hover:opacity-95 transition-all shadow-lg shadow-primary/20 font-semibold"
            >
              Contactarme
            </a>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-textMuted hover:text-textMain hover:bg-white/5 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú Desplegable Móvil */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-textMuted hover:text-primary hover:bg-white/5 rounded-xl"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="/#contacto"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-2.5 bg-primary text-background font-semibold rounded-xl text-sm"
              >
                Contactarme
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}