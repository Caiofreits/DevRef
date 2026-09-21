const C_DATA = [
  {
    "tech": "C",
    "category": "Tipos Primitivos",
    "command": "int",
    "description": "Tipo inteiro, usado para números sem casas decimais",
    "example": "int idade = 25;"
  },
  {
    "tech": "C",
    "category": "Tipos Primitivos",
    "command": "float",
    "description": "Tipo de ponto flutuante de precisão simples",
    "example": "float altura = 1.75f;"
  },
  {
    "tech": "C",
    "category": "Tipos Primitivos",
    "command": "double",
    "description": "Tipo de ponto flutuante de precisão dupla",
    "example": "double pi = 3.14159265;"
  },
  {
    "tech": "C",
    "category": "Tipos Primitivos",
    "command": "char",
    "description": "Armazena um único caractere",
    "example": "char letra = 'A';"
  },
  {
    "tech": "C",
    "category": "Tipos Primitivos",
    "command": "long",
    "description": "Inteiro com faixa de valores maior que int",
    "example": "long populacao = 8000000000L;"
  },
  {
    "tech": "C",
    "category": "Tipos Primitivos",
    "command": "unsigned int",
    "description": "Inteiro sem sinal, armazena apenas valores positivos",
    "example": "unsigned int contador = 10u;"
  },
  {
    "tech": "C",
    "category": "Tipos Primitivos",
    "command": "const",
    "description": "Qualificador que impede a modificação do valor após inicializado",
    "example": "const float PI = 3.14f;"
  },
  {
    "tech": "C",
    "category": "Operadores",
    "command": "+  -  *  /",
    "description": "Operadores aritméticos de soma, subtração, multiplicação e divisão",
    "example": "int soma = 5 + 3;"
  },
  {
    "tech": "C",
    "category": "Operadores",
    "command": "%",
    "description": "Operador módulo, retorna o resto de uma divisão inteira",
    "example": "int resto = 10 % 3;"
  },
  {
    "tech": "C",
    "category": "Operadores",
    "command": "==  !=",
    "description": "Operadores de igualdade e diferença",
    "example": "if (a == b) { }"
  },
  {
    "tech": "C",
    "category": "Operadores",
    "command": "> < >= <=",
    "description": "Operadores relacionais de comparação",
    "example": "if (idade >= 18) { }"
  },
  {
    "tech": "C",
    "category": "Operadores",
    "command": "&& || !",
    "description": "Operadores lógicos E, OU e negação",
    "example": "if (a > 0 && b > 0) { }"
  },
  {
    "tech": "C",
    "category": "Operadores",
    "command": "++  --",
    "description": "Operadores de incremento e decremento",
    "example": "contador++;"
  },
  {
    "tech": "C",
    "category": "Operadores",
    "command": "sizeof",
    "description": "Retorna o tamanho em bytes de um tipo ou variável",
    "example": "sizeof(int)"
  },
  {
    "tech": "C",
    "category": "Estruturas de Controle",
    "command": "if / else if / else",
    "description": "Executa blocos diferentes conforme condições booleanas",
    "example": "if (x > 0) { } else { }"
  },
  {
    "tech": "C",
    "category": "Estruturas de Controle",
    "command": "switch / case",
    "description": "Seleciona um entre vários blocos com base no valor de uma variável",
    "example": "switch (op) { case 1: break; }"
  },
  {
    "tech": "C",
    "category": "Estruturas de Controle",
    "command": "for (;;)",
    "description": "Laço de repetição com inicialização, condição e incremento",
    "example": "for (int i = 0; i < 10; i++) { }"
  },
  {
    "tech": "C",
    "category": "Estruturas de Controle",
    "command": "while (cond)",
    "description": "Laço que repete enquanto a condição for verdadeira, testada antes",
    "example": "while (cond) { }"
  },
  {
    "tech": "C",
    "category": "Estruturas de Controle",
    "command": "do { } while (cond);",
    "description": "Laço que executa ao menos uma vez antes de testar a condição",
    "example": "do { total++; } while (total < 5);"
  },
  {
    "tech": "C",
    "category": "Estruturas de Controle",
    "command": "break;",
    "description": "Interrompe imediatamente um laço ou switch",
    "example": "break;"
  },
  {
    "tech": "C",
    "category": "Estruturas de Controle",
    "command": "continue;",
    "description": "Pula para a próxima iteração do laço, ignorando o restante do bloco",
    "example": "continue;"
  },
  {
    "tech": "C",
    "category": "Funções e Escopo",
    "command": "tipo nome(parametros) { }",
    "description": "Declara e define uma função com tipo de retorno e parâmetros",
    "example": "int somar(int a, int b) { return a + b; }"
  },
  {
    "tech": "C",
    "category": "Funções e Escopo",
    "command": "return valor;",
    "description": "Encerra a função e devolve um valor ao ponto de chamada",
    "example": "return resultado;"
  },
  {
    "tech": "C",
    "category": "Funções e Escopo",
    "command": "void",
    "description": "Indica ausência de valor de retorno ou de parâmetros",
    "example": "void imprimir(void) { }"
  },
  {
    "tech": "C",
    "category": "Funções e Escopo",
    "command": "static (variável local)",
    "description": "Preserva o valor da variável entre chamadas sucessivas da função",
    "example": "static int chamadas = 0;"
  },
  {
    "tech": "C",
    "category": "Funções e Escopo",
    "command": "recursão",
    "description": "Função que chama a si mesma até atingir um caso base",
    "example": "int fat(int n){ return n<=1?1:n*fat(n-1); }"
  },
  {
    "tech": "C",
    "category": "Funções e Escopo",
    "command": "variável global",
    "description": "Declarada fora de funções, acessível em todo o arquivo",
    "example": "int total = 0;"
  },
  {
    "tech": "C",
    "category": "Ponteiros e Arrays",
    "command": "&variavel",
    "description": "Obtém o endereço de memória de uma variável",
    "example": "int *p = &x;"
  },
  {
    "tech": "C",
    "category": "Ponteiros e Arrays",
    "command": "*ponteiro (declaração)",
    "description": "Declara uma variável do tipo ponteiro",
    "example": "int *ptr;"
  },
  {
    "tech": "C",
    "category": "Ponteiros e Arrays",
    "command": "*ponteiro (desreferência)",
    "description": "Acessa ou modifica o valor armazenado no endereço apontado",
    "example": "*ptr = 10;"
  },
  {
    "tech": "C",
    "category": "Ponteiros e Arrays",
    "command": "ptr + 1",
    "description": "Aritmética de ponteiros: avança o endereço conforme o tamanho do tipo apontado",
    "example": "ptr++;"
  },
  {
    "tech": "C",
    "category": "Ponteiros e Arrays",
    "command": "tipo nome[tamanho];",
    "description": "Declara um array (vetor) de elementos do mesmo tipo",
    "example": "int notas[5];"
  },
  {
    "tech": "C",
    "category": "Ponteiros e Arrays",
    "command": "array como ponteiro",
    "description": "O nome de um array decai para um ponteiro ao seu primeiro elemento",
    "example": "int *p = notas;"
  },
  {
    "tech": "C",
    "category": "Ponteiros e Arrays",
    "command": "tipo nome[l][c];",
    "description": "Declara um array multidimensional (matriz)",
    "example": "int matriz[3][3];"
  },
  {
    "tech": "C",
    "category": "Ponteiros e Arrays",
    "command": "NULL",
    "description": "Valor especial que indica que um ponteiro não aponta para nenhum endereço válido",
    "example": "int *p = NULL;"
  },
  {
    "tech": "C",
    "category": "Biblioteca string.h",
    "command": "strlen()",
    "description": "Retorna o número de caracteres de uma string, sem contar o '\\0'",
    "example": "strlen(nome)"
  },
  {
    "tech": "C",
    "category": "Biblioteca string.h",
    "command": "strcpy()",
    "description": "Copia o conteúdo de uma string para outra",
    "example": "strcpy(destino, origem);"
  },
  {
    "tech": "C",
    "category": "Biblioteca string.h",
    "command": "strcat()",
    "description": "Concatena (anexa) uma string ao final de outra",
    "example": "strcat(destino, origem);"
  },
  {
    "tech": "C",
    "category": "Biblioteca string.h",
    "command": "strcmp()",
    "description": "Compara duas strings, retornando 0 quando são iguais",
    "example": "strcmp(a, b) == 0"
  },
  {
    "tech": "C",
    "category": "Biblioteca string.h",
    "command": "strncpy()",
    "description": "Copia até n caracteres de uma string para outra",
    "example": "strncpy(dest, src, 10);"
  },
  {
    "tech": "C",
    "category": "Biblioteca string.h",
    "command": "'\\0'",
    "description": "Caractere nulo que marca o final de toda string em C",
    "example": "char s[4] = \"abc\";"
  },
  {
    "tech": "C",
    "category": "Biblioteca stdlib.h",
    "command": "malloc()",
    "description": "Aloca dinamicamente um bloco de memória na heap",
    "example": "int *p = malloc(10 * sizeof(int));"
  },
  {
    "tech": "C",
    "category": "Biblioteca stdlib.h",
    "command": "calloc()",
    "description": "Aloca dinamicamente memória e inicializa todos os bytes com zero",
    "example": "int *p = calloc(10, sizeof(int));"
  },
  {
    "tech": "C",
    "category": "Biblioteca stdlib.h",
    "command": "free()",
    "description": "Libera um bloco de memória previamente alocado dinamicamente",
    "example": "free(p);"
  },
  {
    "tech": "C",
    "category": "Biblioteca stdlib.h",
    "command": "atoi()",
    "description": "Converte uma string numérica em um valor inteiro",
    "example": "int n = atoi(\"42\");"
  },
  {
    "tech": "C",
    "category": "Biblioteca stdlib.h",
    "command": "rand()",
    "description": "Gera um número pseudoaleatório",
    "example": "int n = rand() % 100;"
  },
  {
    "tech": "C",
    "category": "Biblioteca stdlib.h",
    "command": "exit()",
    "description": "Encerra o programa imediatamente com um código de saída",
    "example": "exit(1);"
  },
  {
    "tech": "C",
    "category": "Structs",
    "command": "struct nome { };",
    "description": "Define um novo tipo de dado composto, agrupando campos",
    "example": "struct Ponto { int x; int y; };"
  },
  {
    "tech": "C",
    "category": "Structs",
    "command": "typedef",
    "description": "Cria um apelido para um tipo, simplificando sua declaração",
    "example": "typedef struct Ponto Ponto;"
  },
  {
    "tech": "C",
    "category": "Structs",
    "command": ". e ->",
    "description": "Acessam campos de uma struct diretamente ou por meio de um ponteiro",
    "example": "p.x = 10; ptr->x = 10;"
  },
  {
    "tech": "C",
    "category": "Manipulação de Arquivos",
    "command": "fopen()",
    "description": "Abre um arquivo em um modo específico e retorna um ponteiro FILE*",
    "example": "FILE *f = fopen(\"dados.txt\", \"r\");"
  },
  {
    "tech": "C",
    "category": "Manipulação de Arquivos",
    "command": "fprintf() / fscanf()",
    "description": "Escrevem e lêem dados formatados em um arquivo, como printf/scanf",
    "example": "fprintf(f, \"%d\", n);"
  },
  {
    "tech": "C",
    "category": "Manipulação de Arquivos",
    "command": "fclose()",
    "description": "Fecha um arquivo previamente aberto, garantindo a gravação dos dados",
    "example": "fclose(f);"
  },
  {
    "tech": "C",
    "category": "Pré-processador",
    "command": "#include <arquivo.h>",
    "description": "Inclui o conteúdo de um arquivo de cabeçalho no código-fonte",
    "example": "#include <stdio.h>"
  },
  {
    "tech": "C",
    "category": "Pré-processador",
    "command": "#define NOME valor",
    "description": "Cria uma macro ou constante simbólica substituída antes da compilação",
    "example": "#define PI 3.14"
  },
  {
    "tech": "C",
    "category": "Pré-processador",
    "command": "#ifdef / #endif",
    "description": "Compilação condicional: inclui um trecho de código apenas se a macro estiver definida",
    "example": "#ifdef DEBUG\\n...\\n#endif"
  }
];
