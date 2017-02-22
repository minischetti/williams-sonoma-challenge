var handlers = {
  decrementQuantity: function() {
    document.getElementById("quantity").stepDown(1);
    view.updatePrice();
  },
  incrementQuantity: function() {
    document.getElementById("quantity").stepUp(1);
    view.updatePrice();
  },
  toggleCart: function() {
    var cartInfo = document.getElementById('cartInfo');
    var currentProduct = document.getElementById("heroImage").getAttribute('src');
    var currentQuantity = document.getElementById('quantity');

    // Toggle dim div and cart modal
    document.getElementById("dim").classList.toggle("active");
    document.getElementById("cart").classList.toggle("active");

    // Set up correct pluralization of item depending on item count
    if (currentQuantity.value === "1") {
      cartInfo.innerHTML = "You've added " + currentQuantity.value + " item to your cart. Your total is $" + Number(19.95 * currentQuantity.value).toFixed(2) + '.';
    } else if (currentQuantity.value > "1") {
    cartInfo.innerHTML = "You've added " + currentQuantity.value + " items to your cart. Your total is $" + Number(19.95 * currentQuantity.value).toFixed(2) + '.';
    } else {
    cartInfo.innerHTML = "You don't have any items in your cart.";
    }
  }
};

var view = {
  setUpEventListeners: function() {
    var imageContainer = document.getElementById('imageContainer');
    var products = ["a", "b", "c", "d"];
    var a = { name: "French Blue" };
    var b = { name: "Black Stripe" };
    var c = { name: "Green Stripe" };
    var d = { name: "Red" };
    // Listen for clicks on imageContainer
    imageContainer.addEventListener('click', function(event) {
      var elementClicked = event.target;
      // Change hero image to selected style
      for (var i = 0; i < products.length; i++) {
        if (elementClicked.className === 'productImage', this && elementClicked.id !== 'imageContainer') {
          document.getElementById("heroImage").src='assets/' + elementClicked.id + 'Large.jpg';
        }
      };
      // Change all mentions of current style to the one selected (breadcrumbs and title)
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
    });
  },

  clickLink: function() {
    document.body.addEventListener('click', function(event) {
      if (event.target.localName === "a") {
        document.getElementById("notification").classList.add("active");
        setTimeout(function() {
          document.getElementById("notification").classList.remove("active");
        }, 6000);
      }
    });
  },

  openMenu: function() {
    document.getElementById("burger").classList.toggle("active");
    document.getElementById("nav").classList.toggle("active");
    document.getElementById("dim").classList.toggle("active");
  },

  updatePrice: function() {
    var currentQuantity = document.getElementById('quantity');
    // Change price based on product quantity
    document.getElementById('price').innerHTML = '$' + Number(19.95 * currentQuantity.value).toFixed(2);
  },

  // Create Product Images
  createImages: function() {
    var imageContainer = document.getElementById('imageContainer');
    var products = ["a", "b", "c", "d"];
    for (i = 0; i < products.length; i++) {
      var productImage = document.createElement('img');
      imageContainer.appendChild(productImage);
      productImage.id = products[i];
      productImage.className = 'productImage';
      productImage.src = 'assets/' + products[i] + 'Large.jpg';
    }
  },
  checkEdge: function() {
    if (window.navigator.userAgent.indexOf("Edge") > -1) {
      document.getElementById('decrementQuantity').style.display = "none";
      document.getElementById('incrementQuantity').style.display = "none";
    }
  }
}

view.setUpEventListeners();
view.checkEdge();
view.clickLink();
view.createImages();
