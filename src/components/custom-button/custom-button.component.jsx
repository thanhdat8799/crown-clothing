import React from 'react';

import './custom-button.styles.scss';


const CustomButton = ({children, googleButton, ...otherProps}) => (
    
        <button {...otherProps} 
        className={`${googleButton ? 'google-button' : ''} custom-button`}>
                {children}
        </button>
   
)

export default CustomButton;