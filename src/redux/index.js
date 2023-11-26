import {configureStore} from "@reduxjs/toolkit"
import {rememberReducer, rememberEnhancer} from "redux-remember"
import auth from "./reducers/auth"
import getMessage from '../redux/reducers/getMessage'
import resMessage from '../redux/reducers/resetMessage'
import sendMessage from '../redux/reducers/sendMessage'

const rememberedKeys = ['auth'];

const store = configureStore({
    reducer: rememberReducer({
        auth,
        getMessage,
        resMessage,
        sendMessage
    }),
    enhancers: [rememberEnhancer(window.localStorage, rememberedKeys,{persistWholeStore: true})]
})

export default store