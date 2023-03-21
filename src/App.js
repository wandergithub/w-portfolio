import Navbar from './components/Navbar/Navbar';
import React, { useState } from "react";
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
    </>
  );
}

export default App;
