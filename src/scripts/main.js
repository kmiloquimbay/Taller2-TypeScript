import { series } from './data.js';
var seriesTable = document.getElementById('seriesTable');
showSeries(series);
function showSeries(series) {
    var seriesList = document.createElement('tbody');
    var totalSeasons = 0;
    var _loop_1 = function (serie) {
        var serieRow = document.createElement('tr');
        serieRow.innerHTML = "\n            <td>".concat(serie.getId(), "</td>\n            <td class=\"series-name\">").concat(serie.getName(), "</td>\n            <td>").concat(serie.getChannel(), "</td>\n            <td>").concat(serie.getSeasons(), "</td>\n        ");
        serieRow.addEventListener('click', function () {
            showInfoSerie(serie);
        });
        totalSeasons += serie.getSeasons();
        seriesList.appendChild(serieRow);
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
    seriesTable.appendChild(seriesList);
    var averageSeasons = Math.round(totalSeasons / series.length);
    var averageText = document.createElement('p');
    averageText.className = 'mt-3 avg-text';
    averageText.textContent = "Average number of seasons: ".concat(averageSeasons);
    seriesTable.parentElement.appendChild(averageText);
}
function showInfoSerie(serie) {
    var cardContainer = document.getElementById('cardContainer');
    var serieImage = document.getElementById('serieImage');
    var serieTitle = document.getElementById('serieTitle');
    var serieDescription = document.getElementById('serieDescription');
    var serieLink = document.getElementById('serieLink');
    // Actualizar los valores de la tarjeta con los detalles de la serie
    serieImage.src = serie.getImage();
    serieTitle.textContent = serie.getName();
    serieDescription.textContent = serie.getDescription();
    serieLink.href = serie.getLink();
    // Mostrar la tarjeta si está oculta
    cardContainer.style.display = 'block';
}
