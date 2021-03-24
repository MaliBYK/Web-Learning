document.querySelector("#change").addEventListener("click", change);

function change() {
  xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.exchangeratesapi.io/latest", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const rate = response.rates.TRY;
      const amount = parseFloat(document.querySelector("#amount").value);
      document.querySelector("#tl").value = amount * rate;
    }
  };

  xhr.send();
}
