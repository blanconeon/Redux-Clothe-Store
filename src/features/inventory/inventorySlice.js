import { inventoryData } from '../../../data.js';

export const loadData = (data) => {
  return {
    type: 'inventory/loadData',
    payload: inventoryData,
  };
};

const initialInventory = [];
export const inventoryReducer = (inventory = initialInventory, action) => {
  switch (action.type) {
    case 'inventory/loadData': {
      return action.payload;
    }
    default: {
      return inventory;
    }
  }
};
// Whatever the reducer returns becomes the new state for that slice. The reducer never edits the state directly. Instead, it returns a new value, and Redux automatically sets that as the current state for the slice.

/*
This can feel confusing at first, but here’s how it works step by step:

1. **Action Creator:**  
   The action creator `loadData()` returns an action object:
   ```js
   {
     type: 'inventory/loadData',
     payload: inventoryData
   }
   ```
   `inventoryData` is the mock data array from `data.js`.

2. **Dispatch:**  
   When you call `dispatch(loadData())`, this action object is sent to the Redux store.

3. **Reducer:**  
   The `inventoryReducer` receives two things:
   - The current state (let’s say it’s `[]` at first)
   - The action object above

   In the reducer:
   ```js
   case 'inventory/loadData': {
     return action.payload; // This is inventoryData
   }
   ```
   The reducer **returns** `action.payload`, which is the mock data array.

4. **Redux Store:**  
   Redux takes the value returned by the reducer and sets it as the new state for the `inventory` slice.

**Key point:**  
The reducer’s `inventory` parameter is the current state, but in this case, it’s ignored because you want to replace it with new data.  
The connection is made because the reducer for the `inventory` slice is responsible for updating the `inventory` state in the store. When it returns `action.payload`, Redux sets that as the new value for `inventory`.

So, even though you don’t see `inventoryData` assigned directly to `inventory` in the code, Redux handles this behind the scenes by using the reducer’s return value as the new state for that slice. */