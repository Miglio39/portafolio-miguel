import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProjectView from './pages/ProjectView';

function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4">
      <span className="font-mono text-primary text-sm uppercase tracking-widest mb-2">
        // ERROR 404
      </span>
      <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
        Ruta no encontrada
      </h1>
      <p className="text-textMuted max-w-md mb-8 text-sm sm:text-base">
        La dirección que buscas no existe o fue movida dentro del portafolio.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-xl bg-primary text-background font-bold text-sm hover:opacity-95 transition-all"
      >
        ← Volver al inicio
      </Link>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="proyectos/:slug" element={<ProjectView />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;