
# 🛍️ React Shopping Cart

A minimal and modern shopping cart web app built using **React**. This project allows users to browse products, view details, add items to a cart, and complete checkout. It features contextual state management, clean UI, and responsive design.

---

## 📁 Project Structure

```
src/
├── Assets/             # Product images (JPEGs, PNGs, etc.)
├── Components/         # Reusable components (e.g., Navbar)
│   └── Navbar.js
├── Context/            # Global context for cart management
│   └── CartContext.js
├── Data/               # Static product data
│   └── products.js
├── Pages/              # Main page components
│   ├── Home.js
│   ├── Products.js
│   ├── ProductDetail.js
│   ├── Cart.js
│   └── Checkout.js
├── Styles/             # Component-specific CSS files
│   ├── Cart.css
│   ├── Checkout.css
│   ├── Navbar.css
│   └── ...
├── App.js              # Main app entry
├── index.js            # ReactDOM entry
└── ...
```

---

## ⚙️ Getting Started

### 📦 Installation

```bash
git clone https://github.com/your-username/react-shopping-cart.git
cd react-shopping-cart
npm install
```

### 🚀 Run the App

```bash
npm start
```

### 🔧 Build for Production

```bash
npm run build
```

---

## 🧠 Tech Stack

- **React** (SPA structure)
- **React Context API** – for global cart state
- **CSS** – scoped modular styling per component
- **React Router** – navigation between pages
- **Static assets** – used from local `/Assets`

---

## 📌 Features

- Browse products with images and pricing
- View individual product details
- Add/remove items to/from cart
- Adjust item quantities
- Real-time cart total calculation
- Checkout form and order summary
- Mobile-friendly responsive layout
- Clean empty cart and post-checkout states

---

## ✅ TODO

- [ ] Add backend integration or API
- [ ] Add localStorage or session persistence
- [ ] Add search & filter options
- [ ] Confirmation page after checkout

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♀️ Author

Made with ❤️ by [Your Name]  
[Portfolio](https://your-portfolio.com) · [GitHub](https://github.com/your-username)
