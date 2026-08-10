# 🛋️ Furnio — Furniture E-Commerce Website

A modern furniture e-commerce website built using **HTML5, CSS3, and JavaScript**.

This project was created as a learning project to understand how real-world frontend websites are structured, designed, and developed.


## 🎯 Project Purpose

The main purpose of this project is to improve my frontend development skills by building a complete furniture e-commerce website from scratch.

Through this project, I focused on understanding:

* How real-world websites are structured
* How reusable UI patterns are designed
* How navigation works between multiple pages
* How JavaScript adds interactivity
* How image sliders and animations work
* How cart interactions are implemented
* How to organize HTML, CSS, JavaScript, and assets
* How to use Git and GitHub for project management

---

## ✨ Features

### 🏠 Home Page

* Modern hero section
* Automatic image slider
* Previous and next slider controls
* Interactive navigation
* Featured furniture sections

### 🛍️ Shop Page

* Furniture product listings
* Product cards
* Interactive UI elements

### 🛒 Cart

* Cart drawer
* Cart overlay
* Delete cart items
* Open and close cart drawer
* Prevent background scrolling when cart drawer is open

### 💳 Checkout

* Dedicated checkout page
* Structured checkout interface

### 🧭 Navigation

* Multi-page navigation
* Active page detection using JavaScript
* Permanent underline for the current page
* Hover underline animation
* Smooth navigation animations

## ✨ Features

### 🏆 Benefits Slider

- Displays **4 benefits at a time** on desktop.
- Includes multiple furniture-store benefits such as:
  - High Quality
  - Warranty Protection
  - Free Shipping
  - 24 / 7 Support
  - Expert Craftsmanship
  - Eco Friendly
  - Premium Furniture
  - Secure Payment
  - Easy Returns
- Automatically slides to the next set of benefits.
- Provides **Previous** and **Next** buttons for manual navigation.
- Auto-sliding stops when the user interacts with the slider.
- After reaching the last item, the slider automatically starts again from the first item.
- Smooth CSS transition is used for the sliding animation.
- Responsive layout for different screen sizes.

* ## 🚀 Interactive Features

- 🛒 Cart drawer with open/close functionality
- 🖼️ Automatic hero image slider
- 🏆 Automatic benefits/information slider
- ⏮️ Previous and Next slider controls
- ⏸️ Auto-slide stops when the user interacts
- 🔄 Sliders automatically restart from the beginning
- 📱 Responsive design for desktop, tablet, and mobile
- 🔗 Active navigation link based on the current page

---

## 🛠️ Technologies Used

| Technology | Purpose                         |
| ---------- | ------------------------------- |
| HTML5      | Website structure               |
| CSS3       | Styling and responsive design   |
| JavaScript | Interactivity and functionality |
| Git        | Version control                 |
| GitHub     | Repository management           |
| Figma      | UI design reference             |

---

## 📁 Project Structure

```text
Furnio/
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── logos/
│
├── css/
│   ├── style.css
│   ├── home.css
│   ├── shop.css
│   ├── cart.css
│   └── checkout.css
│
├── js/
│   └── script.js
│
├── home.html
├── shop.html
├── about.html
├── contact.html
├── cart.html
├── checkout.html
│
└── README.md
```

---

## ⚙️ JavaScript Functionality

JavaScript is used to control the interactive features of the website.

### 🎞️ Image Slider

The hero section contains an automatic image slider.

```javascript
function nextSlide() {
    currentSlide++;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}
```

The slider also supports manual navigation using the previous and next buttons.

---

### 🧭 Active Navigation

The current page is automatically detected using JavaScript.

```javascript
const currentPage = window.location.pathname.split("/").pop();
```

The corresponding navigation link receives the `active` class.

```javascript
navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});
```

This keeps the underline permanently visible on the current page.

---

### 🛒 Cart Drawer

The cart drawer is opened using JavaScript.

```javascript
function openCart() {
    cartDrawer.classList.add("active");
    cartOverlay.classList.add("active");
    document.body.classList.add("no-scroll");
}
```

The background page is prevented from scrolling while the cart drawer is open.

---

### ❌ Delete Cart Items

Cart items can be removed using JavaScript.

```javascript
deleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.parentElement.remove();
    });
});
```

---

## 🎨 Design

The website follows a clean and modern furniture-store design.

The design focuses on:

* Clean typography
* Consistent spacing
* Product-focused layouts
* Simple navigation
* Responsive components
* Modern UI
* Smooth interactions
* Clear visual hierarchy


## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd Furnio
```

### 3. Open the Project

Open the project in **VS Code**.

### 4. Run the Website

Open `home.html` in your browser.

For a better development experience, use the **Live Server** extension in VS Code.

---

## 📚 What I Learned

While developing Furnio, I improved my understanding of:

* Semantic HTML
* CSS Flexbox
* CSS Grid
* Media queries
* CSS animations
* CSS transitions
* JavaScript DOM manipulation
* Event listeners
* Image sliders
* Navigation handling
* Class manipulation
* Reusable UI patterns
* Git
* GitHub
* Professional project structure

---

## 🔮 Future Improvements

This project currently focuses on frontend development.

Future improvements may include:

* [ ] Backend integration
* [ ] User authentication
* [ ] Database integration
* [ ] Real shopping cart
* [ ] Product search
* [ ] Product filtering
* [ ] Product sorting
* [ ] Wishlist functionality
* [ ] Payment gateway
* [ ] Order management
* [ ] Admin dashboard
* [ ] API integration
* [ ] React version
* [ ] Node.js backend
* [ ] MongoDB database

---

## 🤝 Contributing

This project was created as a learning project, but suggestions and improvements are welcome.

If you find a bug or have an idea for improvement:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Open a Pull Request

---

## 👨‍💻 Author

### Naman Khare

the design of the website is taking from the figma free commuinty design. [It is totally use for the leaning purpose.]
---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project was created for **educational and learning purposes**.
