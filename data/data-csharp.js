const CSHARP_DATA = [
  {
    "tech": "C#",
    "category": "Tipos Primitivos",
    "command": "int",
    "description": "Tipo para números inteiros.",
    "example": "int idade = 25;"
  },
  {
    "tech": "C#",
    "category": "Tipos Primitivos",
    "command": "double",
    "description": "Tipo para números de ponto flutuante de precisão dupla.",
    "example": "double preco = 19.90;"
  },
  {
    "tech": "C#",
    "category": "Tipos Primitivos",
    "command": "string",
    "description": "Tipo para cadeias de texto.",
    "example": "string nome = \"Ana\";"
  },
  {
    "tech": "C#",
    "category": "Tipos Primitivos",
    "command": "bool",
    "description": "Tipo para valores lógicos verdadeiro/falso.",
    "example": "bool ativo = true;"
  },
  {
    "tech": "C#",
    "category": "Tipos Primitivos",
    "command": "var",
    "description": "Inferência de tipo pelo compilador a partir do valor atribuído.",
    "example": "var total = 10;"
  },
  {
    "tech": "C#",
    "category": "Tipos Primitivos",
    "command": "const",
    "description": "Declara uma constante cujo valor não pode ser alterado após a compilação.",
    "example": "const double Pi = 3.14;"
  },
  {
    "tech": "C#",
    "category": "Console e E/S",
    "command": "Console.WriteLine()",
    "description": "Imprime uma linha de texto no console, com quebra de linha ao final.",
    "example": "Console.WriteLine(\"Olá!\");"
  },
  {
    "tech": "C#",
    "category": "Console e E/S",
    "command": "Console.Write()",
    "description": "Imprime texto no console sem quebra de linha ao final.",
    "example": "Console.Write(\"Nome: \");"
  },
  {
    "tech": "C#",
    "category": "Console e E/S",
    "command": "Console.ReadLine()",
    "description": "Lê uma linha de texto digitada pelo usuário e a retorna como string.",
    "example": "string entrada = Console.ReadLine();"
  },
  {
    "tech": "C#",
    "category": "Console e E/S",
    "command": "Convert.ToInt32()",
    "description": "Converte um valor, como uma string, para o tipo inteiro.",
    "example": "int n = Convert.ToInt32(Console.ReadLine());"
  },
  {
    "tech": "C#",
    "category": "Estruturas de Controle",
    "command": "if / else if / else",
    "description": "Executa blocos de código diferentes com base em condições booleanas.",
    "example": "if (x > 0) { } else { }"
  },
  {
    "tech": "C#",
    "category": "Estruturas de Controle",
    "command": "switch / case / default",
    "description": "Seleciona um bloco de execução com base no valor de uma variável.",
    "example": "switch (dia) { case \"Seg\": break; }"
  },
  {
    "tech": "C#",
    "category": "Estruturas de Controle",
    "command": "for",
    "description": "Repete um bloco de código um número definido de vezes.",
    "example": "for (int i = 0; i < 5; i++) { }"
  },
  {
    "tech": "C#",
    "category": "Estruturas de Controle",
    "command": "foreach",
    "description": "Percorre cada elemento de uma coleção, sem controle manual de índice.",
    "example": "foreach (var item in lista) { }"
  },
  {
    "tech": "C#",
    "category": "Estruturas de Controle",
    "command": "while",
    "description": "Repete um bloco de código enquanto uma condição for verdadeira.",
    "example": "while (cont < 10) { cont++; }"
  },
  {
    "tech": "C#",
    "category": "Estruturas de Controle",
    "command": "do-while",
    "description": "Executa o bloco ao menos uma vez, depois repete enquanto a condição for verdadeira.",
    "example": "do { x++; } while (x < 10);"
  },
  {
    "tech": "C#",
    "category": "Estruturas de Controle",
    "command": "break",
    "description": "Interrompe imediatamente a execução de um laço ou de um switch.",
    "example": "if (achou) break;"
  },
  {
    "tech": "C#",
    "category": "Métodos",
    "command": "static void Método()",
    "description": "Declara um método que não retorna nenhum valor.",
    "example": "static void Saudar() { Console.WriteLine(\"Oi\"); }"
  },
  {
    "tech": "C#",
    "category": "Métodos",
    "command": "static tipo Método()",
    "description": "Declara um método que retorna um valor de um tipo específico.",
    "example": "static int Dobrar(int x) { return x * 2; }"
  },
  {
    "tech": "C#",
    "category": "Métodos",
    "command": "Parâmetros",
    "description": "Valores de entrada declarados na assinatura de um método.",
    "example": "static void Somar(int a, int b) { }"
  },
  {
    "tech": "C#",
    "category": "Métodos",
    "command": "Sobrecarga de métodos",
    "description": "Permite vários métodos com o mesmo nome e assinaturas (parâmetros) diferentes.",
    "example": "int Somar(int a,int b); double Somar(double a,double b);"
  },
  {
    "tech": "C#",
    "category": "Métodos",
    "command": "Parâmetro opcional",
    "description": "Define um valor padrão usado quando o argumento não é informado na chamada.",
    "example": "static void Log(string msg, bool urgente = false) { }"
  },
  {
    "tech": "C#",
    "category": "Classes e Propriedades",
    "command": "class",
    "description": "Define um novo tipo de objeto, agrupando dados e comportamentos.",
    "example": "public class Pessoa { }"
  },
  {
    "tech": "C#",
    "category": "Classes e Propriedades",
    "command": "Propriedade get/set",
    "description": "Controla a leitura e a escrita de um dado de forma encapsulada.",
    "example": "public string Nome { get; set; }"
  },
  {
    "tech": "C#",
    "category": "Classes e Propriedades",
    "command": "Construtor",
    "description": "Método especial executado automaticamente ao criar um objeto com new.",
    "example": "public Pessoa(string nome) { Nome = nome; }"
  },
  {
    "tech": "C#",
    "category": "Classes e Propriedades",
    "command": "Campo private",
    "description": "Restringe o acesso a um dado apenas à própria classe (encapsulamento).",
    "example": "private double saldo;"
  },
  {
    "tech": "C#",
    "category": "Classes e Propriedades",
    "command": "new",
    "description": "Cria uma nova instância de uma classe, alocando memória para o objeto.",
    "example": "var p = new Pessoa(\"Ana\");"
  },
  {
    "tech": "C#",
    "category": "Classes e Propriedades",
    "command": "this",
    "description": "Referencia explicitamente a instância atual dentro da própria classe.",
    "example": "this.Nome = nome;"
  },
  {
    "tech": "C#",
    "category": "Herança e Interfaces",
    "command": ": (herança)",
    "description": "Faz uma classe herdar membros de outra classe.",
    "example": "public class Gato : Animal { }"
  },
  {
    "tech": "C#",
    "category": "Herança e Interfaces",
    "command": "interface",
    "description": "Define um contrato de métodos/propriedades que uma classe deve implementar.",
    "example": "public interface IFalante { string Falar(); }"
  },
  {
    "tech": "C#",
    "category": "Herança e Interfaces",
    "command": "abstract class",
    "description": "Classe que não pode ser instanciada diretamente e pode ter membros abstratos.",
    "example": "public abstract class Animal { }"
  },
  {
    "tech": "C#",
    "category": "Herança e Interfaces",
    "command": "virtual",
    "description": "Permite que um método com implementação padrão seja sobrescrito em classes derivadas.",
    "example": "public virtual string Apresentar() { }"
  },
  {
    "tech": "C#",
    "category": "Herança e Interfaces",
    "command": "override",
    "description": "Sobrescreve um método virtual ou abstrato herdado da classe base.",
    "example": "public override string Falar() { return \"Au au!\"; }"
  },
  {
    "tech": "C#",
    "category": "Herança e Interfaces",
    "command": "base()",
    "description": "Chama o construtor (ou membro) da classe base a partir da classe derivada.",
    "example": "public Cachorro(string nome) : base(nome) { }"
  },
  {
    "tech": "C#",
    "category": "Coleções",
    "command": "List<T>",
    "description": "Lista genérica de elementos ordenados, com tamanho dinâmico.",
    "example": "var lista = new List<int> { 1, 2, 3 };"
  },
  {
    "tech": "C#",
    "category": "Coleções",
    "command": "Dictionary<K,V>",
    "description": "Coleção de pares chave-valor com busca rápida pela chave.",
    "example": "var dic = new Dictionary<string,int>();"
  },
  {
    "tech": "C#",
    "category": "Coleções",
    "command": "Array (T[])",
    "description": "Estrutura de tamanho fixo para armazenar elementos do mesmo tipo.",
    "example": "int[] numeros = { 1, 2, 3 };"
  },
  {
    "tech": "C#",
    "category": "Coleções",
    "command": ".Add()",
    "description": "Adiciona um elemento a uma lista, ou uma chave/valor a um dicionário.",
    "example": "lista.Add(4);"
  },
  {
    "tech": "C#",
    "category": "Coleções",
    "command": ".Count",
    "description": "Propriedade que retorna a quantidade de elementos em uma coleção.",
    "example": "int total = lista.Count;"
  },
  {
    "tech": "C#",
    "category": "Coleções",
    "command": "Indexador []",
    "description": "Acessa um elemento pela posição (lista/array) ou pela chave (dicionário).",
    "example": "int primeiro = lista[0];"
  },
  {
    "tech": "C#",
    "category": "Coleções",
    "command": "KeyValuePair",
    "description": "Representa um par chave-valor ao iterar sobre um Dictionary.",
    "example": "foreach (var kv in dic) { Console.WriteLine(kv.Key); }"
  },
  {
    "tech": "C#",
    "category": "LINQ",
    "command": "using System.Linq;",
    "description": "Importa os métodos de extensão do LINQ para uso em coleções.",
    "example": "using System.Linq;"
  },
  {
    "tech": "C#",
    "category": "LINQ",
    "command": ".Where()",
    "description": "Filtra os elementos de uma coleção com base em uma condição.",
    "example": "lista.Where(x => x > 10);"
  },
  {
    "tech": "C#",
    "category": "LINQ",
    "command": ".Select()",
    "description": "Projeta/transforma cada elemento de uma coleção em um novo valor.",
    "example": "lista.Select(x => x * 2);"
  },
  {
    "tech": "C#",
    "category": "LINQ",
    "command": ".OrderBy()",
    "description": "Ordena os elementos de uma coleção de forma crescente.",
    "example": "lista.OrderBy(x => x);"
  },
  {
    "tech": "C#",
    "category": "LINQ",
    "command": ".OrderByDescending()",
    "description": "Ordena os elementos de uma coleção de forma decrescente.",
    "example": "lista.OrderByDescending(x => x);"
  },
  {
    "tech": "C#",
    "category": "LINQ",
    "command": ".FirstOrDefault()",
    "description": "Retorna o primeiro elemento que satisfaz a condição, ou o valor padrão do tipo.",
    "example": "lista.FirstOrDefault(x => x > 5);"
  },
  {
    "tech": "C#",
    "category": "LINQ",
    "command": ".Count()",
    "description": "Conta quantos elementos satisfazem uma condição informada.",
    "example": "lista.Count(x => x > 5);"
  },
  {
    "tech": "C#",
    "category": "LINQ",
    "command": ".ToList()",
    "description": "Converte o resultado de uma consulta LINQ em uma List<T> concreta.",
    "example": "var r = lista.Where(x => x > 5).ToList();"
  },
  {
    "tech": "C#",
    "category": "Tratamento de Exceções",
    "command": "try / catch",
    "description": "Executa um bloco de código monitorado e captura exceções lançadas nele.",
    "example": "try { } catch (Exception ex) { }"
  },
  {
    "tech": "C#",
    "category": "Tratamento de Exceções",
    "command": "finally",
    "description": "Bloco executado sempre, tendo ocorrido exceção ou não.",
    "example": "finally { Console.WriteLine(\"Fim\"); }"
  },
  {
    "tech": "C#",
    "category": "Tratamento de Exceções",
    "command": "throw",
    "description": "Lança uma exceção manualmente, interrompendo o fluxo normal.",
    "example": "throw new ArgumentException(\"Valor inválido\");"
  },
  {
    "tech": "C#",
    "category": "Tratamento de Exceções",
    "command": "Exception.Message",
    "description": "Propriedade que contém a descrição textual do erro ocorrido.",
    "example": "Console.WriteLine(ex.Message);"
  },
  {
    "tech": "C#",
    "category": "Recursos Modernos",
    "command": "Interpolação de string ($\"\")",
    "description": "Insere valores de variáveis diretamente dentro de uma string.",
    "example": "Console.WriteLine($\"Olá, {nome}!\");"
  },
  {
    "tech": "C#",
    "category": "Recursos Modernos",
    "command": "Operador ?. (null-conditional)",
    "description": "Acessa um membro apenas se o objeto não for nulo, evitando NullReferenceException.",
    "example": "int? tamanho = texto?.Length;"
  },
  {
    "tech": "C#",
    "category": "Recursos Modernos",
    "command": "async / await",
    "description": "Executa código de forma assíncrona sem bloquear a thread principal.",
    "example": "async Task CarregarAsync() { await Task.Delay(1000); }"
  }
];
