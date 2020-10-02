import React, { Component } from 'react';
import VizSensor from 'react-visibility-sensor';
import HoverVideoPlayer from 'react-hover-video-player';
import {TransitionY} from './TransitionY';
import './App.css';

var classtrans = 'PerspectiveTransition4';

class TransitionV4 extends Component {
  render() {
    return (


      <VizSensor partialVisibility 
      onChange={(isVisible) => {
        if (isVisible)
            TransitionY(classtrans)
      }}      >


    <div className="innerVideoContainer v4" >
    <HoverVideoPlayer className='PerspectiveTransition4' videoSrc={require("./Media/NickHarper.mp4")}
   loadingOverlay={
     <div className="loading-spinner-overlay " > </div>
   }/>
    <div className="VtextContainer "><p>Nick Harper</p><p>Nick Harper</p><p>Nick Harper</p></div><div className="vBorders "></div>
   </div>
       
      </VizSensor>
    );
  }
}

export default TransitionV4