import React from 'react';
import '../css/home.css';

const Home = () => {
  return (
    <div className='home'>

      <div className='home-title'>
        <h1>Brilliance</h1>
      </div>

      <div className='Branding'>
        Reliable <br></br>
        Commercial <br></br>
        Cleaning
      </div>
      
      <div className='home-container'>
        <p>
            Here at Brilliance-FS, we offer the best cleaning facility solutions.
        </p>
        <br></br>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      
    </div>
  );
}

export default Home;
