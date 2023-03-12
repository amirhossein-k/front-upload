import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createSingle,createMultiple } from "../actions/uploadAction";

const Form = () => {
  const nameUrl = window.location.href;
  const dispatch = useDispatch()
  console.log(nameUrl);
  const [file, setFile] = useState();
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState('');


  const handleSingleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("file", file);

    // const config = {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // };
    // const { data } = await axios.post(
    //   "http://localhost:8080/api/singleFile",
    //   formData,
    //   config
    // );

    dispatch(createSingle(
      formData
    ))

  };

  const handleMultipleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.values(files).forEach(file=>{
      formData.append('files',file)

    })
    formData.append('title',title)
  

    try{
      // const config = {
      //   headers: {
      //     "content-type": "multipart/form-data",
      //   },
      // };

      // const { data } = await axios.post(
      //   "http://localhost:8080/api/multipleFiles",
      //     formData,
      //   config
      // );
      dispatch(createMultiple(
        formData,title
      ))


    }catch(error){
      console.log(error);
    }

  };

  const changeHandler =(e)=>{
    setFiles(e.target.files)
    
  }

  return (
    <div>
      {nameUrl === "http://localhost:3000/singleupload" ? (
        <form onSubmit={handleSingleClick}>
          <input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
         
          <form onSubmit={handleMultipleClick}>
            <input type='text' value={title} name="title" onChange={(e)=>setTitle(e.target.value)}/>
            <input
              type="file"
              name="files"
              onChange={(e)=>changeHandler(e)}
              multiple
            />

            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Form;
