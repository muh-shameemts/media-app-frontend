import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './ViewVideo.css'
import { MdDeleteSweep } from "react-icons/md";
import VideoCard from './VideoCard';
import { getVideoAPI } from '../Services/AllAPIs';

function ViewVideo({uploadVideoResponse}) {

// to hold all video details
const [Video,setVideo] = useState([])

  const getVideo = async () =>{
    const response = await getVideoAPI()
    console.log(response.data); // array of data 
    setVideo(response.data)
  }
  console.log(Video); // array of video
  
  useEffect(()=>{
    getVideo()
  },[uploadVideoResponse])
  return (
    <div>
    <Row className='cont border-white p-3'>
      {
        Video.length!=0?Video.map(item=>(
        <Col className='pt-5'>
        <VideoCard videoDetails ={item}/>
        </Col>
      )):"Not Found!"
         
      }
    
    </Row>
</div>
  )
}

export default ViewVideo