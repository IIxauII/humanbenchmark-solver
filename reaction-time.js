//This code could be optimized by using a mutation observer instead of hardcoded time values
startBox = document.querySelector('.reaction-time-test.view-splash');
if (startBox) {
  fireMouseDown(startBox);
  setInterval(function(){
    waitBox = document.querySelector('.reaction-time-test.view-waiting');
    goBox = document.querySelector('.reaction-time-test.view-go');
    resultBox = document.querySelector('.reaction-time-test.view-result');
    if (goBox) {
      setTimeout(function(){
        goBox = document.querySelector('.reaction-time-test.view-go');
        if (goBox) {
         fireMouseDown(goBox); 
        }        
      }, 80);
    } else if (resultBox) {
      saveButton = resultBox.querySelector('.big-save-button');
      if (!saveButton.classList.contains("ng-hide")) {
        //fireMouseDown(saveButton);
      } else {
        setTimeout(function(){
          resultBox = document.querySelector('.reaction-time-test.view-result');
          if (resultBox) {
            fireMouseDown(resultBox); 
          }          
        }, 100);
      }
    } else {
      console.log("Waiting is boring");
    }
  }, 25); 
} else {
  while(document.firstChild) {
    document.removeChild(document.firstChild);
  }
  document.write("Are you on the correct page?\n Execute me here -> https://www.humanbenchmark.com/tests/reactiontime");
}

function fireMouseDown(target) {
  let mouseDownEvent = document.createEvent('MouseEvents');
  mouseDownEvent.initEvent('mousedown', true, true);
  target.dispatchEvent(mouseDownEvent);
}