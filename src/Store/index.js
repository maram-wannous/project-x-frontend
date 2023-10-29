import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import reduxThunk from 'redux-thunk'


const reducers = {
    reducer : {
        // loading: loadingSlice,
    },
};

const store = configureStore(reducers, applyMiddleware(reduxThunk));

export default store;