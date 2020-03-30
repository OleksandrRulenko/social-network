




// test 1-------------------------------------

import profileReducer from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "DHow is your it-kam", likesCount: 34 },
        { id: 3, message: "it's my first post", likesCount: 4 },
        { id: 4, message: "Data", likesCount: 3 },
    ]
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("rulenko.com");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe("rulenko.com");
});


it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});
