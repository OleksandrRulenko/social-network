import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DIALOG_ITEM/DialogItem.jsx"
import Message from "./MESSAGE/Message.jsx"
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../COMMON/FORMS_CONTROLS/FormsControls";
import { maxLengthCreator, required } from "../UTILS/VALIDATORS/validators";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    //let dialogsElements = dialogsData.map ( dialog => <DialogItem name={dialog.name} id={dialog.id}/> ); // skoroczenyj wariant nyżniogo kodu
    let dialogsElements = state.dialogsData.map((d) => {
        return <DialogItem name={d.name} key={d.id} id={d.id} />
    });

    let messagesElements = state.messages.map((message) => {
        return <Message message={message.message} key={message.id} />
    });
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} 
                        validate={[required, maxLength50]}
                        name="newMessageBody"
                        placeholder="Enter your message" />
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm);

export default Dialogs;