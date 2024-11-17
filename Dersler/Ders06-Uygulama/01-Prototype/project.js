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
function eventListeners() {
  form.addEventListener("submit", addFilm);
}
eventListeners();

function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    // Hata Mesajı Verilecek
    console.log("Hata: Eksik Bilgi Girişi");
  } else {
    // Yeni Film Ekleme
    const newFilm = new Film(title, director, url);
    ui.addFilmToUI(newFilm); // Arayüze Film Ekleme
    storage.addFilmToStorage(newFilm); // Storage'a Film Ekleme
    // Başarılı Mesajı Verilecek
    ui.clearInputs(titleElement, directorElement, urlElement); // Inputları Temizleme
    e.preventDefault();
  }
}
