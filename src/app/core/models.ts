export type RegionCode = 'sul' | 'sudeste' | 'nordeste' | 'centro-oeste' | 'norte';

export type PriceRange = 'grátis' | 'pago' | 'misto';

export interface Poi {
  id: string;
  region: RegionCode;
  name: string;
  city: string;
  imageUrl: string;
  lat: number;
  lng: number;
  description?: string;
  category?: string;
  openingHours?: string;
  priceRange?: PriceRange;
  website?: string;
}
