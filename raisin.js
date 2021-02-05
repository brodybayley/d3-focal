const raisinAlarm = function (cookie) {
  for (let i = 0; i < cookie.length; i++) {
    console.log(cookie[i])
    if (cookie[i] === "🍇") {
      return "Raisin alert!"
    }
  }
  return "All good!"
}

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function (cookies) {
  let finalArray = [];
  for (let ingredient of cookies) {
    if (ingredient.includes("🍇")) {
      finalArray.push("Raisin alert!")
    } else {
      finalArray.push("All good!");
    }
  }
  return finalArray;
}


console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));
