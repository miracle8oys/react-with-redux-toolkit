import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import todoReducer from "./todo";
import authReducer from "./login";

export default configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        login: authReducer
    }
})