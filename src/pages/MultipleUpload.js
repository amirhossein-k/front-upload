import React from "react";
import { Container, Row } from "react-bootstrap";
import Form from "../components/Form";
import Header from "../components/Header";
const MultipleUpload = () => {
  return (
    <Container fluid style={{gap:0,margin:0 ,padding:0}}>
      <Row>
        <Header />
      </Row>
      <Row className="single-body-style" >
        <Form />
      </Row>
    </Container>
  );
}

export default MultipleUpload