
import Sidebar from './Sidebar';
import Nav from './Nav';
import { GoHome } from "react-icons/go";
import { LiaBookSolid } from "react-icons/lia";
import { HiUserGroup } from "react-icons/hi";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const AdminDashboardLayout = ({ children }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("token"));
  const memberSideBarItems = [
    {
      label: "Books",
      icon: <LiaBookSolid size={24}/>,
      url:"/books"
    },
    {
      label: "Books Borrowed",
      icon:<FaUserFriends size={24}/>,
      url: "/user-borrowed-books"
    },
  ];
  const adminSideBarItems=[
    {
      label: "Dashboard",
      icon: <GoHome size={24}/>,
      url: "/dashboard"
    },
    {
      label: "Books",
      icon: <LiaBookSolid size={24}/>,
      url:"/books"
    },
    {
      label: "Members",
      icon: <HiUserGroup size={24}/>,
      url:"/members"
    },
    {
      label: "Books Borrowed",
      icon:<FaUserFriends size={24}/>,
      url: "/borrowed-book"
    },
    {
      label: "Add Books",
      icon:<LiaBookSolid size={24}/>,
      url: "/create-books"
    },
  ]
  const sideBarItems = loggedInUser.is_admin ? adminSideBarItems : memberSideBarItems
  return (
    <div className='fixed flex w-full z-50'>
      <div className='w-64 '>
      <Sidebar items={sideBarItems} />
      </div>
      <main className='relative flex-1 h-screen  bg-gray-100 overflow-y-auto'>
        <div className='fixed w-full z-50'>
        <Nav/>
        </div>
        <div className='p-8 mt-2 z-20'>
        {children}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardLayout;
