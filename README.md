# e-plantShopping

## 🌿 Paradise Nursery Shopping Application

e-plantShopping is a React + Redux based shopping cart application for an online plant store called **Paradise Nursery**.

This project demonstrates:

- React functional components
- Component composition and nesting
- React Hooks (useState, useEffect)
- Redux Toolkit for global state management
- Dynamic rendering using map()
- Event handling and conditional rendering

---

## 🛒 Features

### 🏠 Landing Page
- Welcome message for Paradise Nursery
- Background image
- “Get Started” button to enter the shop

### 🌱 Product Listing Page
- Multiple plant categories:
  - Air Purifying Plants
  - Aromatic Fragrant Plants
  - Insect Repellent Plants
  - Medicinal Plants
  - Low Maintenance Plants
- Minimum 6 plants per category
- Each plant displays:
  - Image
  - Name
  - Description
  - Cost
- Add to Cart button:
  - Adds item to cart using Redux
  - Gets disabled after adding
  - Changes label to "Added"

### 🛍 Shopping Cart Page
- Displays all selected plants
- Shows:
  - Plant image
  - Name
  - Unit price
  - Quantity
  - Subtotal per item
- Features:
  - Increase quantity
  - Decrease quantity
  - Delete item
  - Continue Shopping button
  - Checkout button (Coming Soon)
- Dynamically updates:
  - Cart total amount
  - Cart icon quantity badge

---

## 🧠 Redux Implementation

Redux Toolkit is used to manage global cart state.

### CartSlice includes:
- addItem()
- removeItem()
- updateQuantity()

The Redux store is configured in `store.js` and provided globally using:

```jsx
<Provider store={store}>
  <App />
</Provider>



Author

Developed as part of the IBM React + Redux Final Project.

Repository Name: e-plantShopping
