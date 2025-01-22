import { useState } from "react";
import { inventoryData } from "../data/data";

export default function ShopInventory({ handleAdd }) {
  const [store, setStore] = useState(inventoryData.slice(0, 3));

  return (
    <>
      <h2>Shop 2 Inventory</h2>
      <ul>
        {store.map((item) => (
          <li key={item._id}>
            {item.name}, Price: {item.price}
            <button onClick={() => handleAdd(item)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
}
