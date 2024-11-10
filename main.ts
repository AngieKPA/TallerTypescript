import { Serie } from './serie.js';
import { series } from './data.js';


const seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="courses"

renderSeriesInTable(series)

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.numero}</td>
                           <td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });

}



