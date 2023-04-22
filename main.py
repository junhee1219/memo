from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app)

@app.route('/api/login', methods=['POST'])
def login():

    print(request)
    username = request.form['username']
    password = request.form['password']

    if username == "test" and password == "test":
        response = {'result': "SUCCESS", 'message': '로그인에 성공했습니다.'}
    else :
        response = {'result': "FAIL", 'message': '로그인에 실패했습니다.'}    
    
    # 여기에 로그인 로직을 구현합니다.
    # 성공적으로 로그인을 했다면, 아래와 같이 JSON 응답을 반환합니다.
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True, port=9090)
