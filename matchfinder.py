from flask import Flask, flash, redirect, render_template, request, session, abort, url_for

app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Then get the data from the form
        sport = request.form['sportsInput']

        location = request.form['locationInput']

        return redirect((url_for('rooms', sport=sport, location=location)))

    else:
        return render_template(
                'test.html')


@app.route("/rooms/<string:sport>/<string:location>/")
def rooms(sport,location):
    return render_template(
        'rooms.html')

@app.route("/payment", methods=['GET', 'POST'])
def payment():
    if request.method == 'POST':
        # Then get the data from the form
        stripeToken = request.form['stripeToken']

        tokenType = request.form['stripeTokenType']

        email = request.form['stripeEmail']

        return redirect((url_for('thanks', stripeToken=stripeToken, tokenType=tokenType, email=email)))

    else:
        return render_template(
                'testbed_pay.html')

@app.route("/thanks/<string:stripeToken>/<string:tokenType>/<string:email>/")
def thanks(stripeToken, tokenType, email):
    return render_template(
        'thanks.html')

@app.route("/table")
def table():
    return render_template(
        'table.html')
# @app.route("/rooms/<string:sport>/<string:location>/")
# def rooms(sport, location):
#     return render_template(
#             'rooms.html', sport=sport, location=location)

if __name__ == "__main__":
    app.run()