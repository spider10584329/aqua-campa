
interface WaveDividerProps {
  className?: string;
  flip?: boolean;
  fill?: string;
}

const WaveDivider = ({ className = "", flip = false, fill = "currentColor" }: WaveDividerProps) => {
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
        {/* First wave layer - completely opaque base (different pattern from bottom) */}
        <path
          d="M0,45 C120,45 180,80 300,80 C420,80 480,25 600,25 C720,25 780,70 900,70 C1020,70 1080,35 1200,35 L1200,120 L0,120 Z"
          fill={primaryFill}
          fillOpacity="1.0"
          style={{
            animation: 'wave-morph-top-1 45s ease-in-out infinite'
          }}
        />
        {/* Second wave layer - medium transparency (offset pattern) */}
        <path
          d="M0,65 C90,65 150,30 270,30 C390,30 450,85 570,85 C690,85 750,20 870,20 C990,20 1050,75 1200,75 L1200,120 L0,120 Z"
          fill={secondaryFill}
          fillOpacity="0.4"
          style={{
            animation: 'wave-morph-top-2 60s ease-in-out infinite reverse'
          }}
        />
        {/* Third wave layer - lightest transparency for subtle depth */}
        <path
          d="M0,55 C110,55 170,85 290,85 C410,85 470,15 590,15 C710,15 770,80 890,80 C1010,80 1070,40 1200,40 L1200,120 L0,120 Z"
          fill={secondaryFill}
          fillOpacity="0.2"
          style={{
            animation: 'wave-morph-top-1 75s ease-in-out infinite'
          }}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
