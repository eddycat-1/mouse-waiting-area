const emojiThemes = ["😊", "😂", "🤣", "❤", "😍"];

const perimeterWidth = 30;
const perimeterLength = 5;

for (let i = 0; i < perimeterLength; i++) {
  for (let j = 0; j < perimeterWidth; j++) {
    let randomEmoji = Math.floor(Math.random() * emojiThemes.length);
    if (i == 0 || i == perimeterLength - 1) {
      process.stdout.write(`${emojiThemes[randomEmoji]}`);
    } else {
      if (j == 0 || j == perimeterWidth - 1) {
        process.stdout.write(`${emojiThemes[randomEmoji]}`);
      } else {
        process.stdout.write(" ");
      }
    }
  }
  process.stdout.write("\n");
}
