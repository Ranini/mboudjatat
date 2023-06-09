from flask import Flask, render_template, request
import datetime

app = Flask(__name__)

@app.route('/')
def index():
    now = datetime.datetime.now()
    timeString = now.strftime("%d/%m/%y %H:%M")
    templateData = {
        'time': timeString
    }
    return render_template('index.html', **templateData)

@app.route('/boudjatat')
def boudjatat():
    return render_template('boudjatat.html')

@app.route('/hello', methods=['GET', 'POST'])
def hello():
    if request.method == 'POST':
        name = request.form['name']
        return render_template('page.html', name=name)
    else:
        return render_template('page.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
