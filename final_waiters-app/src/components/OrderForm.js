import React, { useState } from "react";

const OrderForm = ({ addToBill }) => {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [dish, setDish] = useState("");
  const [table, setTable] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id && price && dish && table) {
      addToBill({ id, price, dish, table });
      setId("");
      setPrice("");
      setDish("");
      setTable("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />
      <input
        type="text"
        value={dish}
        onChange={(e) => setDish(e.target.value)}
        placeholder="Dish"
      />
      <select value={table} onChange={(e) => setTable(e.target.value)}>
        <option value="">Choose table</option>
        <option value="Table 1">Table 1</option>
        <option value="Table 2">Table 2</option>
        <option value="Table 3">Table 3</option>
      </select>
      <button type="submit">Add to bill</button>
    </form>
  );
};

export default OrderForm;
