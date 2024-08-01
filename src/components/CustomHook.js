import React , {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

const CustomHook =(refTab =null)=>{

    const thisTab = refTab;
    const activeTab = useSelector(state => state.activeTab);

    useEffect(() =>{
        if(thisTab !==null && thisTab.current.classList.contains(activeTab)){
            thisTab.current.scrollIntoView( {behaviour:'smooth'});
        }
    } ,[activeTab]);
}
export default CustomHook;