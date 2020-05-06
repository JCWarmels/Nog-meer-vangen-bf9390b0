function gooiButton() {
    bal.gooi();
}

function vangButton() {
    bal.vang();
}

function resetButton() {
    bal.reset();
}

var bal = {
    canvasBal: constructBal(),
    balPositie: "links",
    gooi: function () {
        if (this.balPositie !== "links") {
            throw TypeError("De bal is al gegooid!")
        }
        this.draw(300, 50);
        this.balPositie = "midden";
    },

    vang: function () {
        if (this.balPositie !== "midden") {
            throw Error("De bal is nog niet gegooid!")
        }
        this.draw(500, 250);
        this.balPositie = "rechts";
    },

    reset: function () {
        this.draw(100, 250);
        this.balPositie = "links";
    },

    draw: function (x, y) {
        this.canvasBal.clearRect(0, 0, 600, 300);
        this.canvasBal.beginPath();
        this.canvasBal.arc(x, y, 50, 0, 2 * Math.PI);
        this.canvasBal.closePath();
        this.canvasBal.fill();
    }
}

function constructBal() {
    let bal = document.getElementById("bal").getContext("2d");
    bal.fillStyle = "red";
    bal.beginPath();
    bal.arc(100, 250, 50, 0, 2 * Math.PI);
    bal.closePath();
    bal.fill();
    return bal
}

function desperate(expression) 
{
    show = document.getElementById('ErrorShow');
    try {
        switch(expression) {
            case 'throw':
                show.innerHTML = "";
                gooiButton();
                break;
            case 'reset':
                show.innerHTML = "";
                resetButton();
                break;
            case 'catch':
                show.innerHTML = "";
                vangButton();
                break;
          }
    } catch (error) {
        show.innerHTML = error.message + "<br>" + error.name;
    }
}

