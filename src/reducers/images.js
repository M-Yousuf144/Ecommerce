import {
    FETCH_SLIDER_IMAGE,
    FETCH_HOME_BANNER
 } from "../constants/ActionTypes";


const initialState = {
    sliderImages:[],
    sliderBannner:[]
};

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case FETCH_SLIDER_IMAGE:
            return { ...state,
                sliderImages: action.images };
        case FETCH_HOME_BANNER:
            return { ...state,
                sliderBannner: action.banners };
        default:
            return state;
    }
};
export default imageReducer;