import React from 'react'
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { changeTheme } from './Selectorsplice';

const Toggleselector = () => {

    const currentTheme = useSelector((state) => state.theme.currentTheme);

    const theme = {
        container: currentTheme+' container',
        outer: currentTheme+' outer',
        inner: currentTheme+ ' inner',
    }

    const dispatch = useDispatch(); 

    function changeThemeHere() {
        let newTheme = currentTheme=='light'?'dark':'light';
        dispatch(changeTheme(newTheme));
    }

    return (
        <div className={theme.container}>
            <div onClick={changeThemeHere} className={theme.outer}>
                <div className={theme.inner} onClick={changeThemeHere}></div>
            </div>
        </div>
    )         
}

export default Toggleselector
