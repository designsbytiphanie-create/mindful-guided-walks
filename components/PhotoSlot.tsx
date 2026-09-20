export function PhotoSlot({
  aspect,
  name,
  className = "",
}: {
  aspect: string;
  name: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-lichen ${aspect} ${className}`}
      role="img"
      aria-label={name}
    >
      <span className="text-[14px] font-medium tracking-wide text-loam">
        Photograph
      </span>
    </div>
  );
}
