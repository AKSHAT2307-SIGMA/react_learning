import {createSlice, nanoid} from '@reduxjs/toolkit'; //importing createSlice and nanoid from redux toolkit

const initialState = {      //defining initial state of the slice 
    todos : [{id :1 ,text : "hello todo"}]
}

export const todoSlice = createSlice({
    name : 'todos',
    initialState,
    reducers : {
        addTodo : (state, action) =>{   //action is an object that contains type and payload, state is the current state of the slice
            const todo = {
            id:nanoid(),
            text: action.payload   //payload is the text sent from the component it just like props and object
            }
            state.todos.push(todo)   //pushing the new todo to the todos array in the state
        },
        removeTodo : (state, action) =>{
             state.todos = state.todos.filter((todo) =>
             todo.id !== action.payload) //filtering out the todo with the id sent in the payload
        },
        editTodo : (state, action) =>{
            const {id, text} = action.payload
            const existingTodo = state.todos.find((todo) => todo.id === id)
            if(existingTodo){
                existingTodo.text = text //updating the text of the todo with the id sent in the payload
            }
        } 


    }})   
    
    export const {addTodo, removeTodo, editTodo} = todoSlice.actions //exporting the actions 
    // to be used in the components

    export default todoSlice.reducer //exporting the reducer to be used in the store