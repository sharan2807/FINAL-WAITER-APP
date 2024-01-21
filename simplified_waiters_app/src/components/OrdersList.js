import React from "react";

const OrdersList = ({ orders, updateOrders }) => {
  const deleteOrder = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    updateOrders(updatedOrders);
  };

  return (
    <div>
      {["Table 1", "Table 2", "Table 3"].map((table) => (
        <div key={table}>
          <h2>{table}</h2>
          {orders.map((order, index) =>
            order.table === table ? (
              <div key={index}>
                <p>
                  ID: {order.id} - Price: {order.price} - Dish: {order.dish}{" "}
                  <button onClick={() => deleteOrder(index)}>Delete</button>
                </p>
              </div>
            ) : null
          )}
        </div>
      ))}
    </div>
  );
};

export default OrdersList;
