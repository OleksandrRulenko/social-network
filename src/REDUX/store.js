import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "DHow is your it-kam", likesCount: 34},
                {id: 3, message: "it's my first post", likesCount: 4},  
            ],
           newPostText: ''
        },
        
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Dina'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Nims'},
                {id: 4, name: 'Lina'},
                {id: 5, name: 'Lima'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'DHow is your it-kam'},
                {id: 3, message: 'Yop'},
                {id: 4, message: 'Yo yo yo'},
            ],
            newMessageBody: ""

        }
        
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
       // debugger;
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer; //nabludatel / patrn / observer
    },
    

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
//store - OOP