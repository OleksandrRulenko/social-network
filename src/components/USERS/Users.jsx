import React from 'react';
import s from './users.module.css';
import Paginator from '../COMMON/PAGINATOR/Paginator';
import User from './User';

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChenged, users, ...props }) => {
    return <div className={s.usersPage}>
        <Paginator currentPage={currentPage} onPageChenged={onPageChenged}
            totalItemsCount={totalUsersCount} pageSize={pageSize} />
        <div>
            {
                users.map(u => <User user={u}
                    followingInProgress={props.followingInProgress}
                    key={u.id}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />)
            }
        </div>
    </div>
}

export default Users;