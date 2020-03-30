import React from 'react';
import s from'./Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://st.motortrend.com/uploads/sites/10/2016/06/2017-ford-mustang-v6-coupe-angular-front.png" alt=""/>
                <span> {props.message} </span>
                {/* <span> {props.message} </span> */}
            <div>
             <span> like {props.likesCount}</span>
            </div>
            
            
        </div>

    
    );
}

export default Post;