const PYTHON_MODULES = [
  {
    "id": "python-fundamentos-e-sintaxe-de",
    "tech": "Python",
    "number": "01",
    "title": "Fundamentos e Sintaxe de Python",
    "intro": "Python é uma linguagem de programação interpretada, de tipagem dinâmica e sintaxe enxuta, criada para priorizar a legibilidade do código. Diferente de outras linguagens, Python usa indentação (espaços) para delimitar blocos de código em vez de chaves. Pense em Python como uma receita de bolo escrita em linguagem clara: cada passo é identado sob o passo anterior, deixando evidente a ordem e a hierarquia das instruções. Este módulo cobre o interpretador, as variáveis, os tipos primitivos, os operadores, a entrada e saída de dados, os comentários e as convenções básicas da PEP 8.",
    "sections": [
      {
        "heading": "1.1 Variáveis, Tipos Primitivos e Comentários",
        "text": "Em Python, uma variável é criada no momento em que recebe um valor, sem a necessidade de declarar previamente o seu tipo — o interpretador identifica o tipo automaticamente (tipagem dinâmica). Os tipos primitivos mais usados são int (inteiros), float (números decimais), str (texto) e bool (verdadeiro ou falso). Comentários, iniciados por #, são ignorados pelo interpretador e servem para documentar o raciocínio do código.",
        "codeLabel": "Código Completo de Python",
        "codeLang": "python",
        "code": "# Programa simples para calcular a média de notas de um aluno\nnome_aluno = \"Mariana Souza\"  # variável do tipo str\nnota_1 = 8.5                  # variável do tipo float\nnota_2 = 7.0\nnota_3 = 9.2\n\nmedia = (nota_1 + nota_2 + nota_3) / 3\naprovado = media >= 6.0       # variável do tipo bool\n\nprint(f\"Aluno: {nome_aluno}\")\nprint(f\"Média final: {media:.2f}\")\nprint(f\"Situação: {'Aprovado' if aprovado else 'Reprovado'}\")",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "# Programa simples...",
            "Comentários de uma linha começam com # e são totalmente ignorados pelo interpretador; servem apenas para explicar a intenção do código a quem for ler."
          ],
          [
            "nome_aluno = \"Mariana Souza\"",
            "Cria uma variável do tipo str (string). Em Python, textos podem ser delimitados por aspas simples ou duplas, desde que sejam consistentes na abertura e no fechamento."
          ],
          [
            "nota_1 = 8.5",
            "Cria uma variável do tipo float, usada para representar números com casas decimais. Note que Python usa ponto, e não vírgula, como separador decimal."
          ],
          [
            "media = (nota_1 + nota_2 + nota_3) / 3",
            "Demonstra o uso de operadores aritméticos dentro de uma expressão; o resultado da divisão é sempre um float em Python 3."
          ],
          [
            "aprovado = media >= 6.0",
            "Cria uma variável do tipo bool, resultado de uma expressão de comparação (>=). Booleanos armazenam apenas True ou False."
          ],
          [
            "f\"Aluno",
            "{nome_aluno}\": As f-strings (formatted strings) permitem inserir o valor de variáveis diretamente dentro do texto, usando chaves {}."
          ],
          [
            "{media:.2f}",
            "A notação .2f dentro da f-string formata o número de ponto flutuante para exibir exatamente duas casas decimais."
          ],
          [
            "'Aprovado' if aprovado else 'Reprovado'",
            "É um operador condicional ternário, uma forma compacta de escrever um if/else que retorna um valor em uma única expressão."
          ],
          [
            "PEP 8",
            "É o guia oficial de estilo de código Python; recomenda nomes de variáveis em snake_case (letras minúsculas separadas por underscore), como usado em nome_aluno."
          ]
        ]
      },
      {
        "heading": "1.2 Operadores, Entrada de Dados e Conversão de Tipos",
        "text": "A função input() permite que o programa leia dados digitados pelo usuário no console, mas sempre retorna o valor como uma string — por isso é comum convertê-lo para int ou float antes de realizar cálculos, processo chamado de conversão de tipos (type casting). Python também oferece operadores aritméticos especiais, como a divisão inteira (//) e o operador de resto (%), muito úteis em cálculos de paridade e distribuição de valores.",
        "codeLabel": "Código Completo de Python",
        "codeLang": "python",
        "code": "# Programa que lê dois números e realiza operações básicas\nvalor_1 = input(\"Digite o primeiro número: \")\nvalor_2 = input(\"Digite o segundo número: \")\n\nnumero_1 = float(valor_1)\nnumero_2 = float(valor_2)\n\nsoma = numero_1 + numero_2\ndivisao_inteira = int(numero_1) // int(numero_2)\nresto = int(numero_1) % int(numero_2)\n\nprint(f\"Soma: {soma}\")\nprint(f\"Divisão inteira: {divisao_inteira}\")\nprint(f\"Resto da divisão: {resto}\")\nprint(f\"O primeiro valor é maior? {numero_1 > numero_2}\")",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "input()",
            "Pausa a execução do programa e aguarda o usuário digitar um valor no console, retornando sempre o resultado como uma string (str)."
          ],
          [
            "float(valor_1)",
            "Converte explicitamente o texto digitado em um número decimal; essa conversão é necessária porque não é possível somar strings como se fossem números."
          ],
          [
            "numero_1 + numero_2",
            "Operador de adição aplicado a dois valores numéricos, retornando a soma como float."
          ],
          [
            "int(numero_1) // int(numero_2)",
            "O operador // realiza a divisão inteira, descartando qualquer resto e retornando apenas a parte inteira do resultado."
          ],
          [
            "int(numero_1) % int(numero_2)",
            "O operador % (módulo) retorna o resto da divisão entre dois números; é amplamente usado para verificar paridade (par ou ímpar)."
          ],
          [
            "numero_1 > numero_2",
            "Operador de comparação que retorna um valor booleano (True ou False), indicando se o primeiro valor é maior que o segundo."
          ],
          [
            "Tipagem dinâmica",
            "Diferente de linguagens fortemente tipadas, em Python o mesmo nome de variável pode receber, em momentos diferentes, valores de tipos distintos."
          ]
        ]
      }
    ]
  },
  {
    "id": "python-estruturas-de-controle-e",
    "tech": "Python",
    "number": "02",
    "title": "Estruturas de Controle e Funções",
    "intro": "As estruturas de controle definem o fluxo de execução de um programa, permitindo que certas partes do código sejam repetidas ou executadas apenas sob determinadas condições. Já as funções são blocos de código reutilizáveis, criados para evitar repetição e organizar a lógica em partes menores e independentes — como uma linha de montagem, onde cada função é responsável por uma etapa específica do processo. Este módulo aborda condicionais, laços de repetição, definição de funções, parâmetros, retorno de valores e o escopo local e global das variáveis.",
    "sections": [
      {
        "heading": "2.1 Condicionais e Laços de Repetição",
        "text": "As estruturas condicionais (if, elif, else) permitem que o programa tome decisões, executando diferentes blocos de código de acordo com o resultado de uma expressão booleana. Já os laços de repetição (for e while) permitem executar um bloco de código múltiplas vezes: o for percorre uma sequência conhecida (como uma lista), enquanto o while repete enquanto uma condição permanecer verdadeira.",
        "codeLabel": "Código Completo de Python",
        "codeLang": "python",
        "code": "# Programa que classifica números de uma lista em pares e ímpares\nnumeros = [4, 7, 10, 13, 18, 21]\npares = []\nimpares = []\n\nfor numero in numeros:\n    if numero % 2 == 0:\n        pares.append(numero)\n    else:\n        impares.append(numero)\n\ncontador = 0\nwhile contador < len(pares):\n    print(f\"Número par encontrado: {pares[contador]}\")\n    contador += 1\n\nprint(f\"Total de ímpares: {len(impares)}\")",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "for numero in numeros:",
            "Percorre cada elemento da lista numeros, um de cada vez, atribuindo o valor atual à variável numero a cada iteração do laço."
          ],
          [
            "if numero % 2 == 0:",
            "Verifica se o resto da divisão de numero por 2 é igual a zero, condição que identifica um número par."
          ],
          [
            "pares.append(numero)",
            "O método append() adiciona um novo item ao final de uma lista, nesse caso incluindo o número par encontrado na lista pares."
          ],
          [
            "else:",
            "Define o bloco de código executado quando a condição do if anterior não é satisfeita, ou seja, quando o número é ímpar."
          ],
          [
            "while contador < len(pares):",
            "Repete o bloco de código enquanto a condição for verdadeira; len() retorna a quantidade de itens da lista pares."
          ],
          [
            "contador += 1",
            "Forma abreviada de escrever contador = contador + 1, incrementando o contador a cada repetição para eventualmente encerrar o laço while."
          ],
          [
            "Indentação",
            "O bloco pertencente a cada if, else, for ou while é definido pelo recuo (geralmente quatro espaços); não usar chaves {} é uma marca registrada de Python."
          ]
        ]
      },
      {
        "heading": "2.2 Funções, Parâmetros e Escopo",
        "text": "Uma função é definida com a palavra-chave def, podendo receber parâmetros (valores de entrada) e devolver um resultado com return. Parâmetros podem ter valores padrão, usados quando o argumento correspondente não é informado na chamada. O escopo determina onde uma variável pode ser acessada: variáveis criadas dentro de uma função são locais por padrão, e a palavra-chave global é necessária para modificar uma variável definida fora da função.",
        "codeLabel": "Código Completo de Python",
        "codeLang": "python",
        "code": "# Funções para calcular o preço final de um produto com desconto\ntotal_vendas = 0  # variável global\n\n\ndef calcular_desconto(preco, percentual=10):\n    desconto = preco * (percentual / 100)\n    return preco - desconto\n\n\ndef registrar_venda(preco_final):\n    global total_vendas\n    total_vendas += preco_final\n    return total_vendas\n\n\npreco_produto = 200.0\npreco_com_desconto = calcular_desconto(preco_produto)\nregistrar_venda(preco_com_desconto)\n\nprint(f\"Preço com desconto: {preco_com_desconto:.2f}\")\nprint(f\"Total acumulado de vendas: {total_vendas:.2f}\")",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "def calcular_desconto(preco, percentual=10):",
            "Define uma função com um parâmetro obrigatório (preco) e um parâmetro com valor padrão (percentual=10), usado quando o segundo argumento não é informado."
          ],
          [
            "return preco - desconto",
            "A instrução return encerra a execução da função e devolve o valor calculado para quem a chamou."
          ],
          [
            "global total_vendas",
            "Declara que, dentro da função, a variável total_vendas se refere à variável global definida fora da função, permitindo modificá-la."
          ],
          [
            "total_vendas += preco_final",
            "Sem o global, esta linha criaria uma nova variável local, e a variável global permaneceria inalterada fora da função."
          ],
          [
            "calcular_desconto(preco_produto)",
            "Chamada da função, passando apenas o argumento obrigatório; o percentual assume o valor padrão de 10."
          ],
          [
            "Escopo local",
            "Variáveis criadas dentro de uma função, como desconto, só existem durante a execução dessa função e não podem ser acessadas fora dela."
          ],
          [
            "Reutilização de código",
            "Funções evitam a repetição de lógica; caso o cálculo de desconto precise mudar, basta alterá-lo em um único lugar."
          ]
        ]
      }
    ]
  },
  {
    "id": "python-estruturas-de-dados",
    "tech": "Python",
    "number": "03",
    "title": "Estruturas de Dados",
    "intro": "Python oferece estruturas de dados nativas e muito flexíveis para organizar coleções de informações: listas (mutáveis e ordenadas), tuplas (imutáveis e ordenadas), dicionários (pares chave-valor) e sets (coleções de itens únicos, sem ordem garantida). Pense nessas estruturas como diferentes tipos de armários: a lista é uma gaveta organizável onde você pode adicionar e remover itens livremente, enquanto a tupla é uma caixa lacrada cujo conteúdo não muda depois de fechada. Este módulo também aborda list comprehensions (forma concisa de criar listas) e slicing (fatiamento de sequências).",
    "sections": [
      {
        "heading": "3.1 Listas, Tuplas e Dicionários",
        "text": "Listas são coleções ordenadas e mutáveis, criadas com colchetes []. Tuplas são semelhantes às listas, mas imutáveis (não podem ser alteradas após a criação), criadas com parênteses (). Dicionários armazenam pares chave-valor, criados com chaves {}, e permitem acesso rápido a um valor a partir de sua chave, sem depender de índices numéricos.",
        "codeLabel": "Código Completo de Python",
        "codeLang": "python",
        "code": "# Cadastro simples de produtos usando listas e dicionários\nprodutos = [\n    {\"nome\": \"Notebook\", \"preco\": 3500.0},\n    {\"nome\": \"Mouse\", \"preco\": 45.0},\n    {\"nome\": \"Teclado\", \"preco\": 120.0},\n]\n\ncoordenadas_loja = (-23.5505, -46.6333)  # tupla imutável (latitude, longitude)\n\nnomes_produtos = []\nfor produto in produtos:\n    nomes_produtos.append(produto[\"nome\"])\n\nprecos_ordenados = sorted(p[\"preco\"] for p in produtos)\n\nprint(f\"Produtos cadastrados: {nomes_produtos}\")\nprint(f\"Preços em ordem: {precos_ordenados}\")\nprint(f\"Localização da loja: {coordenadas_loja}\")",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "produtos = [...]",
            "Cria uma lista onde cada item é, por sua vez, um dicionário com as chaves \"nome\" e \"preco\", representando um produto do cadastro."
          ],
          [
            "coordenadas_loja = (-23.5505, -46.6333)",
            "Cria uma tupla; uma vez definida, seus valores não podem ser reatribuídos, o que a torna ideal para dados que não devem mudar, como coordenadas fixas."
          ],
          [
            "produto[\"nome\"]",
            "Acessa o valor associado à chave \"nome\" dentro do dicionário produto; tentar acessar uma chave inexistente gera um erro KeyError."
          ],
          [
            "nomes_produtos.append(...)",
            "Adiciona o nome de cada produto à lista nomes_produtos, construída dinamicamente durante o laço for."
          ],
          [
            "sorted(p[\"preco\"] for p in produtos)",
            "Combina uma expressão geradora com a função sorted(), retornando uma nova lista com os preços organizados em ordem crescente."
          ],
          [
            "Mutabilidade",
            "Listas podem ser alteradas depois de criadas (adicionar, remover ou modificar itens), enquanto tuplas são imutáveis, o que as torna mais seguras para dados constantes."
          ]
        ]
      },
      {
        "heading": "3.2 Sets, List Comprehensions e Slicing",
        "text": "Sets são coleções que armazenam apenas valores únicos, eliminando automaticamente duplicatas — úteis para identificar itens distintos em uma coleção. List comprehensions oferecem uma sintaxe compacta para criar uma nova lista a partir de outra, aplicando uma expressão e, opcionalmente, um filtro. Já o slicing (fatiamento) permite extrair partes de listas, tuplas ou strings usando a notação [início:fim].",
        "codeLabel": "Código Completo de Python",
        "codeLang": "python",
        "code": "# Análise de categorias únicas e filtragem de produtos caros\ncategorias = [\"eletrônicos\", \"informática\", \"eletrônicos\", \"acessórios\"]\ncategorias_unicas = set(categorias)\n\nprecos = [3500.0, 45.0, 120.0, 899.0, 15.0]\nprecos_caros = [preco for preco in precos if preco > 100]\n\nprimeiros_tres = precos[:3]\nultimos_dois = precos[-2:]\n\nprint(f\"Categorias únicas: {categorias_unicas}\")\nprint(f\"Produtos com preço acima de 100: {precos_caros}\")\nprint(f\"Três primeiros preços: {primeiros_tres}\")\nprint(f\"Dois últimos preços: {ultimos_dois}\")",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "set(categorias)",
            "Converte a lista categorias em um set, removendo automaticamente os valores duplicados e mantendo apenas as categorias distintas."
          ],
          [
            "[preco for preco in precos if preco > 100]",
            "É uma list comprehension; cria uma nova lista contendo apenas os preços que satisfazem a condição preco > 100."
          ],
          [
            "precos[:3]",
            "Fatiamento (slicing) que retorna os três primeiros elementos da lista, começando no índice 0 até o índice 3 (exclusivo)."
          ],
          [
            "precos[-2:]",
            "Usa índices negativos para contar a partir do final da lista; retorna os dois últimos elementos."
          ],
          [
            "Ausência de duplicatas em sets",
            "Como sets não permitem itens repetidos, eles são muito usados para operações como verificar a existência de um item ou remover duplicidades de uma coleção."
          ],
          [
            "Legibilidade das comprehensions",
            "Embora o mesmo resultado pudesse ser obtido com um for tradicional e append(), a list comprehension expressa a mesma lógica em uma única linha, de forma mais idiomática em Python."
          ]
        ]
      }
    ]
  },
  {
    "id": "python-programacao-orientada-a-objetos",
    "tech": "Python",
    "number": "04",
    "title": "Programação Orientada a Objetos",
    "intro": "A Programação Orientada a Objetos (POO) organiza o código em torno de classes, que funcionam como moldes (plantas) para criar objetos com atributos (dados) e métodos (comportamentos). Uma classe ContaBancaria, por exemplo, é a planta baixa; cada conta criada a partir dela é uma casa construída seguindo essa planta, com seu próprio endereço (dados) mas a mesma estrutura básica. Este módulo aborda a criação de classes e objetos, o método construtor __init__, atributos e métodos, herança entre classes e encapsulamento por meio das convenções _ e __.",
    "sections": [
      {
        "heading": "4.1 Classes, Objetos e o Método __init__",
        "text": "Uma classe é definida com a palavra-chave class e serve como molde para criar objetos (instâncias). O método especial __init__ é o construtor, executado automaticamente sempre que um novo objeto é criado, sendo responsável por inicializar seus atributos. O parâmetro self, presente em todo método de instância, representa o próprio objeto que está sendo manipulado.",
        "codeLabel": "Código Completo de Python",
        "codeLang": "python",
        "code": "# Modelagem de uma conta bancária simples\nclass ContaBancaria:\n    def __init__(self, titular, saldo_inicial=0):\n        self.titular = titular\n        self.saldo = saldo_inicial\n\n    def depositar(self, valor):\n        self.saldo += valor\n        return self.saldo\n\n    def sacar(self, valor):\n        if valor > self.saldo:\n            print(\"Saldo insuficiente!\")\n            return self.saldo\n        self.saldo -= valor\n        return self.saldo\n\n\nconta_joao = ContaBancaria(\"João Silva\", 100.0)\nconta_joao.depositar(50.0)\nconta_joao.sacar(30.0)\n\nprint(f\"Titular: {conta_joao.titular}\")\nprint(f\"Saldo final: {conta_joao.saldo}\")",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "class ContaBancaria:",
            "Define uma nova classe chamada ContaBancaria, que servirá como molde para criar objetos do tipo conta bancária."
          ],
          [
            "def __init__(self, titular, saldo_inicial=0):",
            "É o método construtor, chamado automaticamente ao criar um novo objeto; inicializa os atributos titular e saldo."
          ],
          [
            "self",
            "Representa a instância atual do objeto; é através de self que um método acessa e modifica os atributos daquele objeto específico."
          ],
          [
            "self.titular = titular",
            "Cria um atributo de instância chamado titular, associado unicamente ao objeto que está sendo construído."
          ],
          [
            "def depositar(self, valor):",
            "Define um método de instância que altera o estado do objeto (o saldo), somando o valor recebido como parâmetro."
          ],
          [
            "conta_joao = ContaBancaria(\"João Silva\", 100.0)",
            "É a instanciação; cria um objeto real (conta_joao) a partir do molde definido pela classe ContaBancaria."
          ],
          [
            "conta_joao.depositar(50.0)",
            "Chama o método depositar no objeto conta_joao, utilizando a notação ponto para acessar métodos e atributos de um objeto."
          ]
        ]
      },
      {
        "heading": "4.2 Herança e Encapsulamento",
        "text": "Herança permite que uma classe (subclasse) reutilize atributos e métodos de outra classe (superclasse), evitando duplicação de código e representando relações do tipo 'é um'. A palavra-chave super() é usada para chamar métodos da classe pai a partir da classe filha. Encapsulamento é a prática de restringir o acesso direto a certos atributos: em Python, um único underscore (_atributo) é uma convenção que indica uso interno, enquanto dois underscores (__atributo) acionam o name mangling, dificultando o acesso acidental de fora da classe.",
        "codeLabel": "Código Completo de Python",
        "codeLang": "python",
        "code": "# Extensão da conta bancária com encapsulamento e herança\nclass ContaCorrente(ContaBancaria):\n    def __init__(self, titular, saldo_inicial=0, limite=500.0):\n        super().__init__(titular, saldo_inicial)\n        self._limite = limite          # atributo protegido\n        self.__senha = \"1234\"          # atributo privado\n\n    def sacar(self, valor):\n        if valor > self.saldo + self._limite:\n            print(\"Limite excedido!\")\n            return self.saldo\n        self.saldo -= valor\n        return self.saldo\n\n    def verificar_senha(self, senha_digitada):\n        return senha_digitada == self.__senha\n\n\nconta_maria = ContaCorrente(\"Maria Costa\", 100.0, limite=300.0)\nconta_maria.sacar(350.0)\n\nprint(f\"Saldo após saque com limite: {conta_maria.saldo}\")\nprint(f\"Senha correta? {conta_maria.verificar_senha('1234')}\")",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "class ContaCorrente(ContaBancaria):",
            "Declara que ContaCorrente herda de ContaBancaria, recebendo automaticamente seus atributos e métodos, como depositar()."
          ],
          [
            "super().__init__(titular, saldo_inicial)",
            "Chama o construtor da classe pai (ContaBancaria) para inicializar titular e saldo, evitando reescrever essa lógica."
          ],
          [
            "self._limite = limite",
            "O underscore único é uma convenção que sinaliza que o atributo é de uso interno (protegido), embora ainda seja tecnicamente acessível fora da classe."
          ],
          [
            "self.__senha = \"1234\"",
            "O duplo underscore aciona o name mangling, renomeando internamente o atributo (para _ContaCorrente__senha) e dificultando o acesso acidental de fora da classe."
          ],
          [
            "def sacar(self, valor):",
            "Sobrescreve (override) o método sacar herdado da classe pai, adicionando a regra de limite de crédito específica da conta corrente."
          ],
          [
            "def verificar_senha(self, senha_digitada):",
            "Método que compara a senha informada com o atributo privado __senha, retornando um valor booleano."
          ],
          [
            "Polimorfismo implícito",
            "Como ContaCorrente sobrescreve sacar(), chamar esse método em um objeto ContaCorrente executa a versão especializada, e não a da classe pai."
          ]
        ]
      }
    ]
  },
  {
    "id": "python-tratamento-de-erros-arquivos",
    "tech": "Python",
    "number": "05",
    "title": "Tratamento de Erros, Arquivos e Módulos",
    "intro": "Programas robustos precisam lidar com situações inesperadas sem interromper a execução de forma abrupta. Python oferece o mecanismo de exceções (try/except/finally) para capturar e tratar erros de forma controlada, como um cinto de segurança que entra em ação apenas quando algo sai do esperado. Este módulo também aborda a leitura e escrita de arquivos com o gerenciador de contexto with open(), a organização do código em módulos e pacotes reutilizáveis por meio de import, e uma breve introdução aos ambientes virtuais, usados para isolar as dependências de cada projeto Python.",
    "sections": [
      {
        "heading": "5.1 Try/Except/Finally e Exceções Customizadas",
        "text": "O bloco try/except permite testar um trecho de código que pode falhar e tratar o erro sem interromper o programa. A palavra-chave raise lança uma exceção manualmente, e é possível criar exceções customizadas herdando da classe Exception, o que torna os erros mais específicos e descritivos para o domínio da aplicação. O bloco finally é sempre executado, tenha ocorrido erro ou não, sendo útil para liberar recursos.",
        "codeLabel": "Código Completo de Python",
        "codeLang": "python",
        "code": "# Validação de saque com exceção customizada\nclass SaldoInsuficienteError(Exception):\n    pass\n\n\ndef sacar_com_validacao(saldo, valor):\n    try:\n        if valor > saldo:\n            raise SaldoInsuficienteError(\n                \"Valor de saque maior que o saldo disponível.\"\n            )\n        novo_saldo = saldo - valor\n    except SaldoInsuficienteError as erro:\n        print(f\"Erro: {erro}\")\n        return saldo\n    except TypeError:\n        print(\"Erro: valores devem ser numéricos.\")\n        return saldo\n    else:\n        print(\"Saque realizado com sucesso.\")\n        return novo_saldo\n    finally:\n        print(\"Operação de saque finalizada.\")\n\n\nsaldo_atual = sacar_com_validacao(100.0, 150.0)\nprint(f\"Saldo atual: {saldo_atual}\")",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "class SaldoInsuficienteError(Exception):",
            "Cria uma exceção customizada, herdando de Exception, permitindo capturar esse erro específico separadamente de outros."
          ],
          [
            "try:",
            "Inicia o bloco onde o código que pode gerar um erro é executado; se uma exceção ocorrer, o controle passa imediatamente para o except correspondente."
          ],
          [
            "raise SaldoInsuficienteError(...)",
            "Dispara manualmente a exceção customizada, interrompendo o fluxo normal do try e passando uma mensagem descritiva do erro."
          ],
          [
            "except SaldoInsuficienteError as erro:",
            "Captura especificamente a exceção SaldoInsuficienteError, armazenando-a na variável erro para uso posterior (como exibir a mensagem)."
          ],
          [
            "except TypeError:",
            "Um mesmo try pode ter múltiplos blocos except, cada um tratando um tipo diferente de erro, tornando o tratamento mais preciso."
          ],
          [
            "else:",
            "Executado apenas se nenhuma exceção ocorreu no bloco try, sendo o local ideal para o código que depende do sucesso da operação."
          ],
          [
            "finally:",
            "Sempre executado ao final, independentemente de ter ocorrido erro ou não; comumente usado para fechar conexões ou liberar recursos."
          ]
        ]
      },
      {
        "heading": "5.2 Arquivos, Módulos e Ambientes Virtuais",
        "text": "O gerenciador de contexto with open(...) as arquivo: abre um arquivo e garante que ele seja fechado automaticamente ao final do bloco, mesmo se ocorrer um erro. Python também permite organizar código em módulos (arquivos .py) e pacotes (pastas com múltiplos módulos), reutilizados por meio de import. Para isolar as dependências de cada projeto, recomenda-se o uso de ambientes virtuais (criados com o comando python -m venv), que evitam conflitos entre versões de bibliotecas de projetos diferentes.",
        "codeLabel": "Código Completo de Python",
        "codeLang": "python",
        "code": "import json\nfrom datetime import date\n\n# Registro de transações em um arquivo de texto e em JSON\ntransacoes = [\n    {\"tipo\": \"deposito\", \"valor\": 100.0},\n    {\"tipo\": \"saque\", \"valor\": 30.0},\n]\n\nwith open(\"transacoes.txt\", \"w\", encoding=\"utf-8\") as arquivo:\n    for transacao in transacoes:\n        arquivo.write(f\"{transacao['tipo']}: {transacao['valor']}\\n\")\n\nwith open(\"transacoes.json\", \"w\", encoding=\"utf-8\") as arquivo_json:\n    json.dump(transacoes, arquivo_json, ensure_ascii=False, indent=2)\n\nprint(f\"Relatório gerado em {date.today()}\")",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "import json",
            "Importa o módulo json da biblioteca padrão, usado para converter estruturas Python em texto no formato JSON e vice-versa."
          ],
          [
            "from datetime import date",
            "Importa apenas a classe date do módulo datetime, evitando a necessidade de escrever datetime.date por extenso a cada uso."
          ],
          [
            "with open(\"transacoes.txt\", \"w\", encoding=\"utf-8\") as arquivo:",
            "Abre o arquivo em modo de escrita (\"w\"); o with garante o fechamento automático do arquivo ao sair do bloco, mesmo em caso de erro."
          ],
          [
            "arquivo.write(...)",
            "Escreve uma linha de texto no arquivo aberto; o \\n ao final insere uma quebra de linha, separando cada transação registrada."
          ],
          [
            "json.dump(transacoes, arquivo_json, ...)",
            "Serializa a lista de dicionários transacoes diretamente no arquivo, convertendo a estrutura Python para o formato JSON."
          ],
          [
            "date.today()",
            "Método da classe date que retorna a data atual do sistema, usada aqui para compor a mensagem final do relatório."
          ],
          [
            "Ambientes virtuais (python -m venv)",
            "Criam uma instalação isolada do Python para cada projeto, permitindo instalar pacotes (com pip) sem afetar outros projetos ou o sistema operacional."
          ]
        ]
      }
    ]
  }
];

const PYTHON_SUMMARY = {
  "heading": "Tabela de Resumo: Papel de Cada Módulo no Aprendizado de Python",
  "columns": [
    "Módulo",
    "Conceito Central",
    "Analogia",
    "Impacto no Código"
  ],
  "rows": [
    [
      "01 - Fundamentos e Sintaxe",
      "Variáveis, tipos primitivos e operadores",
      "O alfabeto e a gramática de um novo idioma",
      "Base para qualquer instrução escrita em Python"
    ],
    [
      "02 - Controle e Funções",
      "Decisões, repetições e blocos reutilizáveis",
      "A linha de montagem de uma fábrica",
      "Organização lógica e reaproveitamento de código"
    ],
    [
      "03 - Estruturas de Dados",
      "Listas, tuplas, dicionários e sets",
      "Armários e gavetas para guardar informações",
      "Armazenamento e manipulação eficiente de dados"
    ],
    [
      "04 - Orientação a Objetos",
      "Classes, objetos, herança e encapsulamento",
      "Plantas arquitetônicas usadas para construir casas",
      "Modelagem de entidades do mundo real no código"
    ],
    [
      "05 - Erros, Arquivos e Módulos",
      "Exceções, persistência de dados e reuso de código",
      "Cinto de segurança e arquivo de documentos",
      "Robustez, confiabilidade e escalabilidade da aplicação"
    ]
  ]
};
