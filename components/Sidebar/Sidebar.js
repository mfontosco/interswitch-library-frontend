import React from 'react';

const Sidebar = ({ items }) => {
  console.log("items", items);
  return (
    <div className="fixed mr-36 bg-[#FF9BD2] text-white h-full w-64 overflow-y-auto">
      <div className="h-full min-h-screen">
        <h1 className='mt-4 mb-8 pl-6 text-black text-2xl font-bold'>staff area 2023</h1>
        <nav className="w-full">
          <ul className='w-full'>
            {items.map((item, index) => (
              <li key={index} className='hover:bg-black p-3 rounded mb-2 w-full hover:text-white text-black'>
                <a href={item.link} className='text-sm font-semibold w-full pl-4'>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
