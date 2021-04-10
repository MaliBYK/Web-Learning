export class Request {
  constructor(url) {
    this.url = url;
  }

  async get() {
    const response = await fetch(this.url);
    const responseData = response.json();

    return responseData;
  }

  async post(data) {
    const response = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json ; charset=UTF-8",
      },
    });

    const responseData = response.json();
    return responseData;
  }

  async put(data, id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json ; charset=UTF-8",
      },
    });

    const responseData = response.json();
    return responseData;
  }

  async delete(id) {
    await fetch(`${this.url}/${id}`, {
      method: "DELETE",
    });

    return "Veri Silindi!";
  }
}
