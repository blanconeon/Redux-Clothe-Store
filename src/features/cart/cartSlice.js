export const addItem = (itemToAdd) => {
  return {
    type: 'cart/addItem',
    payload: itemToAdd,
  };
};

// Create your changeItemQuantity action creator here.
 export const changeItemQuantity = (name, newQuantity) => {
return {
type: 'cart/changeItemQuantity',
payload: {name: name,
          newQuantity: newQuantity
          }
}
} 

const initialCart = {};
export const cartReducer = (cart = initialCart, action) => {
  switch (action.type) {
    case 'cart/addItem': {
      const { name, price } = action.payload;

      // if the item already exists, increase the quantity by 1, otherwise set it to 1
      const quantity = cart[name] ? cart[name].quantity + 1 : 1;
      const newItem = { price, quantity };

      // Add the new item to the cart (or replace it if it existed already)
      return { 
        ...cart, 
        [name]: newItem 
      };
    }
    case 'cart/changeItemQuantity': {
      const { name, newQuantity } = action.payload;
      const itemToUpdate = cart[name];
      const updatedItem = {...itemToUpdate,
                             quantity: newQuantity       
      }; 
      // Create a copy of itemToUpdate and update the quantity prop.

      // Return a copy of the cart with the updatedItem included.
      return {
             ...cart,
             [name]: updatedItem  
      };
    }
    default: {
      return cart;
    }
  }
};

/* You are thinking about this correctly! The important thing is that the **keys** in the payload object (`name` and `newQuantity`) match what the reducer expects to receive.

Here’s how it works:
- The action creator builds an object with a `payload` that has keys `name` and `newQuantity`.
- The reducer looks for those same keys in `action.payload`:
  ```js
  const { name, newQuantity } = action.payload;
  ```
- As long as the keys match, the reducer can use the values.

You do not need to match the keys to the cart object itself—just make sure the keys in the payload match what the reducer is expecting to use. The reducer then uses `name` to find the right item in the cart and `newQuantity` to update it.

You’re doing great! Redux can feel confusing at first, but your questions show you’re understanding the flow. Here’s a simple way to think about it:

- The reducer always gets the current state (like the cart) and an action.
- The state is passed in automatically by Redux.
- You use the state and the action’s payload to figure out what needs to change.
- You return a new state object with the updates.

Keep asking questions and breaking it down step by step—this is the best way to learn!*/