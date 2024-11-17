const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// UI Objesi
const ui = new UI();

// Storage Objesi
const storage = new Storage();

// Eventler
eventListeners();
function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", loadAllFilms);
  cardBody.addEventListener("click", deleteFilm);
  clear.addEventListener("click", clearAllFilms);
}

function clearAllFilms() {
  if (confirm("Emin misiniz?")) {
    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
    ui.displayMessage("Tüm Filmler Silindi...", "success");
  }
}

function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    ui.deleteFimFromUI(e.target);
    storage.deleteFilmsFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
    ui.displayMessage("Silme İşlemi Başarılı...", "success");
  }
}

function addFilm(e) {
  e.preventDefault();
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    // Hata Mesajı
    ui.displayMessage("Tüm Alanları Doldurunuz...", "danger");
  } else {
    // Yeni Film Ekleme
    const newFilm = new Film(title, director, url);
    ui.addFilmToUI(newFilm); // Arayüze Film Ekleme
    storage.addFilmToStorage(newFilm); // Storage'a Film Ekleme
    // Başarılı Mesajı
    ui.displayMessage("Film Ekleme İşlemi Başarılı...", "success");
    ui.clearInputs(titleElement, directorElement, urlElement); // Inputları Temizleme
  }
}

function loadAllFilms() {
  let films = storage.getFilmsFromStorage();
  ui.loadAllFilms(films);
}
