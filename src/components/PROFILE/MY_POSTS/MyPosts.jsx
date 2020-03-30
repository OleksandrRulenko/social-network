import React, { PureComponent } from 'react';
import Post from './POST/Post'
import s from './MyPosts.module.css';
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from '../../UTILS/VALIDATORS/validators';
import { Textarea } from '../../COMMON/FORMS_CONTROLS/FormsControls';


const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <p>{props.name}</p>
            <div>
                <Field name="newPostText"
                    component={Textarea}
                    placeholder={"Post message"}
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewForm" })(AddNewPostForm);

const MyPosts = React.memo(props => {

    let postsElements =
        [...props.posts].reverse().map(p =>
            <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <main className={s.content}>
            <h2>My posts </h2>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </main>
    );
});


export default MyPosts;