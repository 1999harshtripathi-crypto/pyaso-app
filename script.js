let cart = JSON.parse(localStorage.getItem("pyasoCart")) || {};

function updateQty(id, price, name, img, change){
  if(!cart[id]){
    cart[id] = {name, price, qty:0, img};
  }

  cart[id].qty += change;
  if(cart[id].qty < 0) cart[id].qty = 0;

  document.getElementById(id).innerText = cart[id].qty;
  localStorage.setItem("pyasoCart", JSON.stringify(cart));
}

function loadQty(){
  for(let id in cart){
    let el = document.getElementById(id);
    if(el) el.innerText = cart[id].qty;
  }
}

function goCart(){
  location.href="cart.html";
}
