Svelte Commerce
Svelte Commerce is a modern e-commerce website built as a project for the University of Pécs. The application allows users to browse products by category, add items to a cart, and securely checkout using Stripe. It fulfills the professor's requirement of storing data on a server in either a database or a text file, with queries executed using SQL or NoSQL. This project uses a JSON file (data.json) for data storage and queries the data using JavaScript (a NoSQL approach).
Features

Product Browsing: View a list of products on the home page and filter by category.
Category Navigation: Browse products by categories like Electronics and Clothing.
Shopping Cart: Add products to a cart and view the total price.
Stripe Checkout: Securely checkout using Stripe's payment gateway with test mode support.
About Page: Learn about the store, its mission, history, and team with an engaging layout.
Responsive Design: Fully responsive layout using Tailwind CSS, ensuring a seamless experience on mobile and desktop.
Data Storage: Stores product and category data in a JSON file (data.json) on the server, meeting the professor's requirement for server-side data storage in a text file.
NoSQL Queries: Queries the JSON data using JavaScript (e.g., Array.find, Array.filter), satisfying the NoSQL query requirement.

Tech Stack

Framework: SvelteKit (Svelte framework with built-in routing and server-side rendering)
Styling: Tailwind CSS for responsive and modern UI design
Data Storage: JSON file (data.json) for storing products and categories
Data Querying: JavaScript (NoSQL approach) for querying the JSON data
Payment Gateway: Stripe for secure checkout
Environment Variables: Managed via a .env file for sensitive data like Stripe API keys
Node.js: Backend runtime for SvelteKit server routes

Setup Instructions
Prerequisites

Node.js: Version 18.x or higher (tested with v18.20.8)
npm: Comes with Node.js
Stripe Account: Required for the checkout feature (you’ll need a test API key)

Installation

Clone the Repository (if applicable):
git clone <repository-url>
cd XIOLEB_SVELTE

If you’re working locally, navigate to your project directory:
cd ~/Documents/XIOLEB_SVELTE


Install Dependencies:
npm install


Set Up Environment Variables:Create a .env file in the project root:
touch .env

Add the following environment variables to the .env file:
STRIPE_API_KEY="sk_test_your_stripe_test_key"
HOSTNAME="http://localhost:5173"
API_VERSION="2023-10-16"


Replace sk_test_your_stripe_test_key with your Stripe test API key. You can get this from the Stripe Dashboard:
Sign up/login at https://stripe.com.
Go to Developers > API Keys in Test Mode.
Copy the Secret key (starts with sk_test_).




Set Up Stripe Price IDs:

In the Stripe Dashboard, go to Product Catalog > Products.
Create two products matching the ones in data.json:
Laptop: Price $999.99 (one-time)
T-Shirt: Price $19.99 (one-time)


Copy the Price IDs for each product (e.g., price_1YourLaptopPriceID).
Update data.json with the correct Price IDs:{
  "categories": [
    { "id": 1, "name": "Electronics", "slug": "/electronics" },
    { "id": 2, "name": "Clothing", "slug": "/clothing" }
  ],
  "products": [
    {
      "id": 1,
      "name": "Laptop",
      "price": 999.99,
      "description": "A high-performance laptop",
      "image": "/no-image.png",
      "stripe_id": "price_1YourLaptopPriceID",
      "categoryId": 1
    },
    {
      "id": 2,
      "name": "T-Shirt",
      "price": 19.99,
      "description": "A comfortable cotton t-shirt",
      "image": "/no-image.png",
      "stripe_id": "price_1YourTShirtPriceID",
      "categoryId": 2
    }
  ]
}




Ensure Static Assets:The project uses the following images in the static/ directory:

/shopping-cart.png (cart icon in the header)
/delete-icon.png (remove item from cart)
/logo.png (site logo in the header)
/no-image.png (fallback image for products and team members)If any of these are missing, either add them to the static/ directory or replace their references with /no-image.png.


Run the Development Server:
npm run dev

Open your browser and navigate to http://localhost:5173.


Usage

Home Page (/): View all products.
Categories (/categories): Browse products by category (e.g., /categories/electronics).
Product Page (/product/[id]): View product details and add to cart.
Cart (/cart): View cart items and proceed to checkout.
Checkout: Securely checkout using Stripe (use test card 4242 4242 4242 4242, any future expiry date, and any 3-digit CVC).
About Page (/about): Learn about the store, its mission, history, and team.

Project Structure

data.json: Stores products and categories in a JSON format, meeting the professor's requirement for server-side data storage in a text file.
src/lib/data.js: Helper functions to read/write to data.json, implementing NoSQL queries with JavaScript.
src/routes/api/: API routes for fetching products, categories, and handling checkout.
products/+server.js: Fetches all products.
products/[id]/+server.js: Fetches a single product by ID.
categories/+server.js: Fetches all categories.
categories/[slug]/+server.js: Fetches a category and its products by slug.
checkout/+server.js: Handles Stripe checkout.


src/routes/: SvelteKit routes for the frontend pages.
+page.svelte: Home page (product listing).
about/+page.svelte: About page with mission, story, team, and call to action.
cart/+page.svelte: Cart page.
categories/+page.svelte & categories/[slug]/+page.svelte: Category browsing.
product/[id]/+page.svelte: Product details page.
payment-success/+page.svelte & payment-canceled/+page.svelte: Payment result pages.


src/lib/components/: Reusable Svelte components (e.g., CartButton.svelte, ShopCard.svelte).
static/: Static assets like images (shopping-cart.png, logo.png, etc.).

Future Improvements

Database Integration: Switch to a database (e.g., SQLite or PostgreSQL) for better performance and concurrency in production.
Admin Interface: Add an admin section to manage products and categories (e.g., add, edit, delete).
Search Functionality: Implement a search bar to find products by name or category.
User Accounts: Add user authentication for personalized shopping experiences.
More Products: Expand the product catalog in data.json to include more items.

Author

Name: Aminu Iliyasu
Affiliation: University of Pécs
Project: Svelte Commerce (E-commerce Website)

