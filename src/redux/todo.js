import { createSlice } from '@reduxjs/toolkit'

const todoData = []


export const todoSlice = createSlice({
  name: 'todo',
  initialState: {value: todoData},
  reducers: {
    addTodo: (state, action) => {
        state.value = [...state.value, {id: state.value.length + 1, isDone: false, name: action.payload}]  
    },
    deleteTodo: (state, action) => {
        state.value = state.value.filter(i => i.id !== action.payload)
    },
    completeTodo: (state, action) => {
        state.value = state.value.map(i => {
            if (i.id === action.payload) {
                return {
                    name: i.name,
                    id: i.id,
                    isDone: true
                }
            } else {
                return i
            }
        });
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions

export default todoSlice.reducer