export default function UserInventory({ cart, handleRemove }) {
  return (
    <>
      <h2>User Inventory</h2>

      <ul>
        {cart.map((item) => (
          <li key={item._id}>
            {item.name}, Price: {item.price}
            <button onClick={() => handleRemove(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}
