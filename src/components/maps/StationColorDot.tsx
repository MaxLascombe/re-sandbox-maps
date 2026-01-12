import { SUBWAY_LINE_COLORS } from "@/data/subwayStations";

interface StationColorDotProps {
  lineId: string;
  size?: "sm" | "md";
  className?: string;
}

const StationColorDot: React.FC<StationColorDotProps> = ({
  lineId,
  size = "md",
  className = "",
}) => {
  const lineColor = SUBWAY_LINE_COLORS[lineId] || "#808183";
  // Yellow lines (N, Q, R, W) use black text, all others use white
  const isYellow = lineColor === "#F6BC26";
  const textColor = isYellow ? "black" : "white";

  const sizeClasses = size === "sm" ? "w-5 h-5 text-xs" : "w-6 h-6 text-base";

  return (
    <div
      className={`${sizeClasses} rounded-full flex items-center justify-center font-bold ${className}`}
      style={{
        backgroundColor: lineColor,
        color: textColor,
        boxShadow: size === "md" ? "0 2px 8px rgba(0,0,0,0.5)" : undefined,
      }}
    >
      {lineId}
    </div>
  );
};

export default StationColorDot;
