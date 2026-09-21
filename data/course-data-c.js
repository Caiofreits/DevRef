const C_MODULES = [
  {
    "id": "c-modulo-01",
    "tech": "C",
    "number": "01",
    "title": "Fundamentos e Estrutura de um Programa C",
    "intro": "A linguagem C é uma linguagem compilada, de baixo nível e alta performance, criada na década de 1970 e que até hoje serve de base para sistemas operacionais, drivers, firmwares e outras linguagens modernas. Diferente de linguagens interpretadas, um programa em C precisa passar por um compilador (como o gcc) que traduz o código-fonte em instruções de máquina antes de poder ser executado. Entender essa estrutura inicial — como o programa é organizado, como ele lê e escreve dados, e quais tipos de valores ele pode armazenar — é o alicerce para tudo o que vem depois, assim como aprender a estrutura de uma página HTML é o alicerce para o desenvolvimento web.",
    "sections": [
      {
        "heading": "Anatomia de um Programa C: Compilação, main() e E/S Padrão",
        "text": "Todo programa em C precisa de uma função main(), que é o ponto de entrada executado quando o programa roda. Bibliotecas externas são incorporadas por meio da diretiva #include, e a comunicação com o usuário é feita por funções da biblioteca padrão de entrada e saída, como printf() para exibir dados e scanf() para lê-los. C é uma linguagem fortemente tipada: toda variável precisa ter um tipo declarado antes de ser usada, o que define quanto espaço de memória ela ocupa e que tipo de valor ela pode guardar.",
        "codeLabel": "Código Completo em C",
        "codeLang": "c",
        "code": "#include <stdio.h>\n\nint main(void) {\n    int idade;\n    float altura;\n    char inicial;\n\n    printf(\"Digite sua idade: \");\n    scanf(\"%d\", &idade);\n\n    printf(\"Digite sua altura (em metros): \");\n    scanf(\"%f\", &altura);\n\n    printf(\"Digite a inicial do seu nome: \");\n    scanf(\" %c\", &inicial);\n\n    printf(\"Idade: %d anos\\n\", idade);\n    printf(\"Altura: %.2f m\\n\", altura);\n    printf(\"Inicial: %c\\n\", inicial);\n\n    return 0;\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "#include <stdio.h>",
            "diretiva de pré-processador que inclui a biblioteca padrão de entrada e saída, necessária para usar printf() e scanf()."
          ],
          [
            "int main(void)",
            "define a função principal do programa, que retorna um inteiro para o sistema operacional; void indica que ela não recebe parâmetros."
          ],
          [
            "int idade;",
            "declara uma variável do tipo inteiro chamada idade, que ainda não possui valor definido."
          ],
          [
            "float altura;",
            "declara uma variável de ponto flutuante de precisão simples, usada para armazenar números com casas decimais."
          ],
          [
            "char inicial;",
            "declara uma variável do tipo caractere, capaz de armazenar um único caractere (como uma letra)."
          ],
          [
            "scanf(\"%d\", &idade);",
            "lê um valor inteiro digitado pelo usuário e o armazena no endereço de memória de idade, indicado pelo operador &."
          ],
          [
            "scanf(\" %c\", &inicial);",
            "o espaço antes de %c descarta espaços em branco e quebras de linha deixados no buffer de entrada pelas leituras anteriores."
          ],
          [
            "printf(\"Altura: %.2f m\\n\", altura);",
            "%.2f formata o número de ponto flutuante com exatamente duas casas decimais; \\n insere uma quebra de linha."
          ],
          [
            "return 0;",
            "encerra a função main() devolvendo 0 ao sistema operacional, convenção que indica que o programa terminou sem erros."
          ]
        ]
      }
    ]
  },
  {
    "id": "c-modulo-02",
    "tech": "C",
    "number": "02",
    "title": "Estruturas de Controle",
    "intro": "Programas úteis raramente executam apenas uma sequência linear de instruções: eles precisam tomar decisões e repetir tarefas. As estruturas de controle de C — condicionais como if/else e switch, e laços como for, while e do-while — são o mecanismo que permite ao programa reagir a diferentes situações e processar conjuntos de dados sem repetir código manualmente. É como uma receita de cozinha que diz 'se o bolo não estiver dourado, asse por mais 5 minutos' ou 'repita esse passo até acabar a massa': a lógica condicional e repetitiva é o que dá inteligência e eficiência ao programa.",
    "sections": [
      {
        "heading": "Decisões e Repetições: if/else, switch e Laços",
        "text": "As estruturas condicionais avaliam uma expressão booleana (verdadeira ou falsa) e desviam o fluxo do programa de acordo com o resultado. Já os laços de repetição executam um bloco de código múltiplas vezes: for é ideal quando se sabe o número de repetições, while quando a condição de parada é verificada antes de cada execução, e do-while quando o bloco precisa rodar pelo menos uma vez antes de checar a condição.",
        "codeLabel": "Código Completo em C",
        "codeLang": "c",
        "code": "#include <stdio.h>\n\nint main(void) {\n    int nota;\n    int soma = 0;\n\n    printf(\"Digite 3 notas (0 a 10):\\n\");\n\n    for (int contador = 1; contador <= 3; contador++) {\n        printf(\"Nota %d: \", contador);\n        scanf(\"%d\", &nota);\n        soma += nota;\n    }\n\n    float media = soma / 3.0;\n    printf(\"Media: %.2f\\n\", media);\n\n    if (media >= 7.0) {\n        printf(\"Situacao: Aprovado\\n\");\n    } else if (media >= 5.0) {\n        printf(\"Situacao: Recuperacao\\n\");\n    } else {\n        printf(\"Situacao: Reprovado\\n\");\n    }\n\n    int opcao = 0;\n    printf(\"Deseja ver o conceito? 1-Sim 0-Nao: \");\n    scanf(\"%d\", &opcao);\n\n    switch (opcao) {\n        case 1:\n            printf(\"Conceito calculado com sucesso.\\n\");\n            break;\n        default:\n            printf(\"Encerrando o programa.\\n\");\n            break;\n    }\n\n    return 0;\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "for (int contador = 1; contador <= 3; contador++)",
            "laço com três partes: inicialização, condição de continuação e incremento, executado enquanto a condição for verdadeira."
          ],
          [
            "soma += nota;",
            "forma abreviada de soma = soma + nota, operador de atribuição composta que acumula valores."
          ],
          [
            "float media = soma / 3.0;",
            "dividir por 3.0 (float) em vez de 3 (int) força a divisão a ser feita em ponto flutuante, evitando perda de casas decimais."
          ],
          [
            "if (media >= 7.0) { } else if (media >= 5.0) { } else { }",
            "estrutura condicional encadeada que testa a primeira condição, e só avalia a próxima se a anterior for falsa."
          ],
          [
            "switch (opcao) { case 1",
            "... break; default: ... break; }: estrutura de seleção múltipla que compara opcao com cada valor de case; break impede a execução de 'cair' para o próximo case."
          ],
          [
            "break;",
            "interrompe imediatamente a execução do switch (ou de um laço), transferindo o controle para depois do bloco."
          ],
          [
            "default:",
            "bloco executado quando nenhum dos valores de case corresponde à variável testada."
          ]
        ]
      }
    ]
  },
  {
    "id": "c-modulo-03",
    "tech": "C",
    "number": "03",
    "title": "Funções e Escopo",
    "intro": "Funções permitem dividir um programa em blocos menores, reutilizáveis e testáveis isoladamente, exatamente como funções em qualquer outra linguagem. Em C, é preciso declarar o tipo de retorno e o tipo de cada parâmetro, e os argumentos são passados por valor — ou seja, a função recebe uma cópia do dado, não o dado original (isso muda quando se usa ponteiros, como veremos no módulo seguinte). Entender onde uma variável 'existe' e por quanto tempo ela vive — seu escopo — evita bugs sutis e é essencial para escrever código organizado.",
    "sections": [
      {
        "heading": "Declaração, Parâmetros, Retorno e Recursão",
        "text": "Uma variável local existe apenas dentro do bloco onde foi declarada; uma variável global é visível em todo o arquivo; e uma variável static dentro de uma função mantém seu valor entre chamadas sucessivas, sem se tornar global. A recursão é a técnica em que uma função chama a si mesma para resolver um problema menor, sempre com uma condição de parada (caso base) que evita que ela se repita infinitamente.",
        "codeLabel": "Código Completo em C",
        "codeLang": "c",
        "code": "#include <stdio.h>\n\nint contadorGlobal = 0;\n\nint fatorial(int n) {\n    if (n <= 1) {\n        return 1;\n    }\n    return n * fatorial(n - 1);\n}\n\nvoid registrarChamada(void) {\n    static int chamadas = 0;\n    chamadas++;\n    contadorGlobal++;\n    printf(\"Chamada numero %d (global: %d)\\n\", chamadas, contadorGlobal);\n}\n\nint main(void) {\n    int numero = 5;\n    int resultado = fatorial(numero);\n\n    printf(\"Fatorial de %d = %d\\n\", numero, resultado);\n\n    registrarChamada();\n    registrarChamada();\n    registrarChamada();\n\n    return 0;\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "int fatorial(int n)",
            "declara uma função chamada fatorial, que recebe um inteiro n como parâmetro e retorna um valor do tipo int."
          ],
          [
            "if (n <= 1) { return 1; }",
            "caso base da recursão: quando n chega a 1 (ou menos), a função para de chamar a si mesma."
          ],
          [
            "return n * fatorial(n - 1);",
            "chamada recursiva: a função multiplica n pelo fatorial de n-1, empilhando chamadas até atingir o caso base."
          ],
          [
            "int contadorGlobal = 0;",
            "variável global declarada fora de qualquer função, acessível e modificável por qualquer função do arquivo."
          ],
          [
            "static int chamadas = 0;",
            "variável local estática: é inicializada apenas uma vez e preserva seu valor entre diferentes chamadas da função registrarChamada."
          ],
          [
            "void registrarChamada(void)",
            "função sem retorno (void) e sem parâmetros, usada apenas para executar uma ação (efeito colateral)."
          ],
          [
            "int resultado = fatorial(numero);",
            "argumentos em C são passados por valor: numero é copiado para o parâmetro n, e alterações dentro da função não afetam a variável original."
          ]
        ]
      }
    ]
  },
  {
    "id": "c-modulo-04",
    "tech": "C",
    "number": "04",
    "title": "Ponteiros e Arrays",
    "intro": "Ponteiros são o que mais diferencia C de linguagens de alto nível: eles permitem acessar e manipular diretamente o endereço de memória onde um dado está armazenado, em vez de apenas o valor em si. Isso dá controle e performance, mas exige disciplina. Arrays e strings estão intimamente ligados a ponteiros, já que o nome de um array, em muitos contextos, se comporta como um ponteiro para seu primeiro elemento. Pensar em memória como uma rua com casas numeradas — em que & pergunta 'qual é o número da casa?' e * pergunta 'quem mora nessa casa?' — ajuda a fixar a ideia.",
    "sections": [
      {
        "heading": "Endereços de Memória e Ponteiros",
        "text": "O operador & obtém o endereço de memória de uma variável, e o operador * (quando usado na declaração) cria um ponteiro, ou (quando usado sobre um ponteiro já existente) desreferencia esse ponteiro para acessar o valor armazenado no endereço apontado. Como uma função recebe cópias dos argumentos, passar o endereço de uma variável (em vez do valor) é a forma de permitir que a função modifique o dado original — técnica essencial em C.",
        "codeLabel": "Código Completo em C",
        "codeLang": "c",
        "code": "#include <stdio.h>\n\nvoid dobrarValor(int *ponteiro) {\n    *ponteiro = *ponteiro * 2;\n}\n\nint main(void) {\n    int idade = 21;\n    int *ptrIdade = &idade;\n\n    printf(\"Valor de idade: %d\\n\", idade);\n    printf(\"Endereco de idade: %p\\n\", (void *)&idade);\n    printf(\"Valor apontado por ptrIdade: %d\\n\", *ptrIdade);\n\n    dobrarValor(&idade);\n    printf(\"Novo valor de idade: %d\\n\", idade);\n\n    int numeros[5] = {10, 20, 30, 40, 50};\n    int *ptrNumeros = numeros;\n\n    for (int i = 0; i < 5; i++) {\n        printf(\"numeros[%d] = %d (via ponteiro: %d)\\n\", i, numeros[i], *(ptrNumeros + i));\n    }\n\n    return 0;\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "int *ponteiro (parâmetro)",
            "declara que a função recebe um ponteiro para int, ou seja, o endereço de uma variável inteira, não uma cópia do valor."
          ],
          [
            "*ponteiro = *ponteiro * 2;",
            "desreferencia o ponteiro para ler o valor atual, multiplica por 2 e grava o resultado de volta no mesmo endereço de memória."
          ],
          [
            "int *ptrIdade = &idade;",
            "declara um ponteiro para int e o inicializa com o endereço da variável idade, obtido pelo operador &."
          ],
          [
            "%p",
            "especificador de formato do printf usado para exibir um endereço de memória (ponteiro)."
          ],
          [
            "dobrarValor(&idade);",
            "passa o endereço de idade para a função, permitindo que ela modifique a variável original em main (passagem por referência simulada)."
          ],
          [
            "int numeros[5] = {10, 20, 30, 40, 50};",
            "declara e inicializa um array de 5 inteiros, armazenados em posições contíguas de memória."
          ],
          [
            "int *ptrNumeros = numeros;",
            "o nome de um array, em uma expressão, decai para um ponteiro ao seu primeiro elemento; por isso pode ser atribuído diretamente a um ponteiro."
          ],
          [
            "*(ptrNumeros + i)",
            "aritmética de ponteiros: soma i posições (do tamanho do tipo int) ao endereço base e desreferencia o resultado, equivalente a numeros[i]."
          ]
        ]
      },
      {
        "heading": "Arrays, Strings e a Biblioteca string.h",
        "text": "Em C não existe um tipo string nativo: uma string é, na prática, um array de caracteres terminado pelo caractere nulo '\\0', que marca onde o texto termina. Como manipular esses arrays manualmente seria repetitivo e propenso a erros, a biblioteca padrão string.h oferece funções prontas para copiar, concatenar, comparar e medir strings, que devem ser usadas com atenção ao tamanho dos buffers para evitar estourar a memória alocada.",
        "codeLabel": "Código Completo em C",
        "codeLang": "c",
        "code": "#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char primeiroNome[20] = \"Ana\";\n    char sobrenome[20] = \"Silva\";\n    char nomeCompleto[41];\n\n    strcpy(nomeCompleto, primeiroNome);\n    strcat(nomeCompleto, \" \");\n    strcat(nomeCompleto, sobrenome);\n\n    printf(\"Nome completo: %s\\n\", nomeCompleto);\n    printf(\"Tamanho do nome completo: %lu\\n\", strlen(nomeCompleto));\n\n    if (strcmp(primeiroNome, \"Ana\") == 0) {\n        printf(\"O primeiro nome e Ana.\\n\");\n    }\n\n    for (int i = 0; nomeCompleto[i] != '\\0'; i++) {\n        printf(\"%c\", nomeCompleto[i]);\n    }\n    printf(\"\\n\");\n\n    return 0;\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "#include <string.h>",
            "biblioteca padrão que reúne funções para manipulação de strings, como strcpy, strcat, strcmp e strlen."
          ],
          [
            "char primeiroNome[20] = \"Ana\";",
            "declara um array de 20 caracteres inicializado com o texto Ana; o compilador insere automaticamente o '\\0' final."
          ],
          [
            "strcpy(nomeCompleto, primeiroNome);",
            "copia o conteúdo da string primeiroNome (origem) para dentro de nomeCompleto (destino), incluindo o terminador nulo."
          ],
          [
            "strcat(nomeCompleto, \" \");",
            "concatena (anexa) o texto informado ao final da string já existente em nomeCompleto."
          ],
          [
            "strlen(nomeCompleto)",
            "percorre a string até encontrar o '\\0' e retorna o número de caracteres, sem contar o terminador."
          ],
          [
            "strcmp(primeiroNome, \"Ana\") == 0",
            "strcmp compara duas strings caractere a caractere e retorna 0 quando elas são idênticas."
          ],
          [
            "'\\0'",
            "caractere nulo que marca o fim de toda string em C; sem ele, funções como printf com %s não saberiam onde parar de ler."
          ]
        ]
      }
    ]
  },
  {
    "id": "c-modulo-05",
    "tech": "C",
    "number": "05",
    "title": "Structs, Memória Dinâmica e Arquivos",
    "intro": "Nem todo dado do mundo real cabe em um único inteiro ou string: um funcionário tem nome, idade e salário; um aluno tem nome e nota. As structs permitem agrupar vários campos de tipos diferentes sob um único tipo de dado personalizado. Combinadas com alocação dinâmica de memória (malloc/calloc/free), permitem criar estruturas de dados cujo tamanho só é conhecido em tempo de execução. Por fim, a manipulação de arquivos permite que um programa persista dados entre execuções, lendo e escrevendo em disco — o equivalente, em C, a salvar dados em um banco de dados ou em local storage no mundo web.",
    "sections": [
      {
        "heading": "Structs, typedef e Alocação Dinâmica com malloc/free",
        "text": "A palavra-chave struct define um novo tipo composto, agrupando variáveis (campos) relacionadas. typedef cria um apelido para esse tipo, evitando repetir a palavra struct a cada declaração. Quando a quantidade de dados só é conhecida durante a execução do programa, a memória para eles é reservada dinamicamente na heap com malloc() ou calloc(), e deve sempre ser liberada com free() quando não for mais necessária, para evitar vazamentos de memória.",
        "codeLabel": "Código Completo em C",
        "codeLang": "c",
        "code": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\ntypedef struct {\n    char nome[30];\n    int idade;\n    float salario;\n} Funcionario;\n\nint main(void) {\n    int quantidade = 3;\n    Funcionario *equipe = malloc(quantidade * sizeof(Funcionario));\n\n    if (equipe == NULL) {\n        printf(\"Erro ao alocar memoria.\\n\");\n        return 1;\n    }\n\n    strcpy(equipe[0].nome, \"Carlos\");\n    equipe[0].idade = 30;\n    equipe[0].salario = 4500.00;\n\n    strcpy(equipe[1].nome, \"Beatriz\");\n    equipe[1].idade = 27;\n    equipe[1].salario = 5200.50;\n\n    strcpy(equipe[2].nome, \"Diego\");\n    equipe[2].idade = 35;\n    equipe[2].salario = 6100.75;\n\n    for (int i = 0; i < quantidade; i++) {\n        printf(\"%s tem %d anos e ganha R$%.2f\\n\", equipe[i].nome, equipe[i].idade, equipe[i].salario);\n    }\n\n    free(equipe);\n    equipe = NULL;\n\n    return 0;\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "typedef struct { ... } Funcionario;",
            "define um novo tipo composto chamado Funcionario, agrupando os campos nome, idade e salario em uma única unidade."
          ],
          [
            "malloc(quantidade * sizeof(Funcionario))",
            "reserva, na memória heap, espaço suficiente para armazenar 'quantidade' structs Funcionario, retornando um ponteiro para o início do bloco."
          ],
          [
            "if (equipe == NULL)",
            "verificação obrigatória após malloc: se a alocação falhar (memória insuficiente), a função retorna NULL, e o programa deve tratar esse erro."
          ],
          [
            "equipe[0].nome",
            "acessa o campo nome do primeiro elemento do bloco alocado, usando a notação de índice de array combinada com o operador de acesso a campo (.)."
          ],
          [
            "strcpy(equipe[0].nome, \"Carlos\");",
            "copia o texto Carlos para dentro do array de caracteres nome do primeiro Funcionario da equipe."
          ],
          [
            "free(equipe);",
            "devolve ao sistema operacional a memória previamente alocada com malloc, evitando vazamento de memória (memory leak)."
          ],
          [
            "equipe = NULL;",
            "boa prática após free(): zera o ponteiro para evitar que ele seja usado acidentalmente depois de a memória já ter sido liberada (ponteiro pendurado)."
          ]
        ]
      },
      {
        "heading": "Manipulação de Arquivos com fopen/fprintf/fscanf/fclose",
        "text": "A biblioteca padrão stdio.h também oferece funções para trabalhar com arquivos em disco. fopen() abre um arquivo em um modo específico (leitura, escrita ou anexação) e retorna um ponteiro do tipo FILE*, que é usado por todas as demais operações. fprintf() e fscanf() funcionam como printf() e scanf(), mas direcionam a leitura e a escrita para o arquivo em vez do teclado e da tela. Todo arquivo aberto deve ser fechado com fclose() ao final, para garantir que os dados sejam gravados corretamente em disco.",
        "codeLabel": "Código Completo em C",
        "codeLang": "c",
        "code": "#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct {\n    char nome[30];\n    float nota;\n} Aluno;\n\nint main(void) {\n    FILE *arquivo = fopen(\"alunos.txt\", \"w\");\n\n    if (arquivo == NULL) {\n        printf(\"Erro ao abrir o arquivo.\\n\");\n        return 1;\n    }\n\n    Aluno alunos[2] = {\n        {\"Mariana\", 8.5},\n        {\"Rafael\", 7.2}\n    };\n\n    for (int i = 0; i < 2; i++) {\n        fprintf(arquivo, \"%s %.1f\\n\", alunos[i].nome, alunos[i].nota);\n    }\n\n    fclose(arquivo);\n\n    FILE *leitura = fopen(\"alunos.txt\", \"r\");\n    char nomeLido[30];\n    float notaLida;\n\n    while (fscanf(leitura, \"%s %f\", nomeLido, &notaLida) == 2) {\n        printf(\"Aluno: %s - Nota: %.1f\\n\", nomeLido, notaLida);\n    }\n\n    fclose(leitura);\n\n    return 0;\n}",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "fopen(\"alunos.txt\", \"w\")",
            "abre (ou cria) o arquivo alunos.txt em modo de escrita (\"w\"), que apaga o conteúdo anterior se o arquivo já existir."
          ],
          [
            "FILE *arquivo",
            "ponteiro para uma estrutura FILE, que representa o arquivo aberto e é usado em todas as chamadas subsequentes de leitura ou escrita."
          ],
          [
            "fprintf(arquivo, \"%s %.1f\\n\", ...)",
            "escreve dados formatados no arquivo, com a mesma sintaxe de printf(), mas direcionando a saída para o ponteiro de arquivo em vez do console."
          ],
          [
            "fclose(arquivo);",
            "fecha o arquivo, garantindo que todo dado ainda em buffer seja gravado em disco e liberando o recurso do sistema operacional."
          ],
          [
            "fopen(\"alunos.txt\", \"r\")",
            "reabre o mesmo arquivo, agora em modo de leitura (\"r\"), para ler de volta os dados gravados anteriormente."
          ],
          [
            "fscanf(leitura, \"%s %f\", nomeLido, &notaLida)",
            "lê do arquivo um valor de texto e um valor float por vez, retornando quantos itens foram lidos com sucesso, usado aqui como condição do laço while."
          ]
        ]
      }
    ]
  }
];

const C_SUMMARY = {
  "heading": "Tabela de Resumo: Papel de Cada Módulo no Aprendizado de C",
  "columns": [
    "Módulo",
    "Conceito Central",
    "Analogia",
    "Impacto no Código"
  ],
  "rows": [
    [
      "Módulo 01 — Fundamentos",
      "Compilação, main(), tipos primitivos e E/S com printf/scanf",
      "O alicerce de uma casa: sem ele, nada mais se sustenta",
      "Define como o programa é estruturado, compilado e como troca dados com o usuário"
    ],
    [
      "Módulo 02 — Estruturas de Controle",
      "Decisões (if/switch) e repetições (for/while/do-while)",
      "O roteiro de decisões de uma receita de cozinha",
      "Dá ao programa a capacidade de reagir a condições e processar dados repetidamente"
    ],
    [
      "Módulo 03 — Funções e Escopo",
      "Modularização do código, parâmetros, retorno e recursão",
      "Divisão de tarefas entre setores especializados de uma empresa",
      "Torna o código reutilizável, testável e organizado em blocos com responsabilidade única"
    ],
    [
      "Módulo 04 — Ponteiros e Arrays",
      "Endereços de memória, ponteiros, arrays e strings",
      "Endereços de casas em uma rua: & pergunta o número, * pergunta quem mora lá",
      "Permite manipular memória diretamente e é a base de arrays, strings e passagem por referência"
    ],
    [
      "Módulo 05 — Structs, Memória e Arquivos",
      "Tipos compostos, alocação dinâmica (malloc/free) e arquivos",
      "Fichas de cadastro guardadas em um arquivo físico de pastas",
      "Permite modelar dados complexos, gerenciar memória sob demanda e persistir dados em disco"
    ]
  ]
};
