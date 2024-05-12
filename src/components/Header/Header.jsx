import { Link } from "react-router-dom";
import logo1Img from "../../assets/logo1.png";
import man from "../../assets/man.jpg"

const Header = () => {
  return (
    <div>
      <header className=" border-b"> 
       <nav className="flex items-center justify-between h-28 py-4 px-20">
        <div className="flex gap-2 items-center">
          <img src={logo1Img} height="100px" width="100px" alt="Logo" />
          <h2 className="text-2xl font-bold">Bookhub</h2>
        </div>
        <div className="flex mr-4 gap-4">
          <Link className="uppercase font-bold " to="/register">Register</Link>
          <Link className="uppercase font-bold " to="/login">Login</Link>
        </div>
       </nav>
       
      </header>
      <div className="h-[500px] opacity-60 bg-red-400  flex justify-center items-center flex-col   w-full" style={{ backgroundImage: `url(${man})`, backgroundSize: 'cover',backgroundRepeat:"no-repeat", backgroundPosition: 'center' }}>
            <h2 className="text-5xl text-white">Welcome to Switch Library</h2>
            <p className="text-xl text-white">Find Your Book Of Choice</p>
      </div>
    </div>
  );
};

export default Header;
