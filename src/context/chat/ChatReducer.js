import { types } from "../../types/types";

export const ChatReducer = ( state, action ) => {

    switch (action.type) {
        case types.uploadedUsers:
            return {
                ...state,
                users: [ ...action.payload ]
            }
        case types.chatActive:
            if( state.activeChat === action.payload ) return state;
            return {
                ...state,
                activeChat: action.payload,
                messages: []
            }
        default:
            {};
    }
}
