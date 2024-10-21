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
            <td class="series-name">${serie.getName()}</td>
            <td>${serie.getChannel()}</td>
            <td>${serie.getSeasons()}</td>
        `;

        serieRow.addEventListener('click', () => {
            showInfoSerie(serie);
        });
        totalSeasons += serie.getSeasons();

        seriesList.appendChild(serieRow);
    }

    seriesTable.appendChild(seriesList); 

    const averageSeasons = Math.round(totalSeasons / series.length);

    let averageText: HTMLElement = document.createElement('p');
    averageText.className = 'mt-3 avg-text';
    averageText.textContent = `Average number of seasons: ${averageSeasons}`;

    seriesTable.parentElement!.appendChild(averageText);
}

function showInfoSerie(serie: any): void {
    let cardContainer: HTMLElement = document.getElementById('cardContainer')!;
    let serieImage: HTMLImageElement = document.getElementById('serieImage') as HTMLImageElement;
    let serieTitle: HTMLElement = document.getElementById('serieTitle')!;
    let serieDescription: HTMLElement = document.getElementById('serieDescription')!;
    let serieLink: HTMLAnchorElement = document.getElementById('serieLink') as HTMLAnchorElement;

    // Actualizar los valores de la tarjeta con los detalles de la serie
    serieImage.src = serie.getImage();
    serieTitle.textContent = serie.getName();
    serieDescription.textContent = serie.getDescription();
    serieLink.href = serie.getLink();

    // Mostrar la tarjeta si está oculta
    cardContainer.style.display = 'block';
}