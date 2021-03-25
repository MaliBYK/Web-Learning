class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }

  get(url, callback) {
    this.xhr.open("GET", url);

    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        callback("Herhangi Bir Hata Oluştu !", null);
      }
    };

    this.xhr.send();
  }
}

const request = new Request();
request.get(
  "https://jsonplaceholder.typicode.com/albums/31",
  function (err, response) {
    if (err === null) {
      console.log(response);
    } else {
      console.log(err);
    }
  }
);
