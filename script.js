let jar=0, weekly=0, monthly=0;

function changeJar(v){
  jar=Math.max(0,jar+v);
  document.getElementById("jarQty").innerText=jar;
  document.getElementById("jarPrice").innerText =
    jar>0 ? "₹"+(jar*40) : "";
}

function changeWeekly(v){
  weekly=Math.max(0,weekly+v);
  document.getElementById("weeklyQty").innerText=weekly;
}

function changeMonthly(v){
  monthly=Math.max(0,monthly+v);
  document.getElementById("monthlyQty").innerText=monthly;
}

function goToCart(){
  localStorage.setItem("jar",jar);
  localStorage.setItem("weekly",weekly);
  localStorage.setItem("monthly",monthly);
  location.href="cart.html";
}
