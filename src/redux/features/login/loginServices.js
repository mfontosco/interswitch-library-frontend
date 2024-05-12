import axios from "axios";
import { BASE_URL } from "../../api";



const createUser = async(UserData)=>{
    console.log("UserData", UserData)
    console.log("it's working")
   try {
    const config = {
        headers: {
            "content-type": "application/json",
        },
    credentials: "include",
        mode: "cors"
    };

    const {data} = await axios.post(`${BASE_URL}/login/`,UserData,config)
    console.log("====>data",data)
    return data
   } catch (error) {
    throw new Error(error)
   }
}
const getAllUser = async () => {
    console.log("getcategories" + "its working");
    const config = {
        headers: {
            "content-type": "application/json",
            // "authorization": `Bearer ${token}`
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
        throw error; // Rethrow the error to handle it further up the call stack
    }
};









const userServices = {
    getAllUser,
    createUser,
}

export default userServices