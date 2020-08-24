import React from 'react';
import './App.css';
import {draw} from './Sketch';
import {findMore} from './findMore';
import {tosquare} from './toSquareExpand';
import Sketch from "./Sketch"

function LandingPage() {


  return (


<div>

<Sketch id="defaultCanvas0" />

<div className="wrapper color1 color2" >






<div className="page1" id ="page1" >


<div className="border0" ></div>



      <h1 className="title color3" id="title">SIDE ROOM<br></br>RECORDINGS</h1>

       <h1 className="title1" id="side">SIDE ROOM<br></br>RECORDINGS </h1> 

</div>

<div className="page2"id ="page2 color1" >

<div className="gifRecordingd" >
<iframe className="gifRecording img" src="https://giphy.com/embed/xTk9ZLg70jvMTasphu" frameBorder="0"  width="480vw" height="270vw"  >

</iframe>
</div>

<div className="PlayBox"  >
<div className="playButton color4">
<span  ></span>
<p className ="play"> PLAY  </p>
</div>
</div>
</div>
<div className="borders color1"></div>

<div className="page3 color1" id ="page3">

      <div className="aboutDiv">
         <div className="aboutGifContainer" ><iframe className="aboutGif" src="https://gifer.com/embed/1fmB" frameBorder="0" allowFullScreen></iframe></div>
         <div className="aboutpcontainer">
      <p className="aboutP">

<h4>Side Room Recordings is a portable recording studio founded by Jacob Myles Tyghe and situated in centre of Bath,
 Somerset, England, near its counter-part Bristol.</h4>

<h4 className="showMore">Portable Studios give us here at Side Room Recordings a chance to record you in your natural habitat</h4>

<h4 className="showMore"> The possibilities of where to record are endless, use the contact form at the end of the page to discuss any ideas you have</h4>
<a  className="showMore" href="About" target="_self">The full Story</a>
      </p>

  <div className="button_slide slide_left" onClick={findMore}>Find Out More</div>

</div>
      </div>
</div>

<div className="borders color1"></div>


<div className="page4 color1" id ="page4" >
      <div className="projectsDiv">

         <h1>Projects</h1>
         <div className= "PVideos">
         <iframe className= "PVideo img" width="560" height="315" src="https://www.youtube.com/embed/dT3501_Zhes" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <iframe className= "PVideo img" width="560" height="315" src="https://www.youtube.com/embed/yI2oS2hoL0k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <iframe className= "PVideo img" width="560" height="315" src="https://www.youtube.com/embed/-bh_AOQgQ3Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <iframe className= "PVideo img" width="560" height="315" src="https://www.youtube.com/embed/Ew0vDD4kesA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
</div >
<a id="center" href="Projects" target="_self">More Projects</a>

</div>


<div className="borders color1"></div>

<div className="page5 color1"id ="page5" >
         <div className="priceDiv" id="priceDiv">
            <h2>Packages</h2>
        <div className="dotcontainer">
<div className="dot color4" onClick={tosquare} id="dot1"><h4>£50<br></br>1 x Track<br></br>Solo<br></br><p className="addInfo">One track any instrument within a 15mile radius of bath</p></h4></div>
<div className="dot color4" onClick={tosquare} id="dot2"><h4>£70<br></br>1 x Track<br></br>Duo<br></br><p className="addInfo">Two track any instrument within a 15mile radius of bath</p></h4></div>
<div className="dot color4" onClick={tosquare} id="dot3"><h4>£100<br></br>1 x Song<br></br>Full<br></br><p className="addInfo">One Song any number of instrument within a 15mile radius of bath</p></h4></div>
<div className="dot color4" onClick={tosquare} id="dot4"><h4>£300<br></br>1 x Album<br></br>Info<br></br><p className="addInfo">Ten Songs any number of instrument within a 15mile radius of bath</p></h4></div>
</div>
        </div >
</div>

<div className="borders color1"></div>


<div className="page6 color1 color2">
<div className="container color1">  
 
<form id="contact" class="color4" action="" method="post">
    <h3 class="color3">Quick Contact</h3>
    <h4>Contact us today, and get reply with in 24 hours!</h4>
    <fieldset>
      <input class="input"  placeholder="Your name" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input class="input" placeholder="Your Email Address" type="email" tabindex="2" required/>
    </fieldset>
    <fieldset>
      <input class="input" placeholder="Your Phone Number" type="tel" tabindex="3" required/>
    </fieldset>
    <fieldset>
      <input class="input" placeholder="Your Web Site starts with http://" type="url" tabindex="4" required/>
    </fieldset>
    <fieldset>
      <textarea class="input" placeholder="Type your Message Here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button  name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
 
  
</div>
</div>
         </div >

         </div>



  );
}



export default LandingPage;
