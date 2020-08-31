import './App.css';
let elements;
let i;

export function tosquare(dot,addInfo){
    elements = document.getElementsByClassName("dot");
  for( i=0; i<elements.length; i++) { 
    elements[i].style.cssText = 
    "  justify-content: center;animation-name:stretch; animation-duration: 1.5s; animation-delay: 0;animation-fill-mode: forwards;animation-play-state: running;"
  } 
  
  elements = document.getElementsByClassName("addInfo");
  for( i=0; i<elements.length; i++) { 
    elements[i].style.cssText =
    "display:flex;animation-name:fadein;animation-duration: 1.5s; animation-delay: 0;animation-fill-mode: forwards;animation-play-state: running;"
  } 
  
  }