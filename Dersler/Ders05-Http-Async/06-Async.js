class Request {
  static async get(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Bir hata oluştu: " + response.status);
    }
    const res = await response.json();
    return res;
  }
  static async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json;",
      },
    });
    if (!response.ok) {
      throw new Error("Bir hata oluştu: " + response.status);
    }
    const res = await response.json();
    return res;
  }
  static async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json;",
      },
    });
    if (!response.ok) {
      throw new Error("Bir hata oluştu: " + response.status);
    }
    const res = await response.json();
    return res;
  }
  static async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Bir hata oluştu ");
    }
    const res = "Veri Silme İşlemi Başarılı";
    return res;
  }
}

// Request.get("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// Request.post("https://jsonplaceholder.typicode.com/posts", {
//   userId: 101,
//   title: "Post Başlık",
//   body: "Post Body",
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// Request.put("https://jsonplaceholder.typicode.com/posts/2", {
//   userId: 101,
//   title: "Post Başlık",
//   body: "Post Body",
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

Request.delete("https://jsonplaceholder.typicode.com/posts/2")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
