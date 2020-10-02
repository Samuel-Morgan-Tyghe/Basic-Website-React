import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {

  return (
  <nav  className='puttoback color1'>
    
<ul className='nav-links color2 color1'>
<Link  className='color3' to="/Basic-Website-To-React">
<li>Home |</li>
</Link>
<Link className='color3'  to="/about">
<li>About |</li>
</Link>
<Link className='color3'  to="/projects">
<li>Projects</li>
</Link>

</ul>
</nav>
  );
}

export default Nav;
