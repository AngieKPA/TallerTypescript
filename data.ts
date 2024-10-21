import { Serie } from './Serie.js';

export const series: Serie[] = [
  {
    id: 1,
    name: 'Breaking Bad',
    channel: 'AMC',
    seasons: 5
  },
  {
    id: 2,
    name: 'Game of Thrones',
    channel: 'HBO',
    seasons: 8
  },
  {
    id: 3,
    name: 'Stranger Things',
    channel: 'Netflix',
    seasons: 4
  },

];

let serieTable: HTMLElement = document.getElementById("serie")!;

mostrarDatosSerie(series)

function mostrarDatosSerie(serie: Serie):void{
    let tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML =`
    <tr><td>id:</td><td>${serie.id}</td></tr>
    <tr><td>name:</td><td>${serie.name}</td></tr>
    <tr><td>channel:</td><td>${serie.channel}</td></tr>
    <tr><td>seasons:</td><td>${serie.seasons}</td></tr>
    `
    serieTable.appendChild(tbodySerie);
}