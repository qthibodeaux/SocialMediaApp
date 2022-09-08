import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: 'profile',
    initialState: { profilePicture: null, coverPicture: null, about: null, followers: null, following: null },
    reducers: {
        setProfile: (state, action) => {
            const { profilePicture, coverPicture, about, followers, following } = action.payload
            state.profilePicture = profilePicture
            state.coverPicture = coverPicture
            state.about = about
            state.followers = followers
            state.following = following
        },
        clearProfile: (state, action) => {
            state.profilePicture = null
            state.coverPicture = null
            state.about = null
            state.followers = null
            state.following = null
        }
    }
})

export const { setProfile, clearProfile } = profileSlice.actions

export default profileSlice.reducer

export const selectCurrentAbout = (state) => state.profile.about
export const selectCurrentCoverPicture = (state) => state.profile.coverPicture
export const selectCurrentProfilePicture = (state) => state.profile.profilePicture
export const selectCurrentFollowers = (state) => state.profile.followers
export const selectCurrentFollowing = (state) => state.profile.following


