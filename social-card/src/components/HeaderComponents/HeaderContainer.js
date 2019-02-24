import React from 'react';
import HeaderContent from './HederContent';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = props => {
    return (
        <div className='header-container'>
          <div className='header-text'>
            <HeaderTitle />
            <HeaderContent />
          </div>
        </div>
    );
};

export default HeaderContainer;