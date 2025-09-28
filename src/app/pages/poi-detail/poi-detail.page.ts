import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Poi } from '../../core/models';
import { PoiService } from '../../services/poi.service';
import { MapsService } from '../../services/maps.service';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonList, IonItem, IonLabel, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-poi-detail',
  templateUrl: './poi-detail.page.html',
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonImg,
    IonList, IonItem, IonLabel, IonButton, IonButtons, IonBackButton, NgIf
  ]
})
export class PoiDetailPage implements OnInit {
  poi?: Poi;
  defaultHref = '/regions';
  constructor(private route: ActivatedRoute, private poiService: PoiService, private maps: MapsService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.poiService.getById(id).subscribe(p => {
      this.poi = p;
      // quando souber a região do POI, define o fallback do back
      if (p) this.defaultHref = `/region/${p.region}`;
    });
  }
  openGoogle() { if (this.poi) this.maps.openGoogleMaps(this.poi.lat, this.poi.lng); }
  openWaze() { if (this.poi) this.maps.openWaze(this.poi.lat, this.poi.lng); }
  openSite() {
    if (this.poi?.website) {
      window.open(this.poi.website, '_blank');
    }
  }
}
