import React from 'react';
import './App.css';
import Test from './testing';



function About() {


  const divStyle = {  color:"blue" };


  const buttonhi = () => {
    console.log("hi is this working");
    const   divStyle = { color: "yellow" };
    }




  return (
    <div class ="aboutPage"  onClick="">
<h1 class="pagetitle">About In Full</h1>
<h2 class = "center">
    Side Room Recordings is a portable recording studio founded by Jacob Myles Tyghe and situated in centre of Bath,
     Somerset, England, near its counter-part Bristol.
    <br></br>
    Portable Studios give us here at Side Room Recordings a chance to record you in your
    natural habitat
    <br></br>
    The possibilities of where to record are endless, use the contact form at the end of the
    page to discuss any ideas you have
    <br></br>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
    desktop publishing software like Aldus PageMaker including versions of ...
</h2>
    

    </div>
  );
}



export default About;
