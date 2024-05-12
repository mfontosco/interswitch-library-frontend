import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children }) => {
  const sideBarItems = [
    {
      label: "My account",
    },
    {
      label: "Activities",
    },
    {
      label: "Orders",
    },
    {
      label: "Customers",
    },
    {
      label: "Analytics",
    },
    {
      label: "Finance",
    },
    {
      label: "Products",
    },
    {
      label: "Vouchers and Discounts",
    },
    {
      label: "Customers",
    },
    {
      label: "Customers",
    },
    {
      label: "Customers",
    },
  ];

  return (
    <div className='flex '>
      <Sidebar items={sideBarItems} />
      <main className=' flex-1 flex justify-center items-center flex-col  bg-gray-100 overflow-y-auto'>
        {children}
      </main>
    </div>
  );
};

export default Layout;
