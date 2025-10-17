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
      streetAddress: '123 Plumbing Street',
      addressLocality: 'Anytown',
      addressRegion: 'USA',
      postalCode: '12345',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.7128,
      longitude: -74.006
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
    servesCuisine: 'Plumbing Services, Gas Fitting, Heating Services'
  };
  return <Helmet>
      {/* Primary Meta Tags */}
      <title>
        Solutions Plumbing | Professional Plumbing, Gas & Heating Services
      </title>
      <meta name="title" content="Solutions Plumbing | Professional Plumbing, Gas & Heating Services" />
      <meta name="description" content="Trusted provider of residential and commercial plumbing, gas fitting, and heating services. 24/7 emergency service available. Licensed and insured professionals." />
      {/* Canonical URL */}
      <link rel="canonical" href="https://www.solutionsplumbing.com" />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.solutionsplumbing.com" />
      <meta property="og:title" content="Solutions Plumbing | Professional Plumbing, Gas & Heating Services" />
      <meta property="og:description" content="Trusted provider of residential and commercial plumbing, gas fitting, and heating services. 24/7 emergency service available. Licensed and insured professionals." />
      <meta property="og:image" content="/SolutionsPlumbingTransparentBG.png" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.solutionsplumbing.com" />
      <meta property="twitter:title" content="Solutions Plumbing | Professional Plumbing, Gas & Heating Services" />
      <meta property="twitter:description" content="Trusted provider of residential and commercial plumbing, gas fitting, and heating services. 24/7 emergency service available. Licensed and insured professionals." />
      <meta property="twitter:image" content="/SolutionsPlumbingTransparentBG.png" />
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
    </Helmet>;
}