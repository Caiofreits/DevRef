const CSHARP_MODULES = [
  {
    "id": "csharp-fundamentos-e-estrutura-de",
    "tech": "C#",
    "number": "01",
    "title": "Fundamentos e Estrutura de um Programa C#",
    "intro": "Todo programa em C# começa da mesma forma: um ponto de entrada, um conjunto de instruções e dados representados por tipos bem definidos. Este módulo apresenta a anatomia mínima de uma aplicação C# executada em console, mostrando como o compilador localiza o método Main, como o programa interage com o usuário através da classe Console, e como os valores são armazenados em memória por meio de variáveis tipadas. Pense nesta estrutura como a fundação de uma casa: antes de decidir a decoração (lógica de negócio) ou a distribuição dos cômodos (classes e objetos), é preciso garantir que os alicerces — sintaxe, tipos e organização do código — estejam sólidos.",
    "sections": [
      {
        "heading": "Anatomia de um Programa C#: Main, Tipos e Namespaces",
        "text": "Um arquivo-fonte em C# normalmente começa com diretivas using, que importam namespaces contendo classes prontas para uso (como Console). O código é então organizado dentro de um namespace próprio do projeto, que por sua vez contém uma ou mais classes. Dentro de uma classe, o método estático Main é o ponto de entrada: é ele que o runtime do .NET executa primeiro. Dentro do Main, declaramos variáveis usando tipos explícitos (int, double, string, bool) ou a palavra-chave var, que permite ao compilador inferir o tipo a partir do valor atribuído, sem tornar a variável dinamicamente tipada — o tipo continua fixo em tempo de compilação.",
        "codeLabel": "Código Completo em C#",
        "codeLang": "csharp",
        "code": "using System;\n \nnamespace MeuPrimeiroApp\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine(\"Bem-vindo ao curso de C#!\");\n            Console.Write(\"Digite seu nome: \");\n            string nome = Console.ReadLine();\n \n            int anoReferencia = 2026;\n            double altura = 1.75;\n            bool estaAprendendo = true;\n            var mensagem = $\"Olá, {nome}! Você está aprendendo C#.\";\n \n            Console.WriteLine(mensagem);\n            Console.WriteLine($\"Ano de referência: {anoReferencia}, altura: {altura}m\");\n            Console.WriteLine($\"Está aprendendo: {estaAprendendo}\");\n        }\n    }\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "using System;",
            "importa o namespace System, que contém classes fundamentais do .NET, como Console, String e Math, tornando-as acessíveis sem precisar escrever o nome completo do namespace."
          ],
          [
            "namespace MeuPrimeiroApp",
            "declara um namespace próprio do projeto, usado para organizar e evitar colisão de nomes entre classes de diferentes partes de uma aplicação ou bibliotecas."
          ],
          [
            "class Program",
            "define a classe que conterá o ponto de entrada da aplicação; em C# praticamente todo código vive dentro de uma classe."
          ],
          [
            "static void Main(string[] args)",
            "é o método especial que o runtime do .NET procura e executa automaticamente ao iniciar o programa; static significa que pertence à classe e não a uma instância, e void indica que não retorna valor."
          ],
          [
            "Console.WriteLine(...)",
            "imprime um texto no console seguido de uma quebra de linha, sendo a forma mais comum de exibir saída para o usuário."
          ],
          [
            "Console.Write(...)",
            "imprime um texto no console sem adicionar quebra de linha ao final, útil para compor uma pergunta na mesma linha da resposta."
          ],
          [
            "Console.ReadLine()",
            "pausa a execução e aguarda o usuário digitar um texto e pressionar Enter, retornando o conteúdo digitado como uma string."
          ],
          [
            "string nome",
            "declara uma variável do tipo string, usado para armazenar cadeias de caracteres (texto)."
          ],
          [
            "int anoReferencia",
            "declara uma variável do tipo int, usado para números inteiros, sem casas decimais."
          ],
          [
            "double altura",
            "declara uma variável do tipo double, usado para números de ponto flutuante com precisão dupla, adequado para valores fracionários."
          ],
          [
            "bool estaAprendendo",
            "declara uma variável do tipo bool, que armazena apenas dois valores possíveis: true ou false."
          ],
          [
            "var mensagem",
            "utiliza inferência de tipo: o compilador deduz, a partir do valor atribuído (uma string), que mensagem é do tipo string, mantendo o código mais conciso sem perder a checagem de tipos em tempo de compilação."
          ],
          [
            "$\"Olá, {nome}!...\"",
            "é uma string interpolada: o cifrão ($) antes das aspas permite inserir o valor de variáveis diretamente dentro do texto usando chaves, substituindo concatenações manuais com o operador +."
          ]
        ]
      }
    ]
  },
  {
    "id": "csharp-estruturas-de-controle-e",
    "tech": "C#",
    "number": "02",
    "title": "Estruturas de Controle e Métodos",
    "intro": "Um programa que apenas executa instruções em sequência tem utilidade limitada. É a capacidade de tomar decisões e repetir tarefas que transforma um script simples em uma aplicação útil. Este módulo apresenta as estruturas de controle de fluxo do C# — condicionais (if, switch) e laços de repetição (for, foreach, while) — e mostra como extrair blocos de lógica repetidos para métodos reutilizáveis, incluindo o conceito de sobrecarga, que permite ter várias versões de um mesmo método com assinaturas diferentes. Se o Módulo 01 construiu a fundação, este módulo instala os sinais de trânsito e os atalhos que guiam o fluxo de execução do programa.",
    "sections": [
      {
        "heading": "Decisões, Repetições e Métodos Reutilizáveis",
        "text": "As estruturas condicionais permitem executar blocos diferentes de código dependendo do valor de uma expressão booleana (if/else if/else) ou do valor de uma variável comparada a vários casos possíveis (switch/case). Os laços for, foreach e while repetem um bloco de código: for é ideal quando o número de repetições é conhecido, foreach quando se deseja percorrer cada elemento de uma coleção, e while quando a repetição depende de uma condição que pode variar em tempo de execução. Métodos, por sua vez, encapsulam um trecho de lógica sob um nome, recebendo parâmetros de entrada e opcionalmente retornando um valor, evitando duplicação de código.",
        "codeLabel": "Código Completo em C#",
        "codeLang": "csharp",
        "code": "using System;\nusing System.Collections.Generic;\n \nnamespace EstruturasDeControle\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            int nota = 7;\n            if (nota >= 7)\n            {\n                Console.WriteLine(\"Aprovado\");\n            }\n            else if (nota >= 5)\n            {\n                Console.WriteLine(\"Recuperação\");\n            }\n            else\n            {\n                Console.WriteLine(\"Reprovado\");\n            }\n \n            string diaDaSemana = \"Terça\";\n            switch (diaDaSemana)\n            {\n                case \"Sábado\":\n                case \"Domingo\":\n                    Console.WriteLine(\"Fim de semana\");\n                    break;\n                default:\n                    Console.WriteLine(\"Dia útil\");\n                    break;\n            }\n \n            for (int i = 1; i <= 3; i++)\n            {\n                Console.WriteLine($\"Contagem: {i}\");\n            }\n \n            List<string> frutas = new List<string> { \"Maçã\", \"Banana\", \"Uva\" };\n            foreach (string fruta in frutas)\n            {\n                Console.WriteLine(fruta);\n            }\n \n            int soma = Somar(2, 3);\n            double somaComDecimais = Somar(2.5, 3.1);\n            Console.WriteLine($\"Soma inteira: {soma}, soma decimal: {somaComDecimais}\");\n        }\n \n        static int Somar(int a, int b)\n        {\n            return a + b;\n        }\n \n        static double Somar(double a, double b)\n        {\n            return a + b;\n        }\n    }\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "if (nota >= 7) { ... } else if ... else",
            "avalia condições em ordem: o primeiro bloco cuja condição booleana for verdadeira é executado, e o else final cobre todos os casos restantes."
          ],
          [
            "switch (diaDaSemana) { case ... default",
            "}: compara o valor da variável a uma lista de casos possíveis; quando não há correspondência com nenhum case, o bloco default é executado."
          ],
          [
            "case \"Sábado\"",
            "case \"Domingo\":: demonstra o agrupamento de múltiplos valores para o mesmo bloco de código, evitando repetir a mesma lógica para cada caso."
          ],
          [
            "break;",
            "encerra a execução do bloco atual dentro de um switch, impedindo que o fluxo continue para o próximo case."
          ],
          [
            "for (int i = 1; i <= 3; i++)",
            "repete o bloco um número definido de vezes, controlado por três partes: inicialização, condição de continuação e incremento executado a cada volta."
          ],
          [
            "List<string> frutas = new List<string> { ... }",
            "cria uma lista genérica de strings já inicializada com valores, usando a sintaxe de inicializador de coleção."
          ],
          [
            "foreach (string fruta in frutas)",
            "percorre cada elemento da coleção frutas automaticamente, sem necessidade de controlar um índice manualmente."
          ],
          [
            "static int Somar(int a, int b)",
            "declara um método que recebe dois parâmetros inteiros a e b e retorna um valor do tipo int calculado com return."
          ],
          [
            "static double Somar(double a, double b)",
            "demonstra sobrecarga de métodos: existe outro método chamado Somar, mas com parâmetros do tipo double; o compilador escolhe a versão correta com base nos tipos dos argumentos passados na chamada."
          ],
          [
            "return a + b;",
            "encerra a execução do método e devolve o valor calculado para quem o chamou."
          ]
        ]
      }
    ]
  },
  {
    "id": "csharp-programacao-orientada-a-objetos",
    "tech": "C#",
    "number": "03",
    "title": "Programação Orientada a Objetos",
    "intro": "A Programação Orientada a Objetos (POO) é o paradigma central do C#: em vez de espalhar dados e comportamentos soltos pelo código, agrupamos ambos dentro de classes, que funcionam como moldes para criar objetos. Este módulo apresenta a declaração de classes, propriedades com get/set, construtores responsáveis por inicializar cada novo objeto, e o princípio de encapsulamento, que protege o estado interno de um objeto contra modificações indevidas. Uma classe pode ser comparada à planta de uma fábrica: ela não é o produto em si, mas define exatamente como cada unidade (objeto) será montada e quais operações poderão ser realizadas sobre ela.",
    "sections": [
      {
        "heading": "Classes, Propriedades, Construtores e Encapsulamento",
        "text": "Uma classe é definida com a palavra-chave class e agrupa campos (dados) e métodos (comportamentos). Campos privados (private) só podem ser acessados de dentro da própria classe, enquanto propriedades públicas (com get e set) expõem uma forma controlada de ler e escrever esses dados, permitindo, por exemplo, impedir que um valor inválido seja atribuído. O construtor é um método especial, com o mesmo nome da classe, executado automaticamente sempre que um objeto é criado com new, sendo o local ideal para garantir que o objeto nasça em um estado consistente.",
        "codeLabel": "Código Completo em C#",
        "codeLang": "csharp",
        "code": "using System;\n \nnamespace ProgramacaoOrientadaAObjetos\n{\n    public class ContaBancaria\n    {\n        private double saldo;\n \n        public string Titular { get; set; }\n \n        public double Saldo\n        {\n            get { return saldo; }\n            private set { saldo = value; }\n        }\n \n        public ContaBancaria(string titular, double saldoInicial)\n        {\n            Titular = titular;\n            Saldo = saldoInicial;\n        }\n \n        public void Depositar(double valor)\n        {\n            if (valor > 0)\n            {\n                Saldo += valor;\n            }\n        }\n \n        public bool Sacar(double valor)\n        {\n            if (valor > 0 && valor <= Saldo)\n            {\n                Saldo -= valor;\n                return true;\n            }\n            return false;\n        }\n    }\n \n    class Program\n    {\n        static void Main(string[] args)\n        {\n            ContaBancaria conta = new ContaBancaria(\"Maria Silva\", 1000);\n            conta.Depositar(500);\n            bool sucesso = conta.Sacar(200);\n            Console.WriteLine($\"Titular: {conta.Titular}, Saldo: {conta.Saldo}, Saque ok: {sucesso}\");\n        }\n    }\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "public class ContaBancaria",
            "declara uma nova classe pública, ou seja, acessível a partir de qualquer outra parte do programa."
          ],
          [
            "private double saldo;",
            "declara um campo privado que armazena o saldo internamente; por ser private, não pode ser acessado diretamente de fora da classe, apenas através da propriedade Saldo."
          ],
          [
            "public string Titular { get; set; }",
            "define uma propriedade automática, que cria implicitamente um campo interno e permite leitura (get) e escrita (set) livres do nome do titular."
          ],
          [
            "public double Saldo { get { ... } private set { ... } }",
            "define uma propriedade com implementação explícita: o get devolve o valor do campo saldo, e o set é private, ou seja, só pode ser alterado de dentro da própria classe, protegendo o saldo contra atribuições externas diretas."
          ],
          [
            "public ContaBancaria(string titular, double saldoInicial)",
            "é o construtor da classe, chamado automaticamente ao criar um novo objeto; tem o mesmo nome da classe e nenhum tipo de retorno."
          ],
          [
            "Titular = titular; Saldo = saldoInicial;",
            "inicializam as propriedades do objeto recém-criado com os valores recebidos como parâmetro no construtor."
          ],
          [
            "public void Depositar(double valor)",
            "define um método público que altera o estado interno do objeto (aumenta o saldo) somente se o valor informado for positivo, validando a regra de negócio dentro da própria classe."
          ],
          [
            "public bool Sacar(double valor)",
            "define um método que retorna true se o saque foi realizado com sucesso (valor positivo e menor ou igual ao saldo) ou false caso contrário, encapsulando a regra de saldo insuficiente."
          ],
          [
            "new ContaBancaria(\"Maria Silva\", 1000)",
            "instancia um novo objeto da classe ContaBancaria, invocando o construtor definido anteriormente e alocando memória para o novo objeto."
          ],
          [
            "conta.Depositar(500); conta.Sacar(200);",
            "demonstram a chamada de métodos públicos sobre uma instância específica (conta), alterando o estado interno desse objeto sem que o código externo acesse o campo saldo diretamente."
          ]
        ]
      }
    ]
  },
  {
    "id": "csharp-heranca-interfaces-e-polimorfismo",
    "tech": "C#",
    "number": "04",
    "title": "Herança, Interfaces e Polimorfismo",
    "intro": "À medida que um sistema cresce, surgem classes com comportamentos parecidos, porém não idênticos. A herança permite que uma classe reaproveite membros de outra, interfaces definem contratos que diferentes classes podem se comprometer a cumprir, e o polimorfismo possibilita tratar objetos de tipos diferentes de maneira uniforme, desde que compartilhem uma base comum. Este módulo mostra como esses três pilares se combinam na prática. Uma boa analogia é uma família de veículos: carros e motos compartilham conceitos comuns (têm um motor, podem acelerar), mas cada um implementa esse comportamento de forma diferente.",
    "sections": [
      {
        "heading": "Classes Base, Interfaces e Sobrescrita de Comportamento",
        "text": "Uma interface, declarada com interface, define apenas assinaturas de métodos e/ou propriedades, sem implementação, funcionando como um contrato: qualquer classe que a implemente deve fornecer o corpo desses métodos. Uma classe abstrata (abstract class) vai além, podendo conter tanto membros totalmente implementados quanto membros abstratos, que obrigatoriamente serão implementados pelas classes derivadas. A herança é declarada com dois pontos (:) após o nome da classe filha, e métodos marcados como virtual na classe base podem ser redefinidos por override nas classes derivadas, viabilizando o polimorfismo: uma mesma chamada de método produz comportamentos diferentes dependendo do tipo real do objeto em tempo de execução.",
        "codeLabel": "Código Completo em C#",
        "codeLang": "csharp",
        "code": "using System;\nusing System.Collections.Generic;\n \nnamespace HerancaEPolimorfismo\n{\n    public interface IFalante\n    {\n        string Falar();\n    }\n \n    public abstract class Animal : IFalante\n    {\n        public string Nome { get; set; }\n \n        public Animal(string nome)\n        {\n            Nome = nome;\n        }\n \n        public abstract string Falar();\n \n        public virtual string Apresentar()\n        {\n            return $\"{Nome} diz: {Falar()}\";\n        }\n    }\n \n    public class Cachorro : Animal\n    {\n        public Cachorro(string nome) : base(nome) { }\n \n        public override string Falar()\n        {\n            return \"Au au!\";\n        }\n    }\n \n    public class Gato : Animal\n    {\n        public Gato(string nome) : base(nome) { }\n \n        public override string Falar()\n        {\n            return \"Miau!\";\n        }\n \n        public override string Apresentar()\n        {\n            return $\"{Nome} (gato) diz: {Falar()}\";\n        }\n    }\n \n    class Program\n    {\n        static void Main(string[] args)\n        {\n            List<Animal> animais = new List<Animal>\n            {\n                new Cachorro(\"Rex\"),\n                new Gato(\"Mimi\")\n            };\n \n            foreach (Animal animal in animais)\n            {\n                Console.WriteLine(animal.Apresentar());\n            }\n        }\n    }\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "public interface IFalante",
            "declara um contrato: qualquer classe que implemente IFalante é obrigada a fornecer um método Falar() que retorne uma string."
          ],
          [
            "public abstract class Animal ",
            "IFalante: declara uma classe abstrata que implementa a interface IFalante; por ser abstract, Animal não pode ser instanciada diretamente com new, servindo apenas como base para outras classes."
          ],
          [
            "public Animal(string nome)",
            "é o construtor da classe base, responsável por inicializar a propriedade Nome, comum a todos os animais."
          ],
          [
            "public abstract string Falar();",
            "declara um método abstrato, sem corpo, que obriga cada classe derivada concreta a fornecer sua própria implementação."
          ],
          [
            "public virtual string Apresentar()",
            "declara um método com implementação padrão, mas marcado como virtual, o que permite que classes derivadas o substituam por um comportamento mais específico, se necessário."
          ],
          [
            "public class Cachorro ",
            "Animal: declara que Cachorro herda de Animal, ou seja, recebe automaticamente a propriedade Nome e o método Apresentar(), além de ser obrigada a implementar Falar()."
          ],
          [
            "public Cachorro(string nome) ",
            "base(nome) { }: o construtor de Cachorro chama explicitamente o construtor da classe base (base(nome)) para garantir que a propriedade Nome seja corretamente inicializada."
          ],
          [
            "public override string Falar()",
            "sobrescreve o método abstrato (ou virtual) da classe base, fornecendo a implementação concreta específica para Cachorro ou Gato."
          ],
          [
            "public override string Apresentar()",
            "em Gato, sobrescreve também o método Apresentar(), que já tinha uma implementação padrão em Animal, customizando a mensagem apenas para esse tipo."
          ],
          [
            "List<Animal> animais = new List<Animal> { new Cachorro(...), new Gato(...) }",
            "demonstra polimorfismo: uma lista declarada do tipo base Animal armazena objetos de tipos derivados diferentes (Cachorro e Gato)."
          ],
          [
            "foreach (Animal animal in animais) { animal.Apresentar(); }",
            "ao chamar Apresentar() para cada item da lista, o método executado em tempo de execução é o da classe real do objeto (Cachorro ou Gato), não o da classe declarada na variável, o que caracteriza o polimorfismo."
          ]
        ]
      }
    ]
  },
  {
    "id": "csharp-colecoes-linq-e-tratamento",
    "tech": "C#",
    "number": "05",
    "title": "Coleções, LINQ e Tratamento de Exceções",
    "intro": "Aplicações reais raramente trabalham com uma única variável isolada: normalmente lidam com conjuntos de dados que precisam ser armazenados, consultados, filtrados e transformados, e também precisam lidar com situações inesperadas, como um índice inválido ou uma entrada malformada, sem travar. Este módulo final combina coleções genéricas como List<T> e Dictionary<K,V>, consultas declarativas com LINQ (Language Integrated Query) e o tratamento estruturado de exceções com try/catch/finally. É como organizar um almoxarifado: os dados ficam guardados de forma ordenada (coleções), existe uma forma rápida de encontrar o que se precisa (LINQ), e há um plano de contingência para quando algo sai do esperado (tratamento de exceções).",
    "sections": [
      {
        "heading": "Manipulando Coleções com LINQ e Protegendo o Código com try/catch/finally",
        "text": "List<T> representa uma lista genérica cujo tamanho pode crescer ou diminuir dinamicamente, enquanto Dictionary<K,V> armazena pares chave-valor, permitindo buscas rápidas por chave. O LINQ adiciona métodos de extensão como Where (filtragem), Select (projeção/transformação) e OrderBy (ordenação), que operam sobre qualquer coleção que implemente IEnumerable<T>, permitindo consultas expressivas e encadeadas. Já o bloco try/catch/finally protege trechos de código que podem lançar exceções: o try contém o código monitorado, um ou mais catch tratam tipos específicos de exceção, e o finally é executado sempre, tendo ocorrido erro ou não, sendo útil para liberar recursos.",
        "codeLabel": "Código Completo em C#",
        "codeLang": "csharp",
        "code": "using System;\nusing System.Collections.Generic;\nusing System.Linq;\n \nnamespace ColecoesLinqExcecoes\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            List<int> numeros = new List<int> { 5, 12, 8, 21, 3, 17 };\n            Dictionary<string, int> precos = new Dictionary<string, int>\n            {\n                { \"Caneta\", 3 },\n                { \"Caderno\", 15 },\n                { \"Mochila\", 90 }\n            };\n \n            var maioresQueDez = numeros.Where(n => n > 10).ToList();\n            var numerosDobrados = numeros.Select(n => n * 2).ToList();\n            var numerosOrdenados = numeros.OrderBy(n => n).ToList();\n            int primeiroMaiorQueVinte = numeros.FirstOrDefault(n => n > 20);\n \n            Console.WriteLine($\"Maiores que 10: {string.Join(\", \", maioresQueDez)}\");\n            Console.WriteLine($\"Dobrados: {string.Join(\", \", numerosDobrados)}\");\n            Console.WriteLine($\"Ordenados: {string.Join(\", \", numerosOrdenados)}\");\n            Console.WriteLine($\"Primeiro > 20: {primeiroMaiorQueVinte}\");\n \n            foreach (var item in precos)\n            {\n                Console.WriteLine($\"{item.Key}: R$ {item.Value}\");\n            }\n \n            try\n            {\n                int indice = 10;\n                Console.WriteLine(numeros[indice]);\n            }\n            catch (ArgumentOutOfRangeException ex)\n            {\n                Console.WriteLine($\"Erro: índice inválido. Detalhes: {ex.Message}\");\n            }\n            catch (Exception ex)\n            {\n                Console.WriteLine($\"Erro inesperado: {ex.Message}\");\n            }\n            finally\n            {\n                Console.WriteLine(\"Consulta às coleções finalizada.\");\n            }\n        }\n    }\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "List<int> numeros = new List<int> { ... }",
            "cria uma lista genérica de inteiros já preenchida, cujo tamanho pode aumentar ou diminuir dinamicamente com métodos como Add e Remove."
          ],
          [
            "Dictionary<string, int> precos = new Dictionary<string, int> { ... }",
            "cria um dicionário que associa uma chave do tipo string (o nome do produto) a um valor do tipo int (o preço), permitindo buscas rápidas pela chave."
          ],
          [
            "numeros.Where(n => n > 10)",
            "método de extensão do LINQ que filtra a coleção, retornando apenas os elementos que satisfazem a expressão lambda informada (aqui, números maiores que 10)."
          ],
          [
            "numeros.Select(n => n * 2)",
            "método do LINQ que projeta/transforma cada elemento da coleção original, aplicando a expressão informada (aqui, dobrando cada número)."
          ],
          [
            "numeros.OrderBy(n => n)",
            "método do LINQ que retorna uma nova sequência com os elementos ordenados de forma crescente, segundo o critério indicado."
          ],
          [
            "numeros.FirstOrDefault(n => n > 20)",
            "retorna o primeiro elemento que satisfaz a condição informada, ou o valor padrão do tipo (0 para int) caso nenhum elemento satisfaça."
          ],
          [
            ".ToList()",
            "converte o resultado de uma consulta LINQ, que é avaliada de forma adiada (lazy), em uma List<T> concreta, forçando a execução imediata da consulta."
          ],
          [
            "string.Join(\", \", maioresQueDez)",
            "concatena todos os elementos de uma coleção em uma única string, separando-os pelo texto informado como primeiro argumento."
          ],
          [
            "foreach (var item in precos)",
            "percorre cada par chave-valor do dicionário; item.Key acessa a chave (nome do produto) e item.Value acessa o valor associado (preço)."
          ],
          [
            "try { ... }",
            "delimita o bloco de código que será monitorado; qualquer exceção lançada dentro dele será desviada para o bloco catch correspondente, em vez de encerrar o programa abruptamente."
          ],
          [
            "catch (ArgumentOutOfRangeException ex)",
            "captura especificamente exceções do tipo ArgumentOutOfRangeException, lançada, por exemplo, ao acessar um índice inexistente em uma lista, permitindo um tratamento direcionado a esse erro."
          ],
          [
            "catch (Exception ex)",
            "captura qualquer outro tipo de exceção não tratada pelos blocos catch anteriores, funcionando como uma rede de segurança genérica."
          ],
          [
            "finally { ... }",
            "contém código que é executado sempre, independentemente de ter ocorrido uma exceção ou não, sendo o local ideal para liberar recursos como conexões ou arquivos abertos."
          ]
        ]
      }
    ]
  }
];

const CSHARP_SUMMARY = {
  "heading": "Tabela de Resumo: Papel de Cada Módulo no Aprendizado de C#",
  "columns": [
    "Módulo",
    "Conceito Central",
    "Analogia",
    "Impacto no Código"
  ],
  "rows": [
    [
      "Módulo 01",
      "Sintaxe básica, tipos e estrutura de um programa C#",
      "O alicerce de uma casa — sem ele, nada mais se sustenta",
      "Define como o programa começa a executar (Main) e como os dados são representados na memória"
    ],
    [
      "Módulo 02",
      "Fluxo de controle e reutilização de lógica com métodos",
      "Os sinais de trânsito e os atalhos de uma cidade, guiando o caminho do código",
      "Permite que o programa tome decisões e repita tarefas sem duplicar código"
    ],
    [
      "Módulo 03",
      "Organização do código em objetos com estado e comportamento (POO)",
      "A planta de uma fábrica, que define como cada produto (objeto) é montado",
      "Estrutura dados e regras de negócio dentro de classes coesas e reutilizáveis"
    ],
    [
      "Módulo 04",
      "Reaproveitamento e flexibilidade via herança, interfaces e polimorfismo",
      "Uma família de veículos que compartilha peças, mas cada um se comporta à sua maneira",
      "Reduz duplicação de código e permite tratar objetos diferentes de forma unificada"
    ],
    [
      "Módulo 05",
      "Manipulação eficiente de dados e tratamento seguro de erros",
      "Um almoxarifado organizado com um plano de contingência para imprevistos",
      "Torna o código robusto, capaz de consultar dados complexos e lidar com falhas sem quebrar"
    ]
  ]
};
