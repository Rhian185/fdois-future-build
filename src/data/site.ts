const img = (name: string) => `/assets/img/${name}.jpg`;
// Video files are optional: the photographs remain visible until the supplied files are added.
const media = (name: string) => ({ image: img(name), video: `/assets/video/${name}.mp4` });

export const CFG = {
  company: {
    name: 'F Dois Engenharia', tagline: 'Construindo o futuro com experiência.',
    phrase: 'Soluções em engenharia | Transformando ideias em realidade.',
    about: 'Com mais de 24 anos de experiência no setor da construção civil, a F Dois Engenharia é uma empresa potiguar dedicada a transformar ideias em realidade por meio de projetos e obras que unem planejamento, qualidade e responsabilidade.',
    address: 'R. Dr. Múcio Galvão, 426 - Tirol, Natal - RN, 59020-550',
    city: 'Natal/RN', copyright: '© 2026 F Dois Engenharia. Todos os direitos reservados.',
  },
  contact: { phone: '(84) 3234-3390', phoneHref: 'tel:+558432343390', whatsapp: '+55 84 98846-4244', whatsappHref: 'https://wa.me/5584988464244' },
  social: { instagram: { label: '@fdoisengenharia', href: 'https://www.instagram.com/fdoisengenharia/' }, linkedin: { label: 'F Dois Engenharia', href: 'https://www.linkedin.com/search/results/companies/?keywords=F%20Dois%20Engenharia' } },
  links: { googleReviews: 'https://www.google.com/search?q=F+Dois+Engenharia+Natal+avalia%C3%A7%C3%B5es', maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('R. Dr. Múcio Galvão, 426 - Tirol, Natal - RN, 59020-550') },
  media: { hero: media('hero'), about: media('sobre'), stats: media('numeros'), cta: media('chamada-final') },
  stats: [
    { value: '24+', label: 'Anos de experiência', count: 24, suffix: '+' },
    { value: '4,9', label: 'Estrelas no Google', count: 4.9, suffix: '' },
    { value: '8', label: 'Avaliações no Google', count: 8, suffix: '' },
    { value: '2,1 mil+', label: 'Seguidores no Instagram', count: 2.1, suffix: ' mil+' },
    { value: '230+', label: 'Seguidores no LinkedIn', count: 230, suffix: '+' },
  ],
  services: [
    { title: 'Projetos e planejamento', description: 'Transformando necessidades em projetos bem estruturados.', icon: 'ruler' },
    { title: 'Construção civil', description: 'Atuação no desenvolvimento e execução de obras.', icon: 'building' },
    { title: 'Execução de obras', description: 'Planejamento, acompanhamento e execução de projetos.', icon: 'hardhat' },
    { title: 'Soluções em engenharia', description: 'Abordagem profissional para diferentes necessidades da construção.', icon: 'drafting' },
  ],
  projects: [
    { title: 'Projeto em destaque', category: 'Residencial', description: 'Espaço para apresentar um projeto residencial.', ...media('projeto-destaque') },
    { title: 'Obra residencial', category: 'Residencial', description: 'Espaço para apresentar uma obra residencial.', ...media('obra-residencial') },
    { title: 'Área de lazer com piscina', category: 'Residencial', description: 'Espaço para apresentar uma área de lazer.', ...media('area-lazer-piscina') },
    { title: 'Interior residencial', category: 'Residencial', description: 'Espaço para apresentar um interior residencial.', ...media('interior-residencial') },
    { title: 'Residência com piscina', category: 'Residencial', description: 'Espaço para apresentar uma residência com piscina.', ...media('residencia-piscina') },
    { title: 'Área externa e piscina', category: 'Residencial', description: 'Espaço para apresentar uma área externa.', ...media('area-externa-piscina') },
  ],
  differentials: [
    { title: 'Experiência', description: 'Mais de duas décadas de atuação no setor da construção civil.', icon: 'award' },
    { title: 'Qualidade', description: 'Compromisso com a qualidade em projetos e construções.', icon: 'check' },
    { title: 'Planejamento', description: 'Organização e atenção em cada etapa do trabalho.', icon: 'ruler' },
    { title: 'Credibilidade', description: 'Uma empresa potiguar com presença consolidada.', icon: 'shield' },
    { title: 'Visão de futuro', description: 'Soluções de engenharia pensadas para transformar ideias em realidade.', icon: 'arrow' },
  ],
  testimonial: { author: 'Roberto Cesar', role: 'Local Guide', quote: 'Qualidade em projetos e construções, excelentes trabalhos executados e clientes satisfeitos!!!' },
} as const;
