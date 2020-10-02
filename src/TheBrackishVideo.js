import React, { Component } from 'react';
import VizSensor from 'react-visibility-sensor';
import HoverVideoPlayer from 'react-hover-video-player';
import {TransitionY} from './TransitionY';
import './App.css';

var classtrans = 'PerspectiveTransition3';

class TransitionV3 extends Component {
  render() {
    return (


      <VizSensor partialVisibility 
      onChange={(isVisible) => {
        if (isVisible)
            TransitionY(classtrans)
      }}      >


    <div className="innerVideoContainer v3" >
    <HoverVideoPlayer className='PerspectiveTransition3' videoSrc={require("./Media/TheBrackish.mp4")}
   loadingOverlay={
     <div className="loading-spinner-overlay " > </div>
   }/>
    <div className="VtextContainer "><p>The Brackish</p><p>The Brackish</p><p>The Brackish</p><p>The Brackish</p><p>The Brackish</p></div><div className="vBorders "></div>
   </div>
       
      </VizSensor>
    );
  }
}

export default TransitionV3