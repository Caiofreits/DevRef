const CPP_DATA = [
  {
    "tech": "C++",
    "category": "Entrada e Saída",
    "command": "std::cout",
    "description": "Envia dados formatados para a saída padrão (console).",
    "example": "std::cout << \"Ola\" << std::endl;"
  },
  {
    "tech": "C++",
    "category": "Entrada e Saída",
    "command": "std::cin",
    "description": "Lê dados da entrada padrão (teclado) para uma variável.",
    "example": "std::cin >> idade;"
  },
  {
    "tech": "C++",
    "category": "Entrada e Saída",
    "command": "std::endl",
    "description": "Insere uma quebra de linha e força o descarregamento do buffer.",
    "example": "std::cout << \"fim\" << std::endl;"
  },
  {
    "tech": "C++",
    "category": "Entrada e Saída",
    "command": "#include",
    "description": "Diretiva de pré-processador que insere o conteúdo de um arquivo de cabeçalho.",
    "example": "#include <iostream>"
  },
  {
    "tech": "C++",
    "category": "Fundamentos",
    "command": "namespace",
    "description": "Agrupa identificadores sob um nome para evitar colisões entre bibliotecas.",
    "example": "namespace math { int soma(int a, int b); }"
  },
  {
    "tech": "C++",
    "category": "Fundamentos",
    "command": "using namespace std;",
    "description": "Importa todos os identificadores do namespace std para o escopo atual.",
    "example": "using namespace std;"
  },
  {
    "tech": "C++",
    "category": "Fundamentos",
    "command": ":: (resolução de escopo)",
    "description": "Acessa um identificador definido dentro de um namespace ou classe.",
    "example": "std::cout; math::soma(1, 2);"
  },
  {
    "tech": "C++",
    "category": "Fundamentos",
    "command": "& (referência)",
    "description": "Cria um apelido para uma variável existente, evitando cópias em passagem de parâmetros.",
    "example": "void f(int& x) { x = 10; }"
  },
  {
    "tech": "C++",
    "category": "Fundamentos",
    "command": "const",
    "description": "Declara que uma variável, parâmetro ou método não pode modificar o valor associado.",
    "example": "const int MAX = 100;"
  },
  {
    "tech": "C++",
    "category": "Fundamentos",
    "command": "auto",
    "description": "Deduz automaticamente o tipo de uma variável a partir do valor de inicialização.",
    "example": "auto x = 3.14;"
  },
  {
    "tech": "C++",
    "category": "Operadores e Controle",
    "command": "if / else",
    "description": "Executa blocos de código condicionalmente com base em uma expressão booleana.",
    "example": "if (x > 0) { ... } else { ... }"
  },
  {
    "tech": "C++",
    "category": "Operadores e Controle",
    "command": "for",
    "description": "Laço de repetição clássico com inicialização, condição e incremento.",
    "example": "for (int i = 0; i < 10; i++) { ... }"
  },
  {
    "tech": "C++",
    "category": "Operadores e Controle",
    "command": "while",
    "description": "Repete um bloco de código enquanto uma condição permanecer verdadeira.",
    "example": "while (contador < 5) { contador++; }"
  },
  {
    "tech": "C++",
    "category": "Operadores e Controle",
    "command": "range-based for",
    "description": "Percorre todos os elementos de um container de forma simplificada.",
    "example": "for (int n : vetor) { ... }"
  },
  {
    "tech": "C++",
    "category": "Operadores e Controle",
    "command": "switch / case",
    "description": "Seleciona um entre vários blocos de código com base no valor de uma expressão.",
    "example": "switch (op) { case '+': soma(); break; }"
  },
  {
    "tech": "C++",
    "category": "Operadores e Controle",
    "command": "operador ternário (?:)",
    "description": "Retorna um entre dois valores com base em uma condição, em uma única expressão.",
    "example": "int m = (a > b) ? a : b;"
  },
  {
    "tech": "C++",
    "category": "Classes e Objetos",
    "command": "class",
    "description": "Define um novo tipo de dado agrupando atributos e métodos.",
    "example": "class Pessoa { };"
  },
  {
    "tech": "C++",
    "category": "Classes e Objetos",
    "command": "private",
    "description": "Restringe o acesso de um membro apenas à própria classe.",
    "example": "private: int saldo;"
  },
  {
    "tech": "C++",
    "category": "Classes e Objetos",
    "command": "public",
    "description": "Libera o acesso de um membro para qualquer código externo à classe.",
    "example": "public: void depositar(double v);"
  },
  {
    "tech": "C++",
    "category": "Classes e Objetos",
    "command": "protected",
    "description": "Permite acesso ao membro pela própria classe e por classes derivadas.",
    "example": "protected: std::string nome;"
  },
  {
    "tech": "C++",
    "category": "Classes e Objetos",
    "command": "Construtor",
    "description": "Método especial chamado automaticamente na criação de um objeto.",
    "example": "Pessoa(std::string n) : nome(n) {}"
  },
  {
    "tech": "C++",
    "category": "Classes e Objetos",
    "command": "Destrutor (~)",
    "description": "Método especial chamado automaticamente quando o objeto é destruído.",
    "example": "~Pessoa() { std::cout << \"Adeus\"; }"
  },
  {
    "tech": "C++",
    "category": "Classes e Objetos",
    "command": "this",
    "description": "Ponteiro implícito que referencia o próprio objeto dentro de um método.",
    "example": "this->saldo += valor;"
  },
  {
    "tech": "C++",
    "category": "Classes e Objetos",
    "command": "Lista de inicialização",
    "description": "Inicializa atributos diretamente no cabeçalho do construtor.",
    "example": "Pessoa(int i) : idade(i) {}"
  },
  {
    "tech": "C++",
    "category": "Classes e Objetos",
    "command": "método const",
    "description": "Indica que o método não modifica o estado do objeto.",
    "example": "double getSaldo() const { return saldo; }"
  },
  {
    "tech": "C++",
    "category": "Classes e Objetos",
    "command": "Objeto (instância)",
    "description": "Cria uma variável do tipo definido por uma classe.",
    "example": "Pessoa p(\"Ana\");"
  },
  {
    "tech": "C++",
    "category": "Herança e Polimorfismo",
    "command": ": public (herança)",
    "description": "Declara que uma classe deriva publicamente de outra, herdando seus membros.",
    "example": "class Gerente : public Funcionario { };"
  },
  {
    "tech": "C++",
    "category": "Herança e Polimorfismo",
    "command": "virtual",
    "description": "Marca um método como passível de ser sobrescrito, habilitando despacho dinâmico.",
    "example": "virtual double calcularSalario() const;"
  },
  {
    "tech": "C++",
    "category": "Herança e Polimorfismo",
    "command": "override",
    "description": "Confirma explicitamente que um método sobrescreve uma função virtual da base.",
    "example": "double calcularSalario() const override;"
  },
  {
    "tech": "C++",
    "category": "Herança e Polimorfismo",
    "command": "função virtual pura (= 0)",
    "description": "Declara um método sem implementação, tornando a classe abstrata.",
    "example": "virtual double area() const = 0;"
  },
  {
    "tech": "C++",
    "category": "Herança e Polimorfismo",
    "command": "classe abstrata",
    "description": "Classe que não pode ser instanciada por conter ao menos um método virtual puro.",
    "example": "class Forma { virtual double area() const = 0; };"
  },
  {
    "tech": "C++",
    "category": "Herança e Polimorfismo",
    "command": "destrutor virtual",
    "description": "Garante que o destrutor correto seja chamado ao destruir objetos por ponteiro da base.",
    "example": "virtual ~Forma() {}"
  },
  {
    "tech": "C++",
    "category": "Herança e Polimorfismo",
    "command": "ponteiro/referência para a base",
    "description": "Permite tratar objetos derivados de forma uniforme através do tipo base.",
    "example": "Forma* f = new Circulo(5.0);"
  },
  {
    "tech": "C++",
    "category": "Herança e Polimorfismo",
    "command": "final",
    "description": "Impede que uma classe seja herdada ou que um método virtual seja sobrescrito novamente.",
    "example": "class Gerente final : public Funcionario { };"
  },
  {
    "tech": "C++",
    "category": "STL — Containers",
    "command": "std::vector<T>",
    "description": "Array dinâmico que cresce e encolhe automaticamente conforme necessário.",
    "example": "std::vector<int> nums = {1, 2, 3};"
  },
  {
    "tech": "C++",
    "category": "STL — Containers",
    "command": "push_back",
    "description": "Adiciona um elemento ao final de um container como vector.",
    "example": "nums.push_back(4);"
  },
  {
    "tech": "C++",
    "category": "STL — Containers",
    "command": "std::map<K,V>",
    "description": "Container associativo que mantém pares chave-valor ordenados pela chave.",
    "example": "std::map<std::string, int> idades;"
  },
  {
    "tech": "C++",
    "category": "STL — Containers",
    "command": "operator[] em map",
    "description": "Acessa ou insere um valor associado a uma chave em um map.",
    "example": "idades[\"Ana\"] = 30;"
  },
  {
    "tech": "C++",
    "category": "STL — Containers",
    "command": "std::string",
    "description": "Classe da STL que representa cadeias de caracteres de tamanho dinâmico.",
    "example": "std::string nome = \"Carlos\";"
  },
  {
    "tech": "C++",
    "category": "STL — Containers",
    "command": "size()",
    "description": "Retorna a quantidade de elementos armazenados em um container.",
    "example": "nums.size();"
  },
  {
    "tech": "C++",
    "category": "STL — Containers",
    "command": "empty()",
    "description": "Verifica se um container está vazio, retornando true ou false.",
    "example": "if (nums.empty()) { ... }"
  },
  {
    "tech": "C++",
    "category": "STL — Iteradores e Algoritmos",
    "command": "begin() / end()",
    "description": "Retornam iteradores para o primeiro elemento e para a posição após o último.",
    "example": "nums.begin(); nums.end();"
  },
  {
    "tech": "C++",
    "category": "STL — Iteradores e Algoritmos",
    "command": "std::sort",
    "description": "Ordena os elementos de um intervalo definido por dois iteradores.",
    "example": "std::sort(nums.begin(), nums.end());"
  },
  {
    "tech": "C++",
    "category": "STL — Iteradores e Algoritmos",
    "command": "std::find",
    "description": "Procura um valor em um intervalo, retornando um iterador para ele ou para end().",
    "example": "std::find(nums.begin(), nums.end(), 3);"
  },
  {
    "tech": "C++",
    "category": "STL — Iteradores e Algoritmos",
    "command": "pop_back",
    "description": "Remove o último elemento de um container como vector.",
    "example": "nums.pop_back();"
  },
  {
    "tech": "C++",
    "category": "STL — Iteradores e Algoritmos",
    "command": "back() / front()",
    "description": "Retornam referência ao último ou ao primeiro elemento de um container.",
    "example": "int topo = nums.back();"
  },
  {
    "tech": "C++",
    "category": "Templates e Genericidade",
    "command": "template <typename T>",
    "description": "Declara um parâmetro de tipo genérico para uma função ou classe.",
    "example": "template <typename T> T maior(T a, T b);"
  },
  {
    "tech": "C++",
    "category": "Templates e Genericidade",
    "command": "Instanciação de template",
    "description": "Ocorre quando o compilador gera código concreto a partir de um template para um tipo específico.",
    "example": "Pilha<int> p;"
  },
  {
    "tech": "C++",
    "category": "Templates e Genericidade",
    "command": "Dedução automática de tipo",
    "description": "O compilador infere o tipo T de um template a partir dos argumentos passados.",
    "example": "maior(10, 25);"
  },
  {
    "tech": "C++",
    "category": "Tratamento de Exceções",
    "command": "try / catch",
    "description": "Delimita um bloco de código a ser monitorado e o bloco que trata erros lançados nele.",
    "example": "try { ... } catch (const std::exception& e) { ... }"
  },
  {
    "tech": "C++",
    "category": "Tratamento de Exceções",
    "command": "throw",
    "description": "Lança uma exceção, interrompendo o fluxo normal e propagando o erro.",
    "example": "throw std::runtime_error(\"erro\");"
  },
  {
    "tech": "C++",
    "category": "Tratamento de Exceções",
    "command": "std::runtime_error",
    "description": "Classe padrão de exceção usada para erros detectados apenas em tempo de execução.",
    "example": "throw std::runtime_error(\"falha\");"
  },
  {
    "tech": "C++",
    "category": "Tratamento de Exceções",
    "command": "what()",
    "description": "Método das classes de exceção padrão que retorna a mensagem descritiva do erro.",
    "example": "std::cout << e.what();"
  },
  {
    "tech": "C++",
    "category": "Gerenciamento de Memória",
    "command": "std::unique_ptr<T>",
    "description": "Ponteiro inteligente que possui posse exclusiva de um objeto alocado dinamicamente.",
    "example": "std::unique_ptr<Forma> f = std::make_unique<Circulo>(5.0);"
  },
  {
    "tech": "C++",
    "category": "Gerenciamento de Memória",
    "command": "std::shared_ptr<T>",
    "description": "Ponteiro inteligente que compartilha a posse de um objeto entre múltiplas referências contadas.",
    "example": "std::shared_ptr<Recurso> r = std::make_shared<Recurso>();"
  },
  {
    "tech": "C++",
    "category": "Gerenciamento de Memória",
    "command": "use_count()",
    "description": "Retorna quantos shared_ptr atualmente compartilham a posse do mesmo objeto.",
    "example": "r.use_count();"
  }
];
