// API configuration
// 1. import Axios

// import axios from 'axios';
// const axios = require('axios')   

// export const commonAPI = async(httpMethod,url,reqBody)=>{
//     let reqConfig ={
//         method:httpMethod,
//         url,
//         data:reqBody
//     }
//     return await axios(reqConfig).then((response)=>{
//         return response
//     })
//     .catch((error)=>{
//         return error
//     })
// }


import axios from 'axios';

export const commonAPI = async (httpMethod, url, reqBody) => {
    let reqConfig = {
        method: httpMethod,
        url,
        data: reqBody
    };

    try {
        const response = await axios(reqConfig);
        return response;
    } catch (error) {
        return error; // Optionally handle the error
    }
};
