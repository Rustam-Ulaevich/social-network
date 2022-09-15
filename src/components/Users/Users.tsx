import styles from './users.module.css'
//import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../imags/download.png'
import React from "react";
import {InitialUsersType, UserType} from "../../Redux/users-reducer";
import {UsersPropsType} from "./UsersContainer";



export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return <>

            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? styles.selectedPage : ''}>{p}</span>
                })}
            </div>

            {this.props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {

                            this.props.unfollow(u.id)
                        }}>UnFollow</button> : <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>


            </div>)}

        </>;
    }

}


