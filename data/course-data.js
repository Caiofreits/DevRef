const COURSE_MODULES = [
  {
    id: "html",
    tech: "HTML",
    number: "01",
    title: "HTML — A Estrutura da Página Web",
    intro: "O HTML (HyperText Markup Language) funciona como o esqueleto do prédio. Suas tags informam ao navegador e aos motores de busca (como o Google) o significado e a função de cada bloco de texto e conteúdo. Sem uma estrutura semântica correta, a acessibilidade e a indexação do site são prejudicadas.",
    sections: [
      {
        heading: "Entendendo o Funcionamento da URL e da Requisição",
        text: "Quando você digita o endereço de um site no navegador, um processo de comunicação entre cliente (seu computador) e servidor (onde os arquivos residem) é iniciado:",
        list: [
          ["Protocolo (HTTPS)", "Define as regras de comunicação com criptografia e segurança para a transferência de dados. O \"S\" indica que a camada SSL/TLS está protegendo a informação."],
          ["Domínio/Servidor", "É o endereço amigável que aponta para um servidor onde seus arquivos estão hospedados através de um endereço IP."],
          ["Arquivo Raiz (index.html)", "Por convenção da web, os servidores procuram automaticamente um arquivo chamado index.html para servir como página inicial."]
        ]
      },
      {
        heading: "Passo a Passo das Tags e Código do HTML5",
        codeLabel: "Código Completo do HTML5",
        codeLang: "html",
        code: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha Primeira Página Web</title>
</head>
<body>
  <header>
    <h1>Meu Portfólio Pessoal</h1>
  </header>
  <main>
    <section>
      <h2>Sobre Mim</h2>
      <p>Olá! Estou aprendendo desenvolvimento web do zero.</p>
    </section>
    <section>
      <h2>Contato</h2>
      <form>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" placeholder="Digite seu nome">
        <button type="submit">Enviar</button>
      </form>
    </section>
  </main>
  <footer>
    <p>&copy; 2026 - Todos os direitos reservados.</p>
  </footer>
</body>
</html>`,
        listLabel: "Explicação Detalhada de Cada Elemento",
        list: [
          ["DOCTYPE html", "Avisa o navegador para ler o documento usando a versão mais recente do HTML (HTML5), evitando o modo de compatibilidade antigo que poderia quebrar o layout."],
          ["html lang=\"pt-BR\"", "Informa o idioma principal da página. Isso é vital para SEO e para que leitores de tela identifiquem a pronúncia correta do conteúdo."],
          ["meta charset=\"UTF-8\"", "Define a codificação universal de caracteres, permitindo que qualquer símbolo ou acento seja exibido corretamente."],
          ["meta name=\"viewport\"", "Garante que o site seja responsivo. Ele instrui o navegador a renderizar a largura da página de acordo com a largura do dispositivo utilizado."],
          ["title", "Define o texto da aba do navegador. É o primeiro elemento que um usuário vê nos resultados de busca."],
          ["Tags Semânticas (header, main, section, footer)", "Organizam o código logicamente. O header contém o cabeçalho, o main o conteúdo principal, section divide os assuntos e o footer finaliza a página."],
          ["Hierarquia de Títulos (h1 vs h2)", "O h1 é a palavra-chave principal da página para o Google. Os h2 são os tópicos de apoio. Nunca pule níveis hierárquicos (ex: pular de h1 para h3)."],
          ["Formulários e Labels", "O uso do atributo for na label associado ao id do input é essencial para acessibilidade, permitindo que o foco vá para o campo ao clicar no texto descritivo."]
        ]
      }
    ]
  },
  {
    id: "css",
    tech: "CSS",
    number: "02",
    title: "CSS — Customização e Design Visual",
    intro: "O CSS (Cascading Style Sheets) cuida da pintura, decoração e layout dos elementos criados no HTML. Ele permite separar o conteúdo (HTML) da apresentação visual.",
    sections: [
      {
        heading: "Vinculação do CSS",
        code: `<link rel="stylesheet" href="style.css">`,
        codeLang: "html",
        text: "A vinculação externa é a melhor prática, pois permite que um único arquivo de estilo controle múltiplas páginas, facilitando a manutenção e o carregamento do cache do navegador."
      },
      {
        heading: "Código e Explicação Detalhada do CSS",
        codeLabel: "Código CSS Completo",
        codeLang: "css",
        code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

body {
  background-color: #f4f6f8;
  color: #333;
  line-height: 1.6;
  padding: 20px;
}

header {
  background-color: #1f4e78;
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
}

main {
  max-width: 800px;
  margin: 20px auto;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
}

input, button {
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}`,
        listLabel: "Explicação Detalhada das Propriedades",
        list: [
          ["Seletor Universal (*)", "Aplica regras base para todos os elementos, eliminando inconsistências entre navegadores."],
          ["Reset (margin: 0; padding: 0;)", "Remove os espaços automáticos que os navegadores inserem por padrão, dando controle total ao desenvolvedor."],
          ["box-sizing: border-box;", "Resolve um dos maiores problemas do CSS antigo: agora, se você define um elemento com 100px de largura e adiciona 10px de padding, ele continua tendo 100px totais, em vez de 120px."],
          ["Line-height e Contraste", "O uso de line-height: 1.6 melhora a legibilidade do texto, enquanto cores como #333 evitam o contraste extremo do preto puro contra o branco, que cansa a vista."],
          ["Flexbox (display: flex)", "Uma ferramenta poderosa de layout. No formulário, usamos flex-direction: column para empilhar itens e gap para criar espaçamentos precisos sem precisar de margens individuais."],
          ["Box-shadow", "Adiciona profundidade (o efeito \"elevado\"), o que ajuda o usuário a perceber que o conteúdo principal está em uma camada acima do fundo."]
        ]
      }
    ]
  },
  {
    id: "javascript",
    tech: "JavaScript",
    number: "03",
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
    number: "04",
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
    number: "05",
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
