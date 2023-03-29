import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ReactGA from "react-ga";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Lab from "./components/Lab/Lab";

const style = {
  separator: {
    height: "70px",
  },
};

function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  useEffect(() => {
    // Google analytics
    ReactGA.initialize("G-NPEVDN4YKK");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <div style={style.separator} />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
