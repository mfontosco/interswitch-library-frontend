import { combineReducers } from "@reduxjs/toolkit";
import {getBookReducer,editBookReducer,verifyOtpReducer,sendOtpReducer,createBooksReducer, returnedBookReducer,getBooksReducer, getBorrowedBookReducer,createUserReducer,loginUserReducer,getUsersReducer, borrowBookReducer, getDashboardStatReducer, getDayToDayCountReducer } from "./combineImports";

console.log("-----",getUsersReducer)
const reducers = combineReducers({
    createUser:createUserReducer,
    loginUser: loginUserReducer,
    getUsers : getUsersReducer,
    getBooks : getBooksReducer,
    borrowBook: borrowBookReducer,
    borrowedBooks :getBorrowedBookReducer,
    dashStats: getDashboardStatReducer,
    dailyCount: getDayToDayCountReducer,
    returned: returnedBookReducer ,
    createBooks: createBooksReducer,
    sendOtp: sendOtpReducer,
    verifyOtp:verifyOtpReducer,
    editBook: editBookReducer,
    getBook: getBookReducer
})

export {reducers}   