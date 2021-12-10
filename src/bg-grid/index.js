import Grid from './grid';
import { preloadImages } from '../other/utils';

// Preload  images
const mainGrid = {
    load: () => {
        preloadImages('.grid__item-img, .bigimg').then(() => {    
            // Initialize grid
            const grid = new Grid(document.querySelector('.grid'));
        });
    }
}

export default mainGrid;