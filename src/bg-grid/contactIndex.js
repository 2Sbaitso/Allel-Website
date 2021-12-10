import Cursor from '../other/cursor';
import Grid from './contactGrid';

// Preload  images
const mainGrid = {
    load: () => {
        var elGrid = document.querySelector('.grid-absolute')
        var nDiv = 20
        for (let index = 0; index < nDiv; index++) {

            var gridItem = document.createElement("div")
            gridItem.classList.add('grid__item')

            var gridItemText = document.createElement("div")
            gridItemText.classList.add('grid__item-text')

            var newContent = document.createTextNode('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
            gridItemText.appendChild(newContent);

            gridItem.appendChild(gridItemText)

            elGrid.appendChild(gridItem)
        }

        const grid = new Grid(elGrid);

        console.log('contact is setting')
    }
}

export default mainGrid;