from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/LightGray")
def LightGray():
    return render_template("LightGray.html")
@app.route("/Gray")
def Gray():
    return render_template("Gray.html")

@app.route("/DarkGray")
def DarkGray():
    return render_template("DarkGray.html")

@app.route("/DarkerGray")
def DarkerGray():
    return render_template("DarkerGray.html")

@app.route("/DarkestGray")
def DarkestGray():
    return render_template("DarkestGray.html")
if __name__ == "__main__":
    app.run(debug=True, use_reloader=True)