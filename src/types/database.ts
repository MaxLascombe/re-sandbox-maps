// Simplified types for sandbox - based on PropertyViewModel
export interface UndervaluedSales {
  id: string;
  address: string;
  borough: string;
  neighborhood?: string;
  latitude?: number;
  longitude?: number;
  bedrooms: number;
  bathrooms: number;
  sqft?: number;
  price: number;
  price_per_sqft?: number;
  score: number;
  grade: string;
  discount_percent?: number;
  potential_savings?: number;
  images: string[];
  amenities?: string[];
  property_type?: string;
  built_in?: number;
  days_on_market?: number;
  monthly_hoa?: number;
  monthly_tax?: number;
  description?: string;
  reasoning?: string;
  listing_id?: string;
}

export interface UndervaluedRentals {
  id: string;
  address: string;
  borough: string;
  neighborhood?: string;
  latitude?: number;
  longitude?: number;
  bedrooms: number;
  bathrooms: number;
  sqft?: number;
  monthly_rent: number;
  rent_per_sqft?: number;
  score: number;
  grade: string;
  discount_percent?: number;
  annual_savings?: number;
  images: string[];
  amenities?: string[];
  property_type?: string;
  built_in?: number;
  days_on_market?: number;
  description?: string;
  reasoning?: string;
  no_fee?: boolean;
  listing_id?: string;
}
