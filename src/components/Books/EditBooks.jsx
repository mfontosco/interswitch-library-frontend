import  { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createBookAction } from '../../redux/features/books/createBooksSlice';
import { getBookAction } from '../../redux/features/books/singleBookSlice'
import { editBookAction } from '../../redux/features/books/editBookSlice'
import {useParams} from  "react-router"

const EditBookForm = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {book,isError,isSuccess,isLoading} = useSelector((state)=>state.getBook)
  console.log("book",book)
  const [formData, setFormData] = useState({
    title: book?.book?.title ||'',
    isbn: book?.book?.isbn || '',
    author: book?.book?.author ||'',
    genre: book?.book?.genre ||'',
    image_url: book?.book?.image_url || '',
  });
  
  useEffect(() => {
    if (book) {
      setFormData({
        title: book?.book?.title || '',
        isbn: book?.book?.isbn || '',
        author: book?.book?.author || '',
        genre: book?.book?.genre || '',
        image_url: book?.book?.image_url || '',
      });
    }
  }, [book])
  useEffect( ()=>{
    dispatch(getBookAction(id))
  },[id])
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value)
    setFormData({ ...formData, [name]: value });
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image_url: reader.result });
      };
      reader.readAsDataURL(file);
      console.log("file",reader)
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("id",id)
   try {
     // Make POST request to your endpoint using formData
     const result = await dispatch(editBookAction({bookData: formData, id: id}))
     
     console.log("result",result)
     if(result.payload.status === "success"){
    
      toast.success("successfully updated")
      
     }
     // Reset form data after submission if needed
     setFormData({
       title: '',
       isbn: '',
       author: '',
       genre: '',
       image_url: '',
     });
    
   } catch (error) {
    console.log(error)
   }
    
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isbn">
            ISBN
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="isbn"
            type="text"
            placeholder="ISBN"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
            Author
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="author"
            type="text"
            placeholder="Author"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genre">
            Genre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="genre"
            type="text"
            placeholder="Genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image_url" className="block text-gray-700 text-sm font-bold mb-2">
            Image
          </label>
          <input
            type="file"
            id="image_url"
            name="image_url"
            onChange={handleImageChange}
            className="border-gray-300 rounded-md"
          />
</div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBookForm;
