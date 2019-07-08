verbalMemory = document.querySelector('.verbal-memory-test');

startButton = verbalMemory.querySelector('.test-group:last-child .hero-button');
if (startButton) {
  startButton.click();
} else {
  console.log("No start button found. Are you on the correct page?\nhttps://www.humanbenchmark.com/tests/verbal-memory");
}
setTimeout(function(){
  seenButton = verbalMemory.querySelector('.test-group:last-child .hero-button:first-child').children[0];
  newButton = verbalMemory.querySelector('.test-group:last-child .hero-button:last-child').children[1];
  wordArray = [];
  setInterval(function () {
    wordContainer = verbalMemory.querySelector('');
    console.log('--');
    console.log(wordArray);
    console.log(wordContainer.textContent);
    console.log('--');
    if (wordArray.length) {
      seen = false;
      wordArray.forEach(function (word) {
        if (word === wordContainer.textContent) {
          seen = true;
        }
      });
      if (seen) {
        seenButton.click();
      } else {
        wordArray.push(wordContainer.textContent);
        newButton.click();
      }
    } else {
      wordArray.push(wordContainer.textContent);
      newButton.click();
    }
  }, 50);
}, 1000);
