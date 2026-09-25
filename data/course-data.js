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
    title: "React — Construção de Interfaces Modernas por Componentes",
    intro: "O React é uma biblioteca para construir interfaces baseada em componentes. Em vez de lidar com o DOM manualmente (como no Módulo 3), você descreve como a interface deve ser e o React cuida da atualização.",
    sections: [
      {
        heading: "Código do Componente React (Contador)",
        codeLang: "jsx",
        code: `import React, { useState } from 'react';

function ContadorApp() {
  const [numero, setNumero] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Aplicação Contador em React</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Valor atual: {numero}</p>
      <button onClick={() => setNumero(numero + 1)} style={{ marginRight: '10px' }}>
        Aumentar
      </button>
      <button onClick={() => setNumero(numero - 1)}>
        Diminuir
      </button>
    </div>
  );
}

export default ContadorApp;`,
        listLabel: "Conceitos Principais do React",
        list: [
          ["Hooks (useState)", "É a forma como o React \"lembra\" de informações. Quando setNumero é chamado, o React entende que algo mudou e atualiza apenas o texto do contador na tela, sem recarregar nada."],
          ["Componentização", "Você pode criar este ContadorApp uma vez e usá-lo em dez lugares diferentes do seu site como se fosse uma tag HTML customizada."],
          ["Virtual DOM", "O React mantém uma cópia da sua página na memória. Ele compara a cópia com o que mudou e faz a alteração mínima necessária no navegador real, o que torna a aplicação extremamente rápida."]
        ]
      }
    ]
  },
  {
    id: "typescript",
    tech: "TypeScript",
    number: "04",
    title: "TypeScript — Segurança e Escala no Código",
    intro: "O TypeScript é um \"superconjunto\" do JavaScript. Ele adiciona tipos, o que significa que você define o que cada variável pode ou não conter, evitando erros comuns de lógica.",
    sections: [
      {
        heading: "Código React + TypeScript",
        codeLang: "tsx",
        code: `import React, { useState } from 'react';

interface Usuario {
  id: number;
  nome: string;
  email: string;
}

function CadastroUsuario() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const adicionarUsuario = (novoNome: string, novoEmail: string): void => {
    const novoObj: Usuario = {
      id: Date.now(),
      nome: novoNome,
      email: novoEmail
    };
    setUsuarios([...usuarios, novoObj]);
  };

  return (
    <div>
      <h2>Lista de Usuários Tipada</h2>
      <ul>
        {usuarios.map(user => (
          <li key={user.id}>
            {user.nome} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CadastroUsuario;`,
        listLabel: "Validações e Conceitos do TypeScript",
        list: [
          ["Interfaces", "Elas agem como um contrato. Se você tentar criar um Usuario sem o campo email, o código nem chegará a rodar, apresentando um erro durante o desenvolvimento."],
          ["Generic Types (<Usuario[]>)", "Informa ao React que aquele estado não é apenas uma lista qualquer, mas especificamente uma lista de objetos que seguem a interface Usuario."],
          ["Prevenção de Erros", "O TypeScript identifica erros de digitação e tipos incompatíveis (como tentar somar um número com um texto) instantaneamente, o que economiza horas de depuração em projetos grandes."]
        ]
      }
    ]
  }
];

const COURSE_SUMMARY = {
  heading: "Tabela de Resumo: Papel de Cada Tecnologia no Projeto",
  columns: ["Tecnologia", "Função Principal", "Analogia no Projeto", "Impacto no Usuário"],
  rows: [
    ["HTML5", "Estruturação Semântica", "Esqueleto e Fundações", "Acessibilidade e SEO"],
    ["CSS3", "Estilização e Layout", "Pintura e Acabamento", "Estética e Conforto Visual"],
    ["JavaScript", "Lógica e Interação", "Sistema Elétrico", "Rapidez e Dinamismo"],
    ["React", "Componentização", "Módulos Pré-fabricados", "Interface Fluida e Moderna"],
    ["TypeScript", "Tipagem e Segurança", "Inspeção Técnica", "Menos Erros e Mais Estabilidade"]
  ]
};
