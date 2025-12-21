function selectPayment(element) {
  document.querySelectorAll(".payment-option").forEach(opt => {
    opt.classList.remove("selected");
  });

  element.classList.add("selected");

  const btn = document.getElementById("continueBtn");
  btn.disabled = false;
  btn.style.background = "green";
  btn.style.color = "white";
}


function completePayment() {
  alert("Payment Successful ✅");

  
  localStorage.removeItem("cart");

  window.location.href = "/local storage/index.html";
}

function goBack() {
  window.history.back();
}
