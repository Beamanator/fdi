// redux imports
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../store/reducers";
import thunk from "redux-thunk";

// add thunk middleware
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
