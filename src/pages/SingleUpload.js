import React, { useState,useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Form from "../components/Form";
import Header from "../components/Header";

const SingleUpload = () => {

  const singlecreate = useSelector(state=>state.uploadsingle)
  const {success,erorr} = singlecreate

  const [pic,setPic]= useState([])
  const [open,setOpen]= useState(false)


  useEffect(() => {
    console.log(pic)
    if(pic.length>0){
      setOpen(true)
      
    }
  }, [pic,open]);
  return (
    <Container fluid style={{gap:0,margin:0 ,padding:0}}>
      <Row>
        <Header />
      </Row>
      <Row className="box-form" >
        <Form  setPics={setPic} pics={pic} />
      </Row>
      <Row>
        <div className="box-img">
      {open===true ? pic.map((item,index)=>{
        return(
          <img key={index} src={`http://localhost:8080/${item.filePath}`}/>
        )
      })
      :(
          <></>
        )}
      </div>
      </Row>
   
     {success==='success' ?  <Row><p></p></Row>: success===undefined  || success==='' ? <Row><p>{erorr}</p></Row> : <Row><p>success</p></Row>}
    </Container>
  );
};

export default SingleUpload;
