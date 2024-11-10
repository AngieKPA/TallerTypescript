"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="courses"
function renderSeriesInTable(series) {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.numero}</td>
                           <td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}
document.addEventListener('DOMContentLoaded', () => { renderSeriesInTable(series); });
