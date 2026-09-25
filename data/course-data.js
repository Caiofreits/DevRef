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
      },
      {
        heading: "Como um Site Chega ao Navegador",
        text: "Um site básico é um conjunto de arquivos: o HTML descreve o conteúdo, o CSS define a apresentação, e imagens e outros recursos completam a página. Ao abrir index.html, o navegador lê o documento, localiza as referências para os demais arquivos e monta o resultado visual.",
        codeLabel: "Estrutura inicial do projeto",
        codeLang: "text",
        code: `cafe-horizonte/
  index.html
  css/
    styles.css
  img/`,
        listLabel: "Verificação rápida",
        list: [
          ["Local do projeto", "Você sabe em qual pasta o projeto está salvo."],
          ["Nome do arquivo", "O arquivo principal se chama index.html, sem extensão adicional como .txt."],
          ["Ciclo de teste", "Alterar o texto, salvar e atualizar o navegador muda o resultado visível."]
        ]
      },
      {
        heading: "HTML: Estrutura do Documento",
        text: "HTML significa linguagem de marcação de hipertexto. Cada elemento tem, normalmente, uma tag de abertura, um conteúdo e uma tag de fechamento — o navegador usa essa marcação para entender a função de cada parte do texto.",
        codeLabel: "Documento HTML Completo",
        codeLang: "html",
        code: `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Café Horizonte</title>
  </head>
  <body>
    <h1>Café Horizonte</h1>
    <p>Cafés especiais e comida feita com calma.</p>
  </body>
</html>`,
        listLabel: "Entendendo cada parte",
        list: [
          ["<!doctype html>", "Informa que o documento usa HTML moderno."],
          ["<html lang=\"pt-BR\">", "Envolve a página inteira e informa o idioma principal, importante para SEO e leitores de tela."],
          ["<head>", "Guarda configurações e informações que não fazem parte do conteúdo visível."],
          ["<meta charset=\"UTF-8\">", "Permite representar corretamente acentos e outros caracteres."],
          ["<meta name=\"viewport\">", "Faz a largura da página acompanhar a largura do dispositivo, essencial para responsividade."],
          ["<title>", "Define o texto mostrado na aba do navegador e nos resultados de busca."],
          ["<body>", "Contém tudo o que será exibido na página."]
        ]
      },
      {
        heading: "Títulos, Parágrafos, Links, Imagens e Listas",
        codeLabel: "Elementos básicos de conteúdo",
        codeLang: "html",
        code: `<h1>Café Horizonte</h1>
<h2>Nosso cardápio</h2>
<h3>Cafés quentes</h3>
<p>Escolha entre espresso, coado e cappuccino.</p>

<a href="https://www.instagram.com/">Conheça nosso Instagram</a>
<a href="cardapio.html">Abrir o cardápio</a>

<img src="img/fachada.jpg" alt="Fachada do Café Horizonte com mesas na calçada" />

<h2>Destaques</h2>
<ul>
  <li>Café de pequenos produtores</li>
  <li>Opções sem lactose</li>
  <li>Ambiente com Wi-Fi</li>
</ul>`,
        listLabel: "Regras essenciais",
        list: [
          ["Hierarquia de títulos", "h1 a h6 representam níveis da estrutura, não tamanhos visuais — use CSS para a aparência."],
          ["Links absolutos e relativos", "Um endereço absoluto aponta para outro site; um relativo procura um arquivo dentro do próprio projeto."],
          ["alt em imagens", "Descreve a informação transmitida pela imagem para leitores de tela; use alt=\"\" em imagens puramente decorativas."],
          ["ul, ol e li", "ul cria lista sem ordem, ol cria lista ordenada, e cada item usa li."]
        ]
      },
      {
        heading: "Anatomia de uma Tag e Tags do Projeto",
        text: "O objetivo não é decorar todas as tags existentes na linguagem, mas compreender cada elemento utilizado no projeto, escolher a tag pelo significado e consultar a referência quando surgir uma necessidade nova.",
        codeLabel: "Anatomia de uma tag",
        codeLang: "html",
        code: `<a class="button" href="#cardapio">Ver cardápio</a>`,
        listLabel: "Tags utilizadas no Café Horizonte",
        list: [
          ["html, head, body", "Elemento raiz com o idioma da página; head guarda configurações; body reúne o conteúdo visível."],
          ["meta, title, link", "Codificação e viewport, nome exibido na aba do navegador e conexão com o arquivo CSS externo."],
          ["header, nav, main, footer", "Apresentação da página, links de navegação, conteúdo principal e informações de encerramento."],
          ["section, article", "Agrupa um assunto com título próprio (section) ou um conteúdo independente, como um item do cardápio (article)."],
          ["h1 a h6, p, strong, em", "Hierarquia de títulos, parágrafos, forte importância e ênfase de leitura."],
          ["a, ul, ol, li", "Navegação e listas sem ordem ou numeradas."],
          ["img, figure, figcaption", "Imagem com alternativa textual, unidade de mídia autocontida e sua legenda."],
          ["div, span", "Agrupamento em bloco ou em linha sem significado semântico próprio."],
          ["form, fieldset, legend, label, input, textarea, button", "Estrutura completa de um formulário: região de envio, agrupamento de campos, rótulos e controles."]
        ]
      },
      {
        heading: "Tags Trabalhando Juntas",
        text: "Leia o trecho de fora para dentro: section cria o assunto Cardápio, article representa um produto, figure reúne mídia e legenda, img apresenta a foto, p contém informações, strong marca o preço como importante e a conduz o visitante ao formulário.",
        codeLabel: "Cartão do cardápio",
        codeLang: "html",
        code: `<section id="cardapio" aria-labelledby="titulo-cardapio">
  <h2 id="titulo-cardapio">Cardápio</h2>
  <article class="menu-card">
    <figure>
      <img src="img/cappuccino.jpg" alt="Cappuccino servido em uma xícara branca" />
      <figcaption>Cappuccino tradicional</figcaption>
    </figure>
    <p>Espresso, leite vaporizado e espuma cremosa.</p>
    <p><strong>R$ 14,00</strong></p>
    <a class="button" href="#reserva">Reservar uma mesa</a>
  </article>
</section>`
      },
      {
        heading: "Estrutura Semântica da Página",
        text: "Elementos semânticos dizem qual é o papel de cada região: eles ajudam quem lê o código, mecanismos de busca e tecnologias assistivas. Semântica não é escolher uma tag diferente para cada bloco — é representar a estrutura real; uma div continua correta quando nenhum elemento semântico descreve o agrupamento.",
        codeLabel: "Página com elementos semânticos",
        codeLang: "html",
        code: `<body>
  <header>
    <a href="index.html">Café Horizonte</a>
    <nav aria-label="Navegação principal">
      <a href="#sobre">Sobre</a>
      <a href="#cardapio">Cardápio</a>
      <a href="#contato">Contato</a>
    </nav>
  </header>
  <main>
    <section id="sobre">
      <h1>Café Horizonte</h1>
      <p>Cafés especiais e comida feita com calma.</p>
    </section>
    <section id="cardapio">
      <h2>Cardápio</h2>
      <article>
        <h3>Cappuccino</h3>
        <p>Espresso, leite vaporizado e espuma.</p>
      </article>
    </section>
  </main>
  <footer id="contato">
    <p>Rua Exemplo, 100</p>
  </footer>
</body>`,
        listLabel: "Escolhendo o elemento correto",
        list: [
          ["header", "A região apresenta uma página ou seção."],
          ["nav", "O conjunto contém links de navegação importantes."],
          ["main", "A região contém o assunto principal da página."],
          ["section", "O conteúdo forma uma seção temática, normalmente com título."],
          ["article", "O conteúdo faz sentido como unidade independente."],
          ["aside", "O conteúdo é complementar ao assunto principal."],
          ["footer", "A região encerra uma página ou seção."],
          ["div", "Agrupamento sem significado semântico específico, usado quando nenhum elemento semântico se aplica."]
        ]
      },
      {
        heading: "Acessibilidade desde o Início",
        listLabel: "Boas práticas",
        list: [
          ["Textos de link descritivos", "Evite vários links chamados apenas de \"clique aqui\"; o texto deve indicar o destino."],
          ["Cor não é a única pista", "Não use cor como única forma de transmitir informação."],
          ["Ordem lógica de títulos", "Mantenha a hierarquia de h1 a h6 sem pular níveis."],
          ["Elementos interativos nativos", "Use button para ações e a para navegação, em vez de recriá-los com div."],
          ["Foco visível", "Não remova o contorno de foco (outline) sem oferecer uma alternativa visível."]
        ]
      },
      {
        heading: "CSS: Seletores, Classes e Cascata",
        text: "Dentro de head, adicione <link rel=\"stylesheet\" href=\"css/styles.css\" /> para conectar o arquivo externo. CSS é uma linguagem de regras: cada regra seleciona elementos e declara propriedades, separadas por ponto e vírgula. O ponto seleciona uma classe, reutilizável em vários elementos; o caractere # seleciona um id, que deve representar um elemento específico da página. Quando duas regras afetam a mesma propriedade, o navegador considera origem, importância, especificidade e ordem — por isso é melhor usar seletores simples e evitar !important.",
        codeLabel: "Estilos base e uma classe reutilizável",
        codeLang: "css",
        code: `body {
  background-color: #f6f1e8;
  color: #2f241f;
  font-family: Arial, sans-serif;
}

.button {
  background-color: #6b3f2a;
  color: #ffffff;
  padding: 0.75rem 1rem;
  text-decoration: none;
}`
      },
      {
        heading: "Modelo de Caixa e Espaçamento",
        text: "Todo elemento forma uma caixa composta por conteúdo, preenchimento (padding), borda (border) e margem (margin). Com box-sizing: border-box, a largura declarada já inclui padding e borda, evitando surpresas de layout.",
        codeLabel: "Base previsível de CSS",
        codeLang: "css",
        code: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  line-height: 1.5;
}

img {
  display: block;
  max-width: 100%;
}

.container {
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
}`,
        listLabel: "Partes da caixa",
        list: [
          ["conteúdo", "Texto, imagem ou área interna do elemento."],
          ["padding", "Espaço entre o conteúdo e a borda."],
          ["border", "Contorno da caixa."],
          ["margin", "Espaço externo entre a caixa e seus vizinhos."]
        ]
      },
      {
        heading: "Layout com Flexbox",
        text: "Flexbox organiza itens em uma dimensão principal. display: flex é aplicado ao elemento pai, chamado contêiner flexível; gap cria espaço entre os itens e flex-wrap permite a quebra de linha. Em flex: 1 1 16rem, o item pode crescer, pode encolher e começa com uma base de 16rem. Para alinhamento, justify-content trabalha no eixo principal e align-items no eixo transversal.",
        codeLabel: "Cardápio em Flexbox",
        codeLang: "css",
        code: `.menu {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.menu-card {
  flex: 1 1 16rem;
  padding: 1rem;
  border: 1px solid #d8c9bb;
  border-radius: 0.75rem;
  background-color: #ffffff;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}`
      },
      {
        heading: "Responsividade Orientada ao Conteúdo",
        text: "Um layout responsivo se adapta ao espaço disponível: comece com a versão estreita e acrescente mudanças apenas quando o conteúdo precisar. O breakpoint não representa um dispositivo específico — indica o ponto em que a composição tem espaço para mudar.",
        codeLabel: "Media query",
        codeLang: "css",
        code: `.site-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

@media (min-width: 48rem) {
  .site-header {
    flex-direction: row;
    align-items: center;
  }
}`,
        listLabel: "Checklist responsivo",
        list: [
          ["Sem rolagem horizontal", "A página não deve rolar inesperadamente para os lados."],
          ["Legibilidade em 320px", "Os textos continuam legíveis mesmo na largura mínima comum de celulares."],
          ["Área de toque", "Links e botões têm área confortável para toque."],
          ["Imagens contidas", "As imagens não ultrapassam seus contêineres."],
          ["Independência da posição visual", "O conteúdo continua compreensível sem depender apenas da posição na tela."]
        ]
      },
      {
        heading: "Formulários Compreensíveis",
        text: "Um formulário coleta dados: HTML fornece controles, identificação e validação básica, mas o envio real normalmente depende de um servidor ou serviço externo. label descreve cada controle e seu atributo for aponta para o id correspondente; required impede o envio vazio no navegador, mas a API ainda precisa validar tudo novamente.",
        codeLabel: "Formulário de reserva",
        codeLang: "html",
        code: `<form class="reservation-form" action="/reservas" method="post">
  <fieldset>
    <legend>Dados da reserva</legend>
    <div class="field">
      <label for="name">Nome</label>
      <input id="name" name="name" type="text" autocomplete="name" required />
    </div>
    <div class="field">
      <label for="email">E-mail</label>
      <input id="email" name="email" type="email" autocomplete="email" required />
    </div>
    <div class="field">
      <label for="time">Horário</label>
      <input id="time" name="time" type="time" min="08:00" max="18:00" step="1800" required />
    </div>
    <div class="field">
      <label for="notes">Observações</label>
      <textarea id="notes" name="notes" rows="4"></textarea>
    </div>
  </fieldset>
  <button type="submit">Solicitar reserva</button>
</form>`,
        listLabel: "Erros comuns em formulários",
        list: [
          ["placeholder no lugar de label", "Faz a identificação do campo desaparecer assim que o usuário começa a digitar."],
          ["id repetido", "Quebra a associação entre rótulo e campo quando duas labels apontam para o mesmo id."],
          ["Atributo name ausente", "Impede que o valor do campo seja identificado no envio tradicional do formulário."],
          ["div clicável no lugar de button", "Remove comportamentos importantes de teclado e de acessibilidade."]
        ]
      },
      {
        heading: "Projeto Guiado: Estrutura HTML do Café Horizonte",
        text: "Com o conteúdo planejado — cabeçalho, apresentação, destaques, cardápio, história, contato e rodapé — a página completa reúne tudo o que foi estudado nos capítulos anteriores.",
        codeLabel: "index.html completo",
        codeLang: "html",
        code: `<body>
  <header class="site-header container">
    <a class="brand" href="#top">Café Horizonte</a>
    <nav aria-label="Navegação principal">
      <a href="#menu">Cardápio</a>
      <a href="#about">Sobre</a>
      <a href="#contact">Contato</a>
    </nav>
  </header>
  <main id="top">
    <section class="hero">
      <div class="container hero-content">
        <p class="eyebrow">Café local desde 2018</p>
        <h1>Uma pausa boa no meio do dia</h1>
        <p>Grãos selecionados, preparo cuidadoso e um lugar tranquilo.</p>
        <a class="button" href="#menu">Conhecer o cardápio</a>
      </div>
    </section>
    <section class="container section" id="menu">
      <h2>Cardápio em destaque</h2>
      <div class="menu">
        <article class="menu-card">
          <img src="img/espresso.jpg" alt="Xícara de espresso recém-preparado" />
          <h3>Espresso</h3>
          <p>Extração curta e sabor intenso.</p>
          <p class="price">R$ 8</p>
        </article>
        <article class="menu-card">
          <img src="img/cappuccino.jpg" alt="Cappuccino servido em uma xícara branca" />
          <h3>Cappuccino</h3>
          <p>Espresso, leite e espuma cremosa.</p>
          <p class="price">R$ 14</p>
        </article>
        <article class="menu-card">
          <img src="img/cafe-coado.jpg" alt="Café coado sendo preparado no filtro" />
          <h3>Coado do dia</h3>
          <p>Grão selecionado e preparo individual.</p>
          <p class="price">R$ 11</p>
        </article>
      </div>
    </section>
    <section class="section section-alt" id="about">
      <div class="container">
        <h2>Sobre o café</h2>
        <p>Trabalhamos com produtores locais e mudamos os grãos ao longo do ano.</p>
        <img src="img/fachada.jpg" alt="Fachada do Café Horizonte com mesas na calçada" />
      </div>
    </section>
    <section class="container section" id="contact">
      <h2>Contato</h2>
      <!-- Formulário de reserva do capítulo anterior -->
    </section>
  </main>
  <footer class="site-footer">
    <div class="container">
      <p>Café Horizonte — Rua Exemplo, 100</p>
    </div>
  </footer>
</body>`
      },
      {
        heading: "Projeto Guiado: Estilo Completo do Café Horizonte",
        codeLabel: "styles.css completo",
        codeLang: "css",
        code: `:root {
  --color-bg: #fbf8f3;
  --color-surface: #ffffff;
  --color-text: #2f241f;
  --color-primary: #6b3f2a;
  --color-accent: #f2a65a;
  --color-border: #d8c9bb;
  --content-width: 70rem;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: system-ui, sans-serif;
  line-height: 1.6;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: var(--color-primary);
}

.container {
  width: min(100% - 2rem, var(--content-width));
  margin-inline: auto;
}

.site-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding-block: 1rem;
}

.site-header nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.brand {
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
}

.hero {
  background: var(--color-primary);
  color: #ffffff;
}

.hero-content {
  padding-block: clamp(4rem, 10vw, 8rem);
}

.hero h1 {
  max-width: 14ch;
  margin-block: 0.5rem 1rem;
  font-size: clamp(2.25rem, 7vw, 4.75rem);
  line-height: 1.05;
}

.eyebrow {
  color: #ffd9ad;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1rem;
  border-radius: 0.4rem;
  background: var(--color-accent);
  color: #2f241f;
  font-weight: 700;
  text-decoration: none;
}

.section {
  padding-block: 4rem;
}

.section-alt {
  background: #efe4d6;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.menu-card {
  flex: 1 1 16rem;
  padding: 1.25rem;
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  background: var(--color-surface);
}

.menu-card img {
  margin: 0 0 0.75rem;
  aspect-ratio: 4 / 3;
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}

#about img {
  display: block;
  max-width: 39rem;
  width: 100%;
  border-radius: 0.75rem;
}

.price {
  color: var(--color-primary);
  font-weight: 700;
}

.site-footer {
  padding-block: 2rem;
  background: #241a16;
  color: #ffffff;
}

@media (min-width: 48rem) {
  .site-header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}`
      },
      {
        heading: "Publicação do Site",
        text: "Um site estático pode ser publicado em serviços que recebem os arquivos HTML, CSS e imagens diretamente. O domínio é o nome usado para acessar o site; o DNS relaciona esse nome ao serviço que entrega os arquivos; e o HTTPS protege a comunicação entre navegador e servidor — muitos provedores configuram isso automaticamente assim que o domínio aponta corretamente.",
        listLabel: "Checklist antes do envio",
        list: [
          ["Arquivo inicial", "O arquivo principal se chama index.html."],
          ["Caminhos corretos", "Nomes e letras maiúsculas seguem exatamente os arquivos reais."],
          ["Sem caminhos locais", "Não existem caminhos como C:\\Users\\... referenciados no código."],
          ["Sem dados sensíveis", "Não existem senhas, chaves ou informações privadas nos arquivos."],
          ["Testes finais", "Links, imagens e formulário foram testados em celular e computador."]
        ]
      },
      {
        heading: "Diagnóstico Após a Publicação",
        listLabel: "Sintomas e verificações comuns",
        list: [
          ["CSS não carrega", "Abra a aba Network, procure erro 404 e confira maiúsculas e caminho relativo."],
          ["Imagem funciona localmente e falha online", "Verifique o nome exato do arquivo e se a imagem foi realmente enviada."],
          ["Mudança antiga continua visível", "Atualize ignorando o cache e confirme qual arquivo foi publicado."],
          ["Link interno não funciona", "Confira se o href corresponde a um id existente na página."]
        ]
      },
      {
        heading: "Exercícios e Avaliação de Autonomia",
        text: "Você está pronto para avançar para o módulo de JavaScript quando conseguir realizar estas tarefas sem copiar um projeto inteiro:",
        listLabel: "Checklist de autonomia",
        list: [
          ["Estrutura e conexão", "Criar a estrutura de pastas e conectar HTML e CSS."],
          ["Elementos fundamentais", "Explicar a função de head, body, títulos, links, imagens e listas."],
          ["Semântica", "Organizar uma página com elementos semânticos."],
          ["Estilo", "Aplicar classes, cores, tipografia, espaçamento e bordas."],
          ["Layout responsivo", "Construir um layout com Flexbox e adaptá-lo com media query."],
          ["Formulários acessíveis", "Montar um formulário identificado e navegável por teclado."],
          ["Depuração", "Localizar um caminho incorreto usando as ferramentas do navegador."],
          ["Publicação", "Publicar a página e testar os arquivos entregues."]
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
