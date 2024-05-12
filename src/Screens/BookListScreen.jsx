import { useDispatch, useSelector } from "react-redux";
import BookList from "../components/Books/BookList";
import { getBookAction } from "../redux/features/books/bookSlice";
import { useEffect, useState } from "react";
import CreateBooksForm from "../components/Books/CreateBooks";

const BookListScreen = () => {
  const [filterCategory, setFilterCategory] = useState(""); 
  const [filterValue, setFilterValue] = useState(""); 
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { books, isError } = useSelector((state) => state.getBooks);

  const getBooks = async () => {
    try {
      await dispatch(getBookAction());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const filterBooks = () => {
    if (!filterCategory) return books.books; // Return all books if no filter category selected

    const filteredBooks = books.books.filter((book) => {
      return book.genre.toLowerCase().includes(filterCategory.toLowerCase());
    });

    return filteredBooks;
  };

  return (
    <div className="py-10 px-1 relative ">
      <div className="flex justify-between mb-4">
        <div className="flex flex-col w-[400px] ">
          <label>Filter by Category</label>
          <select
            className="w-[200px] h-full px-2 py-4 "
            onChange={handleFilterChange}
            value={filterCategory}
          >
            <option value="">Select Category</option>
            <option value="love">Love</option>
            <option value="fiction">Fiction</option>
            <option value="education">Educational</option>
            <option value="popular">Popular</option>
          </select>
        </div>
      </div>
      {books && books.books && filterBooks().length > 0 ? ( // Check if filtered books are available
        <div className="flex gap-5 flex-wrap">
          {filterBooks().map((book) => (
            <BookList key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center font-bold" >No books available for the selected category.</div> // Display message if no books available
      )}
      {open && (
        <div className="absolute w-full top-0">
          <CreateBooksForm setOpen={setOpen} getBooks={getBooks} />
        </div>
      )}
    </div>
  );
};

export default BookListScreen;

