export type RegionCode = 'sul' | 'sudeste' | 'nordeste' | 'centro-oeste' | 'norte';

export interface Poi {
  id: string;
  region: RegionCode;
  name: string;
  city: string;
  imageUrl: string;
  lat: number;
  lng: number;
  description?: string;
}
