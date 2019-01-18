startButton = document.querySelector('.button.start');
if (startButton) {
  startButton.click();
} else {
  console.log("No start button found. Are you on the correct page?\nhttps://www.humanbenchmark.com/tests/verbal-memory");
}
setTimeout(function(){
  seenButton = document.querySelector('.actions').children[0];
  newButton = document.querySelector('.actions').children[1];
  wordArray = [];
  setInterval(function () {
    wordContainer = document.querySelector('.word.ng-scope > .ng-binding');
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