import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <header class name="class-header"> 
          Phantom
       </header> 
       <div className="class-intro">
         <p>This site serves as a resources for the master thief class, Phantom, of MapleStory. 
          Feel free to explore the links below to learn more about the class and its skills.
          <br></br>
          If you have any more questions, feel free to join the class Discord and join the community!
          <br></br>
         </p>
        </div>
      <div className="class-links">
        <li>
          FAQ
        </li>
        <li>
          5th Job Skills
        </li>
        <li>
          6th Job Skills
        </li>
        <li>
          Inner Ability
        </li>
        <li>
          Training Maps & Rotations
        </li>
      </div>
    </div>
  );
}

export default App;