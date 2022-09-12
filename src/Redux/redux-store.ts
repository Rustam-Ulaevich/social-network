import {combineReducers, legacy_createStore as createStore} from "redux"
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
// @ts-ignore
import {usersReducer} from "./users-reducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer, dialogsPage: dialogsReducer, sidebar: sidebarReducer, usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

//window.store = store
