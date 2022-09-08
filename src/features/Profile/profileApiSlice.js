import { apiSlice } from "../../app/api/apiSlice";

export const profileApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        profile: builder.query({
            query: (id) => `/profile/${id}/timeline`,
            providesTags: ['Post']
        }), 
        update: builder.mutation({
            query: (update) => ({
                url: `users/updateUser/${update.id}`,
                method: 'PUT',
                body: update
            }),
            invalidatesTags: ['User']
        }),
        users: builder.query({
            query: () => 'users/utf/1',
        }),
        follow: builder.mutation({
            query: (follow) => ({
                url: `users/${follow.id}/follow`,
                method: 'PUT',
                body: follow
            }), 
            invalidatesTags: ['Post', 'User']
        }),
        getUser: builder.query({
            query: (id) => `users/${id}`,
            providesTags: ['User']
        })
    })
})

export const {
    useProfileQuery,
    useUpdateMutation,
    useUsersQuery,
    useFollowMutation,
    useGetUserQuery
} = profileApiSlice