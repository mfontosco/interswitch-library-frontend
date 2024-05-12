
import logo1 from "../../assets/logo1.png";
import google from "../../assets/google.png";
// import styles from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { loginUserAction } from "../../redux/features/login/loginSlice";
import { toast } from "react-toastify";
import { useFormik } from "formik"

const onSubmit =(values,actions)=>{
  console.log(values)
  actions.resetForm()
  }
const Login = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const { user, isError, isSuccess, message, isLoading } = useSelector((state) => state.createUser)
  const [payload, setPayload] = useState({
    email: "",
    password: ""
  })
  console.log("user", user)
  const handleChange = (e) => {

    const { name, value } = e.target
    console.log("name", name)
    console.log("value", value)

    setPayload(prev => ({ ...prev, [name]: value }))
  }
  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const result = await dispatch(loginUserAction(payload))
      console.log("result---user",result)
      if (result?.payload.status === "success") {
        const userloggedIn = result.payload.user
        toast.success("login successful")
        nav(userloggedIn.is_admin ? "/dashboard": "/books")
      } else if (isError)
        console.log("error=====", message)


    } catch (error) {
      console.log("error", error)
      toast.error(message)
    }
  }
//   const {errors,values,handleBlur,handleChange,handleSubmit} = useFormik({
//     initialValues:{
//         class_name:"",
//         class_number:"",
//         sections:""
//     },
//     validationSchema:basicSchema,
//     onSubmit:(values,actions)=>{
        
//         dispatch(createClassAction(values))
//         actions.resetForm()
       
//         console.log("submitted")
//     },
// })
  return (
    <div className="w-full relative">
     <div className="absolute py-4 px-4">
           <img
              src={logo1}
              alt="logo"
              style={{ width: "120px", height: "40px" ,cursor:"pointer"}}
              onClick={()=>nav('/')}
            />
           </div>
           <div  className="w-full py-2 flex justify-center items-center min-h-screen">
           <form onSubmit={submitHandler} className=" shadow-md rounded-sm w-[350px]">
        <div className=" flex justify-center flex-col px-4">
          <div className=" flex flex-col justify-center">
          
            <h1 className="text-center">Welcome back</h1>
            <p className="text-center">Glad to see you again. Login to your account below</p>
          </div>
          {/* <div className={styles["google-btn"]}>
            <button className={styles["google-input"]}>
              Continue with Google
              <img src={google} alt="icon" style={{ width: "22px" }} />
            </button>
          </div> */}
          <div className="w-full ">
            <div className=" w-full flex flex-col py-2">
              <label>Email:</label>
              <input
                type="text"
                onChange={handleChange}
                value={payload.email}
                name="email"
                placeholder="enter email..."
                className="py-2 px-1 "
              />
            </div>
            <div className="w-full flex flex-col py-2">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={payload.password}
                onChange={handleChange}
                placeholder="enter password..."
                className="py-2 px-1"
              />
            </div>
            <div className=" mt-2">
              {/* <button className={styles["user-input"]}>Cancel</button> */}
              <button
                type="submit"
                className="bg-blue-500 w-full py-2 text-white"
                
              >
                {isLoading ? "logging in..." : "Login"}
              </button>
            </div>
            <div className="mt-2 mb-2">
              <p>
                Don't have an account?{" "}
                <Link  to="/register">
                  Sign up for Free
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

export default Login;
