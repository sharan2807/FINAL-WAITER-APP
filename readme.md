# FINAL-WAITER-APP

1. **App.js:**

   - This is the main component where the state (`orders`) is managed using the `useState` hook. The state represents the list of orders.
   - The `addToBill` function is passed down to the `OrderForm` component as a prop, which allows adding new orders to the list.
   - The `deleteOrder` function is also passed down to the `OrdersList` component as a prop, which allows deleting orders from the list.
   - The `localStorage` is used to persist the orders even if the page is refreshed.

2. **OrderForm.js:**

   - This component is responsible for rendering a form to add new orders.
   - It uses the `useState` hook to manage the local state for `id`, `price`, `dish`, and `table`.
   - The `handleSubmit` function is called when the form is submitted. It prevents the default form submission behavior, checks if all the input fields are filled, and then calls the `addToBill` function passed down from the parent (`App.js`) to add the order to the list.
   - The form includes input fields for ID, price, and dish, and a dropdown (`<select>`) for choosing the table.

3. **OrdersList.js:**
   - This component is responsible for displaying the list of orders.
   - It receives the `orders` array and `deleteOrder` function as props from the parent (`App.js`).
   - It renders the orders organized by tables. It maps through the orders and, for each order, checks the table it belongs to and renders it under the corresponding heading (`Table 1`, `Table 2`, `Table 3`).
   - Each order is displayed with its details (ID, price, dish), and a "Delete" button is provided to remove the order from the list by calling the `deleteOrder` function.

In summary, the `App` component manages the state and passes down functions to handle adding and deleting orders. The `OrderForm` component renders a form for adding new orders, and the `OrdersList` component displays the list of orders organized by tables with the ability to delete orders.
