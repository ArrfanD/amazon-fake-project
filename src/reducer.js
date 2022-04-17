
export const initialState = {
    basket: [],
}

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => amount + item.price, 0)

export function getAmount(basket) {
    return basket.reduce((amount, item) => amount + item.price, 0)

}


const reducer = (state, dispatch) => {
    
    switch(dispatch.type) {
        
        case 'ADD_TO_BASKET':
            console.log(state.basket)
            return {
                
                ...state, 
                basket: [...state.basket, dispatch.item]
            }

            
        case 'REMOVE__FROM__BASKET':
            
            let newBasket = [...state.basket]

            const newArr = newBasket.filter(item => item.id !== dispatch.id)
            
            return {
                ...state, 
                basket: newArr, 
            }
            
            default:
                return state;

                
    }
}
    
export default reducer;