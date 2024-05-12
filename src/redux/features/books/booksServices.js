import axios from "axios";
import { BOOKS_BASE_URL,BASE_URL_BORROW } from "../../api";


const createBooks = async(bookData)=>{
    const config = {
        header:{
            "content-type":"application/json"
            // "authorization":`Bearer ${token}`
        },
        Credential:"include",
        mode:"cors"
    }

    const {data} = await axios.post(`${BOOKS_BASE_URL}/create-books`,bookData,config)
    console.log(data)
    return data
}

const editBook = async(bookData,id)=>{
    console.log("bookData",bookData)
    console.log("bookid",id)
    const config = {
        header:{
            "content-type":"application/json"
            // "authorization":`Bearer ${token}`
        },
        Credential:"include",
        mode:"cors"
    }

    const {data} = await axios.put(`${BOOKS_BASE_URL}/edit-book/${id}`,bookData,config)
    console.log(data)
    return data
}

const getBooks = async () => {
    console.log("getbooks" + "its working");
    const config = {
        headers: {
            "content-type": "application/json",
            // "authorization": `Bearer ${token}`
        },
        credentials: "include",
        mode: "cors"
    };

    try {
        const response = await axios.get(`${BOOKS_BASE_URL}/get-books`, config);
        console.log("book-data", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching staff data:", error);
        throw error; 
    }
};


const getBook = async (id) => {
    console.log("getbooks" + "its working",id);
    const config = {
        headers: {
            "content-type": "application/json",
            // "authorization": `Bearer ${token}`
        },
        credentials: "include",
        mode: "cors"
    };

    try {
        const response = await axios.get(`${BOOKS_BASE_URL}/get-book/${id}`, config);
        console.log("book-data", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching book data:", error);
        throw error; 
    }
};
const getBorrowedBooks = async () => {
    console.log("getbooks---->" + "its working");
    const config = {
        headers: {
            "content-type": "application/json",
            // "authorization": `Bearer ${token}`
        },
        credentials: "include",
        mode: "cors"
    };

    try {
        const response = await axios.get(`${BASE_URL_BORROW}/get-borrowed-books`, config);
        console.log("book-data", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching staff data:", error);
        throw error; 
    }
};

const borowBook = async (bookData) => {
    console.log("borrowbooks" + "its working");
    const config = {
        headers: {
            "content-type": "application/json",
            // "authorization": `Bearer ${token}`
        },
        credentials: "include",
        mode: "cors"
    };

    try {
        const response = await axios.post(`${BASE_URL_BORROW}/borrow-book`,bookData, config);
        console.log("borrow-book-data", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching borrowed data:", error);
        throw error; 
    }
};

const returnBook = async (bookData) => {
    console.log("borrowbooks" + "its working");
    const config = {
        headers: {
            "content-type": "application/json",
            // "authorization": `Bearer ${token}`
        },
        credentials: "include",
        mode: "cors"
    };

    try {
        const response = await axios.post(`${BASE_URL_BORROW}/return-borrowed-book`,bookData, config);
        console.log("borrow-book-data", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching borrowed data:", error);
        throw error; 
    }
};


const getDashboardStats = async () => {
    console.log("borrowbooks" + "its working");
    const config = {
        headers: {
            "content-type": "application/json",
            // "authorization": `Bearer ${token}`
        },
        credentials: "include",
        mode: "cors"
    };

    try {
        const response = await axios.get(`${BASE_URL_BORROW}/get-dashboard-counts`,config);
        console.log("borrow-book-data", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching borrowed data:", error);
        throw error; 
    }
};

const getDayToDayCount = async () => {
    console.log("borrowbooks" + "its working");
    const config = {
        headers: {
            "content-type": "application/json",
            // "authorization": `Bearer ${token}`
        },
        credentials: "include",
        mode: "cors"
    };

    try {
        const response = await axios.get(`${BASE_URL_BORROW}/get-day-to-day-count`,config);
        console.log("borrow-book-data", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching borrowed data:", error);
        throw error; 
    }
};
// const getClass = async(id)=>{
// console.log("serviceidclass",id)
//     const config = {
//         headers:{
//             "content-type":"application/json",
//             // authorization:`Bearer ${token}`
//         },
//         Credential:"include",
//         mode:"cors"
//     }
//     console.log("it is working")
//     const {data} = await axios.get(`${baseUrl}/classes/${id}`,config)
//     console.log(data)
//     return data
// }

// const updateClass = async(id,classData)=>{

//     const config = {
//         headers:{
//             "content-type":"application/json",
//             // authorization:`Bearer ${token}`
//         },
//         Credential:"include",
//         mode:"cors"
//     }
//     console.log("it is working")
//     const {data} = await axios.put(`${baseUrl}/classes/${id}`,classData,config)
//     console.log(data)
//     return data
// }
// const deleteClass = async(id)=>{

//     const config = {
//         headers:{
//             "content-type":"application/json",
//             // authorization:`Bearer ${token}`
//         },
//         Credential:"include",
//         mode:"cors"
//     }
//     console.log("it is working")
//     const {data} = await axios.delete(`${baseUrl}/classes/${id}`,config)
//     console.log(data)
//     return data
// }

const bookServices ={
    getBooks,
    returnBook,
    borowBook,
    getBorrowedBooks,
    getDashboardStats,
    getDayToDayCount,
    createBooks,
    getBook,
    editBook


}

export default bookServices