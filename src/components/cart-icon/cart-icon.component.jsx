import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {ReactComponent as ShoppingIcon} from '../../assets/11.2 shopping-bag.svg.svg';

import './cart-icon.styles.scss';

import {selectCartItemsCount} from '../../redux/cart/cart.selectors';



const CartIcon = ({toggleCartHidden, cartItemsCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'  />
        <span className="item-count">{cartItemsCount}</span>
    </div>
)

const mapStateToProps = state => ({
    cartItemsCount: selectCartItemsCount(state)
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);