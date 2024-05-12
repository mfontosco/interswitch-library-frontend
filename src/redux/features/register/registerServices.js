import axios from "axios";
import { BASE_URL } from "../../api";
import { toast } from "react-toastify";


const createUser = async(UserData)=>{
    console.log("UserData", UserData)
    console.log("it's working")
   try {
    const config = {
        headers: {
            "content-type": "application/json",
            // "authorization": `Bearer ${token}`
        },
    credentials: "include",
        mode: "cors"
    };

    const {data} = await axios.post(`${BASE_URL}/register`,UserData,config)
    console.log("====>data",data)
    return data
   } catch (error) {
    toast.error(error.response.data.message)
    throw new Error(error)
   }
}
const getAllUser = async () => {
    console.log("getcategories" + "its working");
    const config = {
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`
        },
    credentials: "include",
        mode: "cors"
    };

    try {
        const response = await axios.get(`${BASE_URL}/get-users`, config);
        console.log("User-data", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching Category data:", error);
        throw error; 
    }
};

const sendOtp = async(UserData)=>{
    console.log("UserData", UserData)
    console.log("it's working")
   try {
    const config = {
        headers: {
            "content-type": "application/json",
            // "authorization": `Bearer ${token}`
        },
    credentials: "include",
        mode: "cors"
    };

    const {data} = await axios.post(`${BASE_URL}/send-otp`,UserData,config)
    console.log("====>data",data)
    return data
   } catch (error) {
    toast.error(error.response.data.message)
    throw new Error(error)
   }
}

const verifyOtp = async(UserData)=>{
    console.log("UserData", UserData)
    console.log("it's working")
   try {
    const config = {
        headers: {
            "content-type": "application/json",
            // "authorization": `Bearer ${token}`
        },
    credentials: "include",
        mode: "cors"
    };

    const {data} = await axios.post(`${BASE_URL}/verify-otp`,UserData,config)
    console.log("====>data",data)
    return data
   } catch (error) {
    toast.error(error.response.data.message)
    throw new Error(error)
   }
}







const userServices = {
    getAllUser,
    createUser,
    sendOtp,
    verifyOtp

}

export default userServices