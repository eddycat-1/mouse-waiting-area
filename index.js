import fs from "fs";
import themes from "./themes.js";

const readline = require("readline");

// function to generate a random theme
function generateRandomTheme() {
  const themes = ["ocean", "forest", "mountain", "desert", "jungle", "city"];
  const randomIndex = Math.floor(Math.random() * themes.length);
  return themes[randomIndex];
}

// create a readline interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// prompt the user to choose a theme, create a theme or choose a random theme
rl.question(
  "Choose a theme (1), create a theme (2), or choose a random theme (3): ",
  (answer) => {
    if (answer === "1") {
      // if the user chooses to choose a theme, prompt them to enter a theme
      rl.question("Enter a theme: ", (theme) => {
        console.log(`You chose the theme: ${theme}`);
        // prompt the user to enter the length and width
        rl.question("Enter the length: ", (length) => {
          rl.question("Enter the width: ", (width) => {
            console.log(
              `You chose the length: ${length} and the width: ${width}`
            );
            rl.close();
          });
        });
      });
    } else if (answer === "2") {
      // if the user chooses to create a theme, prompt them to enter any number of characters
      rl.question(
        "Enter any number of characters separated by spaces: ",
        (characters) => {
          const theme = characters.split(" ");
          console.log(`You created a new theme: ${theme}`);
          // prompt the user to enter the length and width
          rl.question("Enter the length: ", (length) => {
            rl.question("Enter the width: ", (width) => {
              console.log(
                `You chose the length: ${length} and the width: ${width}`
              );
              rl.close();
            });
          });
        }
      );
    } else if (answer === "3") {
      // if the user chooses to choose a random theme, generate a random theme
      const theme = generateRandomTheme();
      console.log(`You chose a random theme: ${theme}`);
      // prompt the user to enter the length and width
      rl.question("Enter the length: ", (length) => {
        rl.question("Enter the width: ", (width) => {
          console.log(
            `You chose the length: ${length} and the width: ${width}`
          );
          rl.close();
        });
      });
    } else {
      // if the user enters an invalid input, exit the program
      console.log("Invalid input.");
      rl.close();
    }
  }
);

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
