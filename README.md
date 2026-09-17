# Marine Debris Pollution Awareness & Data Collection

A responsive, multi-page educational website and data collection form designed to raise awareness about marine debris pollution, its sources, and its environmental impact. 

## 🚀 Live Demo
**View the live site here:** [https://ahcode2001.github.io/marine-debris-awareness/](https://ahcode2001.github.io/marine-debris-awareness/)

*(Note: Replace "marine-debris-awareness" with your actual repository name if it is different)*

## 📱 Interface Preview
![Marine Debris Form Responsive Design](static/results/demo_image.png)
*(Note: Upload your responsive mockup screenshot to your repository and update this image link to display it here)*

## 🛠️ Features & Architecture
* **Multi-Page Navigation:** Distinct HTML pages for Facts, How to Help, Resources, and Contact built with clean, semantic HTML5.
* **Responsive Data Collection Form:** A mobile-first web form featuring dropdown selections for debris types and sources, geographic text inputs, and descriptive text areas.
* **Dynamic Validation:** Client-side JavaScript (`script.js`) enforces required fields, dynamically toggles "Other" input boxes based on dropdown selections, and sanitizes phone number inputs using Regular Expressions.
* **Custom Styling:** Fully responsive CSS (`style.css`) utilizing media queries, custom gradients, and box-shadows to ensure cross-device compatibility from desktop monitors to mobile screens.

## 📂 Project Structure
* `index.html` - Primary landing page and navigation hub.
* `facts.html`, `help.html`, `resources.html` - Educational content pages.
* `contacts.html` - Data collection and contact web form.
* `style.css` - Global stylesheet for layout and responsive design.
* `script.js` - Form validation and dynamic UI logic.
* `submit.php` - Backend form processor (Note: PHP processing is disabled on the static GitHub Pages deployment).
