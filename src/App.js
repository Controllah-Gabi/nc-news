import React from "react";
import { Header } from "./components/header";
import "./app.css"
import { Navigation } from "./components/navigation";
import { Main } from "./components/Main";

function App() {
  return (<div className="container">
    <div className="container2">
    <Header/>
    <Navigation/>
    <Main/>
    </div>
  </div>
    
    
  );
}

export default App;
