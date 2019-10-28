let arr = [];
let text;

let percentages = document.querySelectorAll(".video_item_rating");

for (let i in percentages) {
  text = percentages[i].innerText || percentages[i].textContent;

  text && text !== "undefined"
    ? ((text = text.split("%").join("")), arr.push(parseFloat(text)))
    : null;
}

const maxInArray = Math.max.apply(Math, arr);

// console.log(arr.sort());
console.log("Highest rating: ", maxInArray);
