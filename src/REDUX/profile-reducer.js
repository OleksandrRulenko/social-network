import { userAPI, profileAPI } from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "DHow is your it-kam", likesCount: 34 },
        { id: 3, message: "it's my first post", likesCount: 4 },
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST:
            return { ...state, posts: state.posts.filter(p => p.id != action.id) }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: 'ADD-POST', newPostText });
export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile });
export const setStatus = (status) => ({ type: 'SET_STATUS', status });
export const deletePost = (postId) => ({ type: 'DELETE_POST', postId });

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;