var arr = [];
var arr2 = [];

function filtrarById(value) {
  $.ajax({
    method: "GET",
    url: `https://api.jikan.moe/v4/anime/${value}/episodes`,
    success: function (response) {
      console.log(response);
      arr = response.data;
      tabla(arr);
    },
  });

  $.ajax({
    method: "GET",
    url: `https://api.jikan.moe/v4/anime/${value}/statistics`,
    success: function (response) {
      console.log(response);
      arr2 = response.data;
      tabla2(arr2);
    },
  });
}

function tabla(data) {
  var table = document.getElementById("columnas-anime");
  table.innerHTML = "";

  for (var i = 0; i < data.length; i++) {
    var row = `
    <th scope="row"> Episodios </th>
    <td style="--size: calc(${data[i].score} / 10)">${data[i].score}</td>`;
    table.innerHTML += row;
  }
}

function tabla2(data) {
  var table = document.getElementById("barras-anime");
  table.innerHTML = "";
  var denominador;

  if (data.completed >= data.on_hold && data.completed >= data.dropped) {
    denominador = data.completed;
  }
  if (data.on_hold >= data.completed && data.on_hold >= data.dropped) {
    denominador = data.on_hold;
  }
  if (data.dropped >= data.completed && data.dropped >= data.on_hold) {
    denominador = data.dropped;
  }

  var row = `
    <th scope="row"> Visto Dropped Watchlist </th>
    <td style="--size: calc(${data.completed} / ${denominador})">${data.completed}</td>
    <td style="--size: calc(${data.dropped} / ${denominador})">${data.dropped}</td>
    <td style="--size: calc(${data.on_hold} / ${denominador})">${data.on_hold}</td>
    `;
  table.innerHTML += row;
}

window.onload = function () {
  filtrarById("44511");
};
