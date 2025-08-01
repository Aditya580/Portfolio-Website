import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeTabActive } from '../redux/action';

const Navbar = ({ activeTab, changeTabActive }) => {
  const [listnav] = useState(['Home', 'Skills', 'Projects', 'Contacts']);

  const changeTab = (item) => {
    changeTabActive(item);
  };

  return (
    <header>
      <div className='logo'>
        <img src='/logo.png' alt='Logo' />
      </div>
      <nav>
        {listnav.map((item, index) => (
          <span
            key={index}
            className={activeTab === item ? 'active' : ''}
            onClick={() => changeTab(item)}
          >
            {item}
          </span>
        ))}
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, { changeTabActive })(Navbar);
