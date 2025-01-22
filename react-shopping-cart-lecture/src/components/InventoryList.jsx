export default function InventoryList({ name, items, processItem }) {
  let buttonText = "???";
  if (name === "store") {
    buttonText = "Add";
  } else if (name === "cart") {
    buttonText = "Remove";
  }

  return (
    <>
      <h2>{name.toUpperCase()} List</h2>

      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name}, Price: {item.price}
            <button onClick={() => processItem(item)}>{buttonText}</button>
          </li>
        ))}
      </ul>
    </>
  );
}
