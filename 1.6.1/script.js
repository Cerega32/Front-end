var canvas = document.getElementById("sandbox"),
context = canvas.getContext("2d"),
circle, line, linear, thor, square;



function drawWath()  {
    context.clearRect(0, 0, 300, 300);


    circle = new Path2D();
    circle.arc(50, 50, 50, 0, 2 * Math.PI);

    context.stroke(circle);




    var R = 100/2;

    for(var i = 0; i < 60; ++i) {

        var angle = (i/60) * (2 * Math.PI);
        var pX = Math.cos(angle) * R;
        var pY = -Math.sin(angle) * R;
        var qX = 0.9 * pX;
        var qY= 0.9 * pY;

        pX += R; pY += R;
        qX += R; qY+= R;
    
        line = new Path2D();
        line.moveTo(pX, pY);
        line.lineTo(qX, qY);  
        context.strokeStyle = "blue";      
        context.stroke(line);

    }

    var date = new Date ();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    console.log(hours, minutes, seconds);

    var secondsAngle = (seconds / 60) * (2 * Math.PI);
    var minutesAngle = (minutes / 60) * (2 * Math.PI);
    var hoursAngle = ((hours % 12) / 12) * (2 * Math.PI);

    secondsAngle = Math.PI / 2 - secondsAngle;
    minutesAngle = Math.PI / 2 - minutesAngle;
    hoursAngle = Math.PI / 2 - hoursAngle;


    var dX = Math.cos(secondsAngle);
    var dY = - Math.sin(secondsAngle);

    var eX = Math.cos(minutesAngle);
    var eY = - Math.sin(minutesAngle);

    var lX = Math.cos(hoursAngle);
    var lY = - Math.sin(hoursAngle);

    line = new Path2D();
    line.moveTo(50, 50);
    line.lineTo(dX, dY);

    context.lineWidth = 2;


    context.fillStyle = "green";
    context.strokeStyle = "red";

    context.stroke(line);

    linear = new Path2D();

    linear.moveTo(50, 50);
    linear.lineTo(eX, eY);

    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.stroke(linear);

    thor = new Path2D();

    thor.moveTo(50, 50);
    thor.lineTo(lX, lY);

    context.lineWidth = 3;
    context.strokeStyle = "green";
    context.stroke(thor);


setTimeout(drawWath, 1000);
}

drawWath();