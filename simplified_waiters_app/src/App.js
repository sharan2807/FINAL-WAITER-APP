// App.js
import React, { useState, useEffect } from "react";
import OrderForm from "./components/OrderForm";
import OrdersList from "./components/OrdersList";

const App = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    try {
      const storedOrders = localStorage.getItem("orders");

      // Check if storedOrders is not undefined and not null before parsing
      const parsedOrders = storedOrders ? JSON.parse(storedOrders) : [];

      // Ensure that parsedOrders is an array
      if (Array.isArray(parsedOrders)) {
        setOrders(parsedOrders);
      } else {
        console.warn("Parsed orders is not an array:", parsedOrders);
        setOrders([]);
      }
    } catch (error) {
      // Handle JSON parsing error
      console.error("Error parsing JSON from local storage:", error);
      setOrders([]);
    }
  }, []); // Empty dependency array to run the effect only once on mount

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
