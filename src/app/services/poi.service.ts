import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Poi, RegionCode } from '../core/models';

@Injectable({ providedIn: 'root' })
export class PoiService {
  constructor(private http: HttpClient) {}

  listRegions(): RegionCode[] {
    return ['sul', 'sudeste', 'nordeste', 'centro-oeste', 'norte'];
  }

  byRegion(region: RegionCode): Observable<Poi[]> {
    return this.http.get<Poi[]>('assets/pois.json')
      .pipe(map(all => all.filter(p => p.region === region)));
  }

  getById(id: string): Observable<Poi | undefined> {
    return this.http.get<Poi[]>('assets/pois.json')
      .pipe(map(all => all.find(p => p.id === id)));
  }
}
