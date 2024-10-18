// import React from 'react'
// import { Card, Container } from 'react-bootstrap'
// import { RiDeleteBin2Line } from "react-icons/ri";
// import { Button, Modal } from 'react-bootstrap';

// import { MdOutlineVideoLibrary } from "react-icons/md";
// function VideoCard() {
//   const [showModal, setShowModal] = useState(false);

//   const handleClose = () => setShowModal(false);
//   const handleShow = () => setShowModal(true);

//   return (
//     <div> <Container className='cont'>
//     <Card className='me-4' onClick={handleShow}>
//    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2013/07/08/13/43/background-143985_1280.jpg" width={'150'} height={"200"} />
//    <Card.Body className='d-flex'>
//         <Card.Title className='me-4 mt-3'>
//           Card Title
//         </Card.Title>
//         <Button><RiDeleteBin2Line /></Button>
//        </Card.Body>
//  </Card>
 
//  <Card  className='me-4'>
//    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2023/10/30/14/23/ai-generated-8352992_640.jpg" width={'150'} height={"200"} />
//    <Card.Body className='d-flex'>
//         <Card.Title className='me-4 mt-3'>
//           Card Title
//         </Card.Title>
//         <Button><RiDeleteBin2Line /></Button>
//        </Card.Body>
//  </Card>
//  <Card className='me-4' >
//    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2020/12/15/13/47/music-5833695_1280.jpg" width={'150'} height={"200"} />
//    <Card.Body className='d-flex'>
//         <Card.Title className='me-4 mt-3'>
//           Card Title
//         </Card.Title>
//         <Button><RiDeleteBin2Line /></Button>
//        </Card.Body>
//  </Card>



//     </Container>
    
//     <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title><p className='heading'> <MdOutlineVideoLibrary /> Upload Video</p> </Modal.Title>
//         </Modal.Header>
//         <p className='mt-2 ms-4'>Please fill the following details</p>
//         <Modal.Body>
//           <input type="text" placeholder="Video Caption" className="form-control" />
//           <input type="text" placeholder="Video Image" className="form-control" style={{ marginTop: '10px' }} />
//           <input type="text" placeholder="Video URL" className="form-control" style={{ marginTop: '10px' }}  />

//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="warning" onClick={handleClose}>
//             Upload
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   )
// }

// export default VideoCard



// import React, { useState } from 'react'; // Import useState
// import { Card, Container, Button, Modal } from 'react-bootstrap';
// import { MdOutlineVideoLibrary } from "react-icons/md";
// import { AiOutlineDelete } from "react-icons/ai";
// import './AddVideo'

// function VideoCard(videoDetails) {
//   console.log(videoDetails);
  
//   const [showModal, setShowModal] = useState(false);

//   const handleClose = () => setShowModal(false);
//   const handleShow = () => setShowModal(true);

//   return (
//     <div>
     
//       {/* Card 1 */}
//       <Card className='me-4' style={{ width: '200px', height: '300px' }} onClick={handleShow}>
//         <Card.Img 
//           variant="top" 
//           src={videoDetails.img} 
//           style={{ height: '150px', objectFit: 'cover' }} 
//         />
//         <Card.Body className='d-flex'>
//         <p className=''>{videoDetails.caption}</p>
//          {/* <Button 
//             style={{
//               width: "40px", 
//               height: '40px', 
//               backgroundColor: 'black', 
//               borderColor: "red", 
//               display: 'flex', 
//               alignItems: 'center', 
//               justifyContent: 'center'
//             }}
//           >
            

//           </Button> */}
         
//           <AiOutlineDelete className='fs-2' />

//         </Card.Body>
//       </Card>

//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             <p className='heading'> 
//               <MdOutlineVideoLibrary /> Your Video
//             </p> 
//           </Modal.Title>
//         </Modal.Header>
       
//         <Modal.Body>

//         <iframe width="100%" height="315" src={videoDetails.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

//         </Modal.Body>
      
//       </Modal>
//     </div>
//   );
// }

// export default VideoCard;

import React, { useState } from 'react'; // Import useState
import { Card, Modal } from 'react-bootstrap';
import { MdOutlineVideoLibrary } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import './VideoCard.css'
import { deleteVideoAPI } from '../Services/AllAPIs';
import { addWatchAPI } from '../Services/AllAPIs';

function VideoCard({ videoDetails }) { // Destructure videoDetails from props
  const [showModal, setShowModal] = useState(false);

  const handleDelte=async(id)=>{
    const result = await deleteVideoAPI(id)
    window.location.reload();
   
  }


  // add watch history API details to the server
  const handleClose = () => setShowModal(false);
  const handleShow = async() => {
    setShowModal(true);
    const {caption ,url}=videoDetails

    // generate date and time
    let today = new Date()
    console.log(today);
    // convert date and time to more readable form
    let timestamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'numeric',day:'numeric',houur:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    console.log(timestamp);
    
    let details = {
      caption,url,timestamp
    }
    // api call
    const response = await addWatchAPI(details)
    console.log(response);

    
    
  }
const dragStarted=(e,videoId)=>{
  console.log("Video dragStarted...id " + videoId);
  console.log(e);
  
  e.dataTransfer.setData("VideoId",videoId);
}
  return (
    <div>
      {/* Card */}
      <Card draggable={true} onDragStart={(e)=>dragStarted(e,videoDetails.id)} className='me-4' style={{ width: '150px', height: '250px' }}>
        <Card.Img 
          variant="top" 
          onClick={handleShow}
          src={videoDetails.img} 
          style={{ height: '150px', objectFit: 'cover' }} 
        />
        <Card.Body className='d-flex'>
        <div className='div pt-3'>  <p className=''>{videoDetails.caption}</p></div>
          <div className='div  ps-3 pt-0'>         <button className='btnn' onClick={()=>handleDelte(videoDetails.id)}> <AiOutlineDelete className='icons ps-0 fs-5 ' /></button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p className='heading'> 
              <MdOutlineVideoLibrary /> Your Video
            </p> 
          </Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
          <iframe 
            width="100%" 
            height="315" 
            src={videoDetails.url} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default VideoCard;
