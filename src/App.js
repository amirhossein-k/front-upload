import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Form from "./components/Form";
import { Row } from "react-bootstrap";
import './app.css'
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import SingleUpload from "./pages/SingleUpload";
import  MultipleUpload from './pages/MultipleUpload'
import Gallery from "./pages/Gallery";
function App() {
  const [file, setFile] = useState();
  const [value, setValue] = useState(null);
  const inputRef = useRef();
  useEffect(() => {
    // console.log(inputRef.current);
    // console.log(file);
  }, [file]);

  console.log('app')
 
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/singleupload" element={<SingleUpload/>} />
      <Route path="/multipleupload" element={<MultipleUpload/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
    </Routes>

  );
}

export default App;
