import { combineReducers } from "redux";
import BasketReducer from "./myPageReducer";

const rootReducer = combineReducers({
    BasketReducer,
    // 밑에 계속 리듀서 추가
});

export default rootReducer;
