# from flask import Flask, request
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)


# documento_enviado = {
#     'total_doencas_mapeadas': 12,
#     'doenca_escolhida': 'Dengue',
#     'numero_casos_totais': 100000,
#     'estado_maior_ocorrencia': 'Amazonas',
#     'lista_marcadores_mapa': [[-16.7573, -49.4412], [-18.4831, -47.3916], [-16.197, -48.7057]]
# }

# @app.route('/admin/dashboard', methods=["GET", "POST"])
# def dashboard():

#     if request.method == 'POST':
#         data_usuario = request.get_json()
#         print(data_usuario)
#         print("Usuário tentou se logar.")
#         return 'Done!', 200
#     elif request.method == 'GET':
#         return documento_enviado



# if __name__ == "__main__":
#     app.run()



import os
import psycopg2
from flask import Flask, render_template, request, url_for, redirect

app = Flask(__name__)

def get_db_connection():
    conn = psycopg2.connect(host='localhost',
                            database='flask_db',
                            user=os.environ['DB_USERNAME'],
                            password=os.environ['DB_PASSWORD'])
    return conn


@app.route('/')
def index():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM occurrence;')
    occ = cur.fetchall()
    cur.close()
    conn.close()
    return render_template('index.html', occ=occ)

@app.route('/create/', methods=('GET', 'POST'))
def create():
    if request.method == 'POST':
        title = request.form['id_local']
        author = request.form['id_disease']
        pages_num = int(request.form['n_cases'])
        #review = request.form['review']

        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute('INSERT INTO occurrence (local_id, disease_id, amount)'
                    'VALUES (%s, %s, %s)',
                    (title, author, pages_num))
        conn.commit()
        cur.close()
        conn.close()
        return redirect(url_for('index'))
    return render_template('create.html')