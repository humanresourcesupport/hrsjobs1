# 🌿 The Olive Grove Restaurant Website

A professional, single-page website for "The Olive Grove," a contemporary Italian dining establishment. This version features a bold, dynamic aesthetic defined by white, dark gray, and red accents, designed for a high-impact, modern user experience.

## ✨ Key Features

* **Modern Color Palette:** White background, dark gray/black blocks for contrast, and Red (`#DC2626`) as the primary accent color.
* **Fully Responsive:** Optimized for mobile phones, tablets, and desktop screens (Mobile-First approach).
* **Smooth Navigation:** Custom JavaScript implements smooth scrolling transitions between page sections.
* **Sticky Header:** Navigation bar remains fixed at the top for constant access.
* **Professional Icons:** Integration of Lucide Icons for clean, scalable social media links in the footer.

## 🔧 Tech Stack

* **HTML5:** Main structure and content definition.
* **Tailwind CSS (CDN):** Utility-first styling framework for rapid, responsive design.
* **Vanilla JavaScript:** Client-side functionality.
* **Lucide Icons (CDN):** Vector icons used for social media and utility elements.

## 📂 File Structure

| File | Description |
| :--- | :--- |
| `index.html` | The main website page, containing all HTML structure, styling classes, and CDN links. |
| `script.js` | Handles client-side logic: Mobile menu toggle and Smooth Scrolling functionality. |
| `README.md` | This file: Project description and setup instructions. |
| `placeholder-hero.jpg` | *Placeholder*: For a hero background image if desired (currently disabled in favor of a solid color block). |
| `placeholder-chef.jpg` | *Placeholder*: For the About Us section image. |

## 🚀 How to Run

No build tools, compilation, or installations are required.

1.  **Save Files:** Ensure both `index.html` and `script.js` are saved in the exact same directory.
2.  **Run:** Open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).

---

## ⚙️ `script.js` Functionality

The `script.js` file ensures the website has a "smooth" and responsive feel:

1.  **Mobile Menu Toggle:** Activates the hamburger menu by toggling the `hidden` class on the mobile navigation list.
2.  **Smooth Scrolling:** Overrides the default link jump behavior. It uses the `window.scrollTo({ behavior: 'smooth' })` method and, crucially, **subtracts a fixed offset (80px)** to prevent the sticky header from covering the section titles.
