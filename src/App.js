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
function App() {
  const [file, setFile] = useState();
  const [value, setValue] = useState(null);
  const inputRef = useRef();
  useEffect(() => {
    console.log(inputRef.current);
    console.log(file);
  }, [file]);

  const handleClick = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      "http://localhost:8080/api/getMultipleFiles",
      {}
    );
    console.log(data);
  };

  const handleClick2 = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("file", file);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(
      "http://localhost:8080/api/singleFile",
      formData,
      config
    );
  };
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/singleupload" element={<SingleUpload/>} />
      <Route path="/multipleupload" element={<MultipleUpload/>}/>
    </Routes>

  );
}

export default App;
