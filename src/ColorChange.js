import './App.css';

var c1 = "rgb(230,76,67)";
var c2 = "rgb(235,109,127)";
var c3 = "rgb(234,176,0)";
var c4 = "rgb(1,143,152)";
var c5 ;
var elements;
var i;

export function change_css(color1,color2,color3,color4) {
c5=c1;
c1=c2;
c2=c3;
c3=c4;
c4=c5;

  elements = document.getElementsByClassName("color1");
for( i=0; i<elements.length; i++) { 
elements[i].style.backgroundColor=c1;
}

elements = document.getElementsByClassName("color2");
for( i=0; i<elements.length; i++) { 
elements[i].style.color=c2;
}

elements = document.getElementsByClassName("color3");
for( i=0; i<elements.length; i++) { 
elements[i].style.color=c3;
}

elements = document.getElementsByClassName("color4");
for( i=0; i<elements.length; i++) { 
elements[i].style.backgroundColor=c4;
}
}

