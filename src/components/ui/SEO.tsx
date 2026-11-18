import { Helmet } from 'react-helmet-async';
import { profileData } from '../../data/profile';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  jsonLd?: Record<string, unknown>;
}

export default function SEO({
  title,
  description,
  path = '',
  jsonLd
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${profileData.name}`
    : `${profileData.name} | Ingeniero de Sistemas & Desarrollador de Software`;

  const metaDescription =
    description || profileData.description;

  const cleanDomain = profileData.contact.domain.replace(/\/$/, '');
  const canonicalUrl = `${cleanDomain}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Dinámico */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter Card Dinámica */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />

      {/* Datos Estructurados JSON-LD adicionales por ruta */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}