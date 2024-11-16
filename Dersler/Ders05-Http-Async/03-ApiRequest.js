document.getElementById("veri").addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onload = function () {
    const cikti = document.getElementById("output");
    if (this.status === 200) {
      let data = JSON.parse(xhr.responseText);
      data.forEach(function (item) {
        // console.log(`
        // Başlık: ${item.title}
        // İçerik: ${item.body}
        // `);
        cikti.innerHTML += `
        <div>
        Başlık: ${item.title}
        <br>
        İçerik: ${item.body}
        </div>
        <hr>
        `;
      });
    }
  };
  xhr.send();
});
