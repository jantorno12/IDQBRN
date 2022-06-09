# coding=utf-8

import os
import psycopg2

conn = psycopg2.connect(
        host="localhost",
        database="flask_db",
        user=os.environ['DB_USERNAME'],
        password=os.environ['DB_PASSWORD'])

# Open a cursor to perform database operations
cur = conn.cursor()

# Execute a command: this creates a new table
cur.execute('DROP TABLE IF EXISTS disease  CASCADE;')
cur.execute('CREATE TABLE disease (id serial PRIMARY KEY,'
                                 'name varchar (150) NOT NULL,'
                                 'prevalence varchar (250),'
                                 'risk_area varchar (250),'
                                 'agent varchar (250),'
                                 'contagion varchar (250),'
                                 'prev_measures varchar (250),'
                                 'transmissibility varchar (250),'
                                 'reference_health_units varchar (250),'
                                 'symptoms varchar (250),'
                                 'date_added date DEFAULT CURRENT_TIMESTAMP);'
                                 )

cur.execute('DROP TABLE IF EXISTS local CASCADE;')
cur.execute('CREATE TABLE local (id serial PRIMARY KEY,'
                                 'UF varchar (5) NOT NULL,'
                                 'Municipio varchar (250) PRIMARY KEY,'
                                 'IBGE varchar (250),'
                                 'IBGE7 varchar (250),'
                                 'latitude varchar (250),'
                                 'longitude varchar (250),'
                                 'region varchar (250),'
                                 'population varchar (250),'
                                 'porte varchar (250),'
                                 'date_added date DEFAULT CURRENT_TIMESTAMP);'
                                 )


cur.execute('DROP TABLE IF EXISTS occurrence;')
cur.execute('''CREATE TABLE occurrence (id serial PRIMARY KEY,
                                 local_id int NOT NULL,
                                 disease_id int NOT NULL,
                                 amount varchar (250),
                                 date_added date DEFAULT CURRENT_TIMESTAMP,
                                 CONSTRAINT fk_local
                                    FOREIGN KEY(local_id)
                                        REFERENCES local(id),
                                 CONSTRAINT fk_disease
                                    FOREIGN KEY(disease_id)
                                        REFERENCES disease(id))''')
                                 

# Insert data into the table
sql_disease = '''
    INSERT INTO disease (name, prevalence, risk_area, agent, contagion, prev_measures, transmissibility, reference_health_units, symptoms)
        VALUES ('Malaria', 20000,'Manaus','Plasmodium','Picada do mosquito ou transfusão de sangue',
        'Uso de mosquiteiros, repelentes e roupas que protejam pernas e bracos',
        '7 a 12 dias','','')
'''

sql_local = '''
    INSERT INTO local (UF, Municipio, IBGE, IBGE7, latitude, longitude, region, population, porte)
           VALUES
           ('RJ', 'Maricá', 330270, 3302700, -22.9354, -42.8246,'Região Sudeste', 127461,'Grande'),
           ('SP', 'Avaí', 350430, 3504305, -22.1514, -49.3356,    'Região Sudeste', 4959, 'Pequeno I')
'''

sql_occur = '''
    INSERT INTO occurrence (local_id, disease_id, amount)
           VALUES
           (1,1,200),
           (2,1,350)
'''

cur.execute(sql_disease)
cur.execute(sql_local)
cur.execute(sql_occur)


conn.commit()

cur.close()
conn.close()
