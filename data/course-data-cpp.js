const CPP_MODULES = [
  {
    "id": "cpp-fundamentos-e-diferen",
    "tech": "C++",
    "number": "01",
    "title": "Fundamentos e Diferenças em Relação ao C",
    "intro": "O Módulo 01 estabelece a base para quem já conhece C ou outra linguagem procedural e quer migrar para C++. Aqui vemos como a linguagem estende o C com recursos de mais alto nível — como fluxo de entrada e saída orientado a objetos (cin/cout), namespaces para evitar colisão de nomes, referências para manipular variáveis sem a sintaxe explícita de ponteiros, e a palavra-chave const para expressar intenção e segurança. Pense em C++ como C acrescido de um conjunto de ferramentas que tornam o código mais expressivo e seguro, mantendo compatibilidade e desempenho.",
    "sections": [
      {
        "heading": "Entrada, Saída e Namespaces",
        "text": "Diferente do C, que usa printf e scanf, C++ introduz os streams cin e cout, definidos no cabeçalho <iostream> e agrupados dentro do namespace std. Namespaces evitam que nomes de bibliotecas diferentes colidam, funcionando como um sobrenome para identificadores. Compreender essa organização é o primeiro passo para ler qualquer programa C++ idiomático.",
        "codeLabel": "Código Completo em C++",
        "codeLang": "cpp",
        "code": "#include <iostream>\n#include <string>\n \nnamespace app {\n    void saudacao(const std::string& nome) {\n        std::cout << \"Ola, \" << nome << \"!\" << std::endl;\n    }\n}\n \nint main() {\n    std::string usuario;\n    std::cout << \"Digite seu nome: \";\n    std::cin >> usuario;\n \n    app::saudacao(usuario);\n \n    return 0;\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "#include <iostream>",
            "inclui a biblioteca padrão de entrada e saída, disponibilizando os objetos cin, cout e cerr usados para interagir com o console."
          ],
          [
            "#include <string>",
            "inclui o tipo std::string, uma classe que representa cadeias de caracteres de tamanho dinâmico, mais segura que arrays de char do C."
          ],
          [
            "namespace app { ... }",
            "cria um namespace chamado app, agrupando funções e tipos sob um nome próprio para evitar colisões com identificadores de outras bibliotecas."
          ],
          [
            "void saudacao(const std::string& nome)",
            "declara uma função que recebe uma referência constante a uma string; o parâmetro por referência evita copiar a string inteira, e const impede que a função a modifique."
          ],
          [
            "std::cout << \"Ola, \" << nome << \"!\" << std::endl;",
            "envia texto para a saída padrão usando o operador de inserção <<; std::endl insere uma quebra de linha e força o descarregamento do buffer."
          ],
          [
            "std::string usuario;",
            "declara uma variável do tipo string, inicializada vazia, que armazenará o nome digitado pelo usuário."
          ],
          [
            "std::cin >> usuario;",
            "lê uma palavra do teclado usando o operador de extração >> e armazena o resultado na variável usuario."
          ],
          [
            "app::saudacao(usuario);",
            "chama a função saudacao dentro do namespace app, usando o operador de resolução de escopo :: para acessá-la."
          ],
          [
            "return 0;",
            "indica ao sistema operacional que o programa terminou com sucesso."
          ]
        ]
      },
      {
        "heading": "Referências, const e Tipos",
        "text": "Referências (&) são apelidos para variáveis existentes, permitindo passar dados por endereço sem a sintaxe explícita de ponteiros (* e &) exigida em C. Combinadas com const, elas permitem escrever funções eficientes (sem cópias desnecessárias) e seguras (o compilador impede modificações acidentais). Esse par de recursos é uma das diferenças mais marcantes entre C e C++ no dia a dia.",
        "codeLabel": "Código Completo em C++",
        "codeLang": "cpp",
        "code": "#include <iostream>\n \nvoid dobrar(int& valor) {\n    valor = valor * 2;\n}\n \nvoid imprimirConstante(const double& pi) {\n    std::cout << \"Valor de pi: \" << pi << std::endl;\n}\n \nint main() {\n    int numero = 21;\n    dobrar(numero);\n    std::cout << \"Numero apos dobrar: \" << numero << std::endl;\n \n    const double PI = 3.14159;\n    imprimirConstante(PI);\n \n    return 0;\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "void dobrar(int& valor)",
            "declara um parâmetro por referência não constante; qualquer alteração em valor dentro da função afeta diretamente a variável original passada pelo chamador."
          ],
          [
            "valor = valor * 2;",
            "modifica o conteúdo da variável referenciada, demonstrando que a referência aponta para o mesmo espaço de memória do argumento original."
          ],
          [
            "void imprimirConstante(const double& pi)",
            "recebe uma referência constante; o parâmetro pode ser lido mas não modificado, e nenhuma cópia do double é feita, o que é uma boa prática mesmo para tipos pequenos."
          ],
          [
            "int numero = 21;",
            "declara e inicializa uma variável inteira comum."
          ],
          [
            "dobrar(numero);",
            "chama a função passando numero por referência; após a chamada, numero passa a valer 42."
          ],
          [
            "const double PI = 3.14159;",
            "declara uma constante de ponto flutuante; o qualificador const impede que PI seja reatribuída em qualquer ponto do programa, gerando erro de compilação caso isso seja tentado."
          ],
          [
            "imprimirConstante(PI);",
            "passa a constante por referência constante, evitando cópia e garantindo que a função não possa alterá-la."
          ]
        ]
      }
    ]
  },
  {
    "id": "cpp-programa-o-orientada",
    "tech": "C++",
    "number": "02",
    "title": "Programação Orientada a Objetos",
    "intro": "O Módulo 02 introduz o pilar central de C++: a programação orientada a objetos. A palavra-chave class permite agrupar dados (atributos) e comportamentos (métodos) em uma única unidade lógica, controlando o acesso a essas informações por meio dos modificadores public, private e protected. Construtores e destrutores automatizam a inicialização e a liberação de recursos, tornando o código mais robusto e menos propenso a erros manuais de gerenciamento de estado.",
    "sections": [
      {
        "heading": "Classes e Encapsulamento",
        "text": "Encapsulamento significa esconder os detalhes internos de uma classe e expor apenas uma interface controlada. Em C++, isso é feito com os modificadores de acesso private (visível apenas dentro da própria classe), protected (visível na classe e em suas subclasses) e public (visível para qualquer código externo). Esse mecanismo protege a integridade dos dados e reduz o acoplamento entre partes do sistema.",
        "codeLabel": "Código Completo em C++",
        "codeLang": "cpp",
        "code": "#include <iostream>\n#include <string>\n \nclass ContaBancaria {\nprivate:\n    std::string titular;\n    double saldo;\n \npublic:\n    void depositar(double valor) {\n        if (valor > 0) {\n            saldo += valor;\n        }\n    }\n \n    bool sacar(double valor) {\n        if (valor > 0 && valor <= saldo) {\n            saldo -= valor;\n            return true;\n        }\n        return false;\n    }\n \n    double consultarSaldo() const {\n        return saldo;\n    }\n \n    void setTitular(const std::string& nome) {\n        titular = nome;\n    }\n};\n \nint main() {\n    ContaBancaria conta;\n    conta.setTitular(\"Maria Silva\");\n    conta.depositar(1000.0);\n    conta.sacar(250.0);\n \n    std::cout << \"Saldo final: \" << conta.consultarSaldo() << std::endl;\n \n    return 0;\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "class ContaBancaria { ... };",
            "define uma nova classe chamada ContaBancaria; o ponto e vírgula final é obrigatório após o fechamento da definição."
          ],
          [
            "private",
            "std::string titular; double saldo;: declara os atributos titular e saldo como privados, tornando-os inacessíveis diretamente fora da classe."
          ],
          [
            "public",
            "void depositar(double valor) { ... }: define um método público que altera o saldo somente se o valor informado for positivo, protegendo a consistência do estado interno."
          ],
          [
            "bool sacar(double valor)",
            "retorna um valor booleano indicando se o saque foi bem-sucedido, validando que o valor é positivo e não excede o saldo disponível."
          ],
          [
            "double consultarSaldo() const",
            "método marcado com const, indicando que ele não modifica nenhum atributo do objeto; isso permite chamá-lo em objetos constantes e comunica a intenção ao restante do código."
          ],
          [
            "void setTitular(const std::string& nome)",
            "um método setter que permite alterar o atributo privado titular de forma controlada, recebendo a string por referência constante."
          ],
          [
            "ContaBancaria conta;",
            "cria um objeto (instância) da classe ContaBancaria na pilha."
          ],
          [
            "conta.setTitular(\"Maria Silva\");",
            "chama um método público usando o operador ponto, alterando o estado interno do objeto através da interface exposta."
          ],
          [
            "conta.depositar(1000.0); conta.sacar(250.0);",
            "demonstram a manipulação do saldo exclusivamente por meio dos métodos públicos, nunca acessando o atributo saldo diretamente."
          ]
        ]
      },
      {
        "heading": "Construtores e Destrutores",
        "text": "Construtores são métodos especiais chamados automaticamente na criação de um objeto, usados para garantir que ele comece em um estado válido. Destrutores são chamados automaticamente quando o objeto sai de escopo ou é destruído, e são o lugar ideal para liberar recursos como memória alocada dinamicamente. Esse ciclo de vida automático é a base do idioma RAII (Resource Acquisition Is Initialization), central em C++ moderno.",
        "codeLabel": "Código Completo em C++",
        "codeLang": "cpp",
        "code": "#include <iostream>\n#include <string>\n \nclass Arquivo {\nprivate:\n    std::string nome;\n \npublic:\n    Arquivo(const std::string& nomeArquivo) : nome(nomeArquivo) {\n        std::cout << \"Abrindo arquivo: \" << nome << std::endl;\n    }\n \n    ~Arquivo() {\n        std::cout << \"Fechando arquivo: \" << nome << std::endl;\n    }\n \n    void escrever(const std::string& conteudo) {\n        std::cout << \"Escrevendo em \" << nome << \": \" << conteudo << std::endl;\n    }\n};\n \nint main() {\n    {\n        Arquivo log(\"log.txt\");\n        log.escrever(\"Sistema iniciado\");\n    }\n \n    std::cout << \"Bloco encerrado, arquivo ja foi fechado.\" << std::endl;\n \n    return 0;\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "Arquivo(const std::string& nomeArquivo)",
            "nome(nomeArquivo) { ... }: é o construtor da classe; a sintaxe após os dois-pontos é a lista de inicialização, que inicializa o atributo nome diretamente com o valor recebido, de forma mais eficiente do que atribuir dentro do corpo."
          ],
          [
            "~Arquivo() { ... }",
            "é o destrutor, identificado pelo til (~) seguido do nome da classe; é chamado automaticamente quando o objeto deixa de existir, sem precisar de chamada explícita."
          ],
          [
            "std::cout << \"Abrindo arquivo",
            "\" << nome << std::endl;: demonstra que o construtor executa uma ação (registrar a abertura) no exato momento em que o objeto é criado."
          ],
          [
            "void escrever(const std::string& conteudo)",
            "método público que utiliza o estado interno (nome) para simular uma operação de escrita."
          ],
          [
            "{ Arquivo log(\"log.txt\"); log.escrever(...); }",
            "o bloco de chaves cria um escopo interno; o objeto log é construído ao entrar no bloco e destruído automaticamente ao sair dele, disparando o destrutor sem intervenção manual."
          ],
          [
            "std::cout << \"Bloco encerrado...\";",
            "executado após o fechamento do bloco, comprova que o destrutor já rodou antes desta linha, evidenciando o gerenciamento automático de ciclo de vida (RAII)."
          ]
        ]
      }
    ]
  },
  {
    "id": "cpp-heran-a-e",
    "tech": "C++",
    "number": "03",
    "title": "Herança e Polimorfismo",
    "intro": "O Módulo 03 explora como C++ permite construir hierarquias de classes por meio de herança, reaproveitando código e modelando relações do tipo 'é um'. O polimorfismo, viabilizado por funções virtuais, permite que o mesmo código trate objetos de tipos diferentes de forma uniforme, chamando a versão correta de um método em tempo de execução. Juntos, esses recursos são a espinha dorsal de arquiteturas orientadas a objetos extensíveis.",
    "sections": [
      {
        "heading": "Herança Simples e Override",
        "text": "Herança permite que uma classe derivada reutilize atributos e métodos de uma classe base, especializando ou estendendo seu comportamento. A palavra-chave override (introduzida no C++11) sinaliza explicitamente ao compilador que um método pretende substituir uma função virtual da classe base, permitindo detectar erros de assinatura em tempo de compilação.",
        "codeLabel": "Código Completo em C++",
        "codeLang": "cpp",
        "code": "#include <iostream>\n#include <string>\n \nclass Funcionario {\nprotected:\n    std::string nome;\n    double salarioBase;\n \npublic:\n    Funcionario(const std::string& n, double salario) : nome(n), salarioBase(salario) {}\n \n    virtual double calcularSalario() const {\n        return salarioBase;\n    }\n \n    void exibirFicha() const {\n        std::cout << nome << \" recebe: \" << calcularSalario() << std::endl;\n    }\n};\n \nclass Gerente : public Funcionario {\nprivate:\n    double bonus;\n \npublic:\n    Gerente(const std::string& n, double salario, double b)\n        : Funcionario(n, salario), bonus(b) {}\n \n    double calcularSalario() const override {\n        return salarioBase + bonus;\n    }\n};\n \nint main() {\n    Funcionario ana(\"Ana\", 4000.0);\n    Gerente carlos(\"Carlos\", 6000.0, 1500.0);\n \n    ana.exibirFicha();\n    carlos.exibirFicha();\n \n    return 0;\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "class Gerente",
            "public Funcionario: indica que Gerente herda publicamente de Funcionario, ou seja, todos os membros públicos e protegidos da base tornam-se acessíveis (respeitando seus níveis) na derivada."
          ],
          [
            "protected",
            "std::string nome; double salarioBase;: atributos protegidos são acessíveis pela própria classe e por suas classes derivadas, mas não por código externo, diferente de private."
          ],
          [
            "virtual double calcularSalario() const",
            "a palavra-chave virtual indica que esse método pode ser sobrescrito por classes derivadas e que a chamada deve ser resolvida em tempo de execução (despacho dinâmico), não em tempo de compilação."
          ],
          [
            "Gerente(...)",
            "Funcionario(n, salario), bonus(b) {}: o construtor de Gerente chama explicitamente o construtor da classe base Funcionario na lista de inicialização, garantindo que os atributos herdados sejam inicializados corretamente antes dos atributos próprios."
          ],
          [
            "double calcularSalario() const override",
            "sobrescreve o método virtual da base; a palavra override faz o compilador verificar que existe de fato um método virtual correspondente na base com a mesma assinatura, evitando erros silenciosos."
          ],
          [
            "ana.exibirFicha(); carlos.exibirFicha();",
            "como exibirFicha() chama calcularSalario() internamente, e esse método é virtual, cada objeto executa sua própria versão especializada, demonstrando polimorfismo mesmo sendo chamado a partir do mesmo método herdado."
          ]
        ]
      },
      {
        "heading": "Classes Abstratas e Funções Virtuais Puras",
        "text": "Uma classe abstrata define uma interface comum que não pode ser instanciada diretamente, servindo apenas como contrato para classes derivadas. Isso é feito declarando ao menos uma função virtual pura, com a sintaxe '= 0'. Esse padrão é fundamental para escrever código que trabalha com abstrações (como 'Forma') sem depender de implementações concretas específicas.",
        "codeLabel": "Código Completo em C++",
        "codeLang": "cpp",
        "code": "#include <iostream>\n#include <vector>\n#include <memory>\n \nclass Forma {\npublic:\n    virtual double calcularArea() const = 0;\n    virtual ~Forma() {}\n};\n \nclass Circulo : public Forma {\nprivate:\n    double raio;\n \npublic:\n    Circulo(double r) : raio(r) {}\n \n    double calcularArea() const override {\n        return 3.14159 * raio * raio;\n    }\n};\n \nclass Retangulo : public Forma {\nprivate:\n    double largura;\n    double altura;\n \npublic:\n    Retangulo(double l, double a) : largura(l), altura(a) {}\n \n    double calcularArea() const override {\n        return largura * altura;\n    }\n};\n \nint main() {\n    std::vector<std::unique_ptr<Forma>> formas;\n    formas.push_back(std::make_unique<Circulo>(5.0));\n    formas.push_back(std::make_unique<Retangulo>(4.0, 6.0));\n \n    for (const auto& forma : formas) {\n        std::cout << \"Area: \" << forma->calcularArea() << std::endl;\n    }\n \n    return 0;\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "virtual double calcularArea() const = 0;",
            "declara uma função virtual pura; o '= 0' significa que a classe Forma não implementa esse método e não pode ser instanciada diretamente, tornando-a uma classe abstrata."
          ],
          [
            "virtual ~Forma() {}",
            "declara um destrutor virtual; isso é essencial em classes base polimórficas para garantir que o destrutor da classe derivada correta seja chamado ao destruir um objeto através de um ponteiro para a base."
          ],
          [
            "class Circulo",
            "public Forma: implementa o contrato definido por Forma, sendo obrigada a fornecer uma implementação concreta de calcularArea(), caso contrário também seria considerada abstrata."
          ],
          [
            "std::vector<std::unique_ptr<Forma>> formas;",
            "declara um vetor de ponteiros inteligentes que apontam para objetos do tipo base Forma, permitindo armazenar objetos de tipos derivados diferentes na mesma coleção."
          ],
          [
            "formas.push_back(std::make_unique<Circulo>(5.0));",
            "cria um objeto Circulo gerenciado por um unique_ptr e o adiciona ao vetor; make_unique é a forma recomendada de criar ponteiros inteligentes em C++14 e superior."
          ],
          [
            "for (const auto& forma",
            "formas): percorre o vetor usando um range-based for; auto deduz automaticamente o tipo do elemento, e a referência constante evita cópias desnecessárias do ponteiro inteligente."
          ],
          [
            "forma->calcularArea()",
            "chama o método através do ponteiro; graças ao polimorfismo, a versão correta (de Circulo ou Retangulo) é executada em tempo de execução, mesmo que o tipo estático seja Forma."
          ]
        ]
      }
    ]
  },
  {
    "id": "cpp-stl-standard-template",
    "tech": "C++",
    "number": "04",
    "title": "STL — Standard Template Library",
    "intro": "O Módulo 04 apresenta a Standard Template Library (STL), o conjunto de containers, iteradores e algoritmos genéricos que tornam C++ extremamente produtivo para manipulação de dados. Em vez de reimplementar estruturas como listas dinâmicas ou tabelas de dispersão, o desenvolvedor usa vector, map e outros containers prontos, testados e otimizados, combinados com algoritmos genéricos como sort e find que funcionam sobre qualquer container compatível.",
    "sections": [
      {
        "heading": "Containers: vector, map e string",
        "text": "std::vector é um array dinâmico que cresce automaticamente; std::map é uma tabela associativa ordenada por chave, implementada tipicamente como uma árvore balanceada; e std::string, já visto no Módulo 01, também é parte da STL. Esses três containers cobrem a grande maioria das necessidades cotidianas de armazenamento de dados em C++.",
        "codeLabel": "Código Completo em C++",
        "codeLang": "cpp",
        "code": "#include <iostream>\n#include <vector>\n#include <map>\n#include <string>\n \nint main() {\n    std::vector<std::string> frutas;\n    frutas.push_back(\"Maca\");\n    frutas.push_back(\"Banana\");\n    frutas.push_back(\"Uva\");\n \n    std::map<std::string, int> estoque;\n    estoque[\"Maca\"] = 50;\n    estoque[\"Banana\"] = 30;\n    estoque[\"Uva\"] = 80;\n \n    for (const std::string& fruta : frutas) {\n        std::cout << fruta << \": \" << estoque[fruta] << \" unidades\" << std::endl;\n    }\n \n    std::cout << \"Total de frutas cadastradas: \" << frutas.size() << std::endl;\n \n    return 0;\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "std::vector<std::string> frutas;",
            "declara um vetor dinâmico de strings, cuja capacidade cresce automaticamente conforme elementos são adicionados."
          ],
          [
            "frutas.push_back(\"Maca\");",
            "adiciona um elemento ao final do vetor, realocando memória internamente se a capacidade atual for insuficiente."
          ],
          [
            "std::map<std::string, int> estoque;",
            "declara um mapa associativo que relaciona chaves do tipo string a valores do tipo int, mantido ordenado internamente pela chave."
          ],
          [
            "estoque[\"Maca\"] = 50;",
            "usa o operador de indexação para inserir ou atualizar o valor associado à chave \"Maca\"; se a chave não existir, ela é criada automaticamente."
          ],
          [
            "for (const std::string& fruta",
            "frutas): itera sobre o vetor usando range-based for, recebendo cada elemento por referência constante para evitar cópias."
          ],
          [
            "estoque[fruta]",
            "consulta o valor associado à chave fruta no mapa, retornando a quantidade correspondente em estoque."
          ],
          [
            "frutas.size()",
            "método presente em praticamente todos os containers da STL que retorna a quantidade de elementos armazenados atualmente."
          ]
        ]
      },
      {
        "heading": "Iteradores e Algoritmos",
        "text": "Iteradores são objetos que generalizam o conceito de ponteiro, permitindo percorrer qualquer container de forma uniforme. A biblioteca <algorithm> oferece funções genéricas, como sort e find, que operam sobre um par de iteradores (início e fim), funcionando igualmente bem em vectors, listas ou arrays, sem precisar conhecer os detalhes internos do container.",
        "codeLabel": "Código Completo em C++",
        "codeLang": "cpp",
        "code": "#include <iostream>\n#include <vector>\n#include <algorithm>\n \nint main() {\n    std::vector<int> numeros = {8, 3, 1, 9, 4, 6};\n \n    std::sort(numeros.begin(), numeros.end());\n \n    std::cout << \"Numeros ordenados: \";\n    for (int n : numeros) {\n        std::cout << n << \" \";\n    }\n    std::cout << std::endl;\n \n    auto it = std::find(numeros.begin(), numeros.end(), 9);\n    if (it != numeros.end()) {\n        std::cout << \"Numero 9 encontrado no indice: \" << (it - numeros.begin()) << std::endl;\n    }\n \n    return 0;\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "std::vector<int> numeros = {8, 3, 1, 9, 4, 6};",
            "inicializa um vetor de inteiros usando lista de inicialização, sintaxe disponível desde o C++11."
          ],
          [
            "std::sort(numeros.begin(), numeros.end());",
            "ordena os elementos do vetor em ordem crescente; numeros.begin() retorna um iterador para o primeiro elemento e numeros.end() para a posição logo após o último."
          ],
          [
            "for (int n",
            "numeros): percorre cada elemento do vetor já ordenado, copiando cada inteiro para a variável n (cópia aceitável aqui por ser um tipo primitivo pequeno)."
          ],
          [
            "auto it = std::find(numeros.begin(), numeros.end(), 9);",
            "busca o valor 9 no intervalo do vetor e retorna um iterador apontando para ele, ou igual a numeros.end() caso não seja encontrado."
          ],
          [
            "if (it != numeros.end())",
            "verifica se a busca teve sucesso, comparando o iterador retornado com o iterador de fim, que representa \"não encontrado\"."
          ],
          [
            "(it - numeros.begin())",
            "calcula a distância entre dois iteradores de acesso aleatório, obtendo o índice numérico da posição encontrada."
          ]
        ]
      }
    ]
  },
  {
    "id": "cpp-templates-exce-es",
    "tech": "C++",
    "number": "05",
    "title": "Templates, Exceções e Ponteiros Inteligentes",
    "intro": "O Módulo 05 fecha o curso com três recursos que caracterizam o C++ moderno e intermediário/avançado: templates, que permitem escrever código genérico reutilizável para qualquer tipo; tratamento de exceções, que separa a lógica de erro do fluxo principal do programa de forma estruturada; e ponteiros inteligentes, que automatizam o gerenciamento de memória dinâmica, eliminando a maior parte dos vazamentos de memória comuns em C.",
    "sections": [
      {
        "heading": "Templates de Função e Classe",
        "text": "Templates permitem escrever uma única implementação de função ou classe que funciona para múltiplos tipos, sem duplicação de código e sem perda de desempenho, já que o compilador gera uma versão especializada para cada tipo usado. Esse mecanismo é a base de praticamente toda a STL vista no Módulo 04.",
        "codeLabel": "Código Completo em C++",
        "codeLang": "cpp",
        "code": "#include <iostream>\n#include <vector>\n \ntemplate <typename T>\nT maior(T a, T b) {\n    return (a > b) ? a : b;\n}\n \ntemplate <typename T>\nclass Pilha {\nprivate:\n    std::vector<T> elementos;\n \npublic:\n    void empilhar(const T& valor) {\n        elementos.push_back(valor);\n    }\n \n    T desempilhar() {\n        T topo = elementos.back();\n        elementos.pop_back();\n        return topo;\n    }\n \n    bool vazia() const {\n        return elementos.empty();\n    }\n};\n \nint main() {\n    std::cout << \"Maior entre 10 e 25: \" << maior(10, 25) << std::endl;\n    std::cout << \"Maior entre 3.5 e 2.1: \" << maior(3.5, 2.1) << std::endl;\n \n    Pilha<int> pilhaInteiros;\n    pilhaInteiros.empilhar(1);\n    pilhaInteiros.empilhar(2);\n    std::cout << \"Topo desempilhado: \" << pilhaInteiros.desempilhar() << std::endl;\n \n    return 0;\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "template <typename T>",
            "declara um parâmetro de tipo genérico chamado T; o compilador substituirá T pelo tipo real usado em cada chamada, gerando código especializado (esse processo é chamado de instanciação de template)."
          ],
          [
            "T maior(T a, T b)",
            "função genérica que funciona para qualquer tipo T que suporte o operador de comparação >, como int, double ou até tipos definidos pelo usuário com o operador sobrecarregado."
          ],
          [
            "template <typename T> class Pilha { ... };",
            "define uma classe genérica; Pilha<int> e Pilha<std::string> geram, cada uma, uma classe concreta independente gerada pelo compilador a partir do mesmo código-fonte."
          ],
          [
            "std::vector<T> elementos;",
            "o container interno da pilha também é genérico, armazenando elementos do mesmo tipo T usado para instanciar a classe."
          ],
          [
            "void empilhar(const T& valor)",
            "adiciona um elemento ao topo lógico da pilha (fim do vetor interno), recebendo o valor por referência constante para evitar cópias desnecessárias."
          ],
          [
            "T desempilhar()",
            "remove e retorna o elemento do topo; note o uso de back() para acessar o último elemento e pop_back() para removê-lo."
          ],
          [
            "maior(10, 25); maior(3.5, 2.1);",
            "o compilador deduz automaticamente o tipo T a partir dos argumentos passados (int na primeira chamada, double na segunda), sem precisar de anotação explícita."
          ],
          [
            "Pilha<int> pilhaInteiros;",
            "instancia a classe genérica especificando explicitamente int como o tipo T, criando uma pilha especializada para números inteiros."
          ]
        ]
      },
      {
        "heading": "Tratamento de Exceções e Ponteiros Inteligentes",
        "text": "Exceções permitem sinalizar e tratar condições de erro de forma estruturada, separando o código de tratamento de erro (catch) do código normal (try), em vez de verificar códigos de retorno manualmente como em C. Ponteiros inteligentes como std::unique_ptr e std::shared_ptr automatizam a liberação de memória alocada dinamicamente, aplicando o princípio RAII e praticamente eliminando o uso de new/delete manuais no código moderno.",
        "codeLabel": "Código Completo em C++",
        "codeLang": "cpp",
        "code": "#include <iostream>\n#include <memory>\n#include <stdexcept>\n \nclass Recurso {\npublic:\n    Recurso() {\n        std::cout << \"Recurso alocado.\" << std::endl;\n    }\n \n    ~Recurso() {\n        std::cout << \"Recurso liberado automaticamente.\" << std::endl;\n    }\n \n    void usar() {\n        std::cout << \"Usando recurso.\" << std::endl;\n    }\n};\n \ndouble dividir(double a, double b) {\n    if (b == 0) {\n        throw std::runtime_error(\"Divisao por zero nao permitida\");\n    }\n    return a / b;\n}\n \nint main() {\n    std::shared_ptr<Recurso> r1 = std::make_shared<Recurso>();\n    std::shared_ptr<Recurso> r2 = r1;\n    r1->usar();\n    std::cout << \"Contagem de referencias: \" << r1.use_count() << std::endl;\n \n    try {\n        double resultado = dividir(10.0, 0.0);\n        std::cout << \"Resultado: \" << resultado << std::endl;\n    } catch (const std::runtime_error& erro) {\n        std::cout << \"Erro capturado: \" << erro.what() << std::endl;\n    }\n \n    return 0;\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "std::shared_ptr<Recurso> r1 = std::make_shared<Recurso>();",
            "cria um ponteiro inteligente compartilhado que gerencia automaticamente a memória do objeto Recurso, incrementando um contador de referências interno."
          ],
          [
            "std::shared_ptr<Recurso> r2 = r1;",
            "copia o ponteiro inteligente; ambos r1 e r2 agora apontam para o mesmo objeto, e o contador de referências é incrementado para 2, sem duplicar o objeto em si."
          ],
          [
            "r1.use_count()",
            "retorna quantos ponteiros shared_ptr atualmente compartilham a posse do mesmo objeto; quando esse contador chega a zero, o objeto é destruído automaticamente."
          ],
          [
            "throw std::runtime_error(\"...\");",
            "lança uma exceção do tipo padrão runtime_error, interrompendo o fluxo normal de execução e propagando o erro até que algum bloco catch compatível seja encontrado."
          ],
          [
            "try { ... } catch (const std::runtime_error& erro) { ... }",
            "o bloco try executa código que pode falhar; se uma exceção do tipo runtime_error (ou compatível) for lançada dentro dele, a execução desvia imediatamente para o bloco catch correspondente."
          ],
          [
            "erro.what()",
            "método da classe de exceções padrão que retorna uma mensagem textual explicando a causa do erro, útil para logging ou exibição ao usuário."
          ],
          [
            "~Recurso() { ... }",
            "mesmo sem chamada explícita a delete, o destrutor de Recurso é chamado automaticamente quando o último shared_ptr que o referencia é destruído, demonstrando gerenciamento automático de memória."
          ]
        ]
      }
    ]
  }
];

const CPP_SUMMARY = {
  "heading": "Tabela de Resumo: Papel de Cada Módulo no Aprendizado de C++",
  "columns": [
    "Módulo",
    "Conceito Central",
    "Analogia",
    "Impacto no Código"
  ],
  "rows": [
    [
      "Módulo 01",
      "Sintaxe fundamental, E/S com streams, referências e const",
      "Aprender a gramática e o sotaque de uma língua nova a partir de uma que você já fala",
      "Permite ler e escrever código C++ idiomático em vez de C disfarçado"
    ],
    [
      "Módulo 02",
      "Encapsulamento com classes, construtores e destrutores",
      "Uma cápsula que protege seu conteúdo e só expõe os botões necessários",
      "Organiza dados e comportamento em unidades coesas, reduzindo acoplamento"
    ],
    [
      "Módulo 03",
      "Herança e polimorfismo com funções virtuais",
      "Uma família onde cada membro herda traços comuns mas expressa a própria personalidade",
      "Permite tratar objetos diferentes de forma uniforme, favorecendo extensibilidade"
    ],
    [
      "Módulo 04",
      "Containers, iteradores e algoritmos da STL",
      "Uma caixa de ferramentas pronta em vez de forjar cada ferramenta do zero",
      "Acelera o desenvolvimento com estruturas de dados testadas e eficientes"
    ],
    [
      "Módulo 05",
      "Templates genéricos, exceções e gerenciamento automático de memória",
      "Um molde universal combinado com um sistema de segurança que nunca esquece de desligar as luzes",
      "Torna o código reutilizável, robusto a erros e livre de vazamentos de memória manuais"
    ]
  ]
};
