// import React from 'react'
// import './AddVideo.css';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function AddVideo() {
//   return (
//     <div>        <Link to={'/AddVideo'}> <Button variant="outline-secondary">Get Stratd </Button>{' '}   </Link>
// </div>
//   )
// }

// export default AddVideo


// import React, { useState } from 'react';
// import './AddVideo.css';
// import { Button, Modal } from 'react-bootstrap';
// import { FaUpload } from 'react-icons/fa';
// import { MdOutlineVideoLibrary } from "react-icons/md";
// import { addVideoAPI } from '../Services/AllAPIs';
// import '../Services/AllAPIs'
// import { commonAPI } from '../Services/CommonAPI';
// import axios from 'axios';
// import React, { useState } from 'react';
// import './AddVideo.css';
// import { Button, Modal } from 'react-bootstrap';
// import { FaUpload } from 'react-icons/fa'; // Import the upload icon
// import { MdOutlineVideoLibrary } from "react-icons/md";


// function AddVideo() {


//   const [videoDetails,setVideoDetails] = useState({
//     caption:"",
//     img:"",
//     url:""
//   })
//   console.log(videoDetails);
  
//   const getEmbbedLink = (e) =>{
//     // console.log(e.target.value);

//     //de structuring
//   const {value} = e.target
//   console.log(value);
  
//   let yCode = value.slice(-31)
//   let yLink = `https://www.youtube.com/embed/${yCode}`
//   setVideoDetails({...videoDetails,url:yLink})
//   }

  

//   const [showModal, setShowModal] = useState(false);

//   const handleClose = () => setShowModal(false);
//   const handleShow = () => setShowModal(true);


//   const handleAdd = async() => {
//     // destructure
//       const { caption, url, img} = videoDetails
//       if(!caption||!url ||!img){
//         alert("Please Fill the Details")
//       }
//       else{
//         //add videoAPI
//         const response = await addVideoAPI(videoDetails)
//         console.log(response);
        
//       }

//   }


//   return (
//     <div>
//       <Button variant="outline-secondary" onClick={handleShow}>
//         <FaUpload style={{ marginRight: '0px' , marginLeft:'0px',color:"orange"}} /> 
//       </Button>

//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title><p className='heading'> <MdOutlineVideoLibrary /> Upload Video</p> </Modal.Title>
//         </Modal.Header>
//         <p className='mt-2 ms-4'>Please fill the following details</p>
//         <Modal.Body>
//           <input onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" className="form-control" />
//           <input onChange={e=>setVideoDetails({...videoDetails,img:e.target.value})} type="text" placeholder="Video Image" className="form-control" style={{ marginTop: '10px' }} />
//           <input onChange={getEmbbedLink}  type="text" placeholder="Video URL" className="form-control" style={{ marginTop: '10px' }}  />

//         </Modal.Body>
//         <Modal.Footer>
//           <Button className='btn1' variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button className='btn1' variant="warning" onClick={handleAdd}>
//             Upload
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default AddVideo;





// import React from 'react'
// import './AddVideo.css';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function AddVideo() {
//   return (
//     <div>        <Link to={'/AddVideo'}> <Button variant="outline-secondary">Get Stratd </Button>{' '}   </Link>
// </div>
//   )
// }

// export default AddVideo


import React, { useState } from 'react';
import './AddVideo.css';
import { Button, Modal } from 'react-bootstrap';
import { FaCloudUploadAlt } from "react-icons/fa";

import { MdOutlineVideoLibrary } from "react-icons/md";
import { addVideoAPI } from '../Services/AllAPIs';
import '../Services/AllAPIs'
import Swal from 'sweetalert2'
// import { commonAPI } from '../Services/CommonAPI';
// import axios from 'axios';
// import React, { useState } from 'react';
// import './AddVideo.css';
// import { Button, Modal } from 'react-bootstrap';
// import { FaUpload } from 'react-icons/fa'; // Import the upload icon
// import { MdOutlineVideoLibrary } from "react-icons/md";


function AddVideo({setuploadVideoResponse}) {


  const [videoDetails,setVideoDetails] = useState({
    caption:"",
    img:"",
    url:""
  })
  console.log(videoDetails);
  
  const getEmbbedLink = (e) =>{
    // console.log(e.target.value);

    //de structuring
  const {value} = e.target
  console.log(value);
  
let yCode = value.slice(-31)
let yLink = `https://www.youtube.com/embed/${yCode}`
setVideoDetails({...videoDetails,url:yLink})
}


  

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleAdd = async() => {
    // destructure
      const { caption, url, img} = videoDetails
      if(!caption||!url ||!img){
        alert("Please Fill the Details")
      }
      else{
        //add videoAPI
        const response = await addVideoAPI(videoDetails);
        console.log(response);
        if(response.status>=200 && response.status<300){
          Swal.fire({
            title: 'Success',
            text: 'Video Added Successfully',
            icon: 'success',
            confirmButtonText: 'Back'
          })
          setuploadVideoResponse(response.data)
          setVideoDetails({
            caption:"",
            url:"",
            img:""
          })
          handleClose()
        
        }
    
      else
    handleClose()
      }
}


  return (
    <div>
      <FaCloudUploadAlt 
      style={{ color:"orange",fontSize:"40px",marginLeft:'5px',marginTop:"27px"}}  onClick={handleShow} /> 
      

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><p className='heading'> <MdOutlineVideoLibrary /> Upload Video</p> </Modal.Title>
        </Modal.Header>
        <p className='mt-2 ms-4'>Please fill the following details</p>
        <Modal.Body>
          <input onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" className="form-control" />
          <input onChange={e=>setVideoDetails({...videoDetails,img:e.target.value})} type="text" placeholder="Video Image" className="form-control" style={{ marginTop: '10px' }} />
          <input onChange={getEmbbedLink}  type="text" placeholder="Video URL" className="form-control" style={{ marginTop: '10px' }}  />

        </Modal.Body>
        <Modal.Footer>
          <Button className='btn1' variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn1' variant="warning" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddVideo