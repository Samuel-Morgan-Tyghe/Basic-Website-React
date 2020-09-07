import React, { Component } from 'react';
import VizSensor from 'react-visibility-sensor';
import HoverVideoPlayer from 'react-hover-video-player';
import {TransitionY} from './TransitionY';
import './App.css';

var classtrans = 'PerspectiveTransition1';

class TransitionV1 extends Component {
  render() {
    return (


      <VizSensor partialVisibility 
      onChange={(isVisible) => {
        if (isVisible)
            TransitionY(classtrans)
            
      }}      >


    <div className="innerVideoContainer v1" >
    <HoverVideoPlayer className='PerspectiveTransition1' videoSrc={require("./Media/PortErin1.mp4")}
   loadingOverlay={
     <div className="loading-spinner-overlay " > </div>
   }/>
    <div className="VtextContainer "><p>Port Erin</p><p>Port Erin</p><p>Port Erin</p><p>Port Erin</p><p>Port Erin</p></div><div className="vBorders "></div>
   </div>
       
      </VizSensor>
    );
  }
}

export default TransitionV1