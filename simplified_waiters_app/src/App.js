import React, { useState, useEffect } from "react";
import OrderForm from "./components/OrderForm";
import OrdersList from "./components/OrdersList";

const App = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const updateOrders = (updatedOrders) => {
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div>
      <OrderForm updateOrders={updateOrders} />
      <h2>Orders</h2>
      <OrdersList orders={orders} updateOrders={updateOrders} />
    </div>
  );
};

export default App;
