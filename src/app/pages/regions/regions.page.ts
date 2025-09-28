import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoiService } from '../../services/poi.service';
import { RegionCode } from '../../core/models';

// Ionic standalone components
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel
} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-regions',
  templateUrl: './regions.page.html',
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, NgFor
  ]
})
export class RegionsPage {
  regions = this.poiService.listRegions();
  constructor(private poiService: PoiService, private router: Router) {}
  open(code: RegionCode) { this.router.navigate(['/region', code]); }
}
