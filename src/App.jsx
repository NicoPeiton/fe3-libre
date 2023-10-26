import React, { useEffect } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { ContextProvider } from "./Components/utils/global.context";


function App() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/home');
  }, []);

  return (
      <div className="App">
        <ContextProvider>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </ContextProvider> 
      </div>
  );
}

export default App;
