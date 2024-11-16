// function getTextFile() {
//   fetch("text.txt")
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// }
// getTextFile();

// function getJsonFile() {
//   fetch("users.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// }
// getJsonFile();

// function getApi() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// }
// getApi();

class Request {
  static get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error, "Veri alınamadı"));
    });
  }
  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error, "Hata Alındı"));
    });
  }
  static put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error, "Hata Alındı"));
    });
  }
  static delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => resolve("Veri Silme İşlemi Başarılı"))
        .catch((error) => reject(error, "Hata Alındı"));
    });
  }
}

// Request.get("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// Request.post("https://jsonplaceholder.typicode.com/posts", {
//   userId: 1,
//   title: "Post Başlık",
//   body: "Post Body",
// })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// Request.put("https://jsonplaceholder.typicode.com/posts/1", {
//   userId: 1,
//   title: "Post Başlık fdherty",
//   body: "Post Body dyjdtjty",
// })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

Request.delete("https://jsonplaceholder.typicode.com/posts/2")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
