const SQL_MODULES = [
  {
    "id": "sql-fundamentos-e-modelo-relacional",
    "tech": "SQL",
    "number": "01",
    "title": "Fundamentos e Modelo Relacional",
    "intro": "O SQL (Structured Query Language) é a linguagem padrão para armazenar, organizar e consultar dados em bancos de dados relacionais. Antes de escrever qualquer consulta, é fundamental entender o modelo relacional: os dados são organizados em tabelas, cada tabela representa uma entidade do mundo real (como clientes, produtos ou pedidos), cada linha é um registro individual e cada coluna representa um atributo desse registro. Pense em uma tabela como uma planilha extremamente organizada, na qual cada coluna tem um tipo de dado fixo e regras que garantem a consistência das informações. Ao longo deste curso, usaremos um banco de dados fictício de uma loja, com três tabelas principais: clientes, produtos e pedidos, que se relacionam entre si.",
    "sections": [
      {
        "heading": "Tabelas, Colunas e Tipos de Dados",
        "text": "Cada coluna de uma tabela SQL possui um tipo de dado que determina que tipo de valor pode ser armazenado nela, como números inteiros, textos, datas ou valores monetários. Definir os tipos corretamente evita erros, economiza espaço de armazenamento e garante que operações como somas e comparações funcionem como esperado. O comando CREATE TABLE é usado para definir a estrutura de uma nova tabela, especificando o nome de cada coluna e seu tipo de dado.",
        "codeLabel": "Código SQL Completo",
        "codeLang": "sql",
        "code": "",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "CREATE TABLE",
            "comando DDL usado para criar uma nova tabela no banco de dados, definindo seu nome e a estrutura de colunas."
          ],
          [
            "INT",
            "tipo de dado usado para armazenar números inteiros, como identificadores e quantidades."
          ],
          [
            "VARCHAR(n)",
            "tipo de dado para texto de tamanho variável, onde n define o número máximo de caracteres permitidos."
          ],
          [
            "DATE",
            "tipo de dado usado para armazenar datas no formato ano-mês-dia (AAAA-MM-DD)."
          ],
          [
            "DECIMAL(10,2)",
            "tipo numérico de ponto fixo, ideal para valores monetários, pois evita erros de arredondamento comuns em tipos de ponto flutuante."
          ],
          [
            "PRIMARY KEY",
            "restrição que identifica de forma única cada linha da tabela; não pode haver valores duplicados ou nulos nessa coluna."
          ],
          [
            "NOT NULL",
            "restrição que obriga a coluna a sempre receber um valor, impedindo que fique vazia (nula)."
          ],
          [
            "UNIQUE",
            "restrição que garante que nenhum outro registro na tabela tenha o mesmo valor naquela coluna."
          ],
          [
            "DEFAULT 0",
            "define um valor padrão que será usado automaticamente quando nenhum valor for informado para aquela coluna."
          ]
        ]
      },
      {
        "heading": "Chaves Primária e Estrangeira: Relacionando Tabelas",
        "text": "O verdadeiro poder do modelo relacional está na capacidade de conectar tabelas entre si por meio de chaves. A chave primária (PRIMARY KEY) identifica unicamente cada registro de uma tabela, enquanto a chave estrangeira (FOREIGN KEY) é uma coluna que referencia a chave primária de outra tabela, criando um vínculo entre elas. É assim que a tabela pedidos consegue saber qual cliente fez o pedido e qual produto foi comprado, sem duplicar os dados de clientes e produtos dentro dela.",
        "codeLabel": "Código SQL Completo",
        "codeLang": "sql",
        "code": "",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)",
            "cria uma chave estrangeira que vincula a coluna id_cliente da tabela pedidos à chave primária da tabela clientes, garantindo integridade referencial."
          ],
          [
            "FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)",
            "vincula cada pedido a um produto existente na tabela produtos, impedindo referências a produtos inexistentes."
          ],
          [
            "status VARCHAR(20) DEFAULT 'pendente'",
            "define que, se nenhum status for informado ao inserir um pedido, o valor 'pendente' será atribuído automaticamente."
          ],
          [
            "Integridade referencial",
            "princípio garantido pelas chaves estrangeiras que impede a exclusão ou alteração de um registro referenciado enquanto ele ainda estiver em uso por outra tabela."
          ],
          [
            "ALTER TABLE ... ADD COLUMN",
            "comando DDL usado para adicionar uma nova coluna a uma tabela já existente, sem a necessidade de recriá-la."
          ],
          [
            "Relacionamento um-para-muitos",
            "um cliente pode estar associado a vários pedidos, mas cada pedido pertence a apenas um cliente; esse é o tipo de relacionamento mais comum em bancos relacionais."
          ]
        ]
      }
    ]
  },
  {
    "id": "sql-consultas-b-sicas-com",
    "tech": "SQL",
    "number": "02",
    "title": "Consultas Básicas com SELECT",
    "intro": "Depois de entender como os dados são estruturados, o próximo passo é aprender a consultá-los. O comando SELECT é o coração do SQL: é ele que permite recuperar informações armazenadas nas tabelas, escolhendo quais colunas exibir, filtrando linhas específicas e ordenando os resultados. Dominar o SELECT e suas cláusulas básicas é o que permite transformar um banco de dados estático em respostas úteis para perguntas de negócio, como 'quais clientes são de São Paulo?' ou 'quais produtos custam mais de R$100?'.",
    "sections": [
      {
        "heading": "Selecionando Colunas e Filtrando Linhas com WHERE",
        "text": "A cláusula SELECT define quais colunas serão retornadas, enquanto FROM indica de qual tabela os dados virão. Para restringir os resultados a linhas que atendem a determinada condição, usa-se a cláusula WHERE. Já a cláusula ORDER BY permite organizar o resultado final em ordem crescente ou decrescente com base em uma ou mais colunas.",
        "codeLabel": "Código SQL Completo",
        "codeLang": "sql",
        "code": "",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "SELECT nome, email, cidade",
            "indica que apenas essas três colunas devem ser retornadas pela consulta, em vez de todas as colunas da tabela."
          ],
          [
            "FROM clientes",
            "define a tabela de origem dos dados que serão consultados."
          ],
          [
            "WHERE cidade = 'São Paulo'",
            "filtra o resultado, retornando apenas as linhas em que o valor da coluna cidade seja exatamente igual a 'São Paulo'."
          ],
          [
            "ORDER BY nome ASC",
            "ordena o resultado em ordem alfabética crescente (A a Z) com base na coluna nome; ASC é o padrão e pode ser omitido."
          ],
          [
            "WHERE preco > 100",
            "exemplo de filtro numérico, retornando apenas produtos cujo preço seja maior que 100."
          ],
          [
            "ORDER BY preco DESC",
            "ordena os resultados do maior para o menor preço, do produto mais caro ao mais barato."
          ]
        ]
      },
      {
        "heading": "Eliminando Duplicatas e Limitando Resultados",
        "text": "Em consultas sobre grandes volumes de dados, é comum querer ver apenas os valores distintos de uma coluna, sem repetições, ou limitar o número de linhas retornadas para não sobrecarregar a aplicação. A cláusula DISTINCT remove duplicatas do resultado, enquanto LIMIT (chamado de TOP em bancos como o SQL Server) restringe a quantidade de linhas retornadas.",
        "codeLabel": "Código SQL Completo",
        "codeLang": "sql",
        "code": "",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "SELECT DISTINCT categoria",
            "retorna cada valor de categoria apenas uma vez, mesmo que vários produtos compartilhem a mesma categoria."
          ],
          [
            "LIMIT 5",
            "restringe o resultado da consulta às 5 primeiras linhas retornadas, muito útil para relatórios do tipo 'top 5'."
          ],
          [
            "Ordem de execução",
            "embora escrito por último, o LIMIT é aplicado depois que os dados já foram filtrados e ordenados, garantindo que os 5 produtos mais caros sejam retornados corretamente."
          ],
          [
            "TOP (SQL Server)",
            "cláusula equivalente ao LIMIT, usada em bancos como o Microsoft SQL Server, com sintaxe SELECT TOP 5 ... em vez de LIMIT ao final da consulta."
          ]
        ]
      }
    ]
  },
  {
    "id": "sql-filtros-avan-ados-agrega",
    "tech": "SQL",
    "number": "03",
    "title": "Filtros Avançados, Agregações e Agrupamentos",
    "intro": "Além de comparações simples de igualdade, o SQL oferece operadores mais expressivos para filtrar dados, como busca por padrões de texto, listas de valores e intervalos numéricos. Combinado a isso, as funções agregadas permitem resumir grandes volumes de dados em números únicos, como totais, médias e contagens, enquanto o GROUP BY organiza essas agregações por categoria. Juntas, essas ferramentas transformam dados brutos em indicadores de negócio.",
    "sections": [
      {
        "heading": "Operadores de Filtro Avançados",
        "text": "Quando uma condição simples de igualdade não é suficiente, o SQL disponibiliza operadores como LIKE para buscas por padrão de texto, IN para verificar se um valor está em uma lista, BETWEEN para intervalos e IS NULL para identificar valores ausentes. Esses operadores podem ser combinados usando AND e OR para criar filtros bastante específicos.",
        "codeLabel": "Código SQL Completo",
        "codeLang": "sql",
        "code": "",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "WHERE nome LIKE 'A%'",
            "retorna apenas clientes cujo nome comece com a letra A; o símbolo % é um curinga que representa qualquer sequência de caracteres."
          ],
          [
            "cidade IN ('São Paulo', 'Rio de Janeiro')",
            "equivalente a usar vários OR, retorna linhas cujo valor de cidade esteja em qualquer um dos valores da lista."
          ],
          [
            "AND",
            "exige que ambas as condições (nome e cidade) sejam verdadeiras ao mesmo tempo para que a linha seja retornada."
          ],
          [
            "BETWEEN 50 AND 200",
            "filtra valores dentro de um intervalo, incluindo os limites 50 e 200."
          ],
          [
            "OR estoque IS NULL",
            "retorna a linha se a condição de preço for verdadeira ou se a coluna estoque não tiver valor definido (nulo)."
          ],
          [
            "IS NULL",
            "operador específico para verificar ausência de valor; não é possível usar = NULL em SQL, pois NULL representa a ausência de um valor, não um valor em si."
          ]
        ]
      },
      {
        "heading": "Funções Agregadas e Agrupamento com GROUP BY e HAVING",
        "text": "Funções agregadas como COUNT, SUM, AVG, MIN e MAX operam sobre um conjunto de linhas e retornam um único valor resumido. Quando combinadas com GROUP BY, essas funções calculam um resultado separado para cada grupo de linhas que compartilham o mesmo valor em uma coluna, como o total de pedidos por cliente. A cláusula HAVING funciona como um WHERE, mas é aplicada depois do agrupamento, permitindo filtrar os próprios grupos.",
        "codeLabel": "Código SQL Completo",
        "codeLang": "sql",
        "code": "",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "COUNT(*)",
            "conta o número total de linhas em cada grupo, neste caso, quantos pedidos cada cliente fez."
          ],
          [
            "SUM(quantidade)",
            "soma os valores da coluna quantidade dentro de cada grupo, retornando o total de itens pedidos por cliente."
          ],
          [
            "GROUP BY id_cliente",
            "agrupa todas as linhas da tabela pedidos que possuem o mesmo id_cliente, permitindo calcular agregações por cliente."
          ],
          [
            "HAVING COUNT(*) > 2",
            "filtra os grupos já calculados, retornando apenas os clientes que fizeram mais de 2 pedidos; diferente do WHERE, que filtraria linhas antes do agrupamento."
          ],
          [
            "AVG(preco), MIN(preco), MAX(preco)",
            "calculam, respectivamente, o preço médio, o menor preço e o maior preço dentro de cada grupo de categoria."
          ],
          [
            "AS total_pedidos",
            "cria um alias, renomeando a coluna resultante da agregação para um nome mais legível no resultado final."
          ]
        ]
      }
    ]
  },
  {
    "id": "sql-jun-es-entre-tabelas",
    "tech": "SQL",
    "number": "04",
    "title": "Junções entre Tabelas",
    "intro": "Como vimos no Módulo 01, os dados em um banco relacional são divididos em várias tabelas conectadas por chaves estrangeiras. As junções (JOINs) são o mecanismo que permite combinar informações de duas ou mais tabelas em uma única consulta, como listar o nome do cliente e o nome do produto de cada pedido, mesmo esses dados estando armazenados em tabelas separadas. Sem os JOINs, seria necessário fazer múltiplas consultas separadas e combinar os resultados manualmente na aplicação.",
    "sections": [
      {
        "heading": "INNER JOIN e Alias de Tabela",
        "text": "O INNER JOIN é o tipo de junção mais comum: ele retorna apenas as linhas em que existe correspondência em ambas as tabelas envolvidas, com base em uma condição definida na cláusula ON. Para consultas com múltiplas tabelas, é comum usar alias (apelidos curtos) para tornar o código mais legível.",
        "codeLabel": "Código SQL Completo",
        "codeLang": "sql",
        "code": "",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "FROM pedidos AS p",
            "define a tabela pedidos como ponto de partida da consulta, atribuindo a ela o alias p."
          ],
          [
            "INNER JOIN clientes AS c ON p.id_cliente = c.id_cliente",
            "combina cada linha de pedidos com a linha correspondente de clientes cujo id_cliente seja igual; pedidos sem cliente correspondente não aparecem no resultado."
          ],
          [
            "INNER JOIN produtos AS pr ON p.id_produto = pr.id_produto",
            "adiciona uma segunda junção, combinando também os dados do produto associado a cada pedido."
          ],
          [
            "Alias de tabela (p, c, pr)",
            "apelidos curtos que evitam repetir o nome completo da tabela em cada referência a uma coluna, tornando a consulta mais curta e legível."
          ],
          [
            "ON",
            "cláusula que define a condição usada para relacionar as linhas das duas tabelas em um JOIN; geralmente compara a chave estrangeira com a chave primária correspondente."
          ],
          [
            "c.nome AS cliente",
            "como as tabelas clientes e produtos possuem ambas uma coluna nome, o alias diferencia qual delas está sendo exibida no resultado."
          ]
        ]
      },
      {
        "heading": "LEFT JOIN, RIGHT JOIN e FULL JOIN",
        "text": "Nem sempre queremos apenas as correspondências exatas entre tabelas. O LEFT JOIN retorna todas as linhas da tabela à esquerda, mesmo quando não há correspondência na tabela à direita (preenchendo com NULL). O RIGHT JOIN faz o inverso, priorizando a tabela à direita. Já o FULL JOIN combina os dois comportamentos, retornando todas as linhas de ambas as tabelas, com ou sem correspondência.",
        "codeLabel": "Código SQL Completo",
        "codeLang": "sql",
        "code": "",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "LEFT JOIN pedidos AS p ON c.id_cliente = p.id_cliente",
            "retorna todos os clientes, mesmo aqueles que nunca fizeram nenhum pedido; para esses casos, as colunas vindas de pedidos aparecem como NULL."
          ],
          [
            "RIGHT JOIN",
            "funciona de forma simétrica ao LEFT JOIN, mas priorizando todas as linhas da tabela à direita da junção, mesmo sem correspondência na tabela à esquerda."
          ],
          [
            "FULL JOIN",
            "também chamado de FULL OUTER JOIN, retorna todas as linhas de ambas as tabelas; quando não há correspondência de um dos lados, os campos ausentes aparecem como NULL."
          ],
          [
            "Valores NULL no resultado",
            "indicam explicitamente a ausência de um registro correspondente, sendo essenciais para identificar, por exemplo, clientes sem pedidos ou produtos nunca vendidos."
          ],
          [
            "Quando usar cada tipo de JOIN",
            "o INNER JOIN é usado quando só interessam as correspondências completas; o LEFT/RIGHT JOIN quando é preciso preservar todos os registros de um dos lados; o FULL JOIN quando nenhum registro de nenhuma das tabelas pode ser perdido."
          ]
        ]
      }
    ]
  },
  {
    "id": "sql-manipula-o-de-dados",
    "tech": "SQL",
    "number": "05",
    "title": "Manipulação de Dados e Subconsultas",
    "intro": "Até aqui, o foco esteve em consultar dados já existentes. Mas um banco de dados também precisa ser alimentado, atualizado e corrigido ao longo do tempo. Os comandos INSERT INTO, UPDATE e DELETE formam o conjunto de manipulação de dados (DML) do SQL. Além disso, consultas mais avançadas frequentemente usam subconsultas — um SELECT dentro de outro SELECT — para resolver problemas que uma única consulta simples não resolveria. Por fim, transações garantem que operações críticas aconteçam de forma segura e consistente.",
    "sections": [
      {
        "heading": "Inserindo, Atualizando e Excluindo Dados",
        "text": "O comando INSERT INTO adiciona novas linhas a uma tabela, UPDATE modifica valores de linhas já existentes e DELETE FROM remove linhas. É fundamental sempre usar uma cláusula WHERE em UPDATE e DELETE, pois a ausência dela afeta todas as linhas da tabela de uma só vez.",
        "codeLabel": "Código SQL Completo",
        "codeLang": "sql",
        "code": "",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "INSERT INTO clientes (id_cliente, nome, email, cidade, data_cadastro)",
            "especifica a tabela e a lista de colunas que receberão valores na nova linha inserida."
          ],
          [
            "VALUES (...)",
            "fornece os valores a serem inseridos, na mesma ordem em que as colunas foram listadas em INSERT INTO."
          ],
          [
            "UPDATE produtos SET preco = 89.90",
            "altera o valor da coluna preco para 89.90 nas linhas selecionadas."
          ],
          [
            "WHERE id_produto = 12",
            "restringe a atualização apenas à linha cujo id_produto seja 12; sem essa cláusula, todos os produtos teriam o preço alterado."
          ],
          [
            "DELETE FROM pedidos WHERE status = 'cancelado'",
            "remove permanentemente da tabela todas as linhas cujo status seja igual a 'cancelado'."
          ],
          [
            "Risco de omitir o WHERE",
            "em comandos UPDATE e DELETE, esquecer a cláusula WHERE faz com que a operação seja aplicada a todas as linhas da tabela, um dos erros mais graves e comuns em SQL."
          ]
        ]
      },
      {
        "heading": "Subconsultas e Transações",
        "text": "Uma subconsulta (subquery) é uma instrução SELECT usada dentro de outra consulta, permitindo resolver problemas em etapas, como encontrar clientes que fizeram pedidos acima de determinado valor. Já as transações agrupam um conjunto de comandos para que sejam executados como uma única unidade: ou todos são aplicados com sucesso (COMMIT), ou nenhum é aplicado (ROLLBACK), garantindo a consistência dos dados mesmo em caso de falhas.",
        "codeLabel": "Código SQL Completo",
        "codeLang": "sql",
        "code": "",
        "listLabel": "Explicação Detalhada",
        "list": [
          [
            "WHERE id_cliente IN (SELECT id_cliente FROM pedidos WHERE quantidade > 10)",
            "a subconsulta interna retorna os IDs de clientes que fizeram pedidos com quantidade maior que 10; a consulta externa usa esse resultado para filtrar os clientes."
          ],
          [
            "Subconsulta (subquery)",
            "uma consulta SELECT completa, colocada entre parênteses, que é executada primeiro e cujo resultado é usado pela consulta externa."
          ],
          [
            "BEGIN",
            "inicia explicitamente uma transação, agrupando os comandos seguintes até um COMMIT ou ROLLBACK."
          ],
          [
            "UPDATE produtos SET estoque = estoque - 1",
            "dentro da transação, reduz em uma unidade o estoque do produto, como aconteceria após a confirmação de uma venda."
          ],
          [
            "COMMIT",
            "confirma permanentemente todas as alterações feitas desde o BEGIN, tornando-as visíveis e definitivas no banco de dados."
          ],
          [
            "ROLLBACK",
            "caso algo dê errado antes do COMMIT, desfaz todas as alterações feitas desde o início da transação, retornando o banco ao estado anterior."
          ]
        ]
      }
    ]
  }
];

const SQL_SUMMARY = {
  "heading": "Tabela de Resumo: Papel de Cada Módulo no Aprendizado de SQL",
  "columns": [
    "Módulo",
    "Conceito Central",
    "Analogia",
    "Impacto na Consulta"
  ],
  "rows": [
    [
      "Módulo 01",
      "Modelo relacional, tabelas e chaves",
      "A planta baixa de um prédio antes da construção",
      "Define a estrutura que toda consulta futura vai depender"
    ],
    [
      "Módulo 02",
      "Consultas básicas com SELECT",
      "Fazer perguntas simples e diretas ao banco de dados",
      "Recupera e filtra os dados brutos necessários"
    ],
    [
      "Módulo 03",
      "Filtros avançados, agregações e agrupamentos",
      "Resumir uma planilha extensa em totais e médias",
      "Transforma dados brutos em métricas de negócio"
    ],
    [
      "Módulo 04",
      "Junções entre tabelas",
      "Costurar peças de um quebra-cabeça espalhadas em tabelas diferentes",
      "Combina informações relacionadas em uma única visão"
    ],
    [
      "Módulo 05",
      "Manipulação de dados e subconsultas",
      "Editar um arquivo e, ao mesmo tempo, fazer perguntas dentro de outras perguntas",
      "Permite alterar o banco com segurança e escrever consultas mais dinâmicas"
    ]
  ]
};
