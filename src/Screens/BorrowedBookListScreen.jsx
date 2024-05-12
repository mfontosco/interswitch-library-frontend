import { useDispatch, useSelector } from "react-redux";
import BookList from "../components/Books/BookList";
import { getBookAction } from "../redux/features/books/bookSlice";
import { useEffect } from "react";
import { getBorrowedBookAction } from "../redux/features/books/getBorrowedBoksSlice";
import BorrowedBookList from "../components/Books/BorrowedBookList";

const BorrowedBookListScreen = () => {
    const dispatch = useDispatch()
    const { borrow, isError,isLoading } = useSelector((state) => state.borrowedBooks)
    console.log("borrow----->",borrow)
    // const {books,isError} = useSelector((state)=>state.getBooks)
    const getBorrowedBooks = async () => {
        try {
            const result = await dispatch(getBorrowedBookAction())
            console.log("result", result)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getBorrowedBooks()
    }, [])
    
    return (
        <div className=" ">
       
           <div className="px-10 py-10">
           <div className=" flex gap-4 justify-start  flex-wrap">
            {
                isLoading && <h2>Loading...</h2>
            }
                {borrow?.Borrowings?.map((book) => (
                    <BorrowedBookList 
                    key={book.id} 
                    image_url={book?.Book?.image_url}
                    isbn={book.Book?.isbn}
                    title={book.Book?.title} 
                    author={book?.Book?.author}
                    id={book?.Book?.id}
                    isLoading={isLoading}
                         />
                ))}
                {
                    borrow?.Borrowings?.length ===0 && <p>No data available</p>
                }
            </div>
           </div>
        </div>
    );
};

export default BorrowedBookListScreen;
