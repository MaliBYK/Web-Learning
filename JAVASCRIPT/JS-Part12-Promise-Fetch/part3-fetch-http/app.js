class Fetch {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(new Error(err)));
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(new Error(err)));
    });
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(new Error(err)));
    });
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(new Error(err)));
    });
  }
}

const fetch1 = new Fetch();
document.querySelector(".post").addEventListener("click", function (e) {
  fetch1
    .post("https://jsonplaceholder.typicode.com/posts", {
      name: "Mali",
      salary: 5000,
    })
    .then(data => console.log(data))
    .catch(err => console.error(err));
});

document.querySelector(".get").addEventListener("click", function (e) {
  fetch1
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(data => console.log(data))
    .catch(err => console.error(err));
});

document.querySelector(".put").addEventListener("click", function (e) {
  fetch1
    .put("https://jsonplaceholder.typicode.com/posts/31", {
      name: "Mali",
      salary: 5000000,
    })
    .then(data => console.log(data))
    .catch(err => console.error(err));
});

document.querySelector(".delete").addEventListener("click", function (e) {
  fetch1
    .delete("https://jsonplaceholder.typicode.com/posts/15")
    .then(data => console.log("Post Succesfully Deleted!"))
    .catch(err => console.error("Failed To Delete The Post!" + err));
});
