import thunk from "redux-thunk";
import { createStore,combineReducers,applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { uploadMultipleCreateReducer, uploadSingleCreateReducer } from "./reducers/uploadReducer";

const middleware = [thunk]

const initialState = {
    
}

const reducer = combineReducers({
    uploadsingle : uploadSingleCreateReducer,
    uploadmultiple: uploadMultipleCreateReducer
})

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store