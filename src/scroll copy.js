import React, { useState, useEffect } from "react";
import HoverVideoPlayer from 'react-hover-video-player';
import TransitionV1  from './PortErinVideo.js';
import TransitionV2  from './RadioHeadVideo.js';
import TransitionV3  from './TheBrackishVideo.js';
import TransitionV4  from './NickHarperVideo.js';

import "./App.css";


let elements;
let i;


function Videos() {
  const [innerVideoContainer, VidTrans] = useState("innerVideoContainer");

  const listenScrollEvent = event => {
    let speed = window.scrollY;

    if (window.scrollY > 200) {
      elements = document.getElementsByClassName("mainborder");
      for( i=0; i<elements.length; i++) { 
        elements[i].style.cssText = "transform: translateY(45px);";
      }
    }

     elements = document.getElementsByClassName('play');
    for( i=0; i<elements.length; i++) { 
      elements[i].style.cssText = "transform: translateY("+(speed/8 -200)+"px);";
    }

    elements = document.getElementsByClassName('gifRecording');
    for( i=0; i<elements.length; i++) { 
      elements[i].style.cssText = "transform: translateY("+(speed/5 -100)+"px);";
    }

    elements = document.getElementsByClassName('PlayBox');
    for( i=0; i<elements.length; i++) { 
      elements[i].style.cssText = "transform: translateX(-"+(speed/10 -90)+"px);";
    }

    
    
  


if (window.scrollY > 2000) {

  let speed = window.scrollY;
    elements = document.getElementsByClassName("v1");
    for( i=0; i<elements.length; i++) { 
      elements[i].style.cssText = "transform: translateY(-"+((-400)+(speed/10))+"px);";
    }
    elements = document.getElementsByClassName("v2");
    for( i=0; i<elements.length; i++) { 
      elements[i].style.cssText = "transform: translateY(-"+((-700)+(speed/5))+"px);";
    }
    elements = document.getElementsByClassName("v3");
    for( i=0; i<elements.length; i++) { 
      elements[i].style.cssText = "transform: translateY(-"+((-800)+(speed/5.5))+"px);";
    }
    elements = document.getElementsByClassName("v4");
    for( i=0; i<elements.length; i++) { 
      elements[i].style.cssText = "transform: translateY(-"+((-400)+(speed/12))+"px);";
    }
  }




  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return(
<div>
<div className="videoContainer" >

<TransitionV1  />
<TransitionV2  />
</div>
<div className="videoContainer" >

<TransitionV3  />
<TransitionV4  />

</div>
</div>
  )
}

export default Videos;
