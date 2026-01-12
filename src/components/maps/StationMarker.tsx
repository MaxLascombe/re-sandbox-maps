import { Marker } from "react-map-gl/maplibre";
import StationColorDot from "./StationColorDot";
import { SubwayStation } from "@/data/subwayStations";

interface StationMarkerProps {
  station: SubwayStation;
  onMarkerClick: (station: SubwayStation) => void;
}

const StationMarker: React.FC<StationMarkerProps> = ({
  station,
  onMarkerClick,
}) => {
  const lineId = station.lines[0];

  return (
    <Marker
      longitude={station.longitude}
      latitude={station.latitude}
      anchor="center"
      onClick={(e) => {
        e.originalEvent.stopPropagation();
        onMarkerClick(station);
      }}
    >
      <div className="cursor-pointer relative z-[100]">
        <StationColorDot lineId={lineId} size="md" />
      </div>
    </Marker>
  );
};

export default StationMarker;
