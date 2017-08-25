var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//c.fillStyle = "red";
//c.fillRect(100, 100, 100, 100);
//console.log(canvas);

//line

//c.beginPath();
//c.moveTo(50, 300);
//c.lineTo(300, 100);
//c.lineTo(400, 300);
//c.strokeStyle = "blue";
//c.stroke();

//arc

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
//var minRadius = 2;

var colorArray = [
    '#22202B',
    '#383745',
    '#7D6962',
    '#0F6177',
    '#1BBC9B',
]

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log('hey');
})

console.log('why!');

window.addEventListener('resize', function() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    console.log('hmmm');
})

console.log('noooo');

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {


        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerWidth || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x+= this.dx;

        this.y+= this.dy;

        //interativity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 1;
                }

        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();


    }

    console.log('draw');
}

var circleArray = [];


    for (var i = 0; i < 700 ; i++) {
    var radius = Math.random() * 7 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);

    circleArray.push(new Circle(x, y, dx, dy, radius));

    }



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length ; i++) {
        circleArray[i].update();
    }
}

animate();
