import React from 'react';
import event from "./Images/Premium Vector _ Abstract halftone background.jpg";
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <img src={event} className='background-img' alt="Background"></img>    
      <Link to="/skills"><button>Click</button></Link>
    </div>
  );
}

export default Home;
