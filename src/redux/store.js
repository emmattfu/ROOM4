import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './rootReducer';
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export default store


// API key	afc590534ac17c4c61701a3f2c931fd8
// Shared secret	bf708399d4d3b6d1f245dd45abe1d409