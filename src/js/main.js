import $ from 'jquery';
import MainScene from './graphics/scenes/MainScene';
import ThreeGraphic from './graphics/utils/ThreeGraphic';

window.$ = $;
class App {

    constructor() {
        this.init();
    }

    init() {
        this.threeGraphic = new ThreeGraphic(new MainScene);
    }
}

$(document).ready(() => new App());