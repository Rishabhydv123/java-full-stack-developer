 function selectPayment(element) {
    document.querySelectorAll('.payment-option').forEach(option => {
      option.classList.remove('selected');
    });
    

    element.classList.add('selected');

    const continueBtn = document.getElementById('continueBtn');
    continueBtn.disabled = false;
    continueBtn.classList.add('enabled');


}

function continueBtn() {
  window.location.href = "/local storage/index.html";
}

 