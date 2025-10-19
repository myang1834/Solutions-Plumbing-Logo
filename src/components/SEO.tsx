import React from 'react';
import { Helmet } from 'react-helmet-async';
export function SEO() {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Solutions Plumbing',
    image: "/SolutionsPlumbingTransparentBG.png",
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Main Street',
      addressLocality: 'Melrose',
      addressRegion: 'MA',
      postalCode: '02176',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.4584,
      longitude: -71.0662
    },
    url: 'https://www.solutionsplumbing.com',
    telephone: '555-123-4567',
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00'
    }, {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '16:00'
    }],
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Melrose'
      },
      {
        '@type': 'City', 
        name: 'Boston'
      },
      {
        '@type': 'State',
        name: 'Massachusetts'
      }
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 42.4584,
        longitude: -71.0662
      },
      geoRadius: '50000'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Plumbing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plumbing Services',
            description: 'Professional plumbing installation, repair, and maintenance services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gas Fitting Services',
            description: 'Expert gas line installation, repair, and appliance hookups'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Heating Services',
            description: 'Boiler installation, radiator systems, and heating maintenance'
          }
        }
      ]
    }
  };
  return <Helmet>
      {/* Primary Meta Tags */}
      <title>
        Plumber Melrose MA | Plumbing Services Boston & Massachusetts
      </title>
      <meta name="title" content="Emergency Plumber Melrose MA | 24/7 Plumbing Services Boston & Massachusetts" />
      <meta name="description" content="Licensed emergency plumber in Melrose, MA. 24/7 plumbing services for Boston, Malden & Massachusetts. Expert plumbing, gas fitting & heating. Call now!" />
      <meta name="keywords" content="emergency plumber Melrose MA, plumber Boston, plumbing services Massachusetts, gas fitting Melrose, heating services Boston, leak detection, water heater repair, emergency plumbing, licensed plumber, plumbing contractor" />
      <meta name="geo.region" content="US-MA" />
      <meta name="geo.placename" content="Melrose" />
      <meta name="geo.position" content="42.4584;-71.0662" />
      <meta name="ICBM" content="42.4584, -71.0662" />
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.solutionsplumbing.com" />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.solutionsplumbing.com" />
      <meta property="og:title" content="Emergency Plumber Melrose MA | 24/7 Plumbing Services Boston & Massachusetts" />
      <meta property="og:description" content="Licensed emergency plumber in Melrose, MA. 24/7 plumbing services for Boston, Malden & Massachusetts. Expert plumbing, gas fitting & heating. Call now!" />
      <meta property="og:image" content="/SolutionsPlumbingTransparentBG.png" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Solutions Plumbing" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.solutionsplumbing.com" />
      <meta property="twitter:title" content="Emergency Plumber Melrose MA | 24/7 Plumbing Services Boston & Massachusetts" />
      <meta property="twitter:description" content="Licensed emergency plumber in Melrose, MA. 24/7 plumbing services for Boston, Malden & Massachusetts. Expert plumbing, gas fitting & heating. Call now!" />
      <meta property="twitter:image" content="/SolutionsPlumbingTransparentBG.png" />
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Solutions Plumbing" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Solutions Plumbing" />
      {/* Sitemap */}
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
    </Helmet>;
}