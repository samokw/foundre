// components/ui/icons/IronIngotIcon.tsx
export default function IronIngotIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      <defs>
        {/* Metallic gradient for top */}
        <linearGradient id="topGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.5" />
        </linearGradient>

        {/* Metallic gradient for sides */}
        <linearGradient id="sideGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.7" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Top face */}
      <polygon
        points="16,28 32,16 48,28 40,40 24,40"
        fill="url(#topGradient)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Front face */}
      <polygon
        points="16,28 24,40 24,52 16,40"
        fill="url(#sideGradient)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Right face */}
      <polygon
        points="48,28 40,40 40,52 48,40"
        fill="url(#sideGradient)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Front bevel */}
      <line
        x1="24"
        y1="40"
        x2="40"
        y2="40"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity="0.4"
      />

      {/* Side bevels */}
      <line
        x1="24"
        y1="52"
        x2="40"
        y2="52"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeOpacity="0.3"
      />
    </svg>
  );
}
