import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Form from "../components/Form";
import Header from "../components/Header";

const Gallery = () => {

  const singlecreate = useSelector(state=>state.uploadsingle)
  const {success,erorr} = singlecreate


console.log(erorr)
  return (
    <Container fluid style={{gap:0,margin:0 ,padding:0}}>
      <Row>
        <Header />
      </Row>
      <Row  >
        

      </Row>
   
    </Container>
  );
};

export default Gallery;
