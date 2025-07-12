# 🌀 Text On Tread Animation

A customizable 3D tread-style animated text effect built with HTML, CSS, and vanilla JavaScript.

## 🚀 Demo

🎥 **Live Preview**: [https://codepen.io/sohrabzia/pen/jEbNryq](https://codepen.io/sohrabzia/pen/jEbNryq)

## 🧩 Features

- 🔁 Infinite 3D text animation (front and back tread)
- 🎨 Fully customizable:
  - Text content
  - Font size, weight, and family
  - Front & back colors
  - Animation duration
- 🧠 Built with pure JavaScript – no dependencies

---

## 🛠️ How to Use

### 1. Include the HTML

```html
<div class="text-on-tread" id="animation1"></div>
<!-- In the <head> of your HTML file -->
<link rel="stylesheet" href="style.css">

<!-- Before closing </body> tag -->
<script src="script.js" defer></script>

// In your script.js or in a <script> tag
const animation1 = new TextOnTread('#animation1', {
  text: 'YOUR TEXT HERE',
  duration: 8000,
  frontColor: '#ffffff',
  backColor: '#000000',
  fontFamily: 'Arial, sans-serif',
  fontSize: '3em',
  fontWeight: '900'
});

const animation2 = new TextOnTread('#animation2', {
  text: 'SECOND TEXT',
  duration: 4000,
  frontColor: '#ff6b6b',
  backColor: '#4ecdc4',
  fontFamily: 'Georgia, serif',
  fontSize: '2.5em'
});
