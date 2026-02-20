"use client"; // Needed for interactivity

import "./ColorButton.scss";

// ✏️ Step 4: Add props here → it should receive { color, onPick } from the parent.
export default function ColorButton({ color, onPick }) {
  return (
    <button
      className="color-btn"
      // Set the button's color
      style={{ backgroundColor: color }} 
      // Call the parent's function with this color when clicked
      onClick={() => onPick(color)} 
    ></button>
  );
}
