var currentQuantity = document.getElementById('quantity');

currentQuantity.addEventListener('input', function()
{
    document.getElementById('price').innerHTML = '$' + Number(19.95 * currentQuantity.value).toFixed(2);
});

function decrement() {
  document.getElementById("quantity").stepDown(1);
  document.getElementById('price').innerHTML = '$' + Number(19.95 * currentQuantity.value).toFixed(2);
}
function increment() {
  document.getElementById("quantity").stepUp(1);
  document.getElementById('price').innerHTML = '$' + Number(19.95 * currentQuantity.value).toFixed(2);
}

function showCart() {
  document.getElementById("dim").classList.toggle("active");
  document.getElementById("cart").classList.toggle("active");

  var productFaded = document.getElementById("productFaded");
  var cartInfo = document.getElementById('cartInfo');
  var currentProduct = document.getElementById("heroImage").getAttribute('src');

  // Match faded background to selected product
  productFaded.src = currentProduct;

  // Set up correct pluralization of item depending on item count
  if (currentQuantity.value === "1") {
    cartInfo.innerHTML = "You've added " + currentQuantity.value + " item to your cart. Your total is $" + Number(19.95 * currentQuantity.value).toFixed(2) + '.';
  } else {
  cartInfo.innerHTML = "You've added " + currentQuantity.value + " items to your cart. Your total is $" + Number(19.95 * currentQuantity.value).toFixed(2) + '.';
  }
}

var products = ["a", "b", "c", "d"];

var a = {
  name: "French Blue"
};
var b = {
  name: "Black Stripe"
};
var c = {
  name: "Green Stripe"
};
var d = {
  name: "Red"
};

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
      if (elementClicked.className === 'productImage', this && elementClicked.id !== 'imageContainer') {
        document.getElementById("heroImage").src='assets/' + elementClicked.id + 'Large.jpg';
      }
    };
      switch (elementClicked.id) {
        case "a":
        document.getElementById("styleName").innerHTML='Williams-Sonoma Classic Apron, ' + a.name;
        document.getElementById("breadcrumbProduct").innerHTML='Williams-Sonoma Classic Apron, ' + a.name;
        break;
        case "b":
        document.getElementById("styleName").innerHTML='Williams-Sonoma Classic Apron, ' + b.name;
        document.getElementById("breadcrumbProduct").innerHTML='Williams-Sonoma Classic Apron, ' + b.name;
        break;
        case "c":
        document.getElementById("styleName").innerHTML='Williams-Sonoma Classic Apron, ' + c.name;
        document.getElementById("breadcrumbProduct").innerHTML='Williams-Sonoma Classic Apron, ' + c.name;
        break;
        case "d":
        document.getElementById("styleName").innerHTML='Williams-Sonoma Classic Apron, ' + d.name;
        document.getElementById("breadcrumbProduct").innerHTML='Williams-Sonoma Classic Apron, ' + d.name;
        break;
      }
    console.log(elementClicked);
  });
}

createImages();
setUpEventListeners();
