<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Your Cart</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body{margin:0;font-family:system-ui;background:#f5f7fb;padding-bottom:80px}
.app{max-width:420px;margin:auto;padding:12px}
.card{background:#fff;padding:14px;border-radius:14px;margin-top:12px}
.item{display:flex;justify-content:space-between;align-items:center;margin:8px 0}
.qty{display:flex;align-items:center;gap:6px}
.qty button{width:30px;height:30px}
button{background:#0a7cff;color:#fff;border:none;padding:10px;border-radius:10px}
.bottom-nav{
 position:fixed;bottom:0;width:100%;background:#fff;
 display:flex;justify-content:space-around;padding:8px 0;border-top:1px solid #ddd
}
</style>
</head>

<body>

<div class="app">
  <h2>🛒 Your Cart</h2>

  <div class="card" id="cartItems"></div>

  <div class="card">
    <h3>Total: ₹<span id="total">0</span></h3>
    <button onclick="goPayment()">Proceed to Payment</button>
  </div>
</div>

<div class="bottom-nav">
  <div>🏠 Home</div>
  <div>🔁 Order Again</div>
  <div>📂 Categories</div>
  <div>👤 Profile</div>
</div>

<script>
let cart = JSON.parse(localStorage.getItem("cart")) || {};

function render(){
 let box=document.getElementById("cartItems");
 box.innerHTML="";
 let total=0;

 for(let item in cart){
   total+=cart[item].price*cart[item].qty;
   box.innerHTML+=`
   <div class="item">
     <span>${item}</span>
     <div class="qty">
       <button onclick="change('${item}',-1)">-</button>
       ${cart[item].qty}
       <button onclick="change('${item}',1)">+</button>
     </div>
   </div>`;
 }
 document.getElementById("total").innerText=total;
}

function change(item,val){
 cart[item].qty+=val;
 if(cart[item].qty<=0) delete cart[item];
 localStorage.setItem("cart",JSON.stringify(cart));
 render();
}

function goPayment(){
 alert("Next step: Payment Page");
}

render();
</script>

</body>
</html>
