import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'regions', pathMatch: 'full' },
  { path: 'regions', loadComponent: () => import('./pages/regions/regions.page').then(m => m.RegionsPage) },
  { path: 'region/:code', loadComponent: () => import('./pages/points/points.page').then(m => m.PointsPage) },
  { path: 'poi/:id', loadComponent: () => import('./pages/poi-detail/poi-detail.page').then(m => m.PoiDetailPage) },
  { path: '**', redirectTo: 'regions' } // <- evita 404 em caminho desconhecido
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
