import React, { useState } from "react";

const OrderForm = ({ updateOrders }) => {
  const [order, setOrder] = useState({
    id: "",
    price: "",
    dish: "",
    table: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (order.id && order.price && order.dish && order.table) {
      updateOrders((prevOrders) => [...prevOrders, order]);
      setOrder({ id: "", price: "", dish: "", table: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={order.id}
        onChange={(e) => setOrder({ ...order, id: e.target.value })}
        placeholder="ID"
      />
      <input
        type="text"
        value={order.price}
        onChange={(e) => setOrder({ ...order, price: e.target.value })}
        placeholder="Price"
      />
      <input
        type="text"
        value={order.dish}
        onChange={(e) => setOrder({ ...order, dish: e.target.value })}
        placeholder="Dish"
      />
      <select
        value={order.table}
        onChange={(e) => setOrder({ ...order, table: e.target.value })}
      >
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
