# IDQBRN_Project
Software IDQBRN

Pre-requisitos e principais tecnologias:

Python3 / biblioteca psycopg2 / biblioteca flask → BackEnd do projeto

postgreSQL → Nosso SGBD

Papaparse → Importação do csv para o banco

React.js → FrontEnd do projeto

Principais comandos

Para criação do banco de dados local, rodar:

	1. ‘sudo -iu postgres psql’ → (entra no modo admin do postgres)
	2. ‘CREATE DATABASE flask_db’ → (dá um nome ao banco);’
	3. ‘GRANT ALL PRIVILEGES ON DATABASE flask_db TO user_name;’
	4. ‘\l’ → (para ver o database)
	5. ‘\q’ → (sair do ambiente do postgresql)

Após feito o banco, rodar ‘python3 init_db.py’ para iniciar as tabelas no banco postgres.
Rodar : ‘npm install axios’ para conectar o React Js com o backend.

Para utilização do site é necessário rodar os comandos: 1. Dentro do diretório ‘labprog3’ rodar ‘npm install’ e depois ‘npm start’ 2. Dentro do diretório ‘backend’ rodar ‘python3 app.py’’

Vale Salientar também que temos muito pontos a aprimorar, principalmente na parte de adição de funcionalidades no mapa das doenças.

Além disso, vale ressaltar que pensamos em nossa estrutura de armazenagem com 3 tabelas no banco postgres. A primeira, uma tabela de registros de doenças, a segunda, uma tabela de registro de localidades, e por fim, uma tabela que relaciona localidade, doença e o número de ocorrências. Como premissa básica, consideramos que para uma doença fosse popoulada na tabela occorência, ela já teria que estar registrada na tabela de doenças. Então, deve-se popular o banco de dados com as doenças existentes por meio do CRUD que disponibilizamos, antes de utilizar o input massivo por meio do csv. Isso não se aplica às localidades, que são populadas automaticamente com o input do csv.
