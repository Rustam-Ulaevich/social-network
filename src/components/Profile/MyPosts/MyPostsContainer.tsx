import React from "react";
import {addPostAC, addTextPostAC} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

// export const MyPostsContainer = () => {
//
//     return <StoreContext.Consumer>
//         { (store) => {
//                         let addPost = () => {
//                 store.dispatch(addPostAC())
//             }
//
//             let onPostChange = (text: string) => {
//                 store.dispatch(addTextPostAC(text))
//             }
//
//             return <MyPosts posts={store.getState().profilePage.postData}
//                             newPostText={store.getState().profilePage.newPostText}
//                             addPost={addPost}
//                             updateNewPostText={onPostChange}/>
//         }}
//         </StoreContext.Consumer>
// }

let mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => dispatch(addPostAC()),
        updateNewPostText: (text: string) => dispatch(addTextPostAC(text))
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

