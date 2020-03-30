import React from 'react';
import Profile from './Profile';
// import * as axios from 'axios';
import { connect } from 'react-redux';
import {getUserProfile, getStatus, updateStatus} from '../../REDUX/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
         if (!userId) {                                   // my koment
            userId = this.props.authorizedUserId;        // my koment
            if (!userId) {
                this.props.history.push("/login");
            }
         }                                                // my koment
        this.props.getUserProfile(userId);
        // setTimeout(() => {
            this.props.getStatus(userId);
        // }, 1000);
    }

    render() {
        console.log("rENDER PROFILE");
        return (
            <Profile {...this.props} 
                    profile={this.props.profile}
                    status={this.props.status} 
                    updateStatus={this.props.updateStatus}/>
        );
    }
};


// let mapStateToProps = (state) => ({
//     profile: state.profilePage.profile,
//     status: state.profilePage.status,
//     authorizedUserId: state.auth.userId,
//     isAuth: state.auth.isAuth
// });

let mapStateToProps = (state) => {            // test
    console.log('mapStatetoProps PROFILE')
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    })
}      // test

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
) (ProfileContainer);

