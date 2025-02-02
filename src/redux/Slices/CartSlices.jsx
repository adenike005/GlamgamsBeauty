import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
}

const CartSlices = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems:(state, action)=>{
        const newItem = action.payload
        const existingItem = state.cartItems.find(item => item.id === newItem.id);
        state.totalQuantity++

        if(!existingItem){
            state.cartItems.push({
                id: newItem.id,
                productName : newItem.productName,
                image : newItem.image,
                price : newItem.price,
                quantity : 1,
                totalPrice: newItem.price
            })
        }

        else{
            existingItem.quantity++
            existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
        }
        state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity)
    );
    console.log(state.totalQuantity)
    console.log(state.cartItems)
    console.log(newItem)
    }
  }
});

export const cartActions = CartSlices.actions

export default CartSlices.reducer