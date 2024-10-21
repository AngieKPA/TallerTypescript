import { series } from './data';
function displaySeriesTable() {
    return "\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>Id</th>\n          <th>Name</th>\n          <th>Channel</th>\n          <th>Seasons</th>\n        </tr>\n      </thead>\n      <tbody>\n        ".concat(series.map(function (serie) { return "\n          <tr>\n            <td>".concat(serie.id, "</td>\n            <td>").concat(serie.name, "</td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n          </tr>\n        "); }).join(''), "\n      </tbody>\n    </table>\n  ");
}
document.getElementById('seriesTable').innerHTML = displaySeriesTable();
