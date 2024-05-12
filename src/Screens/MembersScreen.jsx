import React, { useState } from 'react';
import UserTable from '../components/Users/UsersList';
import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";

const MembersScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items per page

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  return (
    <div>
      <UserTable/>
      <div className="bg-white h-12 text-sm px-4  relative flex items-center justify-between">
                <p className="text-gray-300">showing 1 to 1 of 1 entries</p>
                <div className="flex items-center gap-1">
                    <RxDoubleArrowLeft/>
                    <button className="py-1 px-2 bg-blue-400 rounded-sm">1</button>
                    <RxDoubleArrowRight/>
                </div>
            </div>
    </div>
  );
}

export default MembersScreen;
