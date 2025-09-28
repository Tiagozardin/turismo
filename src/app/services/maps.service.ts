import { Injectable } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';

@Injectable({ providedIn: 'root' })
export class MapsService {
  async openGoogleMaps(lat: number, lng: number) {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
    await Browser.open({ url });
  }

  async openWaze(lat: number, lng: number) {
    const native = `waze://?ll=${lat},${lng}&navigate=yes`;
    const web = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
    try {
      if (Capacitor.isNativePlatform()) {
        await Browser.open({ url: native });
        return;
      }
    } catch {}
    await Browser.open({ url: web });
  }
}
