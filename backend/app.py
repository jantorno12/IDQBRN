from flask import Flask, request
from flask_cors import CORS
import os
import psycopg2
from flask import Flask, render_template, request, url_for, redirect

app = Flask(__name__)
CORS(app)

def get_db_connection():
    conn = psycopg2.connect(host='localhost',
                            database='flask_db',
                            user=os.environ['DB_USERNAME'],
                            password=os.environ['DB_PASSWORD'])
    return conn

documento_enviado = {
    'total_doencas_mapeadas': 12,
    'doenca_escolhida': 'Dengue',
    'numero_casos_totais': 100000,
    'estado_maior_ocorrencia': 'Amazonas',
    'lista_marcadores_mapa': [[-16.7573, -49.4412], [-18.4831, -47.3916], [-16.197, -48.7057]]
}

@app.route('/admin/dashboard', methods=["GET", "POST"])
def dashboard():

    if request.method == 'POST' :
        data_usuario = request.get_json()
        print(data_usuario)
        print("Usuário tentou se logar.")
        return 'Done!', 200
    elif request.method == 'GET':
        return documento_enviado

@app.route('/admin/user-page', methods=["GET", "POST"])
def user_page():

    if request.method == 'POST' :
        data_doenca = request.get_json()
        print(data_doenca)

        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('INSERT INTO disease (name, prevalence, risk_area, agent, contagion, prev_measures, transmissibility, symptoms, reference_health_units)'
                    'VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)',
                    (data_doenca['name'], data_doenca['prev'], data_doenca['area'], data_doenca['agnt'], data_doenca['cont'], data_doenca['mprev'], data_doenca['trans'], data_doenca['apclin'], data_doenca['unref']))
        conn.commit()
        cur.close()
        conn.close()

        print("Usuário inputou data.")
        return 'Done!', 200

@app.route('/admin/data-dis', methods=["GET"])
def data_dis():

    if request.method == 'GET' :
        
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('SELECT name, prevalence, risk_area, agent, contagion, prev_measures, transmissibility, symptoms, reference_health_units  FROM disease;')
        occ = cur.fetchall()
        print(occ)
        

        conn.commit()
        cur.close()
        conn.close()

        banco = {}

        for i in range(len(occ)):
            banco[i] = occ[i]


        return banco

@app.route('/admin/delete', methods=["POST"])
def delete():
    
    if request.method == 'POST':
        
        
        data_remove = request.get_json()
        print(data_remove['doenca_removida'])
        conn = get_db_connection()
        cur = conn.cursor()
        
        print("Usuário tentou se logar.")
        cur.execute('SELECT id FROM disease WHERE name = %s',(data_remove['doenca_removida'],))

        occ = cur.fetchall()
        print(occ[0][0])

        id = occ[0][0]
        cur.execute('DELETE FROM occurrence WHERE disease_id = %s;', (id,))
        cur.execute('DELETE FROM disease WHERE id = %s;', (id,))

        conn.commit()
        
        return 'Done!', 200

@app.route('/admin/update', methods=["POST"])
def update():
    
    if request.method == 'POST':
        
        
        data_update = request.get_json()
        print(data_update)

        

        conn = get_db_connection()
        cur = conn.cursor()


        cur.execute('SELECT id FROM disease WHERE name = %s',(data_update["name"],))


        occ = cur.fetchall()
        print(occ[0][0])

        cur.execute('UPDATE disease SET prevalence= %s, risk_area= %s, agent = %s, contagion= %s, prev_measures = %s, transmissibility= %s, symptoms = %s, reference_health_units = %s'
                    'WHERE name = %s',(data_update['prev'], data_update['area'], data_update['agnt'], data_update['cont'], data_update['mprev'], data_update['trans'], data_update['apclin'], data_update['unref'], data_update['name'], ))
        # cur.execute('INSERT INTO disease (name, prevalence, risk_area, agent, contagion, prev_measures, transmissibility, symptoms, reference_health_units)'
        #             'VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)',
        #             (data_update['name'], data_doenca['prev'], data_doenca['area'], data_doenca['agnt'], data_doenca['cont'], data_doenca['mprev'], data_doenca['trans'], data_doenca['apclin'], data_doenca['unref']))
        
        # print("Usuário tentou se logar.")


        # cur.execute('SELECT id FROM disease WHERE name = %s',(data_remove['doenca_removida'],))

        # occ = cur.fetchall()
        # print(occ[0][0])

        # id = occ[0][0]
        # cur.execute('DELETE FROM occurrence WHERE disease_id = %s;', (id,))
        # cur.execute('DELETE FROM disease WHERE id = %s;', (id,))

        # conn.commit()
        conn.commit()
        cur.close()
        conn.close()
        
        return 'Done!', 200

@app.route('/admin/data-doenca', methods=["GET", "POST"])
def data_doenca():

    if request.method == 'POST':
        data_usuario = request.get_json()
        print(data_usuario[0])
        print("Usuário postou data doenca.")

        # Insere dados na tabela locais

        conn = get_db_connection()
        cur = conn.cursor()
        for i in range(len(data_usuario)):
            cur.execute('SELECT id FROM local WHERE Municipio = %s',(data_usuario[i]['Municipio'],))
            occ = cur.fetchall()
            if(len(occ)==0):
                cur.execute('INSERT INTO local (UF, Municipio, IBGE, IBGE7, latitude, longitude, region, population, porte)'
                            'VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)',
                            (data_usuario[i]['UF'], data_usuario[i]['Municipio'], data_usuario[i]['IBGE'], data_usuario[i]['IBGE7'], data_usuario[i]['latitude'], data_usuario[i]['longitude'], data_usuario[i]['Região'], data_usuario[i]['População 2010'], data_usuario[i]['Porte'],))
            else:
                cur.execute('UPDATE local SET IBGE= %s, IBGE7= %s, population= %s, porte= %s'
                    'WHERE id = %s',(data_usuario[i]['IBGE'], data_usuario[i]['IBGE7'] , data_usuario[i]['População 2010'], data_usuario[i]['Porte'], occ[0][0],))

        for i in range(len(data_usuario)):

            # pega o id do municipio
            cur.execute('SELECT id FROM local WHERE Municipio = %s',(data_usuario[i]['Municipio'],))
            occ = cur.fetchall()
            print(occ[0][0])
            id_local = occ[0][0]

            # confere se a doença esta no banco, e se tiver, pega o id dela

            list_keys = list(data_usuario[i].keys())
            print(list_keys)
            list_diseases = []
            for j in range(list_keys.index('Porte')+1,len(list_keys),1):
                list_diseases.append(list_keys[j])

                amount = data_usuario[i][list_keys[j]]

                cur.execute('SELECT id FROM disease WHERE name = %s',(list_keys[j],))
                occ = cur.fetchall()
                
                

                if(len(occ)!=0 and amount!= '0'):
                    print(occ)
                    id_disease = occ[0][0]
                    cur.execute('SELECT id FROM occurrence WHERE disease_id = %s and local_id = %s',(id_disease, id_local,))
                    occ = cur.fetchall()
                    if(len(occ)==0):
                        cur.execute('INSERT INTO occurrence (local_id, disease_id, amount)'
                            'VALUES (%s, %s, %s)',
                            (id_local, id_disease, amount,))
                    else:
                        cur.execute('UPDATE occurrence SET amount= %s'
                            'WHERE local_id = %s and disease_id = %s',(amount, id_local, id_disease,))



        conn.commit()
        cur.close()
        conn.close()
        return 'Done!', 200


        # Insere dados na tabela ocorrencia
        # conn = get_db_connection()
        # cur = conn.cursor()
        # for i in range(len(data_usuario)):

        #     cur.execute('SELECT id FROM local WHERE Municipio = %s',(data_usuario[i]['Municipio'],))

        #     occ = cur.fetchall()
        #     print(occ[0][0])

        #     id_local = occ[0][0]

        #     cur.execute('SELECT disease_id FROM occurrences WHERE local_id = %s',(id_local,))
        #     cur.execute('DELETE FROM local WHERE id = %s;', (id,))
        #     cur.execute('DELETE FROM disease WHERE id = %s;', (id,))

        # conn.commit()
        # cur.close()
        # conn.close()


        return 'Done!', 200


if __name__ == "__main__":
    app.run()



# import os
# import psycopg2
# from flask import Flask, render_template, request, url_for, redirect

# app = Flask(__name__)

# def get_db_connection():
#     conn = psycopg2.connect(host='localhost',
#                             database='flask_db',
#                             user=os.environ['DB_USERNAME'],
#                             password=os.environ['DB_PASSWORD'])
#     return conn


# @app.route('/')
# def index():
#     conn = get_db_connection()
#     cur = conn.cursor()
#     cur.execute('SELECT * FROM occurrence;')
#     occ = cur.fetchall()
#     cur.close()
#     conn.close()
#     return render_template('index.html', occ=occ)

# @app.route('/admin/dashboard', methods=('GET', 'POST'))
# def create():
#     if request.method == 'POST':
#         title = request.form['id_local']
#         author = request.form['id_disease']
#         pages_num = int(request.form['n_cases'])
#         #review = request.form['review']

#         conn = get_db_connection()
#         cur = conn.cursor()
#         cur.execute('INSERT INTO occurrence (local_id, disease_id, amount)'
#                     'VALUES (%s, %s, %s)',
#                     (title, author, pages_num))
#         conn.commit()
#         cur.close()
#         conn.close()
#         return redirect(url_for('index'))
#     return render_template('create.html')