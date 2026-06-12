export function FlowerIcon({
  className = "",
  color = "#EAA6B6",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 2 C24 10 38 14 28 20 C38 26 24 30 20 38 C16 30 2 26 12 20 C2 14 16 10 20 2Z"
        fill={color}
      />
      <circle cx="20" cy="20" r="5" fill="#FFF8F0" />
    </svg>
  );
}

export function LeafIcon({
  className = "",
  color = "#C8D9BA",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 30 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 2 C25 15 28 30 15 48 C2 30 5 15 15 2Z"
        fill={color}
      />
      <path
        d="M15 2 L15 30"
        stroke="#B0C4A0"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M15 20 L10 15"
        stroke="#B0C4A0"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <path
        d="M15 25 L20 20"
        stroke="#B0C4A0"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FloralCorner({
  className = "",
  corner = "top-left",
}: {
  className?: string;
  corner?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const rotation =
    corner === "top-left"
      ? 0
      : corner === "top-right"
        ? 90
        : corner === "bottom-right"
          ? 180
          : 270;

  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M100 100 L100 60 C100 20 100 0 60 0 L20 0"
        stroke="#EAA6B6"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M100 100 L60 100 C20 100 0 100 0 60 L0 20"
        stroke="#C8D9BA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M85 15 C78 18 72 25 72 32"
        stroke="#EAA6B6"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M15 85 C22 82 28 75 28 68"
        stroke="#C8D9BA"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="72" cy="28" r="6" fill="#EAA6B6" opacity="0.6" />
      <circle cx="28" cy="72" r="5" fill="#C8D9BA" opacity="0.6" />
    </svg>
  );
}

export function FloralDivider({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="10"
        y1="15"
        x2="75"
        y2="15"
        stroke="#EAA6B6"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <line
        x1="125"
        y1="15"
        x2="190"
        y2="15"
        stroke="#EAA6B6"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="85" cy="15" r="4" fill="#EAA6B6" opacity="0.5" />
      <circle cx="100" cy="15" r="6" fill="#EAA6B6" />
      <circle cx="115" cy="15" r="4" fill="#EAA6B6" opacity="0.5" />
      <path
        d="M100 1 C104 7 110 9 115 15 C110 21 104 23 100 29"
        stroke="#C8D9BA"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
