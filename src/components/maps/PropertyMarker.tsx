const PropertyMarker: React.FC = () => (
  <div
    className="w-[30px] h-[30px] bg-red-500 cursor-pointer relative z-[1000] shadow-lg -rotate-45"
    style={{
      borderRadius: "50% 50% 50% 0",
      boxShadow: "0 3px 14px rgba(0,0,0,0.4)",
    }}
  >
    <div className="w-3 h-3 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" />
  </div>
);

export default PropertyMarker;
