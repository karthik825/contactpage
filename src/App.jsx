import React from 'react';
import './App.css';
import computerImage from './icon.png';

import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className='appcontext'>
        <nav className='redbg'>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#sponsors">Sponsors</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
        <div className="centered-text">
          <h1>React</h1>
        </div>
        </div>
        <div className="contact-section">
          <h2>Contact Us</h2>
          <p>Please fill out the form below to get in touch with us:</p>
          <div className='formss'>
          <form>
            <div>
              {/* <label htmlFor="name">Name:</label> */}
              <input type="text" placeholder="Name" id="name" name="name" />
            </div>
            <div>
              {/* <label htmlFor="email">Email ID:</label> */}
              <input type="email"placeholder="Email" id="email" name="email" />
            </div>
            <div>
              {/* <label htmlFor="mobile">Mobile Number:</label> */}
              <input type="tel"  placeholder="Mobile" id="mobile" name="mobile" />
            </div>
            <div>
              {/* <label htmlFor="message">Message:</label> */}
              <textarea id="message" placeholder="Message" name="message" rows="4" />
            </div>
            <button type="submit">Submit</button>
          </form>
          </div>
        </div>
        <div className='importantcontacts'>
          <h2>Important Contacts</h2>
          <div className="row">
          {/* <input type="radio" id="option1" name="option" /> */}
          <img src={computerImage} alt='roundimage' className='round-image' />
          <label htmlFor="option1">Contact</label>
          {/* <input type="radio" id="option2" name="option" /> */}
          <label htmlFor="option2">Contact</label>
          {/* <input type="radio" id="option3" name="option" /> */}
          <label htmlFor="option3">Contact</label>
        </div>
        <div className="row">
          {/* <input type="radio" id="option4" name="option" /> */}
          <label htmlFor="option4">Link 1</label>
          {/* <input type="radio" id="option5" name="option" /> */}
          <label htmlFor="option5">Link 1</label>
          {/* <input type="radio" id="option6" name="option" /> */}
          <label htmlFor="option6">Link 1</label>
        </div>
        <div className="row">
          {/* <input type="radio" id="option4" name="option" /> */}
          <label htmlFor="option4">Link 2</label>
          {/* <input type="radio" id="option5" name="option" /> */}
          <label htmlFor="option5">Link 2</label>
          {/* <input type="radio" id="option6" name="option" /> */}
          <label htmlFor="option6">Link 2</label>
        </div>
          

        </div>
        <div className='location'>
          <h2>Our location</h2>
          <div className='gallery'>

            {/* <img src="" alt='image'>IMAGE</img> */}
          </div>
        </div>
        <div className='gap'>
        <div className='downcontent'>
          <div className='paragraph'>
            <p>The Official Racing Page of Sae<br></br>Team of IIITDM Kancheepuram</p>
          </div>  
          <div className='radio'>

          <input type="radio" id="option1" name="option" />
          <label htmlFor="option1">Contact</label>

          </div>



        </div>
        </div>
      </div>
    
  );
}

export default App;
