import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addAnswer, deleteAnswer, getAllAnswer, toggleAnswer } from "../../services/todoService";

export const fetchAnswersThunk = createAsyncThunk('todos/getAll', async () => { // pake thunk kalo ada proses async
    return await getAllAnswer();
})

export const addAnswerThunk = createAsyncThunk('todos/addAnswer', async (title) => {
    return await addAnswer(title);
})

export const toggleAnswerThunk = createAsyncThunk('todos/toggleAnswer', async (id) => {
    return await toggleAnswer(id);
})

export const deleteAnswerThunk = createAsyncThunk('todos/deleteAnswer', async (id) => {
    return await deleteAnswer(id);
})

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        loading: false,
        error: null
    }, // buat state awal
    reducers: {}, // buat reducer, dipakai untuk yg gak async
    extraReducers: (builder) => { // buat extra reducer, dipakai untuk yg async
        builder
        .addCase(fetchAnswersThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchAnswersThunk.fulfilled, (state, action) => {
            state.loading = false
            state.items = action.payload
        })
        .addCase(fetchAnswersThunk.rejected, (state) => {
            state.loading = false
            state.error = "Failed to fetch data"
        })
        .addCase(addAnswerThunk.fulfilled, (state, action) => {
            state.items.push(action.payload)
        })
        .addCase(toggleAnswerThunk.fulfilled, (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        })
        .addCase(deleteAnswerThunk.fulfilled, (state, action) => {
            state.items = state.items.filter((todo) => todo.id !== action.payload);
        })
    }        
})

export default todoSlice.reducer;