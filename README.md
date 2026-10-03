# F2 Engineering Showcase

Crie um site institucional completo, premium e responsivo para a F Dois Engenharia, empresa de engenharia e construção civil de Natal-RN. Use React + Vite + TypeScript + Tailwind CSS. Página única, sem backend, em português do Brasil. Use as imagens e vídeos que anexei, conforme a tabela de mídia abaixo.



REGRAS DE CONTEÚDO (OBRIGATÓRIAS)

Não invente clientes, obras, projetos, depoimentos, certificações, prêmios, números, metragens, datas, serviços nem horário de funcionamento. Use somente as informações abaixo. As fotos são de banco de imagens, não de obras reais da empresa; os cards de projeto devem mostrar o selo "Imagem ilustrativa" e títulos genéricos.



DADOS DA EMPRESA

- Nome: F Dois Engenharia

- Endereço: R. Dr. Múcio Galvão, 426 - Tirol, Natal - RN, 59020-550

- Telefone: (84) 3234-3390 (tel:+558432343390)

- WhatsApp: +55 84 98846-4244 (https://wa.me/5584988464244)

- Instagram: @fdoisengenharia (https://www.instagram.com/fdoisengenharia/)

- LinkedIn: F Dois Engenharia (usar https://www.linkedin.com/search/results/companies/?keywords=F%20Dois%20Engenharia como placeholder editável)

- Google: 4,9 estrelas, 8 avaliações (link placeholder editável: https://www.google.com/search?q=F+Dois+Engenharia+Natal+avalia%C3%A7%C3%B5es)

- Mais de 24 anos de experiência (a empresa também comunica "25 anos")

- Slogan: "Construindo o futuro com experiência."

- Frase: "Soluções em engenharia | Transformando ideias em realidade."

- Único depoimento real: Roberto Cesar, Local Guide: "Qualidade em projetos e construções, excelentes trabalhos executados e clientes satisfeitos!!!"

- Números permitidos: 24+ anos, 4,9 estrelas, 8 avaliações, 2,1 mil+ seguidores no Instagram, 230+ no LinkedIn.



CENTRALIZAÇÃO DOS DADOS

Crie src/data/site.ts exportando um objeto CFG com: company, contact, social, links (googleReviews), stats, services, projects, differentials, testimonial. Nenhum dado da empresa deve ficar espalhado nos componentes; todos leem do CFG. O WhatsApp e o telefone vêm do CFG.contact.



DESIGN

Estética premium, corporativa, arquitetônica e minimalista. Muito espaço em branco, linhas geométricas, tipografia forte, sombras suaves, bordas discretas.

- Cores: azul-marinho #0B2545 (principal), azul #1F5FBF, dourado #E0A526 (só em detalhes: selo, números, ícone do logo, sublinhado do menu ativo), fundo claro #F3F6FB com grade fina em rgba(31,95,191,.07) a cada 48px (estilo papel de projeto), seções alternadas #E4ECF7, cards brancos, navy escuro #071A33 no footer. Configure essas cores no tailwind.config como tokens.

- Fonte: Archivo (Google Fonts) 400/500/700/800; títulos em 800 com letter-spacing negativo leve; fallback system-ui.

- Botões retangulares (border-radius 2px), altura mínima 48px. Variantes: dourado, contorno branco, azul-marinho, contorno azul-marinho.

- Mobile-first, sem rolagem horizontal, respeitar safe-area do iOS, foco visível (outline dourado), HTML semântico e um único H1.



ESTRUTURA (nesta ordem, ids para âncoras)

1. Header fixo. Logo: quadrado dourado com "F2" + "F DOIS" e "ENGENHARIA" (pequeno, espaçado). Menu: Início (#inicio), Sobre (#sobre), Soluções (#solucoes), Projetos (#projetos), Avaliações (#avaliacoes), Contato (#contato). Botão dourado "Fale conosco" que abre o WhatsApp em nova aba. No topo: translúcido com blur; ao rolar mais de 30px: azul-marinho sólido com sombra discreta. Mobile: hambúrguer animado (vira X), menu que desliza abrindo/fechando e fecha ao clicar num link. Indicador da seção atual no menu (IntersectionObserver, cor dourada + sublinhado). Link "Pular para o conteúdo".

2. Hero (#inicio), altura mínima 100svh, fundo em gradiente navy. Painel de mídia à direita (55% da largura no desktop; fundo total com overlay azul-marinho no mobile) com a foto hero.jpg e, por cima dela, o vídeo hero.mp4 (autoplay, muted, loop, playsInline, sem áudio, pausa quando a aba está oculta, não toca com prefers-reduced-motion). Overlay em gradiente da esquerda (navy) para a direita (transparente) para legibilidade. Conteúdo: texto pequeno dourado "F DOIS ENGENHARIA"; H1 "Construindo o futuro com experiência." com animação letra por letra (cada letra sobe e aparece em sequência, 35ms de atraso entre letras); subtítulo "Soluções em engenharia | Transformando ideias em realidade."; botões "Conheça nossa história" (rola até #sobre) e "Fale conosco" (WhatsApp); indicadores em linha com borda superior: "24+ anos", "Natal/RN", "4,9 no Google"; selo circular dourado no canto "25 / ANOS DE EXPERIÊNCIA".

3. Sobre (#sobre): duas colunas. Esquerda: mídia sobre.jpg + vídeo sobre.mp4 em proporção 4/5 (16/10 no mobile), moldura fina dourada interna a 16px, zoom leve no hover. Direita: tag "SOBRE", título "Experiência que constrói confiança.", texto "Com mais de 24 anos de experiência no setor da construção civil, a F Dois Engenharia é uma empresa potiguar dedicada a transformar ideias em realidade por meio de projetos e obras que unem planejamento, qualidade e responsabilidade." e três destaques: "24+ / ANOS DE EXPERIÊNCIA", "Natal/RN / EMPRESA POTIGUAR", "4,9 / AVALIAÇÃO NO GOOGLE".

4. Números (#numeros): seção azul-marinho com numeros.jpg + numeros.mp4 como fundo (object-position center 58%) e overlay navy ~88%. Título "Experiência que faz a diferença." Cinco cards translúcidos com contagem animada (1,4 s, easing suave) ao entrar na tela: 24+ Anos de experiência; 4,9 Estrelas no Google; 8 Avaliações no Google; 2,1 mil+ Seguidores no Instagram; 230+ Seguidores no LinkedIn. Mobile: 2 colunas, o último ocupa a linha inteira.

5. Soluções (#solucoes): tag "SOLUÇÕES", título "Soluções em engenharia.", subtítulo "Transformando ideias em realidade." Quatro cards numerados (número dourado + ícone de linha azul): 01 PROJETOS E PLANEJAMENTO "Transformando necessidades em projetos bem estruturados."; 02 CONSTRUÇÃO CIVIL "Atuação no desenvolvimento e execução de obras."; 03 EXECUÇÃO DE OBRAS "Planejamento, acompanhamento e execução de projetos."; 04 SOLUÇÕES EM ENGENHARIA "Abordagem profissional para diferentes necessidades da construção." Hover: sobe 6px, sombra, borda azul. Grid 4/2/1 colunas.

6. Projetos (#projetos), fundo #E4ECF7: título "Projetos que deixam sua marca." Filtros (botões com aria-pressed): Todos, Residencial, Institucional, Infraestrutura. Seis cards 4/3 com foto + vídeo curto por cima (tocam só quando visíveis, via IntersectionObserver), selo "Imagem ilustrativa" no canto, overlay em gradiente com "Ampliar" no hover/foco, categoria, título e descrição. Clicar (ou Enter/Espaço) abre um lightbox (dialog) com a imagem ampliada, legenda e botão de fechar; fecha com Esc e clique no fundo. Todos os seis cards são da categoria Residencial; ao filtrar Institucional ou Infraestrutura, mostre "Ainda não há projetos publicados nesta categoria." Abaixo da grade: nota "Imagens ilustrativas de banco de imagens. Os projetos reais da F Dois Engenharia serão publicados aqui." Títulos: Projeto em destaque; Obra residencial; Área de lazer com piscina; Interior residencial; Residência com piscina; Área externa e piscina. Descrições curtas genéricas começando com "Espaço para apresentar…".

7. Diferenciais: título "Por que a F Dois Engenharia?" Cinco blocos com ícone minimalista de linha: EXPERIÊNCIA "Mais de duas décadas de atuação no setor da construção civil."; QUALIDADE "Compromisso com a qualidade em projetos e construções."; PLANEJAMENTO "Organização e atenção em cada etapa do trabalho."; CREDIBILIDADE "Uma empresa potiguar com presença consolidada."; VISÃO DE FUTURO "Soluções de engenharia pensadas para transformar ideias em realidade."

8. Avaliações (#avaliacoes), fundo #E4ECF7: título "O que dizem sobre a F Dois Engenharia". Esquerda: ★★★★★ dourado, "4,9 / 5" grande, "estrelas no Google, 8 avaliações" e botão "Ver avaliações no Google" (link do CFG). Direita: card branco com borda esquerda dourada com o depoimento do Roberto Cesar, Local Guide.

9. Localização: título "Estamos em Natal." Dados: F Dois Engenharia, R. Dr. Múcio Galvão, 426, Tirol, Natal - RN, 59020-550; Telefone e WhatsApp visíveis; botões "Ligar" (tel:), "WhatsApp" e "Como chegar" (https://www.google.com/maps/search/?api=1&query= + endereço codificado). À direita, mapa Google incorporado (iframe https://www.google.com/maps?q=<endereço codificado>&output=embed, lazy) com botão "Abrir no Google Maps" no canto; por baixo do iframe, um mapa ilustrativo em SVG como reserva. Não inventar horário.

10. CTA (#contato): fundo navy com chamada-final.jpg + chamada-final.mp4 e overlay escuro. Título "Vamos transformar sua ideia em realidade?", texto "Entre em contato com a F Dois Engenharia e fale com nossa equipe.", botões "Falar pelo WhatsApp" (dourado) e "Ligar agora" (contorno branco).

11. Footer: logo, "Construindo o futuro com experiência."; links de navegação; endereço, telefone e WhatsApp; Instagram, LinkedIn e WhatsApp; "© 2026 F Dois Engenharia. Todos os direitos reservados."



MÍDIA ANEXADA (salve em public/assets/img e public/assets/video com estes nomes exatos)

- hero.jpg + hero.mp4 → capa (casa moderna com fachada em madeira e pedra ao entardecer; foto vertical, object-position center 35%)

- sobre.jpg + sobre.mp4 → seção Sobre (object-position 50% 0 no desktop, 50% 42% no mobile)

- numeros.jpg + numeros.mp4 → fundo da seção Números

- chamada-final.jpg + chamada-final.mp4 → fundo do CTA

- Cards de projeto, na ordem: projeto-destaque, obra-residencial, area-lazer-piscina, interior-residencial, residencia-piscina, area-externa-piscina (cada um com .jpg em /img e .mp4 em /video; fotos 640x480)

Os vídeos têm 6 segundos, sem áudio, com zoom suave em loop. Sempre renderize a foto por baixo do vídeo como reserva, e o vídeo por cima. Todos os vídeos, exceto o da capa, só tocam quando visíveis e pausam ao sair da tela. Se alguma mídia não carregar, mostre apenas a foto.



ANIMAÇÕES

Discretas e sofisticadas: fade + translateY(24px) ao entrar na tela, com atraso escalonado (90ms) entre cards de um mesmo grupo; hover nos cards e botões; zoom leve (1.06) nas imagens; header animado ao rolar. A animação letra por letra é SÓ no H1 da capa, os demais textos não animam letra por letra. Respeitar prefers-reduced-motion (sem animações, sem vídeos tocando, números sem contagem).



SEO E ACESSIBILIDADE

- title: "F Dois Engenharia | Engenharia e Construção Civil em Natal"

- description: "F Dois Engenharia: mais de 24 anos de experiência em engenharia e construção civil em Natal, Rio Grande do Norte."

- Open Graph (type, title, description, locale pt_BR), favicon (quadrado navy com "F" dourado), lang="pt-BR".

- JSON-LD GeneralContractor com nome, telefone, endereço postal (Natal, RN, 59020-550, BR), areaServed "Natal, RN" e aggregateRating 4.9 / 8 avaliações. Não incluir sameAs com links não confirmados.

- Alt em todas as imagens informativas, aria-label em botões de ícone, navegação por teclado completa, contraste AA.



ENTREGA

Código limpo e componentizado (Header, Hero, About, Stats, Services, Projects, Differentials, Reviews, Location, CTA, Footer, Lightbox), tudo lendo de src/data/site.ts. Revise o site no mobile (360 px), tablet e desktop, confira todos os links (WhatsApp, telefone, Como chegar) e corrija qualquer erro.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://fdois-future-build.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8ed27a68-fe0a-5f37-98be-1e2039aa4775).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
