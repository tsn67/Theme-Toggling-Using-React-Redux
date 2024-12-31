import React from 'react'
import {Provider} from 'react-redux'
import { store } from '../store'
import Toggleselector from './Toggleselector';

const App = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <Toggleselector></Toggleselector>
            </Provider>
        </React.StrictMode>
    )
}

export default App;
