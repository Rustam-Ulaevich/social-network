import React from "react";
import {addPostAC, addTextPostAC} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

type PropsType = {

}

export const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        { (store) => {
            let state = store.getState()

            let addPost = () => {
                store.dispatch(addPostAC())
            }

            let onPostChange = (text: string) => {
                store.dispatch(addTextPostAC(text))
            }

            return <MyPosts posts={store.getState().profilePage.postData}
                            newPostText={store.getState().profilePage.newPostText}
                            addPost={addPost}
                            updateNewPostText={onPostChange}/>
        }}
        </StoreContext.Consumer>


}

