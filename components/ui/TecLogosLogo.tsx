import React from "react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export function TecLogosLogo({
  className = "h-11 w-auto",
  variant = "light",
}: LogoProps) {
  const isDark = variant === "dark";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Handcrafted Vector Industrial Icon: Gear + Chart + Growth Arrow + Bubbles */}
      <svg
        viewBox="0 0 140 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto shrink-0"
      >
        {/* Floating Process Bubbles (Top Left) */}
        <circle cx="38" cy="18" r="4.5" fill="#E00500" />
        <circle cx="28" cy="28" r="3.5" fill={isDark ? "#38BDF8" : "#1E293B"} />
        <circle cx="42" cy="34" r="2.5" fill="#E00500" />
        <circle cx="34" cy="42" r="5" fill={isDark ? "#38BDF8" : "#1E293B"} />

        {/* Industrial Gear Outline (Split Color: Top Red, Bottom Navy/Cobalt) */}
        <path
          d="M65 24L75 24L78 33L88 36L96 30L103 37L98 46L102 56L111 58L111 68L102 71L99 81L106 89L99 96L90 91L80 95L77 104L67 104L64 95L54 91L45 97L38 90L44 81L40 71L31 68L31 58L40 55L43 45L36 38L43 31L52 36L62 33L65 24Z"
          fill="#E00500"
        />
        {/* Dark Navy / Cobalt Base of the Gear (Bottom Half) */}
        <path
          d="M31 68L40 71L44 81L38 90L45 97L54 91L64 95L67 104L77 104L80 95L90 91L99 96L106 89L99 81L102 71L111 68L111 75L102 78L98 87L104 94L97 101L88 96L79 100L76 109L66 109L63 100L53 96L44 102L37 95L43 87L39 78L31 75L31 68Z"
          fill={isDark ? "#2563EB" : "#172554"}
        />

        {/* Inner White Housing Ring - Always Crisp White so Inner Dynamics Pop */}
        <circle cx="71" cy="64" r="34" fill="#FFFFFF" />

        {/* Navy Circular Track */}
        <path
          d="M71 36C86.464 36 99 48.536 99 64C99 79.464 86.464 92 71 92C55.536 92 43 79.464 43 64C43 48.536 55.536 36 71 36Z"
          stroke="#172554"
          strokeWidth="4"
          strokeDasharray="180 30"
          fill="none"
        />

        {/* Three Performance Bar Chart Columns */}
        {/* Bar 1 (Short Navy) */}
        <rect x="53" y="70" width="6.5" height="12" rx="1" fill="#172554" />
        {/* Bar 2 (Medium Navy) */}
        <rect x="63" y="58" width="6.5" height="24" rx="1" fill="#172554" />
        {/* Bar 3 (Tall Red) */}
        <rect x="73" y="47" width="6.5" height="35" rx="1" fill="#E00500" />

        {/* Upward Surging Growth Swoosh & Arrow (Red) */}
        <path
          d="M40 78C56 74 72 68 89 54L105 39"
          stroke="#E00500"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        {/* Arrowhead */}
        <path
          d="M106 38L96 39L103 48L106 38Z"
          fill="#E00500"
        />
      </svg>

      {/* Corporate Typography Stack */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center">
          <span
            className={`text-2xl sm:text-[26px] font-black tracking-tight ${
              isDark ? "text-white" : "text-[#E00500]"
            }`}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            TecLogos
          </span>
        </div>

        {/* Red Division Line */}
        <div className="w-full h-[1.5px] bg-[#E00500] my-[3px]" />

        {/* Corporate Subtitle */}
        <span
          className={`text-[9px] sm:text-[9.5px] font-extrabold tracking-[0.14em] uppercase ${
            isDark ? "text-slate-300" : "text-[#172554]"
          }`}
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          AUTOMATION PVT LTD
        </span>
      </div>
    </div>
  );
}
