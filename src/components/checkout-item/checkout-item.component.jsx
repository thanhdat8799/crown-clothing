import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {removeItem, addItem, decreaseQuantity} from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem: {imageUrl,name, quantity, price,}, removeItem, cartItem, addItem, decreaseQuantity}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <div className="name">{name}</div>
        <div className="quantity">
            <div className="arrow" onClick={() => {decreaseQuantity(cartItem)}}>&#10094;</div>
            <div className="value">{quantity}</div>
            <div className="arrow" onClick={()=> addItem(cartItem)}>&#10095;</div>
        </div>
        <div className="price">{price}</div>
        <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    decreaseQuantity: item => dispatch(decreaseQuantity(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);