# Pizza Store App

![Alt Text](https://media.giphy.com/media/CDIPB3jWHKGzS5aGSh/giphy.gif)

Pizza store app built using MERN stack.

# Features

- shopping cart for viewing and editing order
- ability to create account (admin and user accounts)
- View list of products, users accounts, orders (admin only)
- PayPal/credit card integration
- user order history page
- easy navigation for finding products

# Bugs/Future Features

- ordering multiple variations of same item
- migrating from create-react-app to next.js

# Env Variables

Create a .env file in then root and add the following

NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id

# Install Dependencies (frontend & backend)

npm install
cd frontend
npm install

# Run frontend (:3000) & backend (:5000)

npm run dev

# Run backend only

npm run server

# Build & Deploy

Create frontend prod build
cd frontend
npm run build

# License

The MIT License

Copyright (c) 2021 Joe Enright

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
