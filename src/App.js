// import logo from './logo.svg';
// import React from 'react';
import './output.css'
import Home from './pages/home/home.page';
import FAQ from './pages/faq/faq.component';
import Footer from './components/footer/footer.component';
import SixthJobSkills from './pages/sixthJob/sixthJob.page';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div class="min-h-screen flex flex-col bg-[url('./assets/background.jpg')] bg-cover bg-fixed relative">
      <div class="absolute inset-0 bg-black opacity-50 z-10 pointer-events-none" />
      <div class="relative z-10 flex-1 flex flex-col">
      <Router>
    
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/6th-job-skills" element={<SixthJobSkills />} />
          {/* <Route path="/5th-job-skills" element={<FifthJobSkills />} />
          <Route path="/6th-job-skills" element={<SixthJobSkills />} />
          <Route path="/inner-ability" element={<InnerAbility />} />
          <Route path="/training-maps" element={<TrainingMaps />} /> */}
        </Routes>
    
      </Router>
      <Footer />
      </div>
    </div>
  );
}

export default App;