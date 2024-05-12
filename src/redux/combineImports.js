import createUserReducer from "./features/register/registerSlice";
import loginUserReducer from "./features/login/loginSlice";
import getUsersReducer from "./features/login/getAllUsersSlice"
import getBooksReducer from "./features/books/bookSlice"
import borrowBookReducer from "./features/books/borrwowBookSlice";
import getBorrowedBookReducer from "./features/books/getBorrowedBoksSlice";
import getDashboardStatReducer from "./features/books/getDashboardStatSlice";
import getDayToDayCountReducer from "./features/books/getDayToDayCountSlice";
import returnedBookReducer from "./features/books/returnedBookSlice";
import createBooksReducer from "./features/books/createBooksSlice";
import sendOtpReducer from "./features/register/sendOtpSlice";
import verifyOtpReducer from "./features/register/verifyOtpSlice";
import editBookReducer from "./features/books/editBookSlice"
import getBookReducer from "./features/books/singleBookSlice"
export {
    createUserReducer,
    loginUserReducer,
    getUsersReducer,
    getBooksReducer,
    borrowBookReducer,
    getBorrowedBookReducer,
    getDashboardStatReducer,
    getDayToDayCountReducer,
    returnedBookReducer,
    createBooksReducer,
    sendOtpReducer,
    verifyOtpReducer,
    editBookReducer,
    getBookReducer
    
}