const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState ={
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return { 
                ...state,
                messages: [ ...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: 'SEND_MESSAGE', newMessageBody});

export default dialogsReducer