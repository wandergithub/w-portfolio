import Navbar from './components/Navbar/Navbar';
import React, { useState } from "react";
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Work from './components/Work/Work';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

const style = {
  separator: {
    height: '70px',
  }
};


function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <div style={style.separator}></div>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
