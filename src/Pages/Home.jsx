import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddVideo from "../Components/AddVideo"
import AddCategory from "../Components/AddCategory"
import ViewVideo from "../Components/ViewVideo"
import { LiaHistorySolid } from "react-icons/lia";
function Home() {

  // state creation for state lifting in(parent component)
    const [uploadVideoResponse,setuploadVideoResponse] = useState({})

  return (
    <>
    <Container>
      <Row >
        <Col>
        <div className='d-flex'>
          {/* first child for state lifting 'AddVideo' (setState) */}
        <p className='mt-4 fw-bolder fs-4 text-white'>Upload Video</p>
         <AddVideo setuploadVideoResponse={setuploadVideoResponse}/>

        </div>
        </Col>
      <Col className=''>
      <Link to={'/WatchHistory'}>
      <p className='mt-3 fw-bolder fs-4 text-white' style={{float:'right'}}>Watch History <LiaHistorySolid style={{color:""}} /></p>
      </Link>
      </Col>
      </Row>
      {/* <Row className='d-flex'>
        
        <div>
        <div className='col-9'>
          <p>All Videos</p><ViewVideo/>
        </div>

        <div className='col-4'>
        <div style={{float:'right'}}>
          <p>
            Category
          </p>
        
          <AddCategory/>
          </div>
        </div>

        </div>
       
      </Row> */}

      <div className='row d-flex'>
        <div className='col-6'>
        <p>All Videos</p>

        {/* second child for state lifting 'ViewVideo' (State) */}
        <ViewVideo uploadVideoResponse={uploadVideoResponse}/>
        </div>
        <div className='col-6'>
        <p className='ms-4'>Category</p><AddCategory/>
        </div>
      </div>
    </Container>
    </>
  )
}

export default Home