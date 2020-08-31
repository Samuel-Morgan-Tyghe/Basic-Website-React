import React from 'react'
import p5 from 'p5'


class Sketch  extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

 Sketch = (p) => {

// Where is the circle
//let x, y;
let wiggleamount = 3;
let wiggleamount1;
let wiggleamount1b;
let numBalls = 100;
let balls = [];
let ballx = [];
let bally = [];
let l = 0;
let wS = 1;
let sineW = false;
let triangleW = false;
let toothW = false;
let squareW = false;
let typen;
var cnv;
let colorV;
var selector = 0;





var divWidth = document.getElementById('sketchDimensionsDiv').offsetWidth;
var divHeight = document.getElementById('sketchDimensionsDiv').offsetHeight;


var element = document.getElementById('sketchDimensionsDiv');
var positionInfo = element.getBoundingClientRect();
var divHeight = positionInfo.height;
var divWidth = positionInfo.width;


p.setup = () => {
  colorV = p.color(255, 204, 0);

  cnv = p.createCanvas(p.divWidth, p.windowHeight);
  wiggleamount = p.random(1, 5);
  wiggleamount1 = p.random(1, 5);
  wiggleamount1b = wiggleamount1;
 typen = p.int (p.random(1,5));
  if (typen===1) {sineW = true;}  
  if (typen===2) {triangleW = true;}  
  if (typen===3) {toothW = true;}  
  if (typen===4) {squareW = true;}  


  p.createCanvas(p.windowWidth -20, p.windowHeight);
  // Starts in the middle


  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      p.random(p.int(p.width)),
      p.random(p.int(p.height)),
      wiggleamount, wiggleamount, wiggleamount1, wiggleamount1b,
      (p.random_boolean = Math.random() >= 0.5),
      (p.random_boolean = Math.random() >= 0.5),
      0

    );
  }
}

p.draw = () => {

  balls.forEach(ball => {
    p.noStroke();
    ball.display();
  });

}

p.mouseClicked=()=> {
selector = selector + 1;
  if (selector === 1) {
    colorV = p.color(20,159,157);
  } else if (selector === 2) {
    colorV = p.color(238,243,220);
  } else if (selector === 3) {
    colorV = p.color(233,94,87);
    selector = 0;
  }

}


p.windowResized=()=> {
  if(p.windowWidth)
  p.resizeCanvas (p.windowWidth -20, p.windowHeight);
 
}

class Ball {

  constructor(xin, yin, wiggleamount, wiggleamountb, wiggleamount1, wiggleamount1b, directionup, directionleft, wiggletoggle, ) {
    this.x = xin;
    this.y = yin;
    this.directionup = directionup;
    this.directionleft = directionleft;
    this.wiggleamount = wiggleamount;
    this.wiggleamount1 = wiggleamount1;
    this.wiggletoggle = wiggletoggle;
  }

  display() {


    if (this.y <= 2) {
      this.y = 3;
      this.directionup = false;
      // this.wiggletoggle = 0;

    }
    if (this.y >= p.height) {
      this.directionup = true;
      //  this.wiggletoggle = 0;
      this.y = p.height - 1;
    }
    if (this.x <= 2) {
      this.directionleft = false;
      //   this.wiggletoggle = 0;
      this.x = 3;
    }
    if (this.x >= p.width) {
      this.directionleft = true;
      //  this.wiggletoggle = 0;
      this.x = p.width - 1;
    }


    if (this.directionup) {
      this.y = this.y - this.wiggleamount - (wiggleamount1 / 2);
    } else {
      this.y = this.y + this.wiggleamount + (wiggleamount1 / 2);
    }


    if (this.directionleft) {
      this.x = this.x - wiggleamount1 + (this.wiggleamount / 2);
    } else {
      this.x = this.x + wiggleamount1 - (this.wiggleamount / 2);
    }


    if (sineW) {

      if (this.wiggletoggle === 1) {
        this.wiggleamount = this.wiggleamount - wS;


      }
      if (this.wiggletoggle === 2) {
        this.wiggleamount = this.wiggleamount - wS;

      }

      if (this.wiggletoggle === 3) {
        this.wiggleamount = this.wiggleamount - wS;
      }

      if (this.wiggletoggle === 4) {
        this.wiggleamount = this.wiggleamount + wS;

      }
      if (this.wiggletoggle === 5) {
        this.wiggleamount = this.wiggleamount + wS;
      }
      if (this.wiggletoggle === 6) {
        this.wiggleamount = this.wiggleamount + wS;

        this.wiggletoggle = 0
      }
    }
    if (triangleW === true) {



      if (this.wiggletoggle === 3) {
        this.wiggleamount = this.wiggleamount * -wS;
      }


      if (this.wiggletoggle === 6) {
        this.wiggleamount = this.wiggleamount * -wS;

        this.wiggletoggle = 0
      }
    }

    if (squareW === true) {



      if (this.wiggletoggle === 0) {
          this.wiggleamount = 8;

      }
      if (this.wiggletoggle === 2) {
          this.wiggleamount = 0;


      }
      if (this.wiggletoggle === 12) {
         this.wiggleamount = -8;

      }

      if (this.wiggletoggle === 14) {
         this.wiggleamount = 0;
      }
      
      if (this.wiggletoggle === 24) {
          this.wiggleamount = 8;
        this.wiggletoggle = 0;
      }
    }


    if (toothW === true) {

      if (this.wiggletoggle === 1) {

          this.wiggleamount = 8 ;

      }

      if (this.wiggletoggle === 2) {
          this.wiggleamount = 0;

      }
    

      if (this.wiggletoggle === 8) {
        this.wiggletoggle = 0;
      }
    }


      ballx[l] = this.x;
      bally[l] = this.y;

      l++;
      p.fill(colorV);

      if (l === 1) {
        l = 0;
      }
      for (let i = 0; i < ballx.length; i++) {
        p.ellipse(ballx[i], bally[i], 4, 4)
      }


      // fill(10);
      //   ellipse(this.x, this.y, 7, 7);
    


    this.wiggletoggle++;
  }



}
 


 }
componentDidMount() {
  this.myP5 = new p5(this.Sketch, this.myRef.current)
}

render() {
  return (
    <div ref={this.myRef}>

    </div>
  )
}
}

export default Sketch
