import { supabase } from './supabaseClient.js';

document.addEventListener("DOMContentLoaded", async function () {
  const xpFill = document.getElementById("xpFill");
  const xpLabel = document.getElementById("xpLabel");
  const xpLevel = document.getElementById("xpLevel");

  const { data, error } = await supabase
    .from('xp')
    .select('*')
    .eq('name', 'Trent')
    .maybeSingle(); // use maybeSingle to avoid fatal error

  console.log("Supabase response:", data, error);

  if (error) {
    console.error("Error fetching XP data:", error.message);
    return;
  }

  if (data) {
    const userXP = data;
    const percent = Math.min(userXP.xp || 0, 100);

    if (xpFill) xpFill.style.width = percent + "%";
    if (xpLabel) xpLabel.textContent = percent + "% XP";
    if (xpLevel) xpLevel.textContent = "Level: " + (userXP.level || 'Unknown');

    console.log("XP Loaded:", userXP);
  } else {
    console.log("No XP data found.");
  }
});
