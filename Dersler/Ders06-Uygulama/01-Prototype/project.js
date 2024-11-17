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
