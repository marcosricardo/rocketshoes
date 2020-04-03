export function addToCart(product){
    return {
        type: '@card/ADD',
        product,
    };
}

export function removeFromCart(id){
    return {
        type: '@card/REMOVE',
        id: id,
    };
}

export function updateAmount(id, amount){
    return {
        type: '@card/UPDATE_AMOUNT',
        id,
        amount
    };
}