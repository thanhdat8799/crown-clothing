import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(item => (<CartItem key={item.key} item={item}/>))}
        </div>
        
        <CustomButton>Check out</CustomButton>
    </div>
);


const mapDispatchToProps = ({cart: {cartItems}}) => ({
    cartItems
});

export default connect(mapDispatchToProps)(CartDropdown);