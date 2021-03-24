document.querySelector(".btn").addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (this.status === 200) {
      document.querySelector(".ajax").textContent = this.responseText;
    }
  };

  xhr.open("GET", "textFile.txt", true);

  xhr.send();
});

// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// xhr.onreadystatechange = function () {
//   // console.log(this.status);
//   // console.log(this.readyState);

//   if (this.status === 200 && this.readyState === 4) {
//     console.log(this.responseText);
//   }
// };
