from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app)

@app.route('/api/login', methods=['POST'])
def login():

    print(request)
    CODE = request.form['CODE']
    response = {'result': CODE, 'message': CODE}
    
    # 여기에 로그인 로직을 구현합니다.
    # 성공적으로 로그인을 했다면, 아래와 같이 JSON 응답을 반환합니다.
    return jsonify(response)

if __name__ == '__main__':
     app.run(host='0.0.0.0', port=5000, debug=False)
