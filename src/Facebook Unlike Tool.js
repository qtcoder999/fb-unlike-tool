/* function definitions */
(function (){

const clickAllTheUnlikePopUps = resolve => {
  for (const a of document.querySelectorAll("*")) {
    if (a.textContent.includes("Unlike")) {
      a.click();
    }
  }
  resolve();
};

const clickUnlike = async () =>
  new Promise(resolve => setTimeout(clickAllTheUnlikePopUps(resolve), 1000));

const scrollToBottom = () => {
  let counter = 0;

  var scrollHandle = setInterval(function() {
    window.scrollTo(0, document.body.scrollHeight);
    counter++;

    if (counter >= 50) {
      return new Promise(resolve => {
        resolve(), clearInterval(scrollHandle);
      });
    }
  }, 1);
};

/* main execution */

let triggerProcess = async () => {
  await scrollToBottom();
  let buttons = document.getElementsByClassName("PageLikedButton");
  for (let button of buttons) {
    button.click();
  }
  await clickUnlike();
};

// eslint-disable-next-line no-unused-vars
let handle = setInterval(triggerProcess, 1);

// clearInterval(handle);


})();
