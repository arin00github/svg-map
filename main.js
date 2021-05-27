import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

let map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 0
  })
});

//zoom out 기능설정
document.getElementById('zoom-out').onclick = function(){
  let view = map.getView();
  let zoom = view.getZoom();
  view.setZoom(zoom -1);
}

//zoom in 기능설정
document.getElementById('zoom-in').onclick = function(){
  let view = map.getView();
  let zoom = view.getZoom();
  view.setZoom(zoom + 1);
}