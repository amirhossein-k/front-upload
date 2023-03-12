import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Form from "../components/Form";
import Header from "../components/Header";

const SingleUpload = () => {

  const singlecreate = useSelector(state=>state.uploadsingle)
  const {success,erorr} = singlecreate
console.log(erorr)
  return (
    <Container fluid style={{gap:0,margin:0 ,padding:0}}>
      <Row>
        <Header />
      </Row>
      <Row className="box box-page" >
        <Form />
      </Row>
     {success==='success' ?  <Row><p></p></Row>: success===undefined  || success==='' ? <Row><p>{erorr}</p></Row> : <Row><p>success</p></Row>}
    </Container>
  );
};

export default SingleUpload;
