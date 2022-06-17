import {
   
   USERS_DETAILS,
} from "../constants/ActionTypes";


const initialState = {
    user: [],

};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case USERS_DETAILS:
            return { ...state,
                user: action.user };

       

        default:
            return state;
    }
};
export default userReducer;