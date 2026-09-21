const SQL_DATA = [
  {
    "tech": "SQL",
    "category": "DDL — Definição de Tabelas",
    "command": "CREATE TABLE",
    "description": "Cria uma nova tabela no banco de dados.",
    "example": "CREATE TABLE clientes (id_cliente INT PRIMARY KEY, nome VARCHAR(100));"
  },
  {
    "tech": "SQL",
    "category": "DDL — Definição de Tabelas",
    "command": "ALTER TABLE ... ADD COLUMN",
    "description": "Adiciona uma nova coluna a uma tabela existente.",
    "example": "ALTER TABLE clientes ADD COLUMN telefone VARCHAR(20);"
  },
  {
    "tech": "SQL",
    "category": "DDL — Definição de Tabelas",
    "command": "ALTER TABLE ... DROP COLUMN",
    "description": "Remove uma coluna de uma tabela existente.",
    "example": "ALTER TABLE clientes DROP COLUMN telefone;"
  },
  {
    "tech": "SQL",
    "category": "DDL — Definição de Tabelas",
    "command": "DROP TABLE",
    "description": "Exclui permanentemente uma tabela e todos os seus dados.",
    "example": "DROP TABLE pedidos_antigos;"
  },
  {
    "tech": "SQL",
    "category": "DDL — Definição de Tabelas",
    "command": "ALTER TABLE ... RENAME TO",
    "description": "Renomeia uma tabela existente.",
    "example": "ALTER TABLE clientes RENAME TO clientes_cadastro;"
  },
  {
    "tech": "SQL",
    "category": "DDL — Definição de Tabelas",
    "command": "TRUNCATE TABLE",
    "description": "Remove todas as linhas de uma tabela rapidamente, mantendo a estrutura.",
    "example": "TRUNCATE TABLE pedidos;"
  },
  {
    "tech": "SQL",
    "category": "Tipos de Dados",
    "command": "INT",
    "description": "Tipo numérico inteiro, usado para IDs e contagens.",
    "example": "id_produto INT PRIMARY KEY"
  },
  {
    "tech": "SQL",
    "category": "Tipos de Dados",
    "command": "VARCHAR(n)",
    "description": "Texto de tamanho variável com limite máximo de n caracteres.",
    "example": "nome VARCHAR(100)"
  },
  {
    "tech": "SQL",
    "category": "Tipos de Dados",
    "command": "DATE",
    "description": "Armazena datas no formato ano-mês-dia.",
    "example": "data_pedido DATE"
  },
  {
    "tech": "SQL",
    "category": "Tipos de Dados",
    "command": "DECIMAL(p,s)",
    "description": "Número decimal de precisão exata, ideal para valores monetários.",
    "example": "preco DECIMAL(10,2)"
  },
  {
    "tech": "SQL",
    "category": "Tipos de Dados",
    "command": "BOOLEAN",
    "description": "Armazena valores lógicos verdadeiro ou falso.",
    "example": "ativo BOOLEAN"
  },
  {
    "tech": "SQL",
    "category": "Constraints",
    "command": "PRIMARY KEY",
    "description": "Define a coluna que identifica unicamente cada linha da tabela.",
    "example": "id_cliente INT PRIMARY KEY"
  },
  {
    "tech": "SQL",
    "category": "Constraints",
    "command": "FOREIGN KEY",
    "description": "Cria um vínculo entre a coluna de uma tabela e a chave primária de outra.",
    "example": "FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)"
  },
  {
    "tech": "SQL",
    "category": "Constraints",
    "command": "NOT NULL",
    "description": "Impede que uma coluna fique sem valor.",
    "example": "nome VARCHAR(100) NOT NULL"
  },
  {
    "tech": "SQL",
    "category": "Constraints",
    "command": "UNIQUE",
    "description": "Garante que não existam valores repetidos na coluna.",
    "example": "email VARCHAR(100) UNIQUE"
  },
  {
    "tech": "SQL",
    "category": "Constraints",
    "command": "DEFAULT",
    "description": "Define um valor padrão para a coluna quando nenhum é informado.",
    "example": "status VARCHAR(20) DEFAULT 'pendente'"
  },
  {
    "tech": "SQL",
    "category": "Consultas SELECT",
    "command": "SELECT",
    "description": "Recupera dados de uma ou mais colunas de uma tabela.",
    "example": "SELECT nome, email FROM clientes;"
  },
  {
    "tech": "SQL",
    "category": "Consultas SELECT",
    "command": "SELECT *",
    "description": "Recupera todas as colunas de uma tabela.",
    "example": "SELECT * FROM produtos;"
  },
  {
    "tech": "SQL",
    "category": "Consultas SELECT",
    "command": "FROM",
    "description": "Especifica a tabela de onde os dados serão lidos.",
    "example": "SELECT nome FROM clientes;"
  },
  {
    "tech": "SQL",
    "category": "Consultas SELECT",
    "command": "WHERE",
    "description": "Filtra as linhas retornadas com base em uma condição.",
    "example": "SELECT * FROM produtos WHERE preco > 100;"
  },
  {
    "tech": "SQL",
    "category": "Consultas SELECT",
    "command": "ORDER BY",
    "description": "Ordena o resultado da consulta por uma ou mais colunas.",
    "example": "SELECT * FROM produtos ORDER BY preco DESC;"
  },
  {
    "tech": "SQL",
    "category": "Consultas SELECT",
    "command": "LIMIT",
    "description": "Restringe o número de linhas retornadas pela consulta.",
    "example": "SELECT * FROM clientes LIMIT 10;"
  },
  {
    "tech": "SQL",
    "category": "Consultas SELECT",
    "command": "DISTINCT",
    "description": "Remove valores duplicados do resultado.",
    "example": "SELECT DISTINCT categoria FROM produtos;"
  },
  {
    "tech": "SQL",
    "category": "Filtros e Operadores",
    "command": "AND",
    "description": "Combina condições exigindo que todas sejam verdadeiras.",
    "example": "WHERE cidade = 'SP' AND preco > 50"
  },
  {
    "tech": "SQL",
    "category": "Filtros e Operadores",
    "command": "OR",
    "description": "Combina condições exigindo que ao menos uma seja verdadeira.",
    "example": "WHERE cidade = 'SP' OR cidade = 'RJ'"
  },
  {
    "tech": "SQL",
    "category": "Filtros e Operadores",
    "command": "NOT",
    "description": "Nega uma condição.",
    "example": "WHERE NOT status = 'cancelado'"
  },
  {
    "tech": "SQL",
    "category": "Filtros e Operadores",
    "command": "LIKE",
    "description": "Busca padrões de texto usando curingas.",
    "example": "WHERE nome LIKE 'Ana%'"
  },
  {
    "tech": "SQL",
    "category": "Filtros e Operadores",
    "command": "IN",
    "description": "Verifica se um valor está presente em uma lista.",
    "example": "WHERE cidade IN ('SP', 'RJ', 'MG')"
  },
  {
    "tech": "SQL",
    "category": "Filtros e Operadores",
    "command": "BETWEEN",
    "description": "Filtra valores dentro de um intervalo, incluindo os limites.",
    "example": "WHERE preco BETWEEN 50 AND 200"
  },
  {
    "tech": "SQL",
    "category": "Filtros e Operadores",
    "command": "IS NULL",
    "description": "Verifica se uma coluna não possui valor definido.",
    "example": "WHERE telefone IS NULL"
  },
  {
    "tech": "SQL",
    "category": "Filtros e Operadores",
    "command": "Operadores de comparação (=, <>, >, <, >=, <=)",
    "description": "Comparam valores em uma condição.",
    "example": "WHERE quantidade >= 5"
  },
  {
    "tech": "SQL",
    "category": "Funções Agregadas e Agrupamento",
    "command": "COUNT",
    "description": "Conta o número de linhas que atendem a uma condição.",
    "example": "SELECT COUNT(*) FROM pedidos;"
  },
  {
    "tech": "SQL",
    "category": "Funções Agregadas e Agrupamento",
    "command": "SUM",
    "description": "Soma os valores numéricos de uma coluna.",
    "example": "SELECT SUM(quantidade) FROM pedidos;"
  },
  {
    "tech": "SQL",
    "category": "Funções Agregadas e Agrupamento",
    "command": "AVG",
    "description": "Calcula a média dos valores de uma coluna.",
    "example": "SELECT AVG(preco) FROM produtos;"
  },
  {
    "tech": "SQL",
    "category": "Funções Agregadas e Agrupamento",
    "command": "MIN",
    "description": "Retorna o menor valor de uma coluna.",
    "example": "SELECT MIN(preco) FROM produtos;"
  },
  {
    "tech": "SQL",
    "category": "Funções Agregadas e Agrupamento",
    "command": "MAX",
    "description": "Retorna o maior valor de uma coluna.",
    "example": "SELECT MAX(preco) FROM produtos;"
  },
  {
    "tech": "SQL",
    "category": "Funções Agregadas e Agrupamento",
    "command": "GROUP BY",
    "description": "Agrupa linhas que compartilham o mesmo valor em colunas especificadas.",
    "example": "SELECT id_cliente, COUNT(*) FROM pedidos GROUP BY id_cliente;"
  },
  {
    "tech": "SQL",
    "category": "Funções Agregadas e Agrupamento",
    "command": "HAVING",
    "description": "Filtra grupos formados pelo GROUP BY com base em uma condição sobre agregações.",
    "example": "GROUP BY id_cliente HAVING COUNT(*) > 3"
  },
  {
    "tech": "SQL",
    "category": "Junções",
    "command": "INNER JOIN",
    "description": "Retorna apenas as linhas que possuem correspondência em ambas as tabelas.",
    "example": "SELECT * FROM pedidos p INNER JOIN clientes c ON p.id_cliente = c.id_cliente;"
  },
  {
    "tech": "SQL",
    "category": "Junções",
    "command": "LEFT JOIN",
    "description": "Retorna todas as linhas da tabela à esquerda, mesmo sem correspondência à direita.",
    "example": "SELECT * FROM clientes c LEFT JOIN pedidos p ON c.id_cliente = p.id_cliente;"
  },
  {
    "tech": "SQL",
    "category": "Junções",
    "command": "RIGHT JOIN",
    "description": "Retorna todas as linhas da tabela à direita, mesmo sem correspondência à esquerda.",
    "example": "SELECT * FROM pedidos p RIGHT JOIN produtos pr ON p.id_produto = pr.id_produto;"
  },
  {
    "tech": "SQL",
    "category": "Junções",
    "command": "FULL JOIN",
    "description": "Retorna todas as linhas de ambas as tabelas, combinando correspondências quando existem.",
    "example": "SELECT * FROM clientes c FULL JOIN pedidos p ON c.id_cliente = p.id_cliente;"
  },
  {
    "tech": "SQL",
    "category": "Junções",
    "command": "ON",
    "description": "Define a condição de correspondência entre as tabelas em um JOIN.",
    "example": "INNER JOIN produtos pr ON p.id_produto = pr.id_produto"
  },
  {
    "tech": "SQL",
    "category": "Junções",
    "command": "Alias de tabela",
    "description": "Atribui um apelido curto a uma tabela para simplificar a consulta.",
    "example": "FROM pedidos AS p"
  },
  {
    "tech": "SQL",
    "category": "Manipulação de Dados (DML)",
    "command": "INSERT INTO",
    "description": "Insere uma nova linha de dados em uma tabela.",
    "example": "INSERT INTO clientes (id_cliente, nome) VALUES (1, 'Ana Silva');"
  },
  {
    "tech": "SQL",
    "category": "Manipulação de Dados (DML)",
    "command": "UPDATE",
    "description": "Modifica os valores de linhas existentes em uma tabela.",
    "example": "UPDATE produtos SET preco = 79.90 WHERE id_produto = 3;"
  },
  {
    "tech": "SQL",
    "category": "Manipulação de Dados (DML)",
    "command": "DELETE FROM",
    "description": "Remove linhas de uma tabela que atendem a uma condição.",
    "example": "DELETE FROM pedidos WHERE status = 'cancelado';"
  },
  {
    "tech": "SQL",
    "category": "Manipulação de Dados (DML)",
    "command": "VALUES",
    "description": "Especifica os valores a serem inseridos em um INSERT INTO.",
    "example": "VALUES (2, 'Bruno Costa', 'bruno@email.com')"
  },
  {
    "tech": "SQL",
    "category": "Manipulação de Dados (DML)",
    "command": "Subconsulta (Subquery)",
    "description": "Uma consulta SELECT usada dentro de outra consulta.",
    "example": "SELECT nome FROM clientes WHERE id_cliente IN (SELECT id_cliente FROM pedidos)"
  },
  {
    "tech": "SQL",
    "category": "Transações",
    "command": "BEGIN / START TRANSACTION",
    "description": "Inicia um bloco de transação no banco de dados.",
    "example": "BEGIN;"
  },
  {
    "tech": "SQL",
    "category": "Transações",
    "command": "COMMIT",
    "description": "Confirma permanentemente as alterações feitas na transação.",
    "example": "COMMIT;"
  },
  {
    "tech": "SQL",
    "category": "Transações",
    "command": "ROLLBACK",
    "description": "Desfaz as alterações feitas desde o início da transação.",
    "example": "ROLLBACK;"
  },
  {
    "tech": "SQL",
    "category": "Funções de String e Data",
    "command": "UPPER / LOWER",
    "description": "Converte um texto para letras maiúsculas ou minúsculas.",
    "example": "SELECT UPPER(nome) FROM clientes;"
  },
  {
    "tech": "SQL",
    "category": "Funções de String e Data",
    "command": "CONCAT",
    "description": "Concatena duas ou mais strings em um único texto.",
    "example": "SELECT CONCAT(nome, ' - ', cidade) FROM clientes;"
  },
  {
    "tech": "SQL",
    "category": "Funções de String e Data",
    "command": "LENGTH",
    "description": "Retorna o número de caracteres de uma string.",
    "example": "SELECT LENGTH(nome) FROM clientes;"
  },
  {
    "tech": "SQL",
    "category": "Funções de String e Data",
    "command": "CURRENT_DATE",
    "description": "Retorna a data atual do sistema.",
    "example": "SELECT * FROM pedidos WHERE data_pedido = CURRENT_DATE;"
  }
];
