import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { ShopService } from '../../core/services/shop.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  standalone: false,
})
export class ShopComponent implements OnInit {
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';


  markers: mapboxgl.Marker[] = [];

  constructor(private shopService: ShopService) { 
    console.log("ShopComponent constructor called");
    
    
  }

  ngOnInit(): void {
    console.log("ShopComponent initialized");
    console.log(`El token de maxbox viene de: ${environment.MAPBOX_TOKEN}`);
    
    this.map = new mapboxgl.Map({
      accessToken: environment.MAPBOX_TOKEN,
      style: this.style,
      container: 'map',
      center: [ -101.684168,21.121628],
      zoom: 15
    });

    this.shopService.getAllStores().subscribe((stores) => {
      console.log(stores);
      stores.forEach(store => {
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(
          store.description
        );

        const marker = new mapboxgl.Marker()
          .setLngLat([store.longitude, store.latitude])
          .setPopup(popup)
          .addTo(this.map);
        this.markers.push(marker);

        console.log(`Marker added for store: ${store.description} at [${store.longitude}, ${store.latitude}]`);
      });
    });
  }

}
