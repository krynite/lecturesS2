import { useState } from "react";
import { inventoryData } from "../data/data";
import InventoryList from "./InventoryList";

export default function Shop() {
  //? step 2 -> state
  const [store, setStore] = useState(inventoryData.slice(0, 3));
  const [cart, setCart] = useState(inventoryData.slice(5, 7));

  const handleAdd = (item) => {
    console.log("add", item);
    setCart([item, ...cart]);
  };

  const handleRemove = (removeItem) => {
    console.log("remove", removeItem);
    setCart(cart.filter((item) => removeItem._id !== item._id));
  };

  //? step 1 -> mock JSX
  //? step 3 -> render state in JSX
  return (
    <>
      <h1>Shop</h1>

      <InventoryList name="store" items={store} processItem={handleAdd} />
      <InventoryList name="cart" items={cart} processItem={handleRemove} />
    </>
  );
}
