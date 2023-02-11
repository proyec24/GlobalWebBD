import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  map: mapboxgl.Map;
  constructor() { }
  ngOnInit(): void {
    this.mapLocation();
    this.getPosition().then(pos => {
      console.log(pos.lat);
      console.log(pos.lng);
    })
  }
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });
  }
  mapLocation() {
    (mapboxgl as any).accessToken = environment.mapBoxKey;
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-103.29408674618514, 20.688671312807156], // starting position
      zoom: 16 // starting zoom
    });
    const marker = new mapboxgl.Marker()
      .setLngLat([-103.29408674618514, 20.688671312807156])
      .addTo(this.map);
    const geocoder = new MapboxGeocoder({ // Initialize the geocoder
      accessToken: mapboxgl.accessToken, // Set the access token
      mapboxgl: mapboxgl, // Set the mapbox-gl instance
      marker: true, // Do not use the default marker style
      //bbox: [this.lo1, this.la1, this.lo2, this.la2], 
    }).addTo(this.map);
    this.map.on('load', function () {
      this.map.addSource('single-point', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      this.map.addLayer({
        id: 'point',
        source: 'single-point',
        type: 'circle',
        paint: {
          'circle-radius': 10,
          'circle-color': '#448ee4'
        }
      });

      // Listen for the `result` event from the Geocoder
      // `result` event is triggered when a user makes a selection
      //  Add a marker at the result's coordinates
      geocoder.on('result', function (e) {
        this.map.getSource('single-point').setData(e.result.geometry);
      });
    });
  }
}
