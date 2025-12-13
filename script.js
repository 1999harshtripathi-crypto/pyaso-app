let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD ITEM
function addToCart(name, price, img) {
  const item = cart.find(i => i.name === name);

  if (item) {
    item.qty += 1;
  } else {
    cart.push({ name, price, img, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart");
}

// LOAD CART
function loadCart() {
  const list = document.getElementById("cart-items");
  const totalBox = document.getElementById("total");
  list.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    list.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}">
        <div>
          <b>${item.name}</b><br>
          ₹${item.price} × ${item.qty}
        </div>
      </div>
    `;
  });

  totalBox.innerText = "₹" + total;
}
