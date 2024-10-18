import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import musicGif1 from '../assets/gifimage.gif'
import './LandingPage.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function LandingPage() {
  return (
    <div className='main'>
      <Row>
        <Col ><h4 className='head p1 my-4'>Welcome To Media Player</h4>
        <p className='para'>
        Music is made up of many elements, including melody, harmony, rhythm, timbre, pitch, silence , and form. The exact definition of music varies, but these elements are commonly taught in music curriculums.Musical content is a broad term that can refer to music itself, or to the creation and distribution of music-related content Although the exact definition of music varies widely even in the West, music contains melody, harmony, rhythm, timbre, pitch, silence, and form or structure. What we know about music so far… Music is comprised of sound. Music is made up of both sounds and silences.Music is made up of many elements, including melody, harmony, rhythm, timbre, pitch, silence , and form. The exact definition of music varies, but these elements are commonly taught in music curriculums</p>
        <Link to={'/home'}> <Button className='btn1' variant="outline-secondary">Get Stratd </Button>{' '}   </Link>
            </Col>
        <Col>
          <img className='img' src={musicGif1} alt=''></img>
        </Col>
      </Row>
      
<Container>
  

      <h4 className='head2'>Features</h4>
      {/* <Row className='card m-4 p-5'>
      <div><Col>
      <Card className='card'  style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.gifer.com/origin/5c/5c91ddbd818970ff239eaa9b43b47852_w200.gif" width={'100'} height={"250"} />
      <Card.Body>
       <p className='p1'>Card Title</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='btn2' variant="primary">Start</Button>
      </Card.Body>
    </Card>
      </Col></div>
<div>
  
<Col>
      <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.gifer.com/origin/5c/5c91ddbd818970ff239eaa9b43b47852_w200.gif" width={'100'} height={"250"} />
      <Card.Body>
      <p className='p1'>Card Title</p>
      <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='btn2'  variant="primary">Start</Button>
      </Card.Body>
    </Card>
      </Col>
</div>
<div>
  
<Col>
      <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/62/0c/5a/620c5a819f8b8fa2a75575edf1d155ec.gif"  width={'100'} height={"250"} />
      <Card.Body>
      <p className='p1'>Card Title</p>
      <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='btn2'  variant="primary">Start</Button>
      </Card.Body>
    </Card>
      </Col>

</div>

     </Row> */}
    
     <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://i.gifer.com/origin/5c/5c91ddbd818970ff239eaa9b43b47852_w200.gif" width={'100'} height={"250"}  />
        <Card.Body>
        
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. 
          </Card.Text>
          <Button className='btn2'  variant="primary">Start</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/62/0c/5a/620c5a819f8b8fa2a75575edf1d155ec.gif"  width={'100'} height={"250"}  />
        <Card.Body>
        
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. 
          </Card.Text>
          <Button className='btn2'  variant="primary">Start</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top"src="https://i.gifer.com/origin/5c/5c91ddbd818970ff239eaa9b43b47852_w200.gif" width={'100'} height={"250"}   />
        <Card.Body>
        
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. 
          </Card.Text>
          <Button className='btn2'  variant="primary">Start</Button>
        </Card.Body>
      </Card>
    </CardGroup>

</Container>
     

     <Container>
      <Row className='bord m-5 border-light-rounded'>
        <Col><p className='p1 text-center'>Simple Fast and Powerfull</p>
        <p> <span className='p1'>MUSIC:</span> consists of three main elements—melody, rhythm, and harmony. While the first two are typically accountable for making a piece of music memorable—think of the opening motif of Beethoven's Symphony No.</p>
        <p> <span className='p1'>MELODY:</span> consists of three main elements—melody, rhythm, and harmony. While the first two are typically accountable for making a piece of music memorable—think of the opening motif of Beethoven's Symphony No.</p>
        <p> <span className='p1'>RHYTHM:</span> consists of three main elements—melody, rhythm, and harmony. While the first two are typically accountable for making a piece of music memorable—think of the opening motif of Beethoven's Symphony No.</p></Col>
        <Col className='video mt-4'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/e1BHIY9p2WU?si=WA1uMcfKN-Y4u_Yg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Col>
      </Row>
     </Container>
    </div>

  
  )
}

export default LandingPage