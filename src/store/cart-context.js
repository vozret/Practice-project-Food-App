import React from "react";

// we won't use elemets from this object, but it is good
// for autocompletion
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
