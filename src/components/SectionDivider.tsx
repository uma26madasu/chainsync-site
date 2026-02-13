export default function SectionDivider({ variant = "wave" }: { variant?: "wave" | "diagonal" | "dots" }) {
  if (variant === "wave") {
    return (
      <div className="relative h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,120 L0,120 Z"
            className="fill-slate-50"
          />
        </svg>
      </div>
    );
  }

  if (variant === "diagonal") {
    return (
      <div className="relative h-16 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-slate-50 transform -skew-y-2 origin-top-left"></div>
      </div>
    );
  }

  // dots variant
  return (
    <div className="h-16 bg-white" style={{
      backgroundImage: 'radial-gradient(circle, #e2e8f0 1px, transparent 1px)',
      backgroundSize: '20px 20px'
    }}></div>
  );
}
