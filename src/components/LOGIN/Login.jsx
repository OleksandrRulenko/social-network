import React from 'react';
import s from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { Input, createField } from '../COMMON/FORMS_CONTROLS/FormsControls';
import { required } from '../UTILS/VALIDATORS/validators';
import { connect } from 'react-redux';
import { login } from '../../REDUX/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from "./../COMMON/FORMS_CONTROLS/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error }) => {
    //debugger;
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, { type: "password" })}
            {createField(null, "rememberMe", [required], Input, { type: "checkbox" }, "remember me")}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
            {/* // top code or bottom code //  imported from '../COMMON/FORMS_CONTROLS/FormsControls'*/}
            {/* <div>
                <Field placeholder={"Email"} name={"email"} component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"}
                    type={"password"}
                    component={Input}
                    validate={[required]} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div> */}
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div className={s.pageLoginBox}>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);