import { createFileRoute } from '@tanstack/react-router';
import { CFG } from '@/data/site';
import { Header } from '@/components/site/Header';
import { Hero } from '@/components/site/Hero';
import { About } from '@/components/site/About';
import { Stats } from '@/components/site/Stats';
import { Services } from '@/components/site/Services';
import { Projects } from '@/components/site/Projects';
import { Differentials } from '@/components/site/Differentials';
import { Reviews } from '@/components/site/Reviews';
import { Location } from '@/components/site/Location';
import { CTA } from '@/components/site/CTA';
import { Footer } from '@/components/site/Footer';

const title = 'F Dois Engenharia | Engenharia e Construção Civil em Natal';
const description = 'F Dois Engenharia: mais de 24 anos de experiência em engenharia e construção civil em Natal, Rio Grande do Norte.';
export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title }, { name: 'description', content: description },
      { property: 'og:title', content: title }, { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' }, { property: 'og:locale', content: 'pt_BR' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'og:url', content: '/' },
    ],
    links: [{ rel: 'canonical', href: '/' }],
    scripts: [{ type: 'application/ld+json', children: JSON.stringify({
      '@context': 'https://schema.org', '@type': 'GeneralContractor', name: CFG.company.name,
      telephone: CFG.contact.phoneHref.replace('tel:', ''),
      address: { '@type': 'PostalAddress', streetAddress: 'R. Dr. Múcio Galvão, 426 - Tirol', addressLocality: 'Natal', addressRegion: 'RN', postalCode: '59020-550', addressCountry: 'BR' },
      areaServed: 'Natal, RN', aggregateRating: { '@type': 'AggregateRating', ratingValue: 4.9, reviewCount: 8 },
    }) }],
  }),
  component: Index,
});
function Index(){return <><Header/><main id="conteudo"><Hero/><About/><Stats/><Services/><Projects/><Differentials/><Reviews/><Location/><CTA/></main><Footer/></>}
