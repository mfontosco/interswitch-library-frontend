import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBorrowedBookAction } from "../redux/features/books/getBorrowedBoksSlice";
import BorrowedBookList from "../components/Books/BorrowedBookList";

const UserBookListScreen = () => {
    const dispatch = useDispatch();
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const { isError, isLoading } = useSelector((state) => state.borrowedBooks);
    const loggedInUser = JSON.parse(localStorage.getItem("token"));

    const getBorrowedBooks = async () => {
        try {
            const result = await dispatch(getBorrowedBookAction());
            const userBorrowedBooks = result?.payload?.Borrowings.filter(
                (item) => item.user_id === loggedInUser.id && !item.returned
            );
            console.log("user-borr",userBorrowedBooks)
            setBorrowedBooks(userBorrowedBooks);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBorrowedBooks();
    }, []);
        console.log("user-bb",borrowedBooks)
    return (
        <div className="py-10 px-10 ">
        
            <div className="flex gap-4 justify-start flex-wrap">
                {isLoading && <h2>Loading...</h2>}
                {borrowedBooks.map((book) => (
                    <BorrowedBookList
                        key={book.id}
                        image_url={book?.Book?.image_url}
                        isbn={book.Book?.isbn}
                        title={book.Book?.title}
                        id={book?.Book?.id}
                        isLoading={isLoading}
                        borrowedBooks={borrowedBooks}
                        setBorrowedBooks={setBorrowedBooks}
                    />
                ))}{
                    borrowedBooks.length === 0 && <h2 className="text-center w-full">No books borrowed yet</h2>
                }
            </div>
        </div>
    );
};

export default UserBookListScreen;
