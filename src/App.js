import React from "react";
import { Header } from "./components/header";
import "./App.css"
import { Navigation } from "./components/navigation";
import { Main } from "./components/Main";
import { Routes,Route, useParams } from "react-router-dom";
import { IndividualArticle } from "./components/IndividualArticle";


function App() {
  return (<div className="container">
    <div className="container2">
    <Header/>
    <Navigation/>
    <Routes>
      <Route path ="/" element={<Main/>}/>
      <Route path ="/article/:article_id" element={<IndividualArticle/>}/>
    </Routes>
    </div>
  </div>
    
    
  );
}

export default App;
