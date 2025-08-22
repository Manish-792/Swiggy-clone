### 🚀 [View Live Demo](https://manish-792.github.io/Swiggy-clone/)

> **⚠️ Important Note on CORS Proxy**
>
> This project fetches live data from Swiggy's API, which has CORS (Cross-Origin Resource Sharing) restrictions. To get around this for development and demonstration, it uses a public CORS proxy.
>
> **You must activate the proxy for the app to work.**
>
> 1.  **Click this link:** [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo)
> 2.  On that page, click the button that says **"Request temporary access to the demo server"**.
> 3.  Once you see the success message, you can return to the project tab. The API data will now load correctly.
>
> You may need to repeat this step every few hours.

🚀 **Swiggy Clone - Live Food Discovery App 

A feature-rich web application built with React, Redux Toolkit, and live Swiggy API data, delivering a seamless food browsing and cart experience.**
==========================

**Swiggy Clone - Live Food Discovery App :** Swiggy Food Ordering System
**A feature-rich web application built with live Swiggy API data:** "Order your favorite food online with ease!"

📖 **Description**
---------------

This project is a frontend clone of Swiggy, one of India's leading food delivery platforms. Built from the ground up with React, it showcases a modern, component-based architecture and demonstrates advanced state management with Redux Toolkit. The application fetches live restaurant and menu data directly from Swiggy's public API, providing a real-world user experience for searching, browsing, and adding items to a cart.

✨ **Features**
-------------

1. Live Restaurant Data: Fetches and displays a list of currently available restaurants from Swiggy's live API.

2. Dynamic Search & Filtering: Instantly search for restaurants or specific food items across the platform.

3. Detailed Restaurant Menus: View comprehensive menus for each restaurant, complete with item details and pricing.

4. Robust Cart Functionality: Add, remove, and update food items in a persistent cart using Redux Toolkit.

5. Shimmer UI Loading: Implements a professional shimmer effect while fetching data to improve user experience.

6. Responsive Design: Ensures a seamless experience across desktop, tablet, and mobile devices.

🧰 **Tech Stack**
--------------

| Category | Technology |
| :--- | :--- |
| Core Frontend | React JavaScript (ES6+) HTML5 CSS3 |
| State Management | Redux Toolkit react-redux |
| Routing | React Router DOM |
| Styling | Tailwind CSS |
| Build Tool | Parcel |
| Code Quality | ESLint Prettier |


⚙️ **How to Run**
----------------

Prerequisites:

Node.js (v18 or later recommended)

npm or yarn package manager

### Setup

1. Clone the repository and navigate to the project directory.
2. Install dependencies by running `npm install` or `yarn install`.
3. Start the application by running `npm start` or `yarn start`.

Local Setup:

## ⚙️ Getting Started

### Prerequisites
* Node.js (v18 or later recommended)
* npm or yarn package manager

### Local Setup
1.  Clone the repository:
    ```bash
    git clone [https://github.com/Manish-792/Swiggy-clone.git](https://github.com/Manish-792/Swiggy-clone.git)
    ```
2.  Navigate to the project directory:
    ```bash
    cd Swiggy-clone
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm start
    ```
The application will then be running at `http://localhost:1234`.

Note: This project uses Swiggy's live public API, so no backend setup or .env file is required to run it.

🧪 **Testing Instructions**
---------------------------

This project is configured with Jest and React Testing Library for component unit testing.

To run the test suite, use the following command:
```bash
npm test
```

📸 **Screenshots**
----------------

## 📸 Demo

<img src="assets/swiggy.gif" alt="Overall flow, design, and functionality of the Website">

### Home Screen

<img width="1899" height="903" alt="image" src="https://github.com/user-attachments/assets/e4c308a0-e53e-4edc-b30e-2d6d1c16f811" />


### Restaurant Menu

<img width="1894" height="906" alt="image" src="https://github.com/user-attachments/assets/194b248b-123c-43a6-b7c9-42cdccccc8b9" />


### Search Food

<img width="1896" height="904" alt="image" src="https://github.com/user-attachments/assets/21bf03ee-62b3-4f12-9ef0-3c5e3de804cf" />

### Checkout

<img width="1919" height="908" alt="image" src="https://github.com/user-attachments/assets/98fd23a4-93cb-4d2d-90a8-952c2f9adf1e" />


📦 **API Reference**
-------------------

### API Endpoints

* `/api/restaurants`: Returns a list of restaurants.
* `/api/menu`: Returns a list of menu items for a specific restaurant.
* `/api/search`: Returns a list of search results for a specific query.

### API Responses

* `200 OK`: The request was successful.
* `404 Not Found`: The requested resource was not found.
* `500 Internal Server Error`: An internal server error occurred.


👤 **Author**
------------
**[Manish](https://github.com/Manish-792)**

📝 **License**
------------

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
