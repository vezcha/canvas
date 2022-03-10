window.onload = () => {
    console.log('started');
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");


    setInterval(draw, 1000 / 30, ctx); //30 fps
};

var frame = 0;
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';

function draw(ctx) {
    frame++;
    drawBG(ctx);
    drawCharacter(ctx);
}

function drawBG(ctx) {
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(0, 0, 800, 800);
}

var charCode;
var random = [];
function drawCharacter(ctx) {
    ctx.font = "20px Georgia";
    ctx.fillStyle = 'rgb(255,0,0)';

    if (frame == 1) {
        for (var i = 0; i < 50; i++) {
            random[i] = Math.random() * 1000;
        }
    }

    if (frame % 2 == 0) {
        charCode = Math.random() * 62;
    }

    for (var j = 0; j < 50; j++) { //columns
        for (var i = 0; i < 50; i++) {//rows
            ctx.fillStyle = 'rgba(255,0,0,' + (1 - (0.02 * i)) + ')';
            if (i == 0) ctx.fillStyle = 'rgba(255,200,200,0.7)';
            ctx.fillText(characters.charAt((charCode + random[j] + 6 * i) % 62), 20 * j, (frame * 6 + random[j]) % 1500 - (10 * i));
            ctx.fillText(characters.charAt((charCode + random[j] + 3 * i) % 62), 20 * j, (frame * 9 + random[j] + 500) % 1500 - (10 * i));
        };
    }



}