const COURSE_MODULES = [
  {
    id: "html-css",
    tech: "HTML & CSS",
    number: "01",
    title: "HTML & CSS — Estrutura e Estilo de uma Página Web",
    readMoreUrl: "curso/html-css.html",
    intro: "HTML e CSS trabalham juntos como o esqueleto e o acabamento de uma página: o HTML (HyperText Markup Language) estrutura e dá significado ao conteúdo, enquanto o CSS (Cascading Style Sheets) cuida da apresentação visual e do layout. Neste módulo, as duas tecnologias são aplicadas ao mesmo projeto guiado — o site fictício Café Horizonte — da estrutura de pastas até a publicação final, passando por semântica, modelo de caixa, Flexbox, responsividade, formulários e acessibilidade.",
    sections: [
      {
        heading: "Antes de Começar: Ferramentas e Método de Estudo",
        text: "Não é necessário conhecer programação para começar: basta saber criar, renomear e localizar pastas no computador. O objetivo final é conseguir criar uma página institucional simples, adaptá-la para celular e computador e publicá-la — usando como fio condutor o projeto fictício Café Horizonte, aplicado em cada capítulo.",
        listLabel: "Ferramentas necessárias",
        list: [
          ["Navegador atualizado", "Chrome, Edge ou Firefox, usados para visualizar e depurar o resultado."],
          ["Editor de código", "Visual Studio Code ou outro editor de sua preferência."],
          ["Pasta exclusiva por projeto", "Cada projeto vive em sua própria pasta, organizada desde o início."],
          ["Extensão Live Server (opcional)", "Atualiza a página automaticamente a cada alteração salva."]
        ]
      }
    ]
  },
  {
    id: "javascript",
    tech: "JavaScript",
    number: "02",
    title: "JavaScript — Do Fundamento ao Navegador",
    readMoreUrl: "curso/javascript.html",
    intro: "O JavaScript é a linguagem de programação que roda no navegador. Neste módulo, o projeto Café Horizonte construído em HTML e CSS ganha comportamento: menu móvel, filtro de cardápio, formulário validado, preferências salvas e dados carregados de forma assíncrona.",
    sections: [
      {
        heading: "Preparação e Pré-requisitos",
        text: "Esta apostila continua diretamente o projeto Café Horizonte construído na apostila HTML e CSS. Em vez de abandonar esse site e começar outro sem contexto, você acrescentará comportamento à estrutura que já conhece.",
        listLabel: "O que o JavaScript vai acrescentar",
        list: [
          ["Cabeçalho e navegação", "Abrir e fechar o menu em telas pequenas."],
          ["Cartões do cardápio", "Filtrar itens por categoria e atualizar a contagem."],
          ["Formulário de reserva", "Validar, apresentar mensagens e preparar os dados."],
          ["Conteúdo estático", "Carregar sugestões e representar carregamento, vazio e erro."]
        ]
      }
    ]
  },
  {
    id: "react",
    tech: "React",
    number: "03",
    title: "React com Fundamentos Sólidos",
    readMoreUrl: "curso/react.html",
    intro: "React organiza interfaces em componentes: em vez de manipular o DOM diretamente, você descreve qual interface corresponde aos dados atuais e o React cuida da atualização. Neste módulo, o Café Horizonte é reconstruído do zero em React — mesmo comportamento, mesma acessibilidade, agora com componentes, props, estado, rotas e dados vindos de uma API.",
    sections: [
      {
        heading: "Pré-requisitos e Objetivo",
        text: "Esta apostila pressupõe que você saiba escrever funções, usar arrays e objetos, tratar eventos, consumir uma API e compreender módulos JavaScript. O projeto progressivo continua sendo o Café Horizonte: a meta não é só obter a mesma tela, é entender como dados, componentes, props e estado substituem as atualizações manuais do HTML.",
        listLabel: "O que é reaproveitado da versão HTML/CSS/JS",
        list: [
          ["Conteúdo e identidade visual", "Vira estrutura JSX e estilos globais."],
          ["Array de itens do cardápio", "Vira dados usados para renderizar componentes."],
          ["Filtros e formulário", "Viram estado, eventos e validação controlada."],
          ["Manipulação manual do DOM", "Vira renderização declarativa baseada no estado."]
        ]
      }
    ]
  },
  {
    id: "full-stack",
    tech: "Full Stack",
    number: "04",
    title: "Full Stack com Node, Express e MongoDB",
    readMoreUrl: "curso/full-stack.html",
    intro: "O cardápio e as reservas do Café Horizonte deixam de existir só no navegador: neste módulo você constrói uma API própria com Node e Express, conectada a um banco MongoDB via Mongoose, e liga essa API ao front-end React construído no módulo anterior.",
    sections: [
      {
        heading: "Objetivo e Limites",
        text: "Esta apostila continua o Café Horizonte construído em HTML, CSS, JavaScript e React. O material pressupõe JavaScript assíncrono, objetos, arrays, módulos e React. A aplicação é didática: antes de produção, ainda seriam necessários autenticação, autorização, testes abrangentes, observabilidade e revisão de segurança.",
        listLabel: "Arquitetura construída neste módulo",
        list: [
          ["Node + Express", "Servidor HTTP com rotas, middlewares e controladores organizados por responsabilidade."],
          ["MongoDB + Mongoose", "Schemas, validação e persistência dos itens do cardápio e das reservas."],
          ["CORS + integração", "A API conversa apenas com a origem do front-end React, que nunca vê a string de conexão do banco."],
          ["Upload de arquivos", "Imagens de itens do cardápio, com limites de tamanho e tipo."]
        ]
      }
    ]
  },
  {
    id: "typescript",
    tech: "TypeScript",
    number: "05",
    title: "TypeScript Aplicado ao Front End",
    readMoreUrl: "curso/typescript.html",
    intro: "TypeScript acrescenta verificação estática ao JavaScript: ele ajuda a detectar combinações incompatíveis durante o desenvolvimento, melhora a navegação do editor e documenta contratos. Neste módulo, o Café Horizonte é migrado gradualmente — cardápio, formulário e serviço de API passam a ter tipos, sem perder o comportamento já construído.",
    sections: [
      {
        heading: "Objetivo e Pré-requisitos",
        text: "Você não começa uma aplicação desconectada: migra gradualmente o Café Horizonte das apostilas anteriores. O cardápio fornece entidades concretas para tipar; o formulário fornece eventos e dados opcionais; e a API fornece uma fronteira externa que precisa de contrato e validação em runtime.",
        listLabel: "O que TypeScript não faz",
        list: [
          ["Não valida JSON sozinho", "Não valida automaticamente dados recebidos de uma API — isso ainda exige uma função de validação em runtime."],
          ["Não elimina toda a lógica", "Não impede todos os erros de lógica nem substitui testes."],
          ["Não corrige um modelo ruim", "Não transforma um modelo de dados impreciso em um bom modelo."]
        ]
      }
    ]
  }
];

const COURSE_SUMMARY = {
  heading: "Tabela de Resumo: Papel de Cada Tecnologia no Projeto",
  columns: ["Tecnologia", "Função Principal", "Analogia no Projeto", "Impacto no Usuário"],
  rows: [
    ["HTML & CSS", "Estrutura Semântica, Acessibilidade e Layout Responsivo", "Esqueleto, Fundações e Acabamento", "Acessibilidade, SEO e Uso em Qualquer Tela"],
    ["JavaScript", "Interatividade, DOM e Dados Assíncronos", "Sistema Elétrico e Automação", "Interface Dinâmica com Dados Reais"],
    ["React", "Componentes, Estado e Rotas", "Módulos Pré-fabricados e Conectados", "Interface Fluida e Reativa"],
    ["Full Stack", "API, Persistência e Integração", "Encanamento e Reservatório de Dados", "Dados Reais, Persistentes e Compartilhados"],
    ["TypeScript", "Tipagem e Segurança", "Inspeção Técnica", "Menos Erros e Mais Estabilidade"]
  ]
};
