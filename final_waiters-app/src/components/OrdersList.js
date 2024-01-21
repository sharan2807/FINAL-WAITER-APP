import React from "react";

const OrdersList = ({ orders, deleteOrder }) => {
  return (
    <div>
      <h2>Table 1</h2>
      {orders.map((order, index) => {
        if (order.table === "Table 1") {
          return (
            <div key={index}>
              <p>
                ID: {order.id} {"-"} Price: {order.price} {"-"} Dish:{" "}
                {order.dish}{" "}
                <button onClick={() => deleteOrder(index)}>Delete</button>
              </p>
            </div>
          );
        }
        return null;
      })}

      <h2>Table 2</h2>
      {orders.map((order, index) => {
        if (order.table === "Table 2") {
          return (
            <div key={index}>
              <p>
                ID: {order.id} {"-"} Price: {order.price} {"-"} Dish:{" "}
                {order.dish}{" "}
                <button onClick={() => deleteOrder(index)}>Delete</button>
              </p>
            </div>
          );
        }
        return null;
      })}

      <h2>Table 3</h2>
      {orders.map((order, index) => {
        if (order.table === "Table 3") {
          return (
            <div key={index}>
              <p>
                ID: {order.id} {"-"} Price: {order.price} {"-"} Dish:{" "}
                {order.dish}{" "}
                <button onClick={() => deleteOrder(index)}>Delete</button>
              </p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default OrdersList;
