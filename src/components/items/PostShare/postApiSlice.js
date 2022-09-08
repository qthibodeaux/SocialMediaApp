import { apiSlice } from "../../../app/api/apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        post: builder.mutation({
            query: (post) => ({
                url: `/profile/${post._id}/createpost`,
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        likedPost: builder.mutation({
            query: (like) => ({
                url: `/profile/${like.userId}/like`,
                method: 'PUT',
                body: like
            }),
            invalidatesTags: ['Post']
        }),
        myPost: builder.query({
            query: (id) => `/profile/p/${id}`
        })
    })
})

export const {
    usePostMutation,
    useLikedPostMutation,
    useMyPostQuery
} = postApiSlice