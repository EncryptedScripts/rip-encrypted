document.addEventListener("DOMContentLoaded", function () {
  const typewriterTexts = [
    "Encrypted Scripts.",
    "Discord: encryptedscripts",
    "Bad Developer.",
    "Bad Editor.",
    "0 Skills.",
    "Broken Hearted.",
    "Dead Inside :(",
    "Depressed.",
    "Touch a grass lmao.",
  ];

  const typewriterElement = document.getElementById("typewriter-text");
  let textIndex = 0;
  let charIndex = 0;
  let eraseMode = false;
  const typeDelay = 100;

  function type() {
    if (textIndex < typewriterTexts.length) {
      if (eraseMode) {
        if (charIndex > 0) {
          typewriterElement.textContent = typewriterTexts[textIndex].substring(
            0,
            charIndex - 1
          );
          charIndex--;
          setTimeout(type, typeDelay);
        } else {
          eraseMode = false;
          textIndex = (textIndex + 1) % typewriterTexts.length;
          setTimeout(type, 500);
        }
      } else {
        if (charIndex < typewriterTexts[textIndex].length) {
          typewriterElement.textContent +=
            typewriterTexts[textIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, typeDelay);
        } else {
          eraseMode = true;
          setTimeout(type, 1500);
        }
      }
    }
  }

  type();
});
