# Confetti.js

Confetti.js is a lightweight and easy-to-integrate JavaScript library that allows you to add a fun confetti burst effect to any web application. This script is responsive, non-intrusive, and highly customizable, making it a great addition to any celebratory feature on your site.

## Features

- **Easy to integrate:** Just include the script in your HTML and add a class to trigger elements.
- **Responsive:** The confetti canvas automatically resizes with the window.
- **Non-intrusive:** The confetti layer has `pointer-events: none`, so it doesn't interfere with other page interactions.
- **Customizable:** You can easily modify the colors, number of particles, or animation behavior in the `confetti.js` file.

## Installation

To use Confetti.js in your project, follow these steps:

1. **Download the Script:**
   Download the `confetti.js` file and add it to your project directory.

2. **Include the Script in Your HTML:**
   Add the following script tag to your HTML file, pointing to the location of the `confetti.js` file.

   ```html
   <script src="path/to/confetti.js"></script>
   ```
3. **Add the `confetti-trigger` Class:**
   To trigger the confetti burst, add the `confetti-trigger` class to any HTML element.

   ```html
   <button class="confetti-trigger">Click for Confetti!</button>
   ```

## Usage

Once the script is included and the confetti-trigger class is added to an element, the confetti burst will automatically trigger whenever that element is clicked.

The confetti will burst from the center of the clicked element and fill the screen with colorful particles.

##Example

Here’s a basic example of how to use Confetti.js:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confetti Example</title>
</head>
<body>
    <button class="confetti-trigger">Click for Confetti!</button>

    <script src="confetti.js"></script>
</body>
</html>
```

## Customization

You can customize various aspects of the confetti effect by editing the confetti.js file directly:

- Colors: Change the colors of the confetti particles by modifying the this.colors array in the Confetti class.
- Number of Particles: Adjust the number of particles created in each burst by changing the value passed to this.createParticles(x, y, amount) in the burst method.
- Particle Size: Modify the size of the confetti particles by adjusting the this.size property in the Particle class.
- Animation Speed: Tweak the speed of the particle movement by altering the this.speedX and this.speedY properties in the Particle class.
