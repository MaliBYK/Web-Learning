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

  post(url, data, callback) {
    this.xhr.open("POST", url);
    this.xhr.setRequestHeader("Content-Type", "application/json");
    this.xhr.onload = () => {
      if (this.xhr.status === 201) {
        callback(null, this.xhr.responseText);
      } else {
        callback("Post Request Failed !", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }

  put(url, data, callback) {
    this.xhr.open("PUT", url);
    this.xhr.setRequestHeader("Content-Type", "application/json");

    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        callback("Put Request Failed !", null);
      }
    };

    this.xhr.send(JSON.stringify(data));
  }
}

const request = new Request();

document.querySelector(".btn-get").addEventListener("click", function () {
  request.get(
    "https://jsonplaceholder.typicode.com/posts",
    function (err, data) {
      if (err === null) {
        console.log(data);
      } else {
        console.log(err);
      }
    }
  );
});

document.querySelector(".btn-post").addEventListener("click", function () {
  request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      userid: "Muhammet Ali",
      title: "Development",
      body: "lorem10 olmuyomuş burda qwerqwer",
    },
    function (err, data) {
      if (err === null) {
        console.log(data);
      } else {
        console.log(err);
      }
    }
  );
});

document.querySelector(".btn-put").addEventListener("click", function () {
  request.put(
    "https://jsonplaceholder.typicode.com/posts/10",
    {
      userid: "Muhammet Ali",
      title: "Development",
      body: "lorem10 olmuyomuş burda qwerqwer",
    },
    function (err, data) {
      if (err === null) {
        console.log(data);
      } else {
        console.log(err);
      }
    }
  );
});
