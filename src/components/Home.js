import React from 'react';
import './Home.css';
import Sidebar from './Sidebar';
import Visuals from './Visuals';
import Header from './Header';

function Home() {
  return (
    <div className="home">
       {/* <Header/> */}
       <Visuals />
       {/* <Sidebar/> */}
   </div>
  )
}

export default Home;