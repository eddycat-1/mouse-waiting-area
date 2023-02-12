const emojiThemes = ["🌬", "🧊", "☃", "❄", "⛄"];

const perimeterWidth = 30;
const perimeterLength = 5;

let data = "";

for (let i = 0; i < perimeterLength; i++) {
  for (let j = 0; j < perimeterWidth; j++) {
    let randomEmoji = Math.floor(Math.random() * emojiThemes.length);
    if (i == 0 || i == perimeterLength - 1) {
      data += `${emojiThemes[randomEmoji]}`;
    } else {
      if (j == 0 || j == perimeterWidth - 1) {
        data += `${emojiThemes[randomEmoji]}`;
      } else {
        data += "\u3000";
      }
    }
  }
  data += "\n";
}

// Requiring fs module in which
// writeFile function is defined.
const fs = require("fs");

// Write data in 'Output.txt' .
fs.writeFile("Output.txt", data, (err) => {
  // In case of a error throw err.
  if (err) throw err;
});
