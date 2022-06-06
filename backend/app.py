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

# @app.route('/admin/update', methods=["POST"])
# def update():
    
#     if request.method == 'POST':
        
        
#         data_update = request.get_json()
#         print(data_update)

#         print(data_update.name)

#         conn = get_db_connection()
#         cur = conn.cursor()


#         cur.execute('SELECT id FROM disease WHERE name = %s',(data_update.name,))
        # cur.execute('INSERT INTO disease (name, prevalence, risk_area, agent, contagion, prev_measures, transmissibility, symptoms, reference_health_units)'
        #             'VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)',
        #             (data_doenca['name'], data_doenca['prev'], data_doenca['area'], data_doenca['agnt'], data_doenca['cont'], data_doenca['mprev'], data_doenca['trans'], data_doenca['apclin'], data_doenca['unref']))
        
        # print("Usuário tentou se logar.")


        # cur.execute('SELECT id FROM disease WHERE name = %s',(data_remove['doenca_removida'],))

        # occ = cur.fetchall()
        # print(occ[0][0])

        # id = occ[0][0]
        # cur.execute('DELETE FROM occurrence WHERE disease_id = %s;', (id,))
        # cur.execute('DELETE FROM disease WHERE id = %s;', (id,))

        # conn.commit()
        # conn.commit()
        # cur.close()
        # conn.close()
        
        # return 'Done!', 200

@app.route('/admin/data-doenca', methods=["GET", "POST"])
def data_doenca():

    if request.method == 'POST':
        data_usuario = request.get_json()
        print((data_usuario[0]))
        print("Usuário postou data doenca.")
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