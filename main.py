from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app)

@app.route('/api/login', methods=['POST'])
def login():
    CODE = request.form['CODE']
    response = {'result': CODE, 'message': CODE}
    



    return jsonify(response)

if __name__ == '__main__':
     app.run(host='0.0.0.0', port=9090, debug=False)
