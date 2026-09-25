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
    title: "JavaScript — Interatividade e Lógica na Página",
    intro: "O JavaScript é a linguagem de programação que roda no navegador. Ele permite que a página responda a eventos em tempo real sem precisar consultar o servidor a cada clique.",
    sections: [
      {
        heading: "Vinculando o JS",
        code: `<script src="script.js"></script>`,
        codeLang: "html"
      },
      {
        heading: "Código e Explicação Detalhada do JavaScript",
        codeLabel: "Código JavaScript Completo",
        codeLang: "javascript",
        code: `const formulario = document.querySelector('form');
const inputNome = document.querySelector('#nome');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const nomeDigitado = inputNome.value;

  if (nomeDigitado.trim() === '') {
    alert('Por favor, digite um nome válido!');
    return;
  }

  alert(\`Obrigado pelo contato, \${nomeDigitado}! Seu formulário foi enviado.\`);
  inputNome.value = '';
});`,
        listLabel: "Explicação Detalhada dos Métodos e Lógica",
        list: [
          ["DOM (Document Object Model)", "O JavaScript vê o HTML como uma árvore de objetos. O método document.querySelector permite \"agarrar\" esses objetos para manipulá-los."],
          ["Event Listeners", "O método addEventListener fica \"ouvindo\" a página. Quando o usuário clica em \"Enviar\", ele dispara a função definida."],
          ["event.preventDefault()", "Por padrão, um formulário recarrega a página ao ser enviado. Este comando interrompe esse comportamento, permitindo que o JS processe os dados de forma fluida."],
          ["Validação (trim e Cláusula de Guarda)", "A função .trim() remove espaços em branco inúteis. Se o campo estiver vazio, o return interrompe a função imediatamente, impedindo que o código de sucesso seja executado."],
          ["Template Literals", "O uso de crases (`) permite inserir variáveis diretamente dentro de textos de forma legível, facilitando a criação de mensagens dinâmicas."]
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
