# 🧑‍💻 Profile Card

A responsive, accessible **Profile Card** built with **semantic HTML**, **CSS**, and **vanilla JavaScript**.  
This project displays a developer’s profile with an avatar, name, bio, hobbies, dislikes, and social links —  
and includes a live time display in **milliseconds** that updates using `Date.now()`.

---

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Accessibility Features](#accessibility-features)
- [Responsiveness](#responsiveness)
- [Live Time Functionality](#live-time-functionality)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Preview](#preview)
- [Testing](#testing)
- [Author](#author)

---

## 🧭 Overview

This Profile Card is a lightweight, semantic webpage that presents user information in a clean and structured layout.  
It can serve as a **personal portfolio snippet**, **internship project**, or **frontend component** demonstrating accessibility and clean coding practices.

The layout consists of:
- Profile image and name  
- Short bio  
- Sections for hobbies and dislikes  
- Social media icons with keyboard-accessible links  
- A live updating `Date.now()` timestamp rendered in milliseconds  

---

## ✨ Features

✅ **Semantic HTML5 structure** using `<header>`, `<main>`, `<section>`, `<footer>`, and `<figure>`  
✅ **Accessible labels** (`aria-label`, `alt`, `data-testid`)  
✅ **Responsive layout** for mobile and desktop views  
✅ **Keyboard navigation support** for social links  
✅ **Visible focus styles** for all interactive elements  
✅ **Accurate real-time milliseconds display** (`Date.now()`)  
✅ **Font Awesome social icons**

---

## 📁 Project Structure

project-folder/
├── image/
│ └── ugo-w233_h238.jpg
├── style.css
├── script.js
├── index.html
└── README.md


### `index.html`
Contains the semantic structure of the profile card, including:
- Avatar and name within `<header>`
- Bio within `<main>`
- Hobbies and dislikes within `<section>`
- Social media links inside an unordered list (`<ul>`)
- Footer that displays live milliseconds using `Date.now()`

### `style.css`
Defines the layout, colors, spacing, and responsive design.  
Also includes focus states for keyboard navigation.

### `script.js`
Handles the live timestamp rendering:
```js
function updateTime() {
  timeEl.textContent = Date.now();
}
setInterval(updateTime, 1000);

git clone https://github.com/yourusername/profile-card.git
cd profile-card
