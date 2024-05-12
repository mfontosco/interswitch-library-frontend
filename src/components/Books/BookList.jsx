import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { borrowBookAction } from "../../redux/features/books/borrwowBookSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const BookList = ({ book }) => {
    const nav = useNavigate()
    const dispatch =useDispatch()
    const [borrowing,setBorrowing] = useState(false)
    const loggedInUser = JSON.parse(localStorage.getItem("token"));
    console.log("book_id",book.id)
    const {borrow,isLoading,isSuccess,isError} = useSelector((state)=>state.borrowBook)
    const [payload,setPayload] = useState({
        user_id:loggedInUser?.id,
        book_id: book?.id
    })
    const handleBorrowing = async () => {
        try {
            console.log("payload", payload);
    
            const resultAction = await dispatch(borrowBookAction(payload));
            const result = resultAction.payload;
    
            if (result.status === 'success') {
                toast.success("book borrowed successfully")
                nav(loggedInUser.is_admin ? '/borrowed-book' :"/user-borrowed-books");
            } else {
                
                toast.error("Failed to borrow book");
            }
        } catch (error) {
            console.error("Error borrowing book:", error);
          
            toast.error("Failed to borrow book");
        }
    };
    
    return (
        <div className="w-[253px]  bg-white rounded-xl shadow-md overflow-hidden ">
            <div className="md:flex md:flex-col">
                <div className=" w-full">
                    <img
                        className="h-48 w-full object-cover "
                        src={book.image_url}
                        alt={`${book.title} cover`}
                    />
                </div>
                <div className="px-8 py-4 flex flex-col items-center">
                    <div
                        className="flex mb-1 text-lg leading-tight font-medium text-black hover:underline"
                    >
                        <h2>Title:</h2>
                        <p>{book.title}</p>
                    </div>
                    <div className="uppercase flex tracking-wide text-sm text-indigo-500 font-semibold">
                        <h2>Author:</h2>
                        <p>{book.author}</p>
                    </div>
                    <div className="mt-1 flex text-gray-500">
                        <h2>Category:</h2>
                        <p>{book.genre}</p>
                    </div>
                    <div className="mt-1 flex text-gray-500">
                        <h2>ISBN:</h2>
                        <p>{book.isbn}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-4">
                <button onClick={()=> {
                setBorrowing(true)
                handleBorrowing()}} disabled={borrowing} className="bg-red-600 px-2 py-2 text-white rounded-sm ">{borrowing ? "borrowing":"Borrow"}</button>
            </div>
        </div>
    );
};

export default BookList;
