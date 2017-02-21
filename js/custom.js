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
