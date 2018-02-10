import Kernel from './world/Kernel';
import Globe, {GlobeOptions} from './world/Globe';
import './index.scss';
// declare function require(name: string): any;
// const template = require('./template.html');
// console.log(template);

(function () {
    var options = new GlobeOptions();
    options.satellite = true;
    options.level = 2;
    options.lonlat = 'auto';
    var globe = Globe.getInstance(options);
    globe.placeAt(document.body);
    (<any>window).globe = globe;
    (<any>window).kernel = Kernel;

    function resize(){
        globe.resize(window.innerWidth, window.innerHeight);
    }

    setTimeout(() => {
        globe.poiLayer.setPickListener((target) => {
            alert("click poi");
            console.log(target)
        })
    }, 3000)

    window.addEventListener("resize", resize, false);

    resize();
})();