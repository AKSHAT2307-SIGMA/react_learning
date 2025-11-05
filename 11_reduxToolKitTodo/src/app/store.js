import {configureStore} from '@reduxjs/toolkit'; //importing configureStore from redux 
// toolkit for creating store 
import todoReducer from '../features/todoSlice'; //importing the todo reducer from the todo slice


export const store = configureStore({

    reducer : todoReducer  //adding the todo reducer to the store 
})