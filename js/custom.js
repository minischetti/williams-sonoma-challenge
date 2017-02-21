// var view = {
//   displayTodos: function() {
//     section = document.getElementsByClassName('section');
//     section.forEach( function(todo, position) {
//       section.appendChild('li');
//     }, this);
//   },
//   setUpEventListeners: function () {
//     // Set variable for content div
//     var content = document.getElementById('content');
//     // Listen for clicks on entire div
//     content.addEventListener('click', function(event) {
//       var elementClicked = event.target;
//       // Set variable for collapsible containers
//       container = document.getElementsByClassName('container');
//       arrow = document.getElementsByClassName('arrow');
//       // Toggle collapsed class on a per-container basis
//         for (var i = 0; i < container.length; i++) {
//           if (elementClicked.className === 'toggleSection', this) {
//             container[i].classList.toggle('collapsed');
//           }
//         };
//       console.log(elementClicked);
//     });
//   }
// };
//
// view.setUpEventListeners();

// var currentQuantity = document.getElementById('quantity').value;
// document.getElementById('price').innerHTML = currentQuantity;

var currentQuantity = document.getElementById('quantity');

currentQuantity.addEventListener('input', function()
{
    document.getElementById('price').innerHTML = '$' + Number(19.95 * currentQuantity.value).toFixed(2);
});

var products = ["a", "b", "c", "d"];

// Create Product Images
function createImages() {
  for (i = 0; i < products.length; i++) {
    var productImage = document.createElement('img');
    var imageContainer = document.getElementById('imageContainer');
    imageContainer.appendChild(productImage);
    productImage.id = products[i];
    productImage.className = 'productImage';
    productImage.src = 'assets/' + products[i] + 'Small.jpg';
  }
}

function setUpEventListeners() {
  // Set variable for content div
  var imageContainer = document.getElementById('imageContainer');
  // Listen for clicks on entire div
  imageContainer.addEventListener('click', function(event) {
    var elementClicked = event.target;
    // Toggle collapsed class on a per-container basis
    for (var i = 0; i < products.length; i++) {
      if (elementClicked.className === 'productImage', this) {
        document.getElementById("heroImage").src='assets/' + elementClicked.id + 'Large.jpg';
      }
    };
    console.log(elementClicked);
  });
}
// var view = {
//   displayTodos: function() {
//     section = document.getElementsByClassName('section');
//     section.forEach( function(todo, position) {
//       section.appendChild('li');
//     }, this);
//   },
// };

createImages();
setUpEventListeners();
