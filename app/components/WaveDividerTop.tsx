interface WaveDividerTopProps {
  className?: string;
  flip?: boolean;
  fill?: string;
}

const WaveDividerTop = ({ className = "", flip = false, fill = "currentColor" }: WaveDividerTopProps) => {
  // Create contrasting colors for better visual boundaries
  const primaryFill = fill;
  // For HSL colors, we need to extract the values and add alpha
  const getTransparentFill = (color: string) => {
    if (color.startsWith('hsl(') && color.includes(',')) {
      // Extract HSL values and create HSLA version
      const hslMatch = color.match(/hsl\(([^)]+)\)/);
      if (hslMatch) {
        const values = hslMatch[1];
        return `hsla(${values}, 0.6)`;
      }
    }
    return color;
  };
  const secondaryFill = getTransparentFill(fill);

  return (
    <div className={`w-full ${className}`} style={{ lineHeight: 0 }}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-[80px] md:h-[100px] ${flip ? "rotate-180" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* First wave layer - completely opaque base */}
        <path
          d="M0,60 C150,60 200,40 300,40 C400,40 450,80 600,80 C750,80 800,20 900,20 C1000,20 1050,70 1200,70 L1200,120 L0,120 Z"
          fill={primaryFill}
          fillOpacity="1.0"
          style={{
            animation: 'wave-morph-1 35s ease-in-out infinite'
          }}
        />
        {/* Second wave layer - medium transparency */}
        <path
          d="M0,50 C120,50 180,85 280,85 C380,85 420,25 550,25 C680,25 720,75 820,75 C920,75 980,35 1200,35 L1200,120 L0,120 Z"
          fill={secondaryFill}
          fillOpacity="0.4"
          style={{
            animation: 'wave-morph-2 50s ease-in-out infinite reverse'
          }}
        />
        {/* Third wave layer - lightest transparency for subtle depth */}
        <path
          d="M0,40 C100,40 160,75 240,75 C320,75 380,30 480,30 C580,30 640,85 740,85 C840,85 900,20 1000,20 C1100,20 1160,65 1200,65 L1200,120 L0,120 Z"
          fill={secondaryFill}
          fillOpacity="0.2"
          style={{
            animation: 'wave-morph-1 65s ease-in-out infinite'
          }}
        />
      </svg>
    </div>
  );
};

export default WaveDividerTop;