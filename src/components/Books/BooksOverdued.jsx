import React from 'react';
import { MdLibraryBooks } from "react-icons/md";

const BooksOverdued = ({overdueCount}) => {
  return (
    <div className='w-1/2 bg-red-200 h-[200px] mt-4 items-center justify-center gap-2  rounded-md flex-col flex px-2'>
     <MdLibraryBooks className='text-red-500' />
     <h2 className='text-red-500 font-medium'>Overdue</h2>
      <h2 className='text-red-500 font-medium'>Borrows</h2>
      <h4 className='text-4xl font-bold text-red-500 '>{overdueCount}</h4> 
    </div>
  );
}

export default BooksOverdued;
