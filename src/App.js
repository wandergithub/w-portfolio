import { CSSTransition, SwitchTransition } from 'react-transition-group';
import React, { useEffect, useState } from 'react';
import { Route, useLocation, Routes } from 'react-router-dom';
import ReactGA from 'react-ga';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Lab from './components/Lab/Lab';
import './index.css';

function App() {
  const location = useLocation();
  const [isopen, setisopen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');
  const toggle = () => {
    setisopen(!isopen);
  };

  useEffect(() => {
    // Google analytics
    ReactGA.initialize('G-6P2G9HJ87C');
  }, []);

  return (
    <>
      <Navbar toggle={toggle} setCurrentPath={setCurrentPath} currentPath={currentPath} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <div className="bg-image" />
      <SwitchTransition>
        <CSSTransition
          key={location.key}
          timeout={500}
          classNames="right-to-left"
          unmountOnExit
        >
          <Routes location={location}>
            <Route path="/" element={<About setCurrentPath={setCurrentPath} />} />
            <Route path="/work" element={<Work />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

export default App;
