import React from 'react';
import {connect} from 'react-redux';
import { 
    follow, 
    unfollow,  
    setCurrentPage, 
    toggleFollowingProgress,
    requestUsers
     } from '../../REDUX/users-reducer';
import Users from './Users.jsx';
import Preloader from '../COMMON/PRELOADER/Preloader';
import { compose } from 'redux';
import {  getUsers, getPageSize, getTotalUsersCount, 
    getCurrentPage, getIsFetching, getFollowingInProgress, } from './../../REDUX/users-selectors';

    // ../../REDUX/users-selectors'
class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChenged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {

        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users   totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            onPageChenged={this.onPageChenged}
                            users={this.props.users}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                            followingInProgress={this.props.followingInProgress}
            />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    //withAuthRedirect,
    connect (mapStateToProps,  {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: requestUsers
        })
) (UsersContainer);