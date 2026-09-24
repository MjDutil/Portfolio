export const translations = {
  pt: {
    header: {
      work: "Projetos",
      about: "Sobre",
      contact: "Vamos conversar",
      languageSelector: "Selecionar idioma",
      navigationLabel: "Navegação principal",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },

    hero: {
      hello: "OLÁ, EU SOU",

      role: {
        firstLine: "DESENVOLVEDORA",
        secondLine: "FRONTEND",
      },

      description:
        "Transformo ideias em experiências digitais funcionais, bonitas e intuitivas.",

      projectsButton: "Ver projetos",
      resumeButton: "Currículo",
      sticker: "Aberta a oportunidades!",

      cards: {
        currently: {
          label: "ATUALMENTE",
          title: "Engenharia da Computação",
          description: "Transformando curiosidade em oportunidades.",
        },

        shipped: {
          label: "PROJETOS",
          title: "Projetos reais com React & Next.js",
          description: "De ideias a produtos funcionais.",
        },

        learning: {
          label: "APRENDENDO",
          title: "Interfaces melhores, sempre",
          description: "Explorando, melhorando e evoluindo.",
        },
      },

      meta: {
        basedIn: {
          label: "LOCALIZADA EM",
          value: "SOROCABA, BRASIL",
        },

        availableFor: {
          label: "DISPONÍVEL PARA",
          value: "ESTÁGIOS & OPORTUNIDADES",
        },

        interestedIn: {
          label: "INTERESSES",
          value: "PRODUTO · DESIGN · IMPACTO",
        },
      },
    },

    marquee: [
      { text: "React", serif: false },
      { text: "Next.js", serif: false },
      { text: "TypeScript", serif: false },
      { text: "aberta a oportunidades", serif: true },
      { text: "Tailwind CSS", serif: false },
      { text: "Figma", serif: false },
      { text: "do design ao código", serif: true },
    ],

    projects: {
      heading: "Projetos",
      detail: "ONDE DESIGN, PRODUTO E CÓDIGO SE ENCONTRAM.",

      GeoShield: {
        coverCategory: "WEB · TECNOLOGIA · INTERFACE",
        linkLabel: "Ver estudo de caso do GeoShield",
        description:
          "Plataforma para visualização de dados climáticos e geossociais em cenários de risco.",

        tags: {
          responsive: "Responsividade",
        },
      },

      du: {
        coverDescription:
          "Mobilidade pensada para o ambiente universitário.",
        linkLabel: "Ver estudo de caso do DU",

        description:
          "App de caronas entre universitários: encontre ou ofereça uma carona, combine pelo chat e avalie a viagem.",
      },
    },

    geoShieldPage: {
      folders: {
        kicker: "02 / ARQUIVO DO PROJETO",
        heading: "Por dentro do GeoShield.",
        introduction: "Cinco fichas, do problema ao que eu levo comigo. Use as etiquetas ou as setas para navegar.",
        navigationLabel: "Etapas do projeto GeoShield",
        mobileHint: "Deslize as etiquetas para encontrar as outras fichas →",
        enlarge: "Ampliar captura",
        previous: "Ficha anterior",
        next: "Próxima ficha",
        simplified: "trecho simplificado",
        challenge: "Desafio",
        solution: "Solução",
        project: {
          tab: "O Projeto", label: "FICHA 01 / O PROJETO",
          title: "Sua região, suas informações.",
          intro: "Uma aplicação web que reúne, em um mapa interativo, diferentes categorias de ocorrências de uma região.",
          specTitle: "FICHA TÉCNICA",
          spec: [
            { key: "Problema", value: "Em eventos climáticos extremos, saber o que acontece perto de você exige juntar informações espalhadas." },
            { key: "Solução", value: "Um mapa que reúne ocorrências por categoria, com busca por endereço e localização atual." },
            { key: "Meu papel", value: "Design da interface e desenvolvimento frontend." },
            { key: "Contexto", value: "Projeto prático da faculdade · dados demonstrativos." },
            { key: "Stack", value: "React · TypeScript · Tailwind CSS · Mapbox GL JS" },
          ],
          imageLabel: "01 / TELA INICIAL",
          imageAlt: "Tela inicial do GeoShield com o formulário de acesso.",
        },
        creative: {
          tab: "Processo criativo", label: "FICHA 02 / PROCESSO CRIATIVO",
          title: "Clareza em cada detalhe.",
          paragraph: "O verde transmite segurança e natureza, os tons suaves deixam o mapa em primeiro plano e a tipografia simples organiza tudo sem competir com ele.",
          decisionsTitle: "DECISÕES DE INTERFACE",
          decisions: [
            "Painéis retráteis: as ferramentas aparecem quando a pessoa precisa.",
            "Cada categoria com cor e ícone próprios, reconhecíveis de longe.",
            "Hierarquia simples: título, ação principal e só então os detalhes.",
          ],
          paletteLabel: "Paleta de cores do GeoShield",
          palette: [
            { hex: "#123C35", name: "Floresta" },
            { hex: "#16845A", name: "Verde" },
            { hex: "#A8B69F", name: "Sálvia" },
            { hex: "#EAF4EE", name: "Névoa" },
          ],
          polaroids: [
            { image: "/projects/geoshield/inicial.webp", caption: "first hello", alt: "Tela inicial do GeoShield." },
            { image: "/projects/geoshield/map-options.webp", caption: "search, tucked away", alt: "Mapa com o painel de busca aberto." },
            { image: "/projects/geoshield/map-navbar.webp", caption: "menu on demand", alt: "Mapa com o menu lateral aberto." },
          ],
          note: "let the map breathe ♡",
        },
        development: {
          tab: "Desenvolvimento", label: "FICHA 03 / DESENVOLVIMENTO",
          title: "Do design à interação.",
          paragraph: "Componentes React com TypeScript organizam o mapa, os painéis e a navegação. Alguns problemas exigiram mais do que só montar a tela:",
          codeFile: "src/pages/Map.tsx",
          code: `useEffect(() => {
  if (searchQuery.trim().length < 3) return;

  // Cancela a busca anterior se a pessoa continuar digitando
  const controller = new AbortController();

  // Espera 350 ms depois da última tecla
  const timeoutId = setTimeout(async () => {
    const response = await fetch(geocodingUrl(searchQuery), {
      signal: controller.signal,
    });
    const data = await response.json();
    setSuggestions(data.features);
  }, 350);

  return () => {
    clearTimeout(timeoutId);
    controller.abort();
  };
}, [searchQuery]);`,
          challenges: [
            {
              problem: "Buscar endereços sem disparar uma requisição a cada tecla.",
              solution: "A busca espera 350 ms de pausa e cancela a anterior com AbortController, então só a resposta mais recente aparece.",
            },
            {
              problem: "Fazer o Mapbox, que controla o próprio DOM, conviver com o React.",
              solution: "O mapa é criado uma única vez; os marcadores ficam em refs e só mudam de visibilidade quando um filtro muda.",
            },
          ],
        },
        mapbox: {
          tab: "Mapbox", label: "FICHA 04 / MAPBOX",
          title: "O mapa no centro da experiência.",
          paragraph: "O Mapbox GL JS exibe o mapa, os marcadores personalizados e leva a visualização até o lugar pesquisado. Os pontos são demonstrativos.",
          imageLabel: "04 / MAPA E CATEGORIAS",
          imageAlt: "Mapa interativo do GeoShield com marcadores e o painel de categorias.",
          hotspots: [
            { title: "Busca por endereço", text: "Sugestões da API de geocodificação do Mapbox, limitadas à região de Sorocaba." },
            { title: "Camadas por categoria", text: "Quatro categorias que podem ser ligadas e desligadas sem recarregar o mapa." },
            { title: "Marcadores com popup", text: "Ícones do Lucide convertidos em SVG, com um cartão de detalhes ao clicar." },
          ],
        },
        learned: {
          tab: "O que aprendi", label: "FICHA 05 / O QUE APRENDI",
          kicker: "MEU PRIMEIRO FRONTEND",
          title: "O que eu levo deste projeto.",
          items: [
            {
              title: "Integrar uma biblioteca que não é React.",
              text: "O Mapbox mexe no DOM por conta própria. Aprendi a usar refs, efeitos e a função de limpeza para os dois conviverem sem mapas duplicados.",
            },
            {
              title: "Pensar além do caminho feliz.",
              text: "Carregando, erro de rede, localização negada, tempo esgotado: cada estado ganhou uma mensagem clara. É isso que deixa a interface confiável.",
            },
            {
              title: "Design é decisão, não enfeite.",
              text: "Painéis retráteis e uma hierarquia simples deixaram o mapa respirar. Cada elemento precisou justificar o espaço que ocupa.",
            },
          ],
          signature: "the beginning of an era ♡",
        },
      },

      back: "Voltar aos projetos",
      category: "DESENVOLVIMENTO FRONTEND · EXPERIÊNCIA INTERATIVA",
      title: "GeoShield.",
      subtitle:
        "Uma nova forma de explorar o que acontece ao seu redor.",
      description:
        "Uma plataforma de exploração geográfica que transforma informações sobre uma região em uma experiência visual, interativa e intuitiva.",
      project: "PROJETO",
      area: "ÁREA",
      areaValue: "Frontend · Interface",
      technologies: "TECNOLOGIAS",
      scroll: "ROLE PARA EXPLORAR",
      author: "Por Maria Júlia Dutil",
      showcaseAlt: {
        front: "Mapa interativo do GeoShield com marcadores e categorias.",
        back: "Tela inicial do GeoShield com o formulário de acesso.",
      },

      nextProject: {
        label: "PRÓXIMO PROJETO",
        title: "DU — Driver Universitário",
        description: "Aplicativo de caronas entre universitários, com telas mobile e o fluxo completo do cadastro à avaliação.",
        button: "Ver estudo de caso",
        back: "Ver todos os projetos",
      },
      repositoryButton: "Ver código no GitHub",
      year: "ANO",

    },

    duPage: {
      back: "Voltar aos projetos",
      category: "APP MOBILE · MOBILIDADE UNIVERSITÁRIA",
      title: "DU.",
      subtitle: "Caronas entre universitários, do convite à avaliação.",
      description: "Um aplicativo que conecta estudantes que fazem o mesmo trajeto: quem dirige oferece vagas, quem precisa encontra carona, e os dois combinam tudo pelo chat.",
      author: "Por Maria Júlia Dutil",
      repositoryButton: "Ver código no GitHub",
      toast: {
        title: "Carona confirmada!",
        detail: "Campus → Centro · 18h",
      },
      meta: {
        project: "PROJETO",
        projectValue: "DU — Driver Universitário",
        platform: "PLATAFORMA",
        platformValue: "iOS · Android (Expo)",
        technologies: "TECNOLOGIAS",
        technologiesValue: "React Native · TypeScript · Zustand",
        scroll: "ROLE PARA EMBARCAR",
      },
      screens: {
        home: "Buscar motoristas",
        chat: "Conversas",
        tracking: "Rastreamento",
        finish: "Avaliação",
      },
      route: {
        kicker: "02 / O TRAJETO",
        heading: "O trajeto do DU.",
        introduction: "Do problema ao que eu aprendi, em seis paradas. Pode ir rolando: o carrinho acompanha você.",
        stop: "PARADA",
      },
      start: {
        title: "Ponto de partida.",
        intro: "Muitos universitários fazem o mesmo caminho todos os dias, mas não têm um jeito fácil e confiável de dividir o trajeto.",
        specTitle: "FICHA TÉCNICA",
        spec: [
          { key: "Problema", value: "Estudantes com o mesmo destino que não se encontram, e caronas combinadas em grupos soltos, sem segurança." },
          { key: "Solução", value: "Um app só para a comunidade universitária, com entrada por convite, busca de motoristas, chat e avaliação." },
          { key: "Meu papel", value: "Design da interface e desenvolvimento frontend do app." },
          { key: "Contexto", value: "Projeto universitário · dados de demonstração." },
          { key: "Stack", value: "React Native · Expo · Expo Router · TypeScript · Zustand" },
        ],
        phoneLabel: "Código de convite",
        note: "invite only ♡",
      },
      creative: {
        title: "Uma identidade para o app.",
        paragraph: "Antes das telas, vieram os tokens: cores, tipografia e espaçamentos definidos em um só lugar, para todas as telas falarem a mesma língua.",
        typeTitle: "TIPOGRAFIA",
        headingFont: "Plus Jakarta Sans · títulos",
        bodyFont: "DM Sans · textos",
        sample: "Vamos juntos?",
        piecesTitle: "PEÇAS REUTILIZÁVEIS",
        pieces: {
          button: "Oferecer carona",
          outline: "Ver perfil",
          badges: ["Confirmada", "Aguardando", "Cancelada"],
          rating: "4,8",
          driver: "Motorista",
          route: "Campus → Centro",
        },
        paletteTitle: "CORES DO APP",
        decisions: [
          "Cadastro dividido em etapas curtas, com barra de progresso: menos cansativo que um formulário gigante.",
          "Componentes como Button, Badge e DriverCard reaproveitados em todo o app.",
          "Só modo retrato: o app foi pensado para ser usado com uma mão, no caminho.",
        ],
      },
      signup: {
        title: "Cadastro em 7 etapas.",
        paragraph: "Uma pergunta por tela, com a barra de progresso mostrando quanto falta. Navegue pelo fluxo:",
        previous: "Etapa anterior",
        next: "Próxima etapa",
        steps: [
          "Código de convite",
          "Nome completo",
          "Apelido",
          "Celular e e-mail",
          "Tratamento",
          "Data de nascimento",
          "Verificação e senha",
        ],
      },
      offer: {
        title: "Oferecer uma carona.",
        paragraph: "Do lado de quem dirige, seis etapas curtas até publicar a carona. Arraste para ver o fluxo inteiro →",
        steps: [
          "Dados da CNH",
          "Dados do carro",
          "Origem e destino",
          "Datas disponíveis",
          "Número de vagas",
          "Valor e publicação",
        ],
        note: "6 steps, 1 thumb",
      },
      development: {
        title: "Por trás das telas.",
        paragraph: "Rotas baseadas em arquivos com Expo Router, estado global com Zustand e dados de demonstração para testar cada fluxo de ponta a ponta.",
        challenge: "Desafio",
        solution: "Solução",
        simplified: "trecho simplificado",
        challenges: [
          {
            problem: "O mapa nativo (react-native-maps) não funcionava no Expo Go.",
            solution: "Simulei o mapa do rastreamento com Animated e Views, mantendo a experiência sem sair do fluxo do Expo.",
          },
          {
            problem: "Não perder o que a pessoa já preencheu em fluxos de várias etapas.",
            solution: "Rascunhos do cadastro e da oferta ficam em stores do Zustand, então dá para voltar e avançar sem apagar nada.",
          },
          {
            problem: "Conflitos de dependências com o React 19.",
            solution: "Configurei legacy-peer-deps no .npmrc e documentei no README para ninguém do time cair no mesmo erro.",
          },
        ],
      },
      learned: {
        kicker: "CHEGADA",
        title: "O que eu levo deste trajeto.",
        items: [
          {
            title: "Pensar em mobile desde o início.",
            text: "Área segura, toque com o polegar, telas curtas: no celular, cada centímetro e cada toque contam.",
          },
          {
            title: "Estado é parte da experiência.",
            text: "Guardar rascunhos entre etapas mudou a sensação do app. Aprendi a pensar no estado junto com o design, não depois.",
          },
          {
            title: "Adaptar sem desistir da ideia.",
            text: "Quando uma biblioteca não coube no projeto, a solução foi simplificar a implementação, não a experiência.",
          },
        ],
        signature: "see you on the next ride ♡",
      },
      previousProject: {
        label: "PROJETO ANTERIOR",
        title: "GeoShield",
        description: "Plataforma web com mapa interativo para explorar ocorrências de uma região.",
        button: "Ver estudo de caso",
      },
    },

    toolbox: {
      title: "Kit de ferramentas",
      subtitle: "TECNOLOGIAS COM AS QUAIS TRABALHO (E AMO ♡)",
      groups: {
        frontend: "Frontend",
        workflow: "Design & fluxo de trabalho",
      },
    },

    contact: {
      title: "Onde boas ideias viram produto.",
      text: "Chegou até aqui? Então acho que já temos assunto.",
      button: "Entre em contato",
    },

    footer: {
      frontendDeveloper: "Desenvolvedora Frontend",
      home: "Início",
      projects: "Projetos",
      technologies: "Tecnologias",
      contact: "Contato",
    },
  },

  en: {
    header: {
      work: "Work",
      about: "About",
      contact: "Let's Talk",
      languageSelector: "Select language",
      navigationLabel: "Main navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      hello: "HELLO, I'M",

      role: {
        firstLine: "FRONTEND",
        secondLine: "DEVELOPER",
      },

      description:
        "I turn ideas into functional, beautiful and intuitive digital experiences.",

      projectsButton: "View projects",
      resumeButton: "Resume",
      sticker: "Open to work!",

      cards: {
        currently: {
          label: "CURRENTLY",
          title: "Computer Engineering",
          description: "Turning curiosity into opportunities.",
        },

        shipped: {
          label: "SHIPPED",
          title: "Real projects with React & Next.js",
          description: "From ideas to working products.",
        },

        learning: {
          label: "LEARNING",
          title: "Better UI, always",
          description: "Exploring, improving, leveling up.",
        },
      },

      meta: {
        basedIn: {
          label: "BASED IN",
          value: "SOROCABA, BRAZIL",
        },

        availableFor: {
          label: "AVAILABLE FOR",
          value: "INTERNSHIPS & OPPORTUNITIES",
        },

        interestedIn: {
          label: "INTERESTED IN",
          value: "PRODUCT · DESIGN · IMPACT",
        },
      },
    },

    marquee: [
      { text: "React", serif: false },
      { text: "Next.js", serif: false },
      { text: "TypeScript", serif: false },
      { text: "open to work", serif: true },
      { text: "Tailwind CSS", serif: false },
      { text: "Figma", serif: false },
      { text: "from design to code", serif: true },
    ],

    projects: {
      heading: "Projects",
      detail: "WHERE DESIGN, PRODUCT AND CODE COME TOGETHER.",

      GeoShield: {
        coverCategory: "WEB · TECHNOLOGY · INTERFACE",
        linkLabel: "View the GeoShield case study",
        description:
          "A platform for visualizing climate and geosocial data in risk scenarios.",

        tags: {
          responsive: "Responsive Design",
        },
      },

      du: {
        coverDescription:
          "Mobility designed for the university environment.",
        linkLabel: "View the DU case study",

        description:
          "A ride-sharing app for university students: find or offer a ride, chat and rate the trip.",
      },
    },

    geoShieldPage: {
      folders: {
        kicker: "02 / PROJECT ARCHIVE",
        heading: "Inside GeoShield.",
        introduction: "Five folders, from the problem to what I take with me. Use the tabs or the arrows to browse.",
        navigationLabel: "GeoShield project stages",
        mobileHint: "Swipe the tabs to find the other folders →",
        enlarge: "Enlarge screenshot",
        previous: "Previous folder",
        next: "Next folder",
        simplified: "simplified excerpt",
        challenge: "Challenge",
        solution: "Solution",
        project: {
          tab: "The Project", label: "FOLDER 01 / THE PROJECT",
          title: "Your region, your information.",
          intro: "A web app that brings different categories of local incidents together on one interactive map.",
          specTitle: "FACT SHEET",
          spec: [
            { key: "Problem", value: "During extreme weather, knowing what is happening near you means piecing together scattered information." },
            { key: "Solution", value: "A map that groups incidents by category, with address search and current location." },
            { key: "My role", value: "Interface design and frontend development." },
            { key: "Context", value: "University project · demo data." },
            { key: "Stack", value: "React · TypeScript · Tailwind CSS · Mapbox GL JS" },
          ],
          imageLabel: "01 / LANDING PAGE",
          imageAlt: "GeoShield landing page with the login form.",
        },
        creative: {
          tab: "Creative process", label: "FOLDER 02 / CREATIVE PROCESS",
          title: "Clarity in every detail.",
          paragraph: "Green conveys safety and nature, soft tones keep the map in the spotlight and simple typography organizes everything without competing with it.",
          decisionsTitle: "INTERFACE DECISIONS",
          decisions: [
            "Collapsible panels: tools show up when people need them.",
            "Each category has its own color and icon, recognizable at a glance.",
            "Simple hierarchy: title, main action, and only then the details.",
          ],
          paletteLabel: "GeoShield color palette",
          palette: [
            { hex: "#123C35", name: "Forest" },
            { hex: "#16845A", name: "Green" },
            { hex: "#A8B69F", name: "Sage" },
            { hex: "#EAF4EE", name: "Mist" },
          ],
          polaroids: [
            { image: "/projects/geoshield/inicial.webp", caption: "first hello", alt: "GeoShield landing page." },
            { image: "/projects/geoshield/map-options.webp", caption: "search, tucked away", alt: "Map with the search panel open." },
            { image: "/projects/geoshield/map-navbar.webp", caption: "menu on demand", alt: "Map with the side menu open." },
          ],
          note: "let the map breathe ♡",
        },
        development: {
          tab: "Development", label: "FOLDER 03 / DEVELOPMENT",
          title: "From design to interaction.",
          paragraph: "React components written in TypeScript organize the map, panels and navigation. Some problems took more than just building the screen:",
          codeFile: "src/pages/Map.tsx",
          code: `useEffect(() => {
  if (searchQuery.trim().length < 3) return;

  // Cancel the previous search if the user keeps typing
  const controller = new AbortController();

  // Wait 350 ms after the last keystroke
  const timeoutId = setTimeout(async () => {
    const response = await fetch(geocodingUrl(searchQuery), {
      signal: controller.signal,
    });
    const data = await response.json();
    setSuggestions(data.features);
  }, 350);

  return () => {
    clearTimeout(timeoutId);
    controller.abort();
  };
}, [searchQuery]);`,
          challenges: [
            {
              problem: "Searching addresses without firing a request on every keystroke.",
              solution: "The search waits for a 350 ms pause and cancels the previous one with AbortController, so only the latest result shows up.",
            },
            {
              problem: "Making Mapbox, which controls its own DOM, work alongside React.",
              solution: "The map is created only once; markers live in refs and only change visibility when a filter changes.",
            },
          ],
        },
        mapbox: {
          tab: "Mapbox", label: "FOLDER 04 / MAPBOX",
          title: "The map at the heart of the experience.",
          paragraph: "Mapbox GL JS renders the map and custom markers, and flies the view to the searched place. All points are demo data.",
          imageLabel: "04 / MAP & CATEGORIES",
          imageAlt: "GeoShield interactive map with markers and the categories panel.",
          hotspots: [
            { title: "Address search", text: "Suggestions from the Mapbox geocoding API, limited to the Sorocaba area." },
            { title: "Category layers", text: "Four categories that can be toggled on and off without reloading the map." },
            { title: "Markers with popups", text: "Lucide icons converted to SVG, with a details card on click." },
          ],
        },
        learned: {
          tab: "What I learned", label: "FOLDER 05 / WHAT I LEARNED",
          kicker: "MY FIRST FRONTEND PROJECT",
          title: "What I take from this project.",
          items: [
            {
              title: "Integrating a library that isn't React.",
              text: "Mapbox manipulates the DOM on its own. I learned to use refs, effects and cleanup functions so both could coexist without duplicated maps.",
            },
            {
              title: "Thinking beyond the happy path.",
              text: "Loading, network errors, denied location, timeouts: each state got a clear message. That is what makes an interface feel reliable.",
            },
            {
              title: "Design is a decision, not decoration.",
              text: "Collapsible panels and a simple hierarchy let the map breathe. Every element had to earn the space it takes.",
            },
          ],
          signature: "the beginning of an era ♡",
        },
      },


      back: "Back to projects",
      category: "FRONTEND DEVELOPMENT · INTERACTIVE EXPERIENCE",
      title: "GeoShield.",
      subtitle:
        "A new way to explore what's happening around you.",
      description:
        "A geographic exploration platform that transforms regional information into a visual, interactive and intuitive experience.",
      project: "PROJECT",
      area: "FIELD",
      areaValue: "Frontend · Interface",
      technologies: "TECHNOLOGIES",
      scroll: "SCROLL TO EXPLORE",
      author: "By Maria Júlia Dutil",
      showcaseAlt: {
        front: "GeoShield interactive map with markers and categories.",
        back: "GeoShield home screen with the sign-in form.",
      },

      nextProject: {
        label: "NEXT PROJECT",
        title: "DU — Driver Universitário",
        description: "A ride-sharing app for university students, with mobile screens and the full flow from sign-up to review.",
        button: "View case study",
        back: "See all projects",
      },
      repositoryButton: "View code on GitHub",
      year: "YEAR",

    },

    duPage: {
      back: "Back to projects",
      category: "MOBILE APP · UNIVERSITY MOBILITY",
      title: "DU.",
      subtitle: "Rides between university students, from invite to review.",
      description: "An app that connects students who share the same route: drivers offer seats, riders find a lift, and both sort everything out in the chat.",
      author: "By Maria Júlia Dutil",
      repositoryButton: "View code on GitHub",
      toast: {
        title: "Ride confirmed!",
        detail: "Campus → Downtown · 6 pm",
      },
      meta: {
        project: "PROJECT",
        projectValue: "DU — Driver Universitário",
        platform: "PLATFORM",
        platformValue: "iOS · Android (Expo)",
        technologies: "TECHNOLOGIES",
        technologiesValue: "React Native · TypeScript · Zustand",
        scroll: "SCROLL TO HOP IN",
      },
      screens: {
        home: "Find drivers",
        chat: "Chats",
        tracking: "Ride tracking",
        finish: "Rating",
      },
      route: {
        kicker: "02 / THE ROUTE",
        heading: "The DU route.",
        introduction: "From the problem to what I learned, in six stops. Keep scrolling: the little car rides along with you.",
        stop: "STOP",
      },
      start: {
        title: "Starting point.",
        intro: "Many students take the same route every day, but have no easy, trustworthy way to share the ride.",
        specTitle: "FACT SHEET",
        spec: [
          { key: "Problem", value: "Students heading to the same place never find each other, and rides are arranged in loose group chats with no safety." },
          { key: "Solution", value: "An app just for the university community, with invite-only access, driver search, chat and ratings." },
          { key: "My role", value: "Interface design and frontend development of the app." },
          { key: "Context", value: "University project · demo data." },
          { key: "Stack", value: "React Native · Expo · Expo Router · TypeScript · Zustand" },
        ],
        phoneLabel: "Invite code",
        note: "invite only ♡",
      },
      creative: {
        title: "An identity for the app.",
        paragraph: "Before the screens came the tokens: colors, type and spacing defined in one place, so every screen speaks the same language.",
        typeTitle: "TYPOGRAPHY",
        headingFont: "Plus Jakarta Sans · headings",
        bodyFont: "DM Sans · body",
        sample: "Ride together?",
        piecesTitle: "REUSABLE PIECES",
        pieces: {
          button: "Offer a ride",
          outline: "View profile",
          badges: ["Confirmed", "Pending", "Cancelled"],
          rating: "4.8",
          driver: "Driver",
          route: "Campus → Downtown",
        },
        paletteTitle: "APP COLORS",
        decisions: [
          "Sign-up split into short steps with a progress bar: less tiring than one giant form.",
          "Components like Button, Badge and DriverCard reused across the whole app.",
          "Portrait only: the app is meant to be used with one hand, on the go.",
        ],
      },
      signup: {
        title: "Sign-up in 7 steps.",
        paragraph: "One question per screen, with a progress bar showing what's left. Walk through the flow:",
        previous: "Previous step",
        next: "Next step",
        steps: [
          "Invite code",
          "Full name",
          "Nickname",
          "Phone and email",
          "Title",
          "Date of birth",
          "Verification and password",
        ],
      },
      offer: {
        title: "Offering a ride.",
        paragraph: "On the driver's side, six short steps until the ride is published. Drag to see the whole flow →",
        steps: [
          "Driver's license",
          "Car details",
          "Origin and destination",
          "Available dates",
          "Number of seats",
          "Price and publishing",
        ],
        note: "6 steps, 1 thumb",
      },
      development: {
        title: "Behind the screens.",
        paragraph: "File-based routes with Expo Router, global state with Zustand and demo data to test every flow end to end.",
        challenge: "Challenge",
        solution: "Solution",
        simplified: "simplified excerpt",
        challenges: [
          {
            problem: "The native map (react-native-maps) didn't work in Expo Go.",
            solution: "I simulated the tracking map with Animated and Views, keeping the experience without leaving the Expo workflow.",
          },
          {
            problem: "Not losing what people had already filled in across multi-step flows.",
            solution: "Sign-up and ride drafts live in Zustand stores, so users can go back and forth without losing anything.",
          },
          {
            problem: "Dependency conflicts with React 19.",
            solution: "I set legacy-peer-deps in .npmrc and documented it in the README so no one on the team hit the same wall.",
          },
        ],
      },
      learned: {
        kicker: "ARRIVAL",
        title: "What I take from this ride.",
        items: [
          {
            title: "Thinking mobile from day one.",
            text: "Safe areas, thumb reach, short screens: on a phone, every inch and every tap matters.",
          },
          {
            title: "State is part of the experience.",
            text: "Keeping drafts between steps changed how the app feels. I learned to think about state alongside design, not after it.",
          },
          {
            title: "Adapting without giving up on the idea.",
            text: "When a library didn't fit the project, I simplified the implementation, not the experience.",
          },
        ],
        signature: "see you on the next ride ♡",
      },
      previousProject: {
        label: "PREVIOUS PROJECT",
        title: "GeoShield",
        description: "A web platform with an interactive map to explore incidents in a region.",
        button: "View case study",
      },
    },

    toolbox: {
      title: "My Toolbox",
      subtitle: "TECHNOLOGIES I WORK WITH (AND LOVE ♡)",
      groups: {
        frontend: "Frontend",
        workflow: "Design & workflow",
      },
    },

    contact: {
      title: "Where good ideas become products.",
      text: "Made it this far? Then I think we already have something to talk about.",
      button: "Get in touch",
    },

    footer: {
      frontendDeveloper: "Frontend Developer",
      home: "Home",
      projects: "Projects",
      technologies: "Technologies",
      contact: "Contact",
    },
  },
};
