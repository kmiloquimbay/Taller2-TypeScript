import { series } from './data.js';

let seriesTable: HTMLElement = document.getElementById('seriesTable')!;

showSeries(series);

function showSeries(series: any[]): void {
    let seriesList: HTMLElement = document.createElement('tbody');
    

    let totalSeasons = 0;

    for(let serie of series) {
        let serieRow: HTMLElement = document.createElement('tr');
        serieRow.innerHTML = `
            <td>${serie.getId()}</td>
            <td>${serie.getName()}</td>
            <td>${serie.getChannel()}</td>
            <td>${serie.getSeasons()}</td>
        `;
        totalSeasons += serie.getSeasons();

        seriesList.appendChild(serieRow);
    }

    seriesTable.appendChild(seriesList); 

    const averageSeasons = Math.round(totalSeasons / series.length);

    let averageText: HTMLElement = document.createElement('p');
    averageText.className = 'mt-3';
    averageText.textContent = `Average number of seasons: ${averageSeasons}`;

    seriesTable.parentElement!.appendChild(averageText);
}
