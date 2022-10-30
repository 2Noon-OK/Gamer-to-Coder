fetch("https://gamertocoder.garena.co.th/api/minigames")
.then((response) => {
  if (response.status !== 200) {
    return response.status;
  }
  return response.json();
})
.then((data) => {
  if (typeof data == "number") {
    alert(data);
  } else {
    for (let i = 0; i < data.length; i++) {
      const currentData = data[i];
      const newListItem = document.createElement("li");
      newListItem.classList.add(".card_section");
      const genre_array = currentData.genre;
      let genre_string = genre_array[0];
      if (genre_array.length > 1) {
        for (let j = 1; j < genre_array.length; j++) {
          genre_string = genre_string + ", " + genre_array[j];
        }
      }
      const html =
      '<div class="card_section">'
      +'<div class="card">'
      +'<div class="circle"> </div>'
      +'<div class="content">'
      +'<h2 onclick="changeName(' + currentData.name +')"> ' + currentData.name + '</h2>'
      +'<p>' + genre_string + '</p>'
      +'<p>'+ currentData.description + '</p>'
      +'<a target:" _blank" href="' + currentData.icon + '">Link</a>'
      +'</div>'
      +'<img src="' + currentData.icon + '"/>'
      +'</div>'
      +'</div>'
      html.trim();
      newListItem.innerHTML = html;
      document.getElementById("list").appendChild(newListItem);
    }
  }
});
