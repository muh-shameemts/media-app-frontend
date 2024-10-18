// import React, { useEffect, useState } from 'react';
// import './AddCategory.css';
// import { Button, Modal } from 'react-bootstrap';
// import { MdOutlineVideoLibrary } from "react-icons/md";
// import { addCategoryAPI, getCategoryAPI, deleteCategoryAPI } from '../Services/AllAPIs';
// import { AiOutlineDelete } from "react-icons/ai";

// function AddCategory() {

//   const [categoryName, setcategoryName] = useState("");
//   const [categoryDetails, setcategoryDetails] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const handleCategory = async () => {
//     if (categoryName) {
//       const body = {
//         categoryName,
//         allVideos: []
//       };
//       try {
//         const result = await addCategoryAPI(body);
//         console.log(result);
//         alert("Category added successfully");
//         getCategory(); // Refresh categories after adding
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     handleClose();
//   };

//   const getCategory = async () => {
//     const response = await getCategoryAPI();
//     console.log(response);
//     setcategoryDetails(response.data);
//   };

//   const deleteCategory = async (id) => {
//     if (window.confirm("Are you sure you want to delete this category?")) {
//       try {
//         const result = await deleteCategoryAPI(id);
//         console.log(result);
//         // Update the state to remove the deleted item
//         setcategoryDetails((prevDetails) => prevDetails.filter((item) => item.id !== id));
//         alert("Category deleted successfully");
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   useEffect(() => {
//     getCategory();
//   }, []);

//   const handleClose = () => setShowModal(false);
//   const handleShow = () => setShowModal(true);

//   return (
//     <>
//       <Button onClick={handleShow} className='btn btn-warning btn-lg' style={{ width: '250px', height: "40px", marginTop: '3px', paddingTop: '2px' }}>
//         Add Category
//       </Button>

//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             <p className='heading'><MdOutlineVideoLibrary /> Add Category</p>
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <input onChange={(e) => setcategoryName(e.target.value)} type="text" placeholder="Category Name" className="form-control" style={{ marginTop: '10px' }} />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button style={{ width: '70px', height: '30px' }} variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button style={{ width: '70px', height: '30px' }} variant="warning" onClick={handleCategory}>
//             Save
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       <div className='row'>
//         {
//           categoryDetails.length > 0 ? categoryDetails.map(item => (
//             <div key={item.id} className="col d-flex justify-content-between border m-3 p-5">
//               <h6>{item.categoryName}</h6>
//               <AiOutlineDelete onClick={() => deleteCategory(item.id)} style={{ cursor: 'pointer' }} />
//             </div>
//           )) : 'No data'
//         }
//       </div>
//     </>
//   );
// }

// export default AddCategory;




















import React, { useEffect, useState } from 'react';
import './AddCategory.css';
import { Button, Modal } from 'react-bootstrap';
import { MdOutlineVideoLibrary } from "react-icons/md";
import { addCategoryAPI, getCategoryAPI, deleteCategoryAPI, getAVideoDetailsAPI, updateAVideoDetailsAPI } from '../Services/AllAPIs';
import { AiOutlineDelete } from "react-icons/ai";
import VideoCard from './VideoCard';
function AddCategory() {

  const [categoryName, setcategoryName] = useState("");
  const [categoryDetails, setcategoryDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleCategory = async () => {
    if (categoryName) {
      const body = {
        categoryName,
        allVideos: []
      };
      try {
        const result = await addCategoryAPI(body);
        console.log(result);
        alert("Category added successfully");
        getCategory(); // Refresh categories after adding
      } catch (error) {
        console.log(error);
      }
    }
    handleClose();
  };

  const getCategory = async () => {
    const response = await getCategoryAPI();
    console.log(response);
    setcategoryDetails(response.data);
  };

  const deleteCategory = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        const result = await deleteCategoryAPI(id);
        console.log(result);
        // Update the state to remove the deleted item
        setcategoryDetails((prevDetails) => prevDetails.filter((item) => item.id !== id));
        alert("Category deleted successfully");
      } catch (error) {
        console.log(error);
      }
    }
  };


const dragOver = (e) => {
  e.preventDefault();
  console.log('video over......');
  console.log(e);
};


const videoDropped=async (e,categoryId)=>{
  const videoId = e.dataTransfer.getData("videoId")
  console.log('video dropped successfully......'+ categoryId , "Video Id" + videoId);
  console.log(e);
  // fetch the video details
  const {data}  = await getAVideoDetailsAPI(videoId)
  console.log(data);
  // add these details to the category => all videos[]
  const selectedCategory = categoryDetails.find(item=>item.id==categoryId)
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory);
  const updatecategory = await updateAVideoDetailsAPI(categoryId,selectedCategory)
  console.log(updatecategory);
  getCategory()
}

  useEffect(() => {
    getCategory();
  }, []);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button onClick={handleShow} className='btn btn-warning btn-lg' style={{ width: '250px', height: "40px", marginTop: '3px', paddingTop: '2px' }}>
        Add Category
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p className='heading'><MdOutlineVideoLibrary /> Add Category</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input onChange={(e) => setcategoryName(e.target.value)} type="text" placeholder="Category Name" className="form-control" style={{ marginTop: '10px' }} />
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ width: '70px', height: '30px' }} variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button style={{ width: '70px', height: '30px' }} variant="warning" onClick={handleCategory}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <div className='row'>
        {
          categoryDetails.length > 0 ? categoryDetails.map(item => (
            <div droppable={true} onDragOver={e=>dragOver(e)} onDrop={(e)=>videoDropped(e,item.id)} key={item.id} className="col d-flex justify-content-between border m-3 p-5">
              <h6>{item.categoryName}</h6>
              <AiOutlineDelete onClick={() => deleteCategory(item.id)} style={{ cursor: 'pointer' }} />
                <div className='row'>
                  {
                    item.allVideos.length>0?item.allVideos.map(video=>(
                      <div className='col'>
                        <VideoCard videoDetails={video}/>
                      </div>
                    )):" "
                  }
                </div>
            </div>
            
          )) : 'No data'
        }
      </div>
    </>
  );
}

export default AddCategory;
