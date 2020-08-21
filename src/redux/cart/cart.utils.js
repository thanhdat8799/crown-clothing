export const addItemToCart = (cartItems, itemToAdd) => {
    const isCartItemExist = cartItems.find(item => (item.id === itemToAdd.id));

    if(isCartItemExist) {
        return cartItems.map(item => item.id === itemToAdd.id ?
            {...item, quantites: item.quantites+=1}
            : item)
    }
    else {
        return [...cartItems, {...itemToAdd, quantites: 1}];
    }
};