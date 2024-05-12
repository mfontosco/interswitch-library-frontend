
import DashboardLayout from "../components/AdminDashboard/AdminDashboard";
import {EditBookScreen,SendOtpScreen,UserBookListScreen,BorrowedBookListScreen,BookListScreen,HomeScreen,MembersScreen,BookScreen,CreateBooksForm,RegisterScreen,LoginScreen} from './index'
import { Route,Routes } from "react-router-dom";



const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      
      <Route path="/user-borrowed-books" element={<DashboardLayout><UserBookListScreen/></DashboardLayout>}/>
      <Route path="/dashboard"  element={<DashboardLayout><BookScreen/></DashboardLayout>}/>
      <Route path="/members" element={<DashboardLayout><MembersScreen/></DashboardLayout>}/> 
      <Route path="/books" element={<DashboardLayout><BookListScreen/></DashboardLayout>}/> 
      <Route path="/borrowed-book" element={<DashboardLayout><BorrowedBookListScreen/></DashboardLayout>}/> 
      <Route path="/edit-book/:id" element={<DashboardLayout><EditBookScreen/></DashboardLayout>}/>
      <Route path="/create-books" element={<DashboardLayout><CreateBooksForm/></DashboardLayout>}/>
      <Route path="/otp" element={<SendOtpScreen/>}/>
      <Route path="/register" element={<RegisterScreen/>}/>
      <Route path="/login" element={<LoginScreen/>}/>
    </Routes>
  );
}

export default Router;
