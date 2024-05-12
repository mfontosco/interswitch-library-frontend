import { Link, useNavigate,useLocation } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import { toast } from "react-toastify";
import log from "../../assets/log.png"

const Sidebar = ({ items }) => {
  const location = useLocation()
  const nav = useNavigate()
  const logout =()=>{
    localStorage.removeItem('token');
    toast.success("user logged out successfully");
      nav('/')
  }
  return (
    <div className="fixed border-r-2 rounded-md mr-36 bg-blue-800 text-white min-h-screen w-64 overflow-y-auto">
      <div className="relative h-full min-h-screen">
        <div onClick={()=>nav("/")} className="px-4 cursor-pointer py-2 mt-4 mb-10 flex justify-center items-center">

      <img src={logo} alt="log" className="w-[90px]"/>
      
        </div>
        <nav className="w-full">
          <ul className='w-full'>
            {items.map((item, index) => (
              <li key={index} className={location.pathname === item.url?'hover:bg-[#a748f6] p-3 rounded mb-2 w-full  text-white':"hover:bg-red-600 p-3 rounded mb-2 w-full  text-white"}>
                <Link to={item.url} className='flex  items-center  gap-2  text-sm font-semibold w-full pl-4'>
                   <p className="text-white">{item.icon}</p>
                  {item.label }
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div onClick={logout} className="w-full absolute rounded-md hover:bg-red-600 flex gap-2 cursor-pointer mb-10 py-3  mx-auto px-10 bottom-0">
          
          <TbLogout2 size={24} className="text-white "/>
          <h4 className="text-white "> logout</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
