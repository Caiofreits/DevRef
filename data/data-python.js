const PYTHON_DATA = [
  {
    "tech": "Python",
    "category": "Tipos Primitivos",
    "command": "int",
    "description": "Tipo para representar números inteiros.",
    "example": "idade = 25"
  },
  {
    "tech": "Python",
    "category": "Tipos Primitivos",
    "command": "float",
    "description": "Tipo para representar números de ponto flutuante.",
    "example": "preco = 19.90"
  },
  {
    "tech": "Python",
    "category": "Tipos Primitivos",
    "command": "str",
    "description": "Tipo para representar cadeias de texto (strings).",
    "example": "nome = \"Ana\""
  },
  {
    "tech": "Python",
    "category": "Tipos Primitivos",
    "command": "bool",
    "description": "Tipo lógico com os valores True ou False.",
    "example": "ativo = True"
  },
  {
    "tech": "Python",
    "category": "Operadores Aritméticos",
    "command": "// e %",
    "description": "Retornam a divisão inteira e o resto da divisão entre dois números.",
    "example": "10 // 3 resulta em 3; 10 % 3 resulta em 1"
  },
  {
    "tech": "Python",
    "category": "Operadores de Comparação",
    "command": "==, !=, >, <, >=, <=",
    "description": "Comparam dois valores e retornam um resultado booleano.",
    "example": "5 > 3  # True"
  },
  {
    "tech": "Python",
    "category": "Operadores Lógicos",
    "command": "and, or, not",
    "description": "Combinam ou invertem expressões booleanas.",
    "example": "True and False  # False"
  },
  {
    "tech": "Python",
    "category": "Entrada e Saída",
    "command": "input()",
    "description": "Lê uma linha de texto digitada pelo usuário no console.",
    "example": "nome = input(\"Nome: \")"
  },
  {
    "tech": "Python",
    "category": "Entrada e Saída",
    "command": "print()",
    "description": "Exibe valores formatados no console.",
    "example": "print(\"Olá, mundo!\")"
  },
  {
    "tech": "Python",
    "category": "Formatação de Strings",
    "command": "f-string",
    "description": "Insere o valor de variáveis diretamente dentro de uma string.",
    "example": "print(f\"Olá, {nome}!\")"
  },
  {
    "tech": "Python",
    "category": "Conversão de Tipos",
    "command": "int(), float(), str()",
    "description": "Convertem um valor de um tipo de dado para outro.",
    "example": "idade = int(\"25\")"
  },
  {
    "tech": "Python",
    "category": "Condicionais",
    "command": "if / elif / else",
    "description": "Executam blocos de código diferentes de acordo com uma condição.",
    "example": "if idade >= 18:\n    print(\"Maior\")"
  },
  {
    "tech": "Python",
    "category": "Laços de Repetição",
    "command": "for item in lista:",
    "description": "Itera sobre cada elemento de uma sequência.",
    "example": "for x in [1, 2, 3]:\n    print(x)"
  },
  {
    "tech": "Python",
    "category": "Laços de Repetição",
    "command": "while condição:",
    "description": "Repete um bloco de código enquanto a condição for verdadeira.",
    "example": "while contador < 5:\n    contador += 1"
  },
  {
    "tech": "Python",
    "category": "Controle de Laço",
    "command": "break",
    "description": "Interrompe imediatamente a execução do laço mais próximo.",
    "example": "if x == 3:\n    break"
  },
  {
    "tech": "Python",
    "category": "Controle de Laço",
    "command": "continue",
    "description": "Pula para a próxima iteração do laço, ignorando o restante do bloco.",
    "example": "if x % 2 == 0:\n    continue"
  },
  {
    "tech": "Python",
    "category": "Funções",
    "command": "def nome():",
    "description": "Define uma função reutilizável.",
    "example": "def saudacao():\n    print(\"Oi\")"
  },
  {
    "tech": "Python",
    "category": "Funções",
    "command": "return",
    "description": "Devolve um valor ao ponto do programa onde a função foi chamada.",
    "example": "def dobro(n):\n    return n * 2"
  },
  {
    "tech": "Python",
    "category": "Funções",
    "command": "Parâmetro padrão",
    "description": "Define um valor default para um parâmetro, usado quando ele não é informado.",
    "example": "def saudacao(nome=\"visitante\"):\n    print(nome)"
  },
  {
    "tech": "Python",
    "category": "Escopo de Variáveis",
    "command": "global",
    "description": "Permite que uma função modifique uma variável definida fora dela.",
    "example": "def incrementar():\n    global total\n    total += 1"
  },
  {
    "tech": "Python",
    "category": "Funções Built-in",
    "command": "range()",
    "description": "Gera uma sequência de números inteiros.",
    "example": "for i in range(5):\n    print(i)"
  },
  {
    "tech": "Python",
    "category": "Funções Anônimas",
    "command": "lambda",
    "description": "Cria uma função anônima e compacta, de uma única expressão.",
    "example": "dobro = lambda n: n * 2"
  },
  {
    "tech": "Python",
    "category": "Funções Built-in",
    "command": "len()",
    "description": "Retorna o número de itens de uma sequência.",
    "example": "len(\"Python\")  # 6"
  },
  {
    "tech": "Python",
    "category": "Métodos de Lista",
    "command": "list.append()",
    "description": "Adiciona um item ao final de uma lista.",
    "example": "frutas.append(\"uva\")"
  },
  {
    "tech": "Python",
    "category": "Métodos de Lista",
    "command": "list.sort()",
    "description": "Ordena os itens de uma lista in-place (na própria lista).",
    "example": "numeros.sort()"
  },
  {
    "tech": "Python",
    "category": "Métodos de Lista",
    "command": "Slicing",
    "description": "Extrai uma sublista a partir de um intervalo de índices.",
    "example": "numeros[1:3]"
  },
  {
    "tech": "Python",
    "category": "Tuplas",
    "command": "tupla = (1, 2, 3)",
    "description": "Cria uma sequência ordenada e imutável de valores.",
    "example": "ponto = (10, 20)"
  },
  {
    "tech": "Python",
    "category": "Dicionários",
    "command": "dict = {chave: valor}",
    "description": "Cria uma coleção de pares chave-valor.",
    "example": "aluno = {\"nome\": \"Ana\"}"
  },
  {
    "tech": "Python",
    "category": "Dicionários",
    "command": "dict.get()",
    "description": "Retorna o valor associado a uma chave, ou um padrão se ela não existir.",
    "example": "aluno.get(\"idade\", 0)"
  },
  {
    "tech": "Python",
    "category": "Dicionários",
    "command": "dict.keys() / .values() / .items()",
    "description": "Retornam, respectivamente, as chaves, os valores ou os pares de um dicionário.",
    "example": "for k, v in aluno.items():\n    print(k, v)"
  },
  {
    "tech": "Python",
    "category": "Sets",
    "command": "set()",
    "description": "Cria uma coleção não ordenada de itens únicos, sem duplicatas.",
    "example": "cores = {\"azul\", \"verde\"}"
  },
  {
    "tech": "Python",
    "category": "List Comprehensions",
    "command": "[expr for item in lista]",
    "description": "Cria uma nova lista de forma concisa a partir de outra sequência.",
    "example": "quadrados = [n**2 for n in range(5)]"
  },
  {
    "tech": "Python",
    "category": "Métodos de String",
    "command": "str.split()",
    "description": "Divide uma string em uma lista de substrings, usando um separador.",
    "example": "\"a,b,c\".split(\",\")"
  },
  {
    "tech": "Python",
    "category": "Métodos de String",
    "command": "str.join()",
    "description": "Une os elementos de uma lista em uma única string.",
    "example": "\",\".join([\"a\", \"b\"])"
  },
  {
    "tech": "Python",
    "category": "Métodos de String",
    "command": "str.strip() / .upper() / .lower()",
    "description": "Removem espaços das bordas ou alteram a caixa (maiúscula/minúscula) do texto.",
    "example": "\"  Python \".strip()"
  },
  {
    "tech": "Python",
    "category": "Classes e Objetos",
    "command": "class Nome:",
    "description": "Define um novo tipo (classe) que serve de molde para criar objetos.",
    "example": "class Cachorro:\n    pass"
  },
  {
    "tech": "Python",
    "category": "Classes e Objetos",
    "command": "__init__",
    "description": "Método construtor, executado automaticamente ao criar uma instância.",
    "example": "def __init__(self, nome):\n    self.nome = nome"
  },
  {
    "tech": "Python",
    "category": "Classes e Objetos",
    "command": "self",
    "description": "Referência à própria instância, usada dentro dos métodos da classe.",
    "example": "def latir(self):\n    print(self.nome)"
  },
  {
    "tech": "Python",
    "category": "Classes e Objetos",
    "command": "Instanciação",
    "description": "Cria um objeto (instância) concreto a partir de uma classe.",
    "example": "rex = Cachorro(\"Rex\")"
  },
  {
    "tech": "Python",
    "category": "Atributos e Métodos",
    "command": "objeto.atributo",
    "description": "Acessa ou define um atributo de um objeto específico.",
    "example": "rex.idade = 3"
  },
  {
    "tech": "Python",
    "category": "Herança",
    "command": "class Filha(Mae):",
    "description": "Faz uma classe herdar atributos e métodos de outra classe.",
    "example": "class Poodle(Cachorro):\n    pass"
  },
  {
    "tech": "Python",
    "category": "Herança",
    "command": "super()",
    "description": "Chama um método da classe pai a partir da classe filha.",
    "example": "super().__init__(nome)"
  },
  {
    "tech": "Python",
    "category": "Encapsulamento",
    "command": "_atributo",
    "description": "Convenção que indica um atributo de uso interno (protegido).",
    "example": "self._saldo = 0"
  },
  {
    "tech": "Python",
    "category": "Encapsulamento",
    "command": "__atributo",
    "description": "Aciona o name mangling, dificultando o acesso externo direto ao atributo.",
    "example": "self.__senha = senha"
  },
  {
    "tech": "Python",
    "category": "Métodos Especiais",
    "command": "__str__",
    "description": "Define como o objeto é representado quando convertido para string.",
    "example": "def __str__(self):\n    return self.nome"
  },
  {
    "tech": "Python",
    "category": "Verificação de Tipos",
    "command": "isinstance()",
    "description": "Verifica se um objeto é uma instância de uma determinada classe.",
    "example": "isinstance(rex, Cachorro)  # True"
  },
  {
    "tech": "Python",
    "category": "Tratamento de Exceções",
    "command": "try / except",
    "description": "Capturam e tratam erros que ocorrem durante a execução do programa.",
    "example": "try:\n    1 / 0\nexcept ZeroDivisionError:\n    print(\"Erro\")"
  },
  {
    "tech": "Python",
    "category": "Tratamento de Exceções",
    "command": "finally",
    "description": "Bloco sempre executado ao final, tenha ocorrido erro ou não.",
    "example": "finally:\n    print(\"Fim\")"
  },
  {
    "tech": "Python",
    "category": "Tratamento de Exceções",
    "command": "raise",
    "description": "Lança (dispara) uma exceção manualmente.",
    "example": "raise ValueError(\"Inválido\")"
  },
  {
    "tech": "Python",
    "category": "Exceções Customizadas",
    "command": "class MinhaExcecao(Exception):",
    "description": "Cria um novo tipo de exceção personalizado para o domínio da aplicação.",
    "example": "class SaldoInsuficiente(Exception):\n    pass"
  },
  {
    "tech": "Python",
    "category": "Manipulação de Arquivos",
    "command": "with open() as f:",
    "description": "Abre um arquivo garantindo seu fechamento automático ao final do bloco.",
    "example": "with open(\"dados.txt\") as f:\n    conteudo = f.read()"
  },
  {
    "tech": "Python",
    "category": "Manipulação de Arquivos",
    "command": "f.write()",
    "description": "Escreve texto em um arquivo previamente aberto para escrita.",
    "example": "f.write(\"linha 1\\n\")"
  },
  {
    "tech": "Python",
    "category": "Módulos e Pacotes",
    "command": "import módulo",
    "description": "Importa um módulo da biblioteca padrão ou de uma biblioteca de terceiros.",
    "example": "import math"
  },
  {
    "tech": "Python",
    "category": "Módulos e Pacotes",
    "command": "from módulo import nome",
    "description": "Importa um item específico de dentro de um módulo.",
    "example": "from datetime import date"
  },
  {
    "tech": "Python",
    "category": "Biblioteca Padrão",
    "command": "random.randint()",
    "description": "Gera um número inteiro aleatório dentro de um intervalo definido.",
    "example": "import random\nrandom.randint(1, 10)"
  },
  {
    "tech": "Python",
    "category": "Biblioteca Padrão",
    "command": "json.dumps() / json.loads()",
    "description": "Convertem, respectivamente, um objeto Python para texto JSON e vice-versa.",
    "example": "import json\njson.dumps({\"a\": 1})"
  }
];
