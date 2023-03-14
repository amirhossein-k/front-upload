import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createSingle,createMultiple } from "../actions/uploadAction";

const Form = ({pics,setPics,pic,setPic}) => {
  const nameUrl = window.location.href;
  const dispatch = useDispatch()
  // console.log(nameUrl);
  const [file, setFile] = useState();
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
   setOpen(true)
  }, [pics]);

  const handleSingleClick = async (e) => {
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

  const handleMultipleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.values(files).forEach(file=>{
      formData.append('files',file)

    })
    formData.append('title',title)
  

    try{
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "http://localhost:8080/api/multipleFiles",
          formData,
        config
      );
      setPics((oldpic) =>  data.files)
      // console.log(pics)
      // dispatch(createMultiple(
      //   formData,title
      // ))


    }catch(error){
      console.log(error);
    }

  };

  // 
  const handleUpdateMultipleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.values(files).forEach(file=>{
      formData.append('files',file)

    })
    formData.append('title',title)
  

    try{
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      const { data } = await axios.put(
        "http://localhost:8080/api/updateMultipleFile",
          formData,
        config
      );
      setPics((oldpic) =>  data.files)


    }catch(error){
      console.log(error);
    }

  };
// 
  const handleUpdateSingleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();

  
    formData.append("file", file);

    try{
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      const { data } = await axios.put(
        "http://localhost:8080/api/updateSingleFile",
          formData,
        config
      );
      setPic((oldpic) =>  data.files)


    }catch(error){
      console.log(error);
    }

  };

  const changeHandler =(e)=>{
  
    setFiles(e.target.files)
    
  }

  return (
    <div className={`${nameUrl==='http://localhost:3000/singleupload' ? 'b' : 'bb'}`}>
      {nameUrl === "http://localhost:3000/singleupload" ? (
<>
        <form onSubmit={handleSingleClick}>
        <input type='text' value={title} name="title" onChange={(e)=>setTitle(e.target.value)} className="text-input"/>
          <input
            type="file"
            name="file"
            className="file-input"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button type="submit" className="submit">Submit</button>
        </form>

        {pic.length>0  ? (
          <>
          <h1>update</h1>
            <form onSubmit={handleUpdateSingleClick} style={{margin:10}}>
            <input type='text' value={title} name="title" onChange={(e)=>setTitle(e.target.value)} className="text-input"/>
            <input
              type="file"
              name="file"
              onChange={(e)=>setFile(e.target.files[0])}
              
           
              className="file-input"
            />

            <button type="submit" className="submit">Submit</button>
          </form>
          </>
          )  : (
            <></>
          )}





</>
      ) : (
        <>
         
          <form onSubmit={handleMultipleClick} style={{margin:10}}>
            <input type='text' value={title} name="title" onChange={(e)=>setTitle(e.target.value)} className="text-input"/>
            <input
              type="file"
              name="files"
              onChange={(e)=>changeHandler(e)}
              multiple
              className="file-input"
            />

            <button type="submit" className="submit">Submit</button>
          </form>
          
          {pics.length>0  ? (
          <>
          <h1>update</h1>
            <form onSubmit={handleUpdateMultipleClick} style={{margin:10}}>
            <input type='text' value={title} name="title" onChange={(e)=>setTitle(e.target.value)} className="text-input"/>
            <input
              type="file"
              name="files"
              onChange={(e)=>changeHandler(e)}
              multiple
           
              className="file-input"
            />

            <button type="submit" className="submit">Submit</button>
          </form>
          </>
          )  : (
            <></>
          )}
          
        </>
      )}
    </div>
  );
};

export default Form;
