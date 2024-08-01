import React, { useState } from 'react';
import { Connect ,connect,useDispatch } from 'react-redux';
import { changeTabActive } from '../redux/action';

const Navbar = ({activeTab})=>{

    // alert(activeTab);

    
const [listnav]=useState(['Home', 'Skills','Projects','Contacts']);

const dispath=useDispatch();

const changeTab =(item)=>{
   dispath (changeTabActive(item));
}

    return(

        <header>
            <div className='logo'>
                <img src='/logo.png'/>
            </div>
            <nav>
                {
                    listnav.map((item,index)=>(
                       <span index={index} className={activeTab === item ? 'active' : ''} onClick={()=> changeTab(item)}>{item}</span>
                    ))
                }
            </nav>

        </header>
    )
}

const mapStateToProps = (state) => ({
    activeTab: state.activeTab
})
export default connect(mapStateToProps, {changeTabActive})(Navbar);