import { site } from '@/config/site';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.brand,
    alternateName: site.short,
    description: site.description,
    url: typeof window !== 'undefined' ? window.location.origin : '',
    telephone: '+62XXXXXXXXXX', // Update with actual phone
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address,
      addressLocality: site.baseCity,
      addressRegion: 'Jawa Timur',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-7.5546',
      longitude: '112.4313',
    },
    areaServed: site.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    openingHours: [
      'Mo-Fr 08:00-17:00',
      'Sa 08:00-14:00',
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '150',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const services = [
    {
      name: 'Renovasi Rumah & Ruko',
      description: 'Layanan renovasi bangunan rumah tinggal dan ruko dengan hasil presisi',
    },
    {
      name: 'Konstruksi Bangunan',
      description: 'Pembangunan konstruksi dari fondasi hingga finishing',
    },
    {
      name: 'Interior & Finishing',
      description: 'Desain dan eksekusi interior serta finishing berkualitas',
    },
    {
      name: 'Drafter & Gambar Teknik CAD',
      description: 'Jasa pembuatan gambar kerja teknik 2D dan 3D profesional',
    },
    {
      name: 'Perbaikan & Maintenance',
      description: 'Layanan perbaikan dan maintenance bangunan',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'Service',
      position: index + 1,
      name: service.name,
      description: service.description,
      provider: {
        '@type': 'LocalBusiness',
        name: site.brand,
      },
      areaServed: site.serviceAreas,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: typeof window !== 'undefined' ? `${window.location.origin}${item.url}` : item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const logoUrl = '/media/logos/logosiluet.png';
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.brand,
    alternateName: site.short,
    url: typeof window !== 'undefined' ? window.location.origin : '',
    logo: typeof window !== 'undefined' ? `${window.location.origin}${logoUrl}` : logoUrl,
    description: site.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address,
      addressLocality: site.baseCity,
      addressRegion: 'Jawa Timur',
      postalCode: '61300',
      addressCountry: 'ID',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62XXXXXXXXXX',
      contactType: 'customer service',
      areaServed: 'ID',
      availableLanguage: 'Indonesian',
    },
    sameAs: [
      // Add social media URLs here when available
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
