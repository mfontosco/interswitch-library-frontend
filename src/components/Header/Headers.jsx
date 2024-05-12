import { Link, useNavigate } from "react-router-dom";
import logo1Img from "../../assets/logo1.png";
import man from "../../assets/man.jpg"

const Headers = () => {
    const nav = useNavigate()
  return (
    <div className='bg-white min-h-screen'>
      <header className=" "> 
       <nav className="flex items-center justify-between h-28 py-4 px-20">
        <div className="flex gap-2 items-center">
          <img src={logo1Img} height="100px" width="100px" alt="Logo" />
          <h2 className="text-2xl font-bold">Bookhub</h2>
        </div>
        {/* <div className="flex items-center gap-4">
            <button onClick={()=>nav("/register")} className="bg-blue-600 text-[16px] font-bold py-2 w-[100px] rounded-full px-2 text-white">Register</button>
            <button onClick={()=>nav("/login")} className=" text-[16px] font-bold py-2 w-[100px] rounded-full px-2 text-red-900 border border-blue-900">Login</button>
            </div> */}
      
       </nav>
       
      </header>
     
      <div className='flex  h-[450px] mt-0'>
        <div className='w-1/2'>
        <div className="h-full  flex flex-col px-20 justify-center">
           <h3 className="text-black poppins-regular text-[26px] font-bold">"Welcome to Switch Library,"</h3>
            <p className="text-blue-600 poppins-regular  text-[42px] ">Read one book at a time</p>
            <p className="text-black poppins-regular text-[16px]">Find Your Book Of Choice...</p>
            <div className="flex justify-start gap-4 w-full mt-4">
            <button onClick={()=>nav("/register")} className="bg-blue-600 text-[16px] font-bold py-2 w-[100px] rounded-full px-2 text-white">Register</button>
            <button onClick={()=>nav("/login")} className=" text-[16px] font-bold py-2 w-[100px] rounded-full px-2 text-red-900 border border-blue-900">Login</button>
            </div>
        </div>
        </div>
        <div className='w-1/2 pr-20 '>
          <img src={man} alt='Interswitch Library App Screenshot' className='h-full rounded-sm  w-full' />
        </div>
      </div>
    </div>
  );
}

export default Headers;
