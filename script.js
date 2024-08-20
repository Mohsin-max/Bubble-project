var rn;

function bubblemaker() {
    
    var clutter="";
    for (let i = 0; i < 176; i++) {
        
        rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector(".pbtm").innerHTML = clutter
};

function hit() {
    document.querySelector("#hitval").innerHTML = rn;
};


var time = 30;
function runtimer() {

    var tt = setInterval(function () {

        if (time > 0) {

            time--
            document.querySelector("#timeval").innerHTML = time;

        } else {

            clearInterval(tt);
            document.querySelector(".box").innerHTML="<h1>GAME OVER</h1>";
            document.querySelector(".total").innerHTML = `Total Score: ${score}`;
        }


    }, 1000);

};

var score = 0;
function increasScore() {

    score += 10
    document.querySelector("#scoreval").innerHTML = score;
}


function clickBubble() {
    document.querySelector(".pbtm").addEventListener("click", function (dets) {

        var clickednum = Number(dets.target.innerHTML);

        if (clickednum == rn) {

            bubblemaker();
            increasScore();
            hit();
        }
    });

};

bubblemaker();
hit();
runtimer();
clickBubble();

