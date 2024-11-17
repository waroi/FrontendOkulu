class UI {
  static addFilmToUI(newFilm) {
    const filmList = document.getElementById("films");
    filmList.innerHTML += `
    <tr>
      <td class="w-25"><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
      <td class="w-25">${newFilm.title}</td>
      <td class="w-25">${newFilm.director}</td>
      <td class="w-25"><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
    </tr>
    `;
  }
  static clearInputs(element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
  }
  static displayMessage(message, type) {
    const cardBody = document.querySelector(".card-body");
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);
    setTimeout(function () {
      div.remove();
    }, 2000);
  }
  static deleteFilmFromUI(e) {
    e.parentElement.parentElement.remove();
  }
  static clearAllFilmsFromUI() {
    const filmList = document.getElementById("films");
    while (filmList.firstElementChild !== null) {
      filmList.firstElementChild.remove();
    }
  }
  static loadAllFilms(films) {
    const filmList = document.getElementById("films");
    films.forEach(function (film) {
      filmList.innerHTML += `
      <tr>
        <td class="w-25"><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td class="w-25">${newFilm.title}</td>
        <td class="w-25">${newFilm.director}</td>
        <td class="w-25"><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
      </tr>
      `;
    });
  }
}
