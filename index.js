import fs from "fs";
import themes from "./themes.js";

const emojiTheme = themes[Math.floor(Math.random() * themes.length)];

const perimeterWidth = 30;
const perimeterLength = 5;

let data = "";

for (let i = 0; i < perimeterLength; i++) {
  for (let j = 0; j < perimeterWidth; j++) {
    let randomEmoji = `${
      emojiTheme[Math.floor(Math.random() * emojiTheme.length)]
    }`;

    if (i == 0 || i == perimeterLength - 1) {
      data += randomEmoji;
    } else {
      if (j == 0 || j == perimeterWidth - 1) {
        data += randomEmoji;
      }
      if (Math.random() < 0.15) {
        data += randomEmoji;
      } else {
        data += "\u3000";
      }
    }
  }
  data += "\n";
}

// Write data in 'Output.txt' .
fs.writeFile("Output.txt", data, (err) => {
  // In case of a error throw err.
  if (err) throw err;
});
