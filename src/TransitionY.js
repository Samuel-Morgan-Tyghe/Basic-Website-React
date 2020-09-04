import './App.css';



let elements;
let i;

export function TransitionY (classtrans){


    elements = document.getElementsByClassName(classtrans);
    for( i=0; i<elements.length; i++) { 
      elements[i].style.cssText = 
      "  visibility: visible;  transition-delay: 0s; animation-name:TrasitionY;  transition: transform 1.8s; transform-style: preserve-3d;    backface-visibility: hidden; animation-duration: 1.0s; animation-fill-mode: forwards;animation-play-state: running;animation-timing-function: ease-in;transform-origin: 0 0;";
    } 

  
  
  
  }