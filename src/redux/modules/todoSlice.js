import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getTodoThunk = createAsyncThunk(
    "GET_TODO", //action value
    async (payload, thunkAPI) => { //콜백
        try{
            const data = await axios.get("http://localhost:3001/todos");
            console.log(data)
            return thunkAPI.fulfillWithValue(data.data);
            
        }catch (error) {
            return thunkAPI.rejectWithValue(error);
        }}
    );

export const __updateTodoThunk = createAsyncThunk(
    "UPDATE_TODO", //action value
    async (payload, thunkAPI) => { //콜백
        try{
            await axios.patch(`http://localhost:3001/todos${payload.id}`,payload);  //patch (Update)
            return thunkAPI.fulfillWithValue(payload);
        }catch(error){
            return thunkAPI.rejectWithValue(error);
        }}
);


const initialState = {
    todo: {
        id: 0,
        body: "",
        user: "",
        title: "",
    },
    error: null,
    isLoading: false,
};

export const todoSlice = createSlice({
    name: "todo", //모듈
    initialState,
    reducers: {}, //action value + action creator
    extraReducers:{
        [__getTodoThunk.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.todo = action.payload;
        },
        [__getTodoThunk.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [__getTodoThunk.pending]: (state) => {
            state.isLoading = true;
        },
        [__updateTodoThunk.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.todo = action.payload;
        },
        [__updateTodoThunk.pending]: (state) => {
            state.isLoading = true;
        },
        [__updateTodoThunk.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;