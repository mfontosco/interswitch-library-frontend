
import { MdSearch } from "react-icons/md";

const Nav = () => {
  const user =JSON.parse(localStorage.getItem("token"))
  console.log("user--->",user)
  return (
    <div className=''>
      <div className='w-full px-10 flex justify-end bg-white h-12 py-2'>
       
        <div className='w-1/5 mr-48 flex items-center'>
           <h4>{user?.fullName}</h4>
        </div>
      </div>
    </div>
  );
}

export default Nav;
