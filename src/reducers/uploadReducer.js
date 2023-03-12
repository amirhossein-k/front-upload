import {
  SINGLE_REQUEST,
  SINGLE_SUCCESS,
  SINGLE_FAIL,
  MULTIPLE_REQUEST,
  MULTIPLE_SUCCESS,
  MULTIPLE_FAIL,
} from "../constants/upload";


export const uploadSingleCreateReducer = (state={},action)=>{
    switch(action.type){
        case SINGLE_REQUEST:
            return {loading:true}
        case SINGLE_SUCCESS:
            return {loading:false,success:true,single: action.payload}
        case SINGLE_FAIL:
            return {loading:false,erorr:action.payload}
        
        default:
            return state
    }
}
export const uploadMultipleCreateReducer = (state={},action)=>{
    switch(action.type){
        case SINGLE_REQUEST:
            return {loading:true}
        case SINGLE_SUCCESS:
            return {loading:false,success:true,multiple: action.payload}
        case SINGLE_FAIL:
            return {loading:false,erorr:action.payload}
        
        default:
            return state
    }
}