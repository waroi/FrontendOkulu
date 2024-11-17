function UI() {}

UI.prototype.addFilmToUI = function (newFilm) {
  const filmList = document.getElementById("films");
  filmList.innerHTML += `
    <tr>
      <td class="w-25"><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
      <td class="w-25">${newFilm.title}</td>
      <td class="w-25">${newFilm.director}</td>
      <td class="w-25"><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
    </tr>
  `;
};

UI.prototype.clearInputs = function (element1, element2, element3) {
  element1.value = "";
  element2.value = "";
  element3.value = "";
};

UI.prototype.loadAllFilms = function (films) {
  const filmList = document.getElementById("films");
  films.forEach(function (films) {
    filmList.innerHTML += `
      <tr>
        <td class="w-25"><img src="${films.url}" class="img-fluid img-thumbnail"></td>
        <td class="w-25">${films.title}</td>
        <td class="w-25">${films.director}</td>
        <td class="w-25"><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
      </tr>
    `;
  });
};

UI.prototype.deleteFimFromUI = function (element) {
  element.parentElement.parentElement.remove();
};

UI.prototype.clearAllFilmsFromUI = function () {
  const filmList = document.getElementById("films");
  while (filmList.firstElementChild !== null) {
    filmList.firstElementChild.remove();
  }
};

UI.prototype.displayMessage = function (message, type) {
  const cardBody = document.querySelector(".card-body");
  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;
  cardBody.appendChild(div);
  setTimeout(function () {
    div.remove();
  }, 2000);
};
