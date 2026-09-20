type PhotoSlotBackground = "birch" | "lichen" | "dark";

// Box fill is always the opposite of whatever's actually touching its edges.
const boxFill: Record<PhotoSlotBackground, string> = {
  birch: "bg-lichen",
  lichen: "bg-birch",
  dark: "bg-lichen",
};

export function PhotoSlot({
  aspect,
  name,
  background,
  label = "Photograph",
  className = "",
}: {
  aspect: string;
  name: string;
  background: PhotoSlotBackground;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-lg border border-loam/40 ${boxFill[background]} ${aspect} ${className}`}
      role="img"
      aria-label={name}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-loam/50"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M4 17l5-5 4 4 6-7" />
      </svg>
      <span className="text-[14px] font-medium tracking-wide text-loam">
        {label}
      </span>
    </div>
  );
}
