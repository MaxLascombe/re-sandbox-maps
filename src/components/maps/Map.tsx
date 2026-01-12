import { useMemo, useState, useCallback } from "react";
import MapGL, { Marker, Popup } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { getNearbyStations } from "@/data/subwayStations";
import LineDot from "./StationColorDot";
import PropertyMarker from "./PropertyMarker";
import StationMarker from "./StationMarker";

interface MapProps {
  latitude: number;
  longitude: number;
  address: string;
}

// Map style configuration
const mapStyle = {
  version: 8,
  sources: {
    "carto-dark": {
      type: "raster",
      tiles: [
        "https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        "https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        "https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      ],
      tileSize: 256,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    },
  },
  layers: [
    {
      id: "carto-dark-layer",
      type: "raster",
      source: "carto-dark",
    },
  ],
};

const Map: React.FC<MapProps> = ({ latitude, longitude, address }) => {
  const [popupInfo, setPopupInfo] = useState<{
    station: { name: string; lines: string[] };
    lngLat: [number, number];
  } | null>(null);

  // Get nearby subway stations
  const nearbyStations = useMemo(
    () => getNearbyStations(latitude, longitude, 1200),
    [latitude, longitude]
  );

  // Handler for station marker clicks
  const handleStationClick = useCallback(
    (station: {
      name: string;
      lines: string[];
      latitude: number;
      longitude: number;
    }) => {
      setPopupInfo({
        station,
        lngLat: [station.longitude, station.latitude],
      });
    },
    []
  );

  return (
    <div className="w-full h-[250px] rounded-lg overflow-hidden border border-gray-700">
      <MapGL
        initialViewState={{
          longitude,
          latitude,
          zoom: 15,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle={mapStyle as any}
      >
        {/* Subway station markers - rendered first so they appear below */}
        {nearbyStations.map((station, index) => (
          <StationMarker
            key={station.id || index}
            station={station}
            onMarkerClick={handleStationClick}
          />
        ))}

        {/* Property marker - rendered last so it appears on top */}
        <Marker longitude={longitude} latitude={latitude} anchor="bottom">
          <PropertyMarker />
        </Marker>

        {/* Popup for subway stations */}
        {popupInfo && (
          <Popup
            longitude={popupInfo.lngLat[0]}
            latitude={popupInfo.lngLat[1]}
            anchor="bottom"
            offset={16}
            onClose={() => setPopupInfo(null)}
            closeButton={false}
            closeOnClick={true}
          >
            <div className="px-2">
              <div className="text-black font-semibold mb-2">
                {popupInfo.station.name}
              </div>
              <div className="flex items-center gap-1 flex-wrap">
                {popupInfo.station.lines.map((lineId) => (
                  <LineDot key={lineId} lineId={lineId} size="sm" />
                ))}
              </div>
            </div>
          </Popup>
        )}
      </MapGL>
    </div>
  );
};

export default Map;
