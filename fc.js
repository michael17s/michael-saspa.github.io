function submitForm() {
    var searchValue = document.getElementById("search").value;
    if (searchValue.trim() !== "") {
      // Redirect to the next page
      window.location.href = "search.html";
    }
    return false;
  }

  function increment() {
    var quantityInput = document.getElementById("quantity");
    var currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
  }

  function decrement() {
    var quantityInput = document.getElementById("quantity");
    var currentValue = parseInt(quantityInput.value);
    if (currentValue > 0) {
      quantityInput.value = currentValue - 1;
    }
  }