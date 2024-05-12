import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import logo1 from "../../assets/logo1.png";
import styles from "./Register.module.css";
import { useDispatch,useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createUserAction } from "../../redux/features/register/registerSlice";
import { sendOtpAction } from "../../redux/features/register/sendOtpSlice";

const Register = () => {
  const nav = useNavigate()
    const dispatch = useDispatch()
    const {users,isError,isSuccess,message,isLoading} = useSelector((state)=>state.createUser)
    // const {user:users} = useSelector((state)=>state.sendOtp)
    const [payload,setPayload] = useState({
        email:"",
        first_name:"",
        last_name:"",
        phone:"",
        password:"",
        confirm_password:""
    })
    console.log("user",users)
    const handleChange = (e)=>{

        const { name, value} = e.target
        console.log("name",name)
        console.log("value",value)

        setPayload(prev=>({...prev,[name]: value}))
    }
    const submitHandler =async(e)=>{
        e.preventDefault()
    
        try {
              const result = await dispatch(createUserAction(payload)) 
              console.log("result====>",result)  
             if(result){
              // alert('Registration Successful')
            //  const otp = await dispatch(sendOtpAction(payload.email));
            //  console.log("otp",otp)
              toast.success("An otp has been sent to your email")
               setTimeout(()=>{nav("/login")},2000);
               setPayload({   
                email:"",
                first_name:"",
                last_name:"",
                phone:"",
                password:"",
                confirm_password:""
            })
            }else{
                toast.error(message??"Something went wrong!")
            }
        } catch (error) {
            console.log("error----reg",error)
            toast.error(message)
        }
    }
  return (
    <div className="w-full  relative ">
    <div className="px-4 py-4 absolute">
    <img
            src={logo1}
            alt="logo"
            style={{ width: "120px", height: "40px", cursor:"pointer" }}
            onClick={()=>nav('/')}
          />
    </div>
    <div className="flex justify-center items-center min-h-screen">
    <form onSubmit={submitHandler} className="shadow-md rounded-md py-4 w-[600px]">
      <div className="flex flex-col">
        <div className="flex flex-col items-center">
  
          <p className="text-[26px]">Sign Up</p>
          <p>
            Enter your details below to create your account and get started.
          </p>
        </div>
        <div className="flex flex-col w-full gap-4 px-4 mt-2">
          <div className="flex gap-2 mb-2 ">
          <div className=" flex flex-col w-1/2">
            <label>First Name:</label>
           <div className="border ">
           <input type="text" name="first_name" onChange={handleChange} value={payload.first_name} placeholder="enter..." className="py-2 px-1 outline-none w-full" />
           </div>
          </div>
          <div className=" w-1/2 flex flex-col">
            <label>Last Name:</label>
           <div className="border ">
           <input type="text" name="last_name" onChange={handleChange} value={payload.last_name} placeholder="enter..." className="py-2 px-1 outline-none w-full " />
           </div>
          </div>
          </div>
         <div className="flex gap-2 mb-2">
         <div className="flex flex-col w-1/2">
            <label>Email:</label>
            <div className="border">
            <input
              type="text"
              name="email"
              value={payload.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="py-2 px-1 outline-none w-full"
            />
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <label>Phone Number:</label>
          <div className="border">
          <input
              type="text"
              onChange={handleChange}
              name="phone"
              value={payload.phone}
              placeholder="+2347086543"
              className="py-2 px-1 outline-none w-full bg-white"
            />
          </div>
          </div>
         </div>
        <div className="flex gap-2 mb-2">
        <div className="flex flex-col w-1/2">
            <label>Password:</label>
           <div className="border">
           <input type="password" onChange={handleChange} name="password" value={payload.password} placeholder="enter..." className="py-2 px-1 outline-none w-full bg-none w-full" />
           </div>
          </div>
          <div className="flex flex-col w-1/2">
            <label>Confirm Password:</label>
            <div className="border">
              
            <input type="password" onChange={handleChange} name="confirm_password" value={payload.confirm_password} placeholder="enter..." className="py-2 px-1 outline-none w-full bg-transparent" />
            </div>
          </div>
        </div>
          <div className="flex w-[280px] ">
            <button
            type="submit"
              className="bg-blue-500 w-full py-2  text-white"
              
            >
              Submit
            </button>
          </div>
          <div className="">
            <p>
              Already have an account?{" "}
              <Link className="text-blue-500" to={"/login"}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      </form>
    </div>
    
    </div>
  );
};

export default Register;
