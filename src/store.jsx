import {configureStore} from '@reduxjs/toolkit';
import selectorReducer from './components/Selectorsplice';

const store = configureStore({
    reducer: {
        theme: selectorReducer
    }
});

export {store};