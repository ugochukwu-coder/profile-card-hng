# 🌟 Profile Card Project

A responsive, accessible, and semantic **Profile Card** web project built with **HTML, CSS, and JavaScript**.  
This project showcases a developer’s bio, skills, hobbies, social links, and live time display in a clean and modern design.

---

## 🧭 Project Structure

ProfileCard/
├── index.html # Home/Profile Card page
├── about.html # About Me page
├── contact.html # Contact form page
├── style.css # Styles for all pages
├── script.js # Shared JS for navbar, time, and form validation
└── README.md

markdown
Copy code

---

## 🏠 Features

### 1. Profile Card (Home Page)
- **Avatar** with accessible `<figcaption>` and alt text.
- **User info**:
  - Name — `data-testid="test-user-name"`
  - Bio — `data-testid="test-user-bio"`
  - Hobbies — `data-testid="test-user-hobbies"`
  - Dislikes — `data-testid="test-user-dislikes"`
  - Social links — `data-testid="test-user-social-links"`
- **Live digital clock** — `data-testid="test-user-time"`
- Fully **responsive** and **mobile-friendly**.

### 2. About Me Page
- Semantically structured using `<main>` and `<section>`.
- Includes sections:
  - Bio — `data-testid="test-about-bio"`
  - Goals — `data-testid="test-about-goals"`
  - Areas of low confidence — `data-testid="test-about-confidence"`
  - Note to future self — `data-testid="test-about-future-note"`
  - Extra thoughts — `data-testid="test-about-extra"`
- Proper headings `<h2>` and `<h3>` for clarity.
- Fully **keyboard navigable**.

### 3. Contact Us Page
- Accessible form with validation.
- Required fields:
  - Full name — `data-testid="test-contact-name"`
  - Email — `data-testid="test-contact-email"`
  - Subject — `data-testid="test-contact-subject"`
  - Message — `data-testid="test-contact-message"`
  - Submit button — `data-testid="test-contact-submit"`
- Error messages tied to inputs with `aria-describedby`.
- Shows success message — `data-testid="test-contact-success"`.
- Fully **keyboard accessible**.

---

## ⚙️ JavaScript Functionality

All pages share a **single script file (`script.js`)**:

git clone https://github.com/username/myprofile.git
cd myprofile
