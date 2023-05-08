/**
 * Name: index.js
 * Purpose: Define the interactive behavior for the personal website
 * Author: Andrew Milo Bruce
 * Date: May 8th, 2023 (last modified)
 * Version: 1.0.1
 * Dependencies: None
 * 
 * Description: This file defines the interactive behavior for the personal website, including the dark mode toggle switch,
 * the smooth scroll behavior for internal links, and any other interactive features.
 * 
 * Usage: This file is used to define the interactive behavior for the HTML elements in the personal website.
 * 
 * Modifications:
 *  - May 8th, 2023 - cleaned up code and added meaningful inline comments, header...
 * 
 * Notes: None
 */

// Get the current date and time
var today = new Date();

// Get the HTML elements we will be manipulating
var bg = document.getElementById("dark-mode-bg");
var words = document.getElementsByClassName("dark-mode-word");
var nav = document.getElementById("dark-mode-nav");

// Print the current hour to the console for debugging purposes
console.log(today.getHours());

// If it's later than 5 PM (17:00), change the background color, text color, and navbar color to dark mode
if (today.getHours() > 17) {
    bg.style.backgroundColor = "#4C6079";
    for (let word of words) {
        word.style.color = "white";
    }
    nav.classList.remove("navbar-light")
    nav.classList.remove("bg-light")
    nav.classList.add("navbar-dark")
    nav.classList.add("bg-dark")
}