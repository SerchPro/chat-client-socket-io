import { types } from "../../types/types";

export const ChatReducer = ( state, action ) => {

    switch (action.type) {
        case types.uploadedUsers:
            return {
                ...state,
                users: [ ...action.payload ]
            }
        default:
            {};
    }
}
