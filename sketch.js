var radius = 70;
var numerator;
var numerator2;
var denominator;
var denominator2;
var setDraw = 0;
var angleOriginal;
var angleNew;
var angleLine;
var angleOriginal2;
var angleNew2;
var angleLine2;

function drawFraction() {
    numerator = document.fraction1.numerator1.value;
    numerator2 = document.fraction2.numerator2.value;
    denominator = document.fraction1.denominator1.value;
    denominator2 = document.fraction2.denominator2.value;
    angleOriginal = 360 / denominator;
    angleNew = 0;
    angleOriginal2 = 360 / denominator2;
    angleNew2 = 0;
    setDraw = 1;
}


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(200);
}

function draw() {
  if (setDraw == 1) {
      noFill();
      translate(100,200);
      stroke(0);
        for (n = 0; n < numerator; n++) {
            for (l = 0; l < angleOriginal; l++) {
                stroke(255,0,0,50);
                line(0, 0, ((radius*(sin(angleLine)))), ((radius*(cos(angleLine)))));
                angleLine += 1;
            }
        }
    for (i = 0; i <= angleOriginal; i++) {
        stroke(0);
        line(0, 0, ((radius*(sin(angleNew)))), ((radius*(cos(angleNew)))));
        angleNew = angleOriginal * (i + 2);
        angleLine = angleNew;
        circle(0, 0, 2 * radius);
    }
  translate(200,0);
  stroke(0);
  for (n = 0; n < numerator2; n++) {
      for (l = 0; l < angleOriginal2; l++) {
          stroke(0,0,255,50);
          line(0, 0, ((radius*(sin(angleLine2)))), ((radius*(cos(angleLine2)))));
          angleLine2 += 1;
      }
    }
    for (i = 0; i <= angleOriginal2; i++) {
        stroke(0);
        line(0, 0, ((radius*(sin(angleNew2)))), ((radius*(cos(angleNew2)))));
        angleNew2 = angleOriginal2 * (i + 2);
        angleLine2 = angleNew2;
        circle(0, 0, 2 * radius);
        }
    }
}
