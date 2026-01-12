// NYC Subway Station data
// Loaded from MTA GeoJSON dataset

import subwayStationsGeoJSON from "./nyc-subway-stations.json";

export interface SubwayStation {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  lines: string[]; // Array of line identifiers (e.g., ['4', '5', '6', 'F'])
}

// NYC Subway line colors (Official MTA Brand Colors)
export const SUBWAY_LINE_COLORS: Record<string, string> = {
  "1": "#D82233", // Red
  "2": "#D82233", // Red
  "3": "#D82233", // Red
  "4": "#009952", // Dark Green
  "5": "#009952", // Dark Green
  "6": "#009952", // Dark Green
  "7": "#9A38A1", // Purple
  A: "#0062CF", // Blue
  B: "#EB6800", // Orange
  C: "#0062CF", // Blue
  D: "#EB6800", // Orange
  E: "#0062CF", // Blue
  F: "#EB6800", // Orange
  G: "#799534", // Light Green
  J: "#8E5C33", // Brown
  L: "#7C858C", // Grey
  M: "#EB6800", // Orange
  N: "#F6BC26", // Yellow
  Q: "#F6BC26", // Yellow
  R: "#F6BC26", // Yellow
  S: "#7C858C", // Grey
  W: "#F6BC26", // Yellow
  Z: "#8E5C33", // Brown
};

// Parse GeoJSON data into SubwayStation format
function parseJsonStations(): SubwayStation[] {
  const features = subwayStationsGeoJSON.features;

  return features.map((feature: any) => {
    const props = feature.properties;
    const coords = feature.geometry.coordinates; // [longitude, latitude]

    // Parse daytime_routes (e.g., "N W" or "1 2 3" or "B Q") into array
    const routes = props.daytime_routes
      ? props.daytime_routes
          .split(" ")
          .filter((route: string) => route.trim().length > 0)
      : [];

    return {
      id:
        props.gtfs_stop_id ||
        props.station_id ||
        `station-${coords[0]}-${coords[1]}`,
      name: props.stop_name || "Unknown Station",
      latitude: parseFloat(props.gtfs_latitude) || coords[1],
      longitude: parseFloat(props.gtfs_longitude) || coords[0],
      lines: routes,
    };
  });
}

// Load all subway stations from GeoJSON
export const subwayStations: SubwayStation[] = parseJsonStations();

/**
 * Calculate the distance between two coordinates using the Haversine formula
 * Returns distance in meters
 */
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371000; // Earth's radius in meters
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Filter subway stations within walking distance
 * 15 minutes walking = approximately 0.75 miles = ~1200 meters
 * (Average walking speed: 3 mph = 0.75 miles in 15 minutes)
 */
export function getNearbyStations(
  propertyLat: number,
  propertyLon: number,
  maxDistanceMeters: number = 1200
): SubwayStation[] {
  return subwayStations.filter((station) => {
    const distance = calculateDistance(
      propertyLat,
      propertyLon,
      station.latitude,
      station.longitude
    );
    return distance <= maxDistanceMeters;
  });
}
