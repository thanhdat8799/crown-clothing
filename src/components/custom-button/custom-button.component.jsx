import React from 'react';

import './custom-button.styles.scss';


const CustomButton = ({children, googleButton, inverted, ...otherProps}) => (
    
        <button {...otherProps} 
        className={` ${inverted ? 'inverted' : ''}
        ${googleButton ? 'google-button' : ''} custom-button`}>
                {children}
        </button>
   
)

export default CustomButton;