let value;

value = document;
value = document.URL;
value = document.title;
value = document.location;
value = document.location.hostname;
value = document.scripts[0];
value = document.links;
value = document.links[document.links.length - 1].getAttribute("class");
value = document.links[document.links.length - 1].classList;

// ID ile seçme
value = document.getElementById("title");
value = document.getElementById("title").textContent;
value = document.getElementById("title").innerHTML;

// Class ile seçme
value = document.getElementsByClassName("text");
value = document.getElementsByClassName("text")[0];

// Tag ile seçme
value = document.getElementsByTagName("p");

// Query ile seçme
value = document.querySelector("#title");
value = document.querySelector(".text");
value = document.querySelector("span");

// Eleman oluşturma

const button = document.createElement("a");
button.id = "denemeButon";
button.className = "btn btn-danger";
button.href = "https://www.google.com";
button.target = "_blank";
button.textContent = "Google'a git";
const divSec = document.querySelector("#denemeDiv");
divSec.appendChild(button);

value = document.getElementById("denemeButon");

value.addEventListener("click", function () {
  console.log("Tıklama işlemi gerçekleşti");
});

console.log(value);
