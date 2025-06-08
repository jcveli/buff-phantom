// import logo from './logo.svg';
// import React from 'react';
import './App.css';
import Home from './routes/home/home.component';
import FAQ from './routes/faq/faq.component';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">

         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          {/* <Route path="/5th-job-skills" element={<FifthJobSkills />} />
          <Route path="/6th-job-skills" element={<SixthJobSkills />} />
          <Route path="/inner-ability" element={<InnerAbility />} />
          <Route path="/training-maps" element={<TrainingMaps />} /> */}
        </Routes>
    </div>
    </Router>
  );
}

export default App;