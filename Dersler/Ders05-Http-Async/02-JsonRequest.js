document.getElementById("getButton").addEventListener("click", getAllData);

function getAllData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);
  xhr.onload = function () {
    let list = document.getElementById("employees");
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      data.forEach((user) => {
        list.innerHTML += `
        <tr>
          <td>${user.name}</td>
          <td>${user.department}</td>
          <td>${user.salary}</td>
        </tr>
        `;
      });
    } else {
      console.log("Bir Hata Oluştu!");
    }
  };
  xhr.send();
}
