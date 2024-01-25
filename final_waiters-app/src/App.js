import React, { useState } from "react";
import OrderForm from "./components/OrderForm";
import OrdersList from "./components/OrdersList";

const App = () => {
  const [orders, setOrders] = useState([]);

  const addToBill = (order) => {
    // console.log(order);
    setOrders([...orders, order]);
    localStorage.setItem("orders", JSON.stringify([...orders, order]));
  };

  const deleteOrder = (index) => {
    const updatedOrders = orders.filter((order, i) => i !== index);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div>
      <h1>Restaurant Bill App</h1>
      <OrderForm addToBill={addToBill} />
      <OrdersList orders={orders} deleteOrder={deleteOrder} />
    </div>
  );
};

export default App;
