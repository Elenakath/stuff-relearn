var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

/*stuff.forEach(function (item, index) {
  if (index % 2 === 0) {
    console.log(item)
  }
});*/

/*var removeItem = function (array, item) {
  var index = array.indexOf(item);
  if (index === -1) {
    console.log("No such element exists");
  } else {
    array.splice(index, 1); 
    console.log(item);
  }
};

removeItem(stuff, "bars");*/

var containsS = [];
for (var items of stuff) {
  if (items.includes(s)) {
    containsS.push(items); 
  }
}
console.log(containsS);