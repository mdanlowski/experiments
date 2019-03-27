from flask import Flask
from flask import request

app = Flask(__name__)

@app.route('/exr')
def req_info():
	return f'request method: {request.method} url: {request.url} headers: {request.headers}'

@app.route('/')
def hello():
    return 'Halo Janusz!'


if __name__ == '__main__':
    app.run(debug=True)