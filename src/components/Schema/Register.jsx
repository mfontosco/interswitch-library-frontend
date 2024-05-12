import * as yup from "yup"
import { useFormik } from "formik"


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

 export const studentsSchema = yup.object().shape({
    firstName:yup.string().required("Required"),
    lastName:yup.string().required("Required"),
    email:yup.string().email("Please enter a valid email").required("Required"),
    password:yup.string().min(5).matches(passwordRules,{message:"please enter a stronger password"}).required("Required"),
    
})