import { series } from './data.js';
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="courses"
var averageSeasonsElement = document.getElementById('average-seasons');
var cardContainer = document.getElementById('card-container');
renderSeriesInTable(series);
showAverageSeasons(series);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.numero, "</td>\n                           <td>").concat(c.name, "</td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>");
        trElement.addEventListener('click', function () { return showSeriesDetails(c); });
        seriesTbody.appendChild(trElement);
    });
}
function calculateAverageSeasons(series) {
    var totalSeasons = series.reduce(function (acc, serie) { return acc + serie.seasons; }, 0);
    return totalSeasons / series.length;
}
function showAverageSeasons(series) { var averageSeasons = calculateAverageSeasons(series); averageSeasonsElement.textContent = "Promedio de temporadas: ".concat(averageSeasons.toFixed(2)); }
function showSeriesDetails(serie) { cardContainer.innerHTML = " <div class=\"card\" style=\"width: 18rem;\"> <img class=\" img-fluid\" src=\"".concat(serie.imageUrl, "\" > <h5 class=\"card-title\">").concat(serie.name, "</h5> <p class=\"card-text\">").concat(serie.description, "</p> <a href=\"").concat(serie.link, "\" >M\u00E1s informaci\u00F3n</a> </div> </div> "); }
