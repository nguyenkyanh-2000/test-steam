let genre = "";
let q = "";

async function getGames() {
  let url = "https://steam-api-dot-cs-platform-306304.et.r.appspot.com/games?";
  if (genre) url += "genres=" + genre + "&";
  if (q) url += "q=" + q + "&";
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}

let listOfGenres = document.querySelectorAll(".genre");
listOfGenres.forEach((genreLi) => {
  genreLi.addEventListener("click", function () {
    genre = genreLi.innerHTML.toLowerCase();
    getGames();
  });
});
