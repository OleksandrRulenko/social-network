import React from 'react';
import ProMod from'./Profile.module.css';
import MyPostsContainer from './MY_POSTS/MyPostsContainer';
import ProfileInfo from './PROFILE_INFO/ProfileInfo';

const Profile = (props) => {
    // debugger;
    return (
        <div>
            <ProfileInfo profile={props.profile} 
                    status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer  />  
        </div>
    );
}

export default Profile;