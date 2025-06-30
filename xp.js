// xp.js

document.addEventListener("DOMContentLoaded", function () {
  // Animate XP Bar
  const xpFill = document.getElementById("xpFill");
  const targetPercent = 65; // Change this value to update XP %
  xpFill.style.width = targetPercent + "%";

  // Optional logging
  console.log("XP bar set to " + targetPercent + "%");

  // Future enhancement: dynamic badge rendering (optional)
});
