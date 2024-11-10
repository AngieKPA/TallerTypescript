import { series } from './data.js';
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="courses"
var averageSeasonsElement = document.getElementById('average-seasons');
renderSeriesInTable(series);
showAverageSeasons(series);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.numero, "</td>\n                           <td>").concat(c.name, "</td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function calculateAverageSeasons(series) {
    var totalSeasons = series.reduce(function (acc, serie) { return acc + serie.seasons; }, 0);
    return totalSeasons / series.length;
}
function showAverageSeasons(series) { var averageSeasons = calculateAverageSeasons(series); averageSeasonsElement.textContent = "Promedio de temporadas: ".concat(averageSeasons.toFixed(2)); }
