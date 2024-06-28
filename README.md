# E-Store-App
E-store app is a web application that allows users to view and manage products in the E-store app. It provides features for adding new products, viewing details of products, seraching them and add to cart with as much quntity they like, also can create order with products they add to the cart. Also they can register an account and login with it and work with features.

## Technologies Used

- Frontend: React + Typescript
- Backend: NestJS w/ TypeORM
- Database: PostgreSQL

## How to start it

### Prerequisites

- Node.js 
- PostgreSQL

### Installation

1. First clone the repository
2. Install dependencies for the frontend:
cd /client , and then npm install
3. Install dependencies for the backend:
cd ../server , and then npm install
4. Create a PostgreSQL database named `e-store-db` and check .env file.


### Usage 

( open two termialns, for better work)
1. Start the backend server: npm run start:dev
2. Start the frontend server: npm run dev
3. Open your web browser and visit front-end url to access E-store app.

## Features

- View a list of products in the products page
- View a details for every product  in another page
- Add new products with thier information and image ( preview )
- Dynamic url query search bar by thier title
- Adding products to the cart and mange thier quntity
- Create an order with all products information from cart
- Fully functional authentication and registration
- Different actions depending if you are logged in 
