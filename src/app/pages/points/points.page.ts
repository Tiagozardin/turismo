import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Poi, RegionCode } from '../../core/models';
import { PoiService } from '../../services/poi.service';

// Ionic
import { IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonButtons, IonBackButton } from '@ionic/angular/standalone';

// Angular common: traga o AsyncPipe e (se quiser) remova o NgIf que não é usado
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-points',
  templateUrl: './points.page.html',
   imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonImg,
    IonButtons, IonBackButton, NgFor, AsyncPipe
  ]
})
export class PointsPage implements OnInit {
  code!: RegionCode;
  pois$!: Observable<Poi[]>;

  constructor(
    private route: ActivatedRoute,
    private poiService: PoiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('code') as RegionCode;
    this.pois$ = this.poiService.byRegion(this.code);
  }

  openPoi(id: string) { this.router.navigate(['/poi', id]); }
}
