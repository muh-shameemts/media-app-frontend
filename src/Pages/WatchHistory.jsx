import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import './WatchHistory.css'
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteWatchHistoryAPI, getWatchHistoryAPI } from '../Services/AllAPIs';
function WatchHistory() {

  const [history,setHistory]=useState()

  const getHistory = async() =>{
    const result = await getWatchHistoryAPI()
    console.log(result);
    setHistory(result.data)    
  }
  console.log(history);
  
  const handleDelete = async(id) => {
    const result = await deleteWatchHistoryAPI(id)
    window.location.reload()
    console.log(result);
    
  }

  useEffect(()=>{
    getHistory()
  },[])
  return (
    <>
    <Row>
      <Col><p className='fs-2 fw-bolder' style={{color:"red"}}>Watch History</p></Col>
      <Col><Link to='/'><p className='home fs-5 px-5' style={{float:"right"}}><FaHome className='pe-1 fs-4' />Home</p></Link></Col>
      </Row>
      <Row>
      <Col className='table mb-1 '>
       <Table className='t1' striped bordered hover >
      <thead>
        <tr>
          <th>SI.No</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Timestamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
        history?history.map((item,index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td>{item.url}</td>
          <td>{item.timestamp}</td>
          <td>
          <RiDeleteBin5Line onClick={()=>handleDelete(item.id)} className=''/>
          </td>

        </tr>
        )):'no data'
      }
      </tbody>
    </Table></Col>
      </Row></>
  )
}

export default WatchHistory