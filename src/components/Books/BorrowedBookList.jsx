import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { borrowBookAction } from "../../redux/features/books/borrwowBookSlice";
import { toast } from "react-toastify";
import { returnBookAction } from "../../redux/features/books/returnedBookSlice";
import { getBorrowedBookAction } from "../../redux/features/books/getBorrowedBoksSlice";
import { useNavigate } from "react-router-dom";


const BorrowedBookList = ({ image_url, title, author,isbn,id,isLoading,borrowedBooks,setBorrowedBooks }) => {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const [isReturning,setIsReturning] = useState(false)
    const loggedInUser = JSON.parse(localStorage.getItem("token"));
    
    console.log("image",image_url)

    const [payload,setPayload] = useState({
        user_id:loggedInUser?.id,
        book_id: id
    } )
    const handleReturn = async () => {
        try {
           
            const result =await dispatch(returnBookAction(payload))
            console.log("result",result)
            if(result?.payload?.message === "Book returned successfully"){
                toast.success(`${title} is returned successfully`);
                setIsReturning(false)
                // dispatch(getBorrowedBookAction()) 
                console.log("bb-->",borrowedBooks)
                setBorrowedBooks(borrowedBooks.filter(book => book.book_id!== id));

            }
           console.log("returned----------->=",result)
           
        } catch (error) {
            toast.error("failed to borrow book")
        }
    

    }

    return (
        <div  className="w-[253px] mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
            <div className="md:flex md:flex-col">
                <div className="md:flex-shrink-0">
                    <img
                        className="h-48 w-full object-cover "
                        src={image_url}
                        alt={`${title} cover`}
                    />
                </div>
                <div className="px-8 py-4 flex flex-col items-center">
                    <div
                        className="flex mb-1 text-lg leading-tight font-medium text-black hover:underline"
                    >
                        <h2>Title:</h2>
                        <p>{title}</p>
                    </div>
                    <div className="uppercase flex tracking-wide text-sm text-indigo-500 font-semibold">
                        <h2>Author:</h2>
                        <p>{author}</p>
                    </div>

                    <p className="mt-1 flex text-gray-500">
                        <h2>ISBN:</h2>
                        <p>{isbn}</p>
                    </p>
                </div>
            </div>
            <div className="flex justify-center py-4">
                <button onClick={
                ()=>{
                setIsReturning(true)
                handleReturn()}} disabled={isReturning} className="bg-purple-300 px-2 py-2 text-white rounded-sm ">{isReturning ? "returning":"Return"}</button>
            </div>
        
        </div>
    );
};

export default BorrowedBookList;
