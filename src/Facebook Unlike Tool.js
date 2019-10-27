/* function definitions */

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
  window.scrollTo(0, document.body.scrollHeight);
};

/* main execution */

let triggerProcess = async () => {
  let buttons = document.getElementsByClassName("PageLikedButton");
  for (let button of buttons) {
    button.click();
  }
  await clickUnlike();
  scrollToBottom();
};

// eslint-disable-next-line no-unused-vars
let handle = setInterval(triggerProcess, 1);

// clearInterval(handle);
