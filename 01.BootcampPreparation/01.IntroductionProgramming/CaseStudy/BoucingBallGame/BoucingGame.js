var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var width = canvas.width = 800;
var height = canvas.height = 600;

var ball = new Ball(20,20,10,10,'#000',10);
var bar = new Bar(750,550,70,20,"black" );

function loop() {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0,800,600);
    ball.update();
    window.requestAnimationFrame(loop);
}
loop();
