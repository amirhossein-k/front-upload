import React from 'react'
import { Row } from 'react-bootstrap'
import Form from '../components/Form'
import Header from '../components/Header'

const Home = () => {
  return (
       <div className="container-fulid constainerstyle">
      <Row>
        <Header/>
        {/* <Form/> */}
      </Row>
      <Row>
        <div className='box'>
          <p className='title'>اپلود سنتر</p>
          <span className='light-top'></span>
          <span className='light-bottom'></span>
        </div>
      </Row>
    </div>
  )
}

export default Home