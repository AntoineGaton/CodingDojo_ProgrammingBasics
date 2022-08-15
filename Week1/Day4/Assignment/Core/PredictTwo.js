//Predict One
function displayContactInfo() {
  var auntContactInfo = [
    "Paula",
    "Smith",
    "1234 Main Street",
    "St. Louis",
    "MO",
    12345,
  ];
  console.log(auntContactInfo);
}
//Display array autoContactInfo -> [ 'Paula', 'Smith', '1234 Main Street', 'St. Louis', 'MO', 12345 ]

//Predict Two
function displayGrocerylist() {
  var produce = ["apples", "oranges"];
  var frozen = ["broccoli", "ice cream"];
  frozen.push("hashbrowns");
  console.log(frozen);
}
//Display frozen array -> [ 'broccoli', 'ice cream', 'hashbrowns' ]

//Predict Three
var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);
//Displays movieLibrary array -> [ 'Bambi', 'Beetlejuice', 'Toy Story', 'Zoro' ]