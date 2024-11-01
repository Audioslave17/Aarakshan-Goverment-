import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mission from './components/Mission';
import WhatWeDo from './components/WhatWeDo';
// import ProjectsDone from './components/ProjectsDone';
import VideoUpload from './components/VideoUpload';
import Yojnaye from './components/Yojnaye';
import Questions from './components/Questions';
import Footer from './components/Footer';
import Discuss from './components/Discuss';
import Motive from './components/Motive';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Home id="home"/>
            <Mission id="mission" />
            <Motive id="motive"/>
            {/* <ProjectsDone id="projects-done" /> */}
            <Yojnaye id="yojnaye" />
            <Questions id="questions" />
            <VideoUpload id="video-upload" />
            <Discuss id="Discuss"/>
            <Footer id="contact"/>
          </>
        } />
        <Route path="/whatWeDo" element={<WhatWeDo/>} />
      </Routes>
    </Router>
  );
}

export default App;