import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'post',
    initialState: { post: null  },
    reducers: {
        setPost: (state, action) => {
            const { post } = action.payload
            state.post = post
        },
    }
})

export const { setPost } = postSlice.actions

export default postSlice.reducer

export const selectCurrentPost = (state) => state.post.post