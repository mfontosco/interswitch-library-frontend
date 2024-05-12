import  { useState } from 'react';
import {useNavigate} from "react-router"
import {useDispatch,useSelector} from "react-redux"
import { verifyOtpAction } from "../../redux/features/register/verifyOtpSlice";
import {toast} from "react-toastify"
import logo1 from "../../assets/logo1.png";


const OTPInput = ({ onSubmit }) => {
  const nav = useNavigate()
  const dispatch = useDispatch()
const {users} = useSelector((state)=>state.verifyOtp)
  const [otp, setOTP] = useState(['', '', '', '','','']); 
  const [email,setEmail] =useState("")



  const handleChange = (index, value) => {
    // Ensure that the input value is a number
    const intValue = parseInt(value, 10);
    
    // Check if the parsed value is a valid number
    if (!isNaN(intValue)) {
      const newOTP = [...otp];
      newOTP[index] = intValue.toString();
      setOTP(newOTP);
    }
  };
  
  const handleSubmit = async(e) => {
    const payload ={
      email:email,
      otp:otp
    }
    try{
      // const verifyOtp = await dispatch(verifyOtpAction(payload))
      // console.log(verifyOtp)
      nav("/login")
    }catch(error){
      toast.error(error)
    }
    e.preventDefault();

    nav("/login")

  };

  return (
    <div className=" mx-auto ">
    <div className="py-4 px-4 mb-10 border border-black ">
    <img
            src={logo1}
            alt="logo"
            style={{ width: "120px", height: "40px", cursor:"pointer" }}
            onClick={()=>nav('/')}
          />
    </div>
      <h2 className="text-center mt-10 text-2xl font-bold mb-6">Enter OTP</h2>
      <form onSubmit={handleSubmit} className="flex justify-center space-x-2">
        {[0, 1, 2, 3,4,5].map((index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={otp[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            className="w-12 h-12 text-2xl text-center border rounded focus:outline-none focus:border-blue-500"
          />
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default OTPInput;
