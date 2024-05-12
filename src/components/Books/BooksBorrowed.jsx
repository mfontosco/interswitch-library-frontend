import React from 'react';
import { MdLibraryBooks } from "react-icons/md";




const BooksBorrowed = ({borrowedBookCount}) => {
  return (
    <div className='w-1/2 bg-red-200 h-[200px] mt-4 items-center justify-center  rounded-md flex-col gap-2 flex px-2'>
      <MdLibraryBooks className='text-red-600 '/>
      <h2 className='text-red-600 font-medium'>Books</h2>
      <h2 className='text-red-600 font-medium'>Borrowed</h2>
      <h4 className='text-4xl font-bold text-red-500 '>{borrowedBookCount}</h4>
    </div>
  );
}

export default BooksBorrowed;
