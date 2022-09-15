import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC, InitialUsersType, setUsersAC, unfollowAC, UserType} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    usersPage: InitialUsersType
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number)=>void
    setUsers: (users: Array<UserType>)=>void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
}
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {dispatch(followAC(userId))},

        unfollow: (userId: number) => {dispatch(unfollowAC(userId))},

        setUsers: (users: Array<UserType>) => {dispatch(setUsersAC(users))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
