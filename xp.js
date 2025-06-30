// xp.js
import { supabase } from './supabaseClient.js';

document.addEventListener("DOMContentLoaded", async function () {
  const xpFill = document.getElementById("xpFill");
  const xpLabel = document.getElementById("xpLabel");
  const xpLevel = document.getElementById("xpLevel");

  // Replace this with logic to identify the correct user if needed
  const { data, error } = await supabase
    .from('xp')
    .select('*')
    .limit(1);

  if (error) {
    console.error("Error fetching XP data:", error.message);
    return;
  }

  if (data.length > 0) {
    const userXP = data[0];
    const percent = Math.min(userXP.xp || 0, 100);

    if (xpFill) xpFill.style.width = percent + "%";
    if (xpLabel) xpLabel.textContent = percent + "% XP";
    if (xpLevel) xpLevel.textContent = "Level: " + (userXP.level || 'Unknown');

    console.log("XP loaded:", userXP);
  } else {
    console.log("No XP data found.");
  }
});
