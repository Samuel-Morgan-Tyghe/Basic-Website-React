import React, { Component } from 'react';
import VizSensor from 'react-visibility-sensor';
import HoverVideoPlayer from 'react-hover-video-player';
import {TransitionY} from './TransitionY';
import './App.css';

var classtrans = 'PerspectiveTransition2';

class TransitionV2 extends Component {
  render() {
    return (


      <VizSensor partialVisibility 
      onChange={(isVisible) => {
        if (isVisible)
            TransitionY(classtrans)
      }}      >


    <div className="innerVideoContainer v2" >
    <HoverVideoPlayer className='PerspectiveTransition2' videoSrc={require("./Media/Radiohead.mp4")}
   loadingOverlay={
     <div className="loading-spinner-overlay " > </div>
   }/>
    <div className="VtextContainer "><p>Radiohead</p><p>Radiohead</p><p>Radiohead</p></div><div className="vBorders "></div>
   </div>
       
      </VizSensor>
    );
  }
}

export default TransitionV2