import React from 'react';
import './App.css';
import {findMore} from './findMore';
import {tosquare} from './toSquareExpand';
import Sketch from "./Sketch"
import {change_css} from './ColorChange';
import './Cursor.gif'
import Videos from './scroll copy'
import ContactForm from './ContactForm';




function LandingPage() {


  return (



<div  onClick={change_css} style={{ cursor: '/cursor.cur' }}>


<div className="wrapper color1 color2">

<Sketch  />




<div className="page1" id ="page1" >
      <h1 className="title color3" id="title">SIDE ROOM<br></br>RECORDINGS</h1>

       <h1 className="title1" id="side">SIDE ROOM<br></br>RECORDINGS </h1> 
</div>

<div className="borders color1"></div>


<div className="page2"id ="page2 color1" >

<div className="playContainer">
<img className="gifRecording" src={require("./Media/RecordingGif.gif")} /> 
<div className="PlayBox"  >
<div className="playButton color4">
<p className ="play">PLAY</p>
</div>
</div>
</div>

</div>




<div className="borders color1"></div>


<div className="page3 color1" id ="page3">

         <div className="aboutGifContainer" ><img className="aboutGif" src={require("./Media/Studio.gif")} ></img></div>
         <div className="aboutpcontainer">
      <div className="aboutP">

<h4>Side Room Recordings is a portable recording studio founded by Jacob Myles Tyghe and situated in centre of Bath,
 Somerset, England, near its counter-part Bristol.</h4>

<h4 className="showMore">Portable Studios give us here at Side Room Recordings a chance to record you in your natural habitat</h4>

<h4 className="showMore"> The possibilities of where to record are endless, use the contact form at the end of the page to discuss any ideas you have</h4>
<a  className="showMore" href="About" target="_self">The full Story</a>
      </div>

  <div className="button_slide slide_left" onClick={findMore}>Find Out More</div>

</div>
</div>

<div className="borders color1"></div>






<div className="page4 color1" id ="page4" >
<h1>Projects</h1>



<Videos />






<a className='color2' id="MPLink" href="Projects" target="_self">More Projects</a>

</div>






<div className="borders"></div>

<div className="page5 color1"id ="page5" >
            <h2>Packages</h2>

<div className="dotcontainer">

<div className="dotInnerContainer">

<div className="dot color4" onClick={tosquare} >
  <h4>£50</h4> <h4>1 x Track</h4><h4>Solo</h4>
  <p className="addInfo">One track any instrument within a 15mile radius of bath</p>
</div>
<div className="dot color4" onClick={tosquare} >
  <h4>£70</h4> <h4>1 x Track</h4> <h4>Duo </h4> 
  <p className="addInfo">Two track any instrument within a 15mile radius of bath</p>
</div>

</div>

<div className="dotInnerContainer">

<div className="dot color4" onClick={tosquare} >
  <h4>£100</h4> <h4>1 x Song </h4> <h4>Full</h4> 
  <p className="addInfo">One Song any number of instrument within a 15mile radius of bath</p>
  </div>
<div className="dot color4" onClick={tosquare} >
  <h4>£300</h4> <h4>1 x Album</h4> <h4>Info</h4> 
  <p className="addInfo">Ten Songs any number of instrument within a 15mile radius of bath</p>
  </div>

</div>

</div>
<div className="border5"></div>

</div >



<div className="page6 color1 color2">
<div className="container color4 color2"> 

<ContactForm />


</div>
</div>
         </div >


        
         </div>



  );
}



export default LandingPage;
