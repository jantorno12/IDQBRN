from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


documento_enviado = {
    'total_doencas_mapeadas': 12,
    'doenca_escolhida': 'Dengue',
    'numero_casos_totais': 100000,
    'estado_maior_ocorrencia': 'Amazonas',
    'lista_marcadores_mapa': [[-16.7573, -49.4412], [-18.4831, -47.3916], [-16.197, -48.7057]]
}

@app.route('/admin/dashboard', methods=["GET", "POST"])
def dashboard():

    if request.method == 'POST':
        data_usuario = request.get_json()
        print(data_usuario)
        print("Usuário tentou se logar.")
        return 'Done!', 200
    elif request.method == 'GET':
        return documento_enviado



if __name__ == "__main__":
    app.run()