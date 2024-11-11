import { Serie } from './Serie.js';
import { series } from './data.js';


const seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="courses"
const averageSeasonsElement: HTMLElement = document.getElementById('average-seasons')!;
const cardContainer: HTMLElement = document.getElementById('card-container')!; 

renderSeriesInTable(series)
showAverageSeasons(series)

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.numero}</td>
                           <td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
    trElement.addEventListener('click', () => showSeriesDetails(c));
    seriesTbody.appendChild(trElement);
  });

}

function calculateAverageSeasons(series: Serie[]): number {
  const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
  return totalSeasons / series.length;
}

function showAverageSeasons(series: Serie[]): void { const averageSeasons = calculateAverageSeasons(series); averageSeasonsElement.textContent = `Promedio de temporadas: ${averageSeasons.toFixed(2)}`}


function showSeriesDetails(serie: Serie): void { cardContainer.innerHTML = ` <div class="card" style="width: 18rem;"> <img class=" img-fluid" src="${serie.imageUrl}" > <h5 class="card-title">${serie.name}</h5> <p class="card-text">${serie.description}</p> <a href="${serie.link}" >Más información</a> </div> </div> `; }