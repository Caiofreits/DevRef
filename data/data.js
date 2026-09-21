const DEVREF_DATA = [
  {
    "tech": "HTML",
    "category": "Raiz e Seções",
    "command": "<html>, <head>, <body>",
    "description": "Estrutura fundamental de um documento HTML",
    "example": "<html><head><title>Página</title></head><body></body></html>"
  },
  {
    "tech": "HTML",
    "category": "Cabeçalho / SEO",
    "command": "<meta>",
    "description": "Define metadados como charset, viewport e autor",
    "example": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
  },
  {
    "tech": "HTML",
    "category": "Títulos",
    "command": "<h1> a <h6>",
    "description": "Hierarquia de cabeçalhos do documento",
    "example": "<h1>Título Nível 1</h1>"
  },
  {
    "tech": "HTML",
    "category": "Texto",
    "command": "<p>",
    "description": "Parágrafo de texto",
    "example": "<p>Texto do parágrafo.</p>"
  },
  {
    "tech": "HTML",
    "category": "Navegação",
    "command": "<a>",
    "description": "Cria links para páginas internas, externas ou seções",
    "example": "<a href=\"/sobre\">Sobre nós</a>"
  },
  {
    "tech": "HTML",
    "category": "Mídia",
    "command": "<img>",
    "description": "Insere imagens com atributo alt acessível",
    "example": "<img src=\"logo.png\" alt=\"Logo da empresa\">"
  },
  {
    "tech": "HTML",
    "category": "Mídia HTML5",
    "command": "<audio> / <video>",
    "description": "Inclusão de players nativos de som e vídeo",
    "example": "<video controls><source src=\"video.mp4\" type=\"video/mp4\"></video>"
  },
  {
    "tech": "HTML",
    "category": "Agrupamento",
    "command": "<div> / <span>",
    "description": "Bloco genérico (div) e em linha (span)",
    "example": "<div class=\"container\"><span class=\"highlight\">Texto</span></div>"
  },
  {
    "tech": "HTML",
    "category": "Listas",
    "command": "<ul>, <ol>, <li>",
    "description": "Listas não ordenadas, ordenadas e seus itens",
    "example": "<ul><li>Item A</li><li>Item B</li></ul>"
  },
  {
    "tech": "HTML",
    "category": "Formulários",
    "command": "<form>, <input>, <label>",
    "description": "Estrutura de campos de entrada e formulários",
    "example": "<form><label>Nome:</label><input type=\"text\"/></form>"
  },
  {
    "tech": "HTML",
    "category": "Formulários",
    "command": "<button>, <select>, <option>, <textarea>",
    "description": "Controles de interação, listas suspensas e texto longo",
    "example": "<select><option value=\"1\">Opção 1</option></select>"
  },
  {
    "tech": "HTML",
    "category": "Semântica",
    "command": "<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>",
    "description": "Elementos estruturais que definem o significado do conteúdo",
    "example": "<main><section><article>Conteúdo</article></section></main>"
  },
  {
    "tech": "HTML",
    "category": "Tabelas",
    "command": "<table>, <tr>, <th>, <td>, <thead>, <tbody>",
    "description": "Estrutura completa para dados tabulares",
    "example": "<table><thead><tr><th>Nome</th></tr></thead></table>"
  },
  {
    "tech": "HTML",
    "category": "Gráficos",
    "command": "<canvas>, <svg>",
    "description": "Renderização de gráficos 2D e vetores",
    "example": "<svg width=\"100\" height=\"100\"><circle cx=\"50\" cy=\"50\" r=\"40\"/></svg>"
  },
  {
    "tech": "HTML",
    "category": "Modal Nativo",
    "command": "<dialog>",
    "description": "Cria caixas de diálogo e modais interativos",
    "example": "<dialog open><p>Mensagem</p></dialog>"
  },
  {
    "tech": "CSS",
    "category": "Cores e Visibilidade",
    "command": "color, background-color, opacity",
    "description": "Define cor do texto, fundo e transparência",
    "example": "p { color: #222; opacity: 0.9; }"
  },
  {
    "tech": "CSS",
    "category": "Tipografia",
    "command": "font-family, font-size, font-weight, line-height, letter-spacing",
    "description": "Controle total de fontes e formatação de texto",
    "example": "body { font-family: Arial; font-size: 1rem; line-height: 1.5; }"
  },
  {
    "tech": "CSS",
    "category": "Modelo de Caixa",
    "command": "margin, padding, box-sizing",
    "description": "Espaçamentos e cálculo de dimensões de borda",
    "example": "* { box-sizing: border-box; margin: 0; padding: 0; }"
  },
  {
    "tech": "CSS",
    "category": "Dimensões",
    "command": "width, height, min-width, max-width",
    "description": "Tamanho fixo, mínimo e máximo de elementos",
    "example": ".card { max-width: 600px; width: 100%; }"
  },
  {
    "tech": "CSS",
    "category": "Modos de Exibição",
    "command": "display (block, inline, inline-block, flex, grid, none)",
    "description": "Define o comportamento de layout no fluxo do documento",
    "example": ".hidden { display: none; }"
  },
  {
    "tech": "CSS",
    "category": "Flexbox",
    "command": "flex-direction, justify-content, align-items, flex-wrap, gap",
    "description": "Alinhamento e distribuição unidimensional",
    "example": ".nav { display: flex; justify-content: space-between; align-items: center; }"
  },
  {
    "tech": "CSS",
    "category": "CSS Grid",
    "command": "grid-template-columns, grid-template-rows, grid-area, gap",
    "description": "Layout bidimensional em colunas e linhas",
    "example": ".grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }"
  },
  {
    "tech": "CSS",
    "category": "Posicionamento",
    "command": "position (relative, absolute, fixed, sticky), top, left, z-index",
    "description": "Controle de camadas e eixos x/y",
    "example": ".header { position: sticky; top: 0; z-index: 100; }"
  },
  {
    "tech": "CSS",
    "category": "Estilização",
    "command": "border, border-radius, box-shadow",
    "description": "Bordas, cantos arredondados e sombras em caixas",
    "example": ".btn { border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }"
  },
  {
    "tech": "CSS",
    "category": "Transições e Transformações",
    "command": "transition, transform (translate, rotate, scale)",
    "description": "Animações suaves e alterações de forma/posição",
    "example": ".btn:hover { transform: translateY(-2px); transition: 0.3s; }"
  },
  {
    "tech": "CSS",
    "category": "Animações CSS",
    "command": "@keyframes, animation",
    "description": "Animações complexas por quadros-chave",
    "example": "@keyframes fade { from { opacity: 0; } to { opacity: 1; } }"
  },
  {
    "tech": "CSS",
    "category": "Responsividade",
    "command": "@media (min-width, max-width)",
    "description": "Regras condicionais baseadas na tela do dispositivo",
    "example": "@media (max-width: 768px) { .sidebar { display: none; } }"
  },
  {
    "tech": "CSS",
    "category": "Seletores e Pseudo-elementos",
    "command": ":hover, :focus, :nth-child(), ::before, ::after",
    "description": "Estilização condicional e elementos virtuais",
    "example": "li:nth-child(even) { background: #f0f0f0; }"
  },
  {
    "tech": "JavaScript",
    "category": "Declaradores",
    "command": "let, const, var",
    "description": "Escopo de bloco (let/const) vs escopo de função (var)",
    "example": "const taxa = 0.15; let saldo = 1000;"
  },
  {
    "tech": "JavaScript",
    "category": "Funções",
    "command": "Arrow Functions (() => {}) / function",
    "description": "Declaração sintática e bind de 'this'",
    "example": "const calcular = (a, b) => a * b;"
  },
  {
    "tech": "JavaScript",
    "category": "Desestruturação",
    "command": "Destructuring ({ a, b }, [x, y])",
    "description": "Extração direta de valores de objetos e arrays",
    "example": "const { id, titulo } = produto;"
  },
  {
    "tech": "JavaScript",
    "category": "Operadores",
    "command": "Spread / Rest Operator (...)",
    "description": "Expansão ou agrupamento de arrays e objetos",
    "example": "const novoArray = [...original, 4, 5];"
  },
  {
    "tech": "JavaScript",
    "category": "Interpolação",
    "command": "Template Literals (`${var}`)",
    "description": "Interpolação de variáveis e strings multilinha",
    "example": "const msg = `Olá ${nome}, total: R$${valor}`;"
  },
  {
    "tech": "JavaScript",
    "category": "Iteração de Arrays",
    "command": "Array Methods (.map, .filter, .reduce, .find, .includes, .some, .every)",
    "description": "Processamento funcional de coleções de dados",
    "example": "const ativos = usuarios.filter(u => u.ativo);"
  },
  {
    "tech": "JavaScript",
    "category": "Manipulação de Objetos",
    "command": "Object Methods (Object.keys, Object.values, Object.entries)",
    "description": "Inspeção de chaves e valores de objetos",
    "example": "Object.keys(user).forEach(k => console.log(k));"
  },
  {
    "tech": "JavaScript",
    "category": "Manipulação DOM",
    "command": "DOM Selection (querySelector, getElementById)",
    "description": "Acesso aos nós do documento HTML",
    "example": "const btn = document.querySelector('.btn-salvar');"
  },
  {
    "tech": "JavaScript",
    "category": "Eventos DOM",
    "command": "Event Handling (addEventListener, removeEventListener)",
    "description": "Registro e escuta de ações do usuário",
    "example": "btn.addEventListener('click', (e) => e.preventDefault());"
  },
  {
    "tech": "JavaScript",
    "category": "Assincronismo e APIs",
    "command": "Promises, async / await, fetch",
    "description": "Requisições HTTP e operações assíncronas não bloqueantes",
    "example": "const res = await fetch('/api'); const data = await res.json();"
  },
  {
    "tech": "JavaScript",
    "category": "Armazenamento Local",
    "command": "Web Storage (localStorage, sessionStorage)",
    "description": "Persistência de dados no navegador do cliente",
    "example": "localStorage.setItem('token', 'abc123xyz');"
  },
  {
    "tech": "React",
    "category": "Sintaxe de UI",
    "command": "JSX (JavaScript XML)",
    "description": "Escrever código declarativo de UI misturado ao JS",
    "example": "return <button className=\"primary\">Salvar</button>;"
  },
  {
    "tech": "React",
    "category": "Estado Reativo",
    "command": "useState()",
    "description": "Declaração e atualização de estados locais",
    "example": "const [dados, setDados] = useState([]);"
  },
  {
    "tech": "React",
    "category": "Efeitos Colaterais",
    "command": "useEffect()",
    "description": "Ciclo de vida: montagem, atualização e desmontagem",
    "example": "useEffect(() => { carregarDados(); }, []);"
  },
  {
    "tech": "React",
    "category": "Estado Global",
    "command": "useContext() & createContext()",
    "description": "Compartilhamento de dados na árvore sem prop drilling",
    "example": "const user = useContext(AuthContext);"
  },
  {
    "tech": "React",
    "category": "Referências e DOM",
    "command": "useRef()",
    "description": "Acesso a nós do DOM e persistência de valores sem re-render",
    "example": "const inputRef = useRef(null); inputRef.current.focus();"
  },
  {
    "tech": "React",
    "category": "Otimização",
    "command": "useMemo() & useCallback()",
    "description": "Memoização de cálculos pesados e referências de funções",
    "example": "const listaFiltrada = useMemo(() => itens.filter(...), [itens]);"
  },
  {
    "tech": "React",
    "category": "Estado Complexo",
    "command": "useReducer()",
    "description": "Gerenciamento de estado complexo por ações e reducers",
    "example": "const [state, dispatch] = useReducer(reducer, initialState);"
  },
  {
    "tech": "React",
    "category": "Comunicação",
    "command": "Props & Prop Drills",
    "description": "Passagem de parâmetros e dados de componentes pai para filho",
    "example": "<Card titulo=\"Notícia\" autor={autorObj} />"
  },
  {
    "tech": "React",
    "category": "Lógica de Render",
    "command": "Renderização Condicional & Listas",
    "description": "Ternários, operador && e iteração com atributo key único",
    "example": "{carregando ? <Loading /> : lista.map(i => <Item key={i.id} {...i} />)}"
  },
  {
    "tech": "TypeScript",
    "category": "Tipagem Estática",
    "command": "Tipos Primitivos (string, number, boolean, null, undefined, unknown, any)",
    "description": "Declaração explícita de tipos de dados",
    "example": "let contador: number = 0;"
  },
  {
    "tech": "TypeScript",
    "category": "Contrato de Objeto",
    "command": "Interfaces (interface Pessoa { ... })",
    "description": "Definição de formatos de objetos e estruturas extensíveis",
    "example": "interface User { id: number; nome: string; }"
  },
  {
    "tech": "TypeScript",
    "category": "Tipos Customizados",
    "command": "Type Alias (type Status = 'a' | 'b')",
    "description": "Apelidos de tipo, uniões literais e interseções",
    "example": "type Result = Success | Error;"
  },
  {
    "tech": "TypeScript",
    "category": "Componentização de Tipos",
    "command": "Generics (<T>)",
    "description": "Criação de código altamente reutilizável e tipado",
    "example": "function clonar<T>(obj: T): T { return { ...obj }; }"
  },
  {
    "tech": "TypeScript",
    "category": "Manipulação de Tipos",
    "command": "Utility Types (Partial<T>, Readonly<T>, Pick<T, K>, Omit<T, K>)",
    "description": "Modificadores embutidos para transformar tipos existentes",
    "example": "type UserResumido = Pick<User, 'id' | 'nome'>;"
  },
  {
    "tech": "TypeScript",
    "category": "Coleção de Constantes",
    "command": "Enums (enum Role { ADMIN, USER })",
    "description": "Grupo de constantes nomeadas e enumeradas",
    "example": "enum Status { Ativo = 1, Inativo = 0 }"
  },
  {
    "tech": "TypeScript",
    "category": "Acesso Seguro",
    "command": "Optional Chaining (?.) e Nullish Coalescing (??)",
    "description": "Navegação em propriedades nulas e operador de fallback",
    "example": "const rua = usuario?.endereco?.rua ?? 'Não informada';"
  },
  {
    "tech": "TypeScript",
    "category": "Asserção de Tipo",
    "command": "Type Assertions (as string, as HTMLInputElement)",
    "description": "Instruir o compilador sobre o tipo específico de um valor",
    "example": "const campo = document.getElementById('input') as HTMLInputElement;"
  }
];
