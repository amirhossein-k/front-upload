import React from "react";
import { Container, Row } from "react-bootstrap";
import Form from "../components/Form";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const MultipleUpload = () => {
  const singlecreate = useSelector(state=>state.uploadmultiple)
  const {success,erorr} = singlecreate
  return (
    <Container fluid style={{gap:0,margin:0 ,padding:0}}>
      <Row>
        <Header />
      </Row>
      <Row className="single-body-style" >
        <Form />
      </Row>
      {success==='success' ?  <Row><p></p></Row>: success===undefined  || success==='' ? <Row><p>{erorr}</p></Row> : <Row><p>success</p></Row>}
    </Container>
  );
}

export default MultipleUpload