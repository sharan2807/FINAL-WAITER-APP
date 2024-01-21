Changes made:

Combined id, price, dish, and table into a single order state object in OrderForm for better organization.
Updated the updateOrders function to take the previous orders as an argument, providing a more reliable way to update the state based on the previous state.
Moved the deleteOrder function inside OrdersList for better encapsulation.
Removed repetitive code in the OrdersList component by using the map function with a single component rendering block.

Let's go through each component and explain the code in detail.

### App.js:

#### Explanation:

- `App` is the main component that holds the state for orders using the `useState` hook.
- The `useEffect` hook is used to retrieve orders from local storage when the component mounts.
- `updateOrders` is a function passed down to child components to update the orders state and local storage.
- The component renders `OrderForm` and `OrdersList` components, passing down the `updateOrders` function and the `orders` state as props.

### OrderForm.js:

#### Explanation:

- `OrderForm` is a functional component responsible for rendering a form to input order details.
- `order` is a state object that holds the values for ID, price, dish, and table.
- The `handleSubmit` function is called when the form is submitted. It checks if all fields are filled, updates the orders using the `updateOrders` function, and resets the form.
- The form includes input fields for ID, price, dish, and a dropdown for choosing the table.

### OrdersList.js:

#### Explanation:

- `OrdersList` is a functional component responsible for rendering the list of orders organized by tables.
- The `deleteOrder` function is used to remove an order based on its index.
- The component uses the `map` function to iterate through tables and orders, rendering them accordingly.
- Each order is displayed with its details, and a "Delete" button is provided to remove the order using the `deleteOrder` function.

In summary, this application consists of an `App` component that manages the state, an `OrderForm` component for adding new orders, and an `OrdersList` component for displaying and deleting orders organized by tables. The code structure has been improved for better organization and readability.
