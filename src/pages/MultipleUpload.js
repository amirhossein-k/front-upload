import React,{useState,useEffect,memo, useCallback} from "react";
import { Container, Row } from "react-bootstrap";
import Form from "../components/Form";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const MultipleUpload = () => {
  const singlecreate = useSelector(state=>state.uploadmultiple)
  const {success,erorr} = singlecreate
  const [pics,setPics]= useState([])
  const [open,setOpen]= useState(false)


  useEffect(() => {
    console.log(pics)
    if(pics.length>0){
      setOpen(true)
      
    }
  }, [pics,open]);
 
  console.log("multiple")
  return (
    <Container fluid style={{gap:0,margin:0 ,padding:0}}>
      <Row>
        <Header />
      </Row>
      <Row className="box-form" >
        <Form setPics={setPics} pics={pics} />
      </Row>
      <Row>
        <div className="box-img">
      {open===true ? pics.map((item,index)=>{
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
}

export default MultipleUpload