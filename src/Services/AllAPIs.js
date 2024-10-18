import { commonAPI } from "./commonAPI";
import { serverUrl } from "./ServerUrl";

//Add video API
export const addVideoAPI =  async(reqBody)=>{
    return await commonAPI(`post`,`${serverUrl}/allVideos`,reqBody)
}


// Get all videos
export const getVideoAPI = async()=>{
    return await commonAPI(`get`,`${serverUrl}/allVideos`,{})

}

// Delete a perticular video details
export const deleteVideoAPI=async(id)=>{
    return await commonAPI('delete',`${serverUrl}/allVideos/${id}`,"")
}


// ------------------------------------------------------------------- 



// Add Watch History API

export const addWatchAPI =  async(reqBody)=>{
    return await commonAPI(`post`,`${serverUrl}/watchHistory`,reqBody)
}

// Get Watch History API

export const getWatchHistoryAPI = async()=>{
    return await commonAPI(`get`,`${serverUrl}/watchHistory`,{})

}

// Delete Watch History API

export const deleteWatchHistoryAPI=async(id)=>{
    return await commonAPI('delete',`${serverUrl}/watchHistory/${id}`,"")
}

// --------------------------------------------------------------------------------------------

// Add category API
export const addCategoryAPI =  async(reqBody)=>{
    return await commonAPI(`post`,`${serverUrl}/category`,reqBody)
}

// Get category API
export const getCategoryAPI = async()=>{
    return await commonAPI(`get`,`${serverUrl}/category`,{})

}

// delete category API
export const deleteCategoryAPI = async(id)=>{
    return await commonAPI('delete',`${serverUrl}/category/
        ${id}`," ")
}

// --------------------------------------------------------------------------------------------------

// get a particular video details API
export const getAVideoDetailsAPI = async(id)=>{
    return await commonAPI(`get`,`${serverUrl}/allVideos/${id}`,{})
}

// ------------------------------------------------------------------------------------------------------

// Update a particular video details in a category
export const updateAVideoDetailsAPI = async(categoryId,categoryDetails)=>{
    return await commonAPI(`put`,`${serverUrl}/category/${categoryId}`,categoryDetails)
}