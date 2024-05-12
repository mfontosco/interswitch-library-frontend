import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction } from '../../redux/features/login/getAllUsersSlice';

const UserTable = () => {
  const dispatch = useDispatch()
    const {users,isLoading,isSuccess,isError} = useSelector((state)=>state.getUsers)
  console.log("users",users)
    useEffect(()=>{
       dispatch(getUsersAction())
    },[])
  return (
    <div className="overflow-x-auto mt-20">
      <table className="min-w-full  divide-gray-200">
        <thead className="bg-gray-50">
          <tr className='py-4'>
            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              First Name
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Last Name
            </th>
            <th
              scope="col"
              className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date Joined
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users?.users?.length > 0 && users?.users?.map((user,index) => (
            <tr key={user.id} className={index % 2 ===0 ? "bg-blue-100":"bg-white"} >
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.first_name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.last_name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{new Date(user.created_at).toLocaleString()}</td>
            </tr>
          ))}
          {
            isLoading && <p>Loading..</p>
          }
        </tbody>
      </table>
      
    </div>
  );
};

export default UserTable;
