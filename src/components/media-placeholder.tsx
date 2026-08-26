type MediaPlaceholderProps = {
  label?: string;
  type?: "image" | "video" | "portrait" | "logo";
  className?: string;
};

export function MediaPlaceholder({
  label = "Image placeholder",
  type = "image",
  className = "",
}: MediaPlaceholderProps) {
  return (
    <div className={`media-placeholder media-placeholder--${type} ${className}`.trim()} role="img" aria-label={label}>
      <span className="media-placeholder__mark" aria-hidden="true">
        {type === "video" ? "▶" : type === "logo" ? "Y" : "◇"}
      </span>
      <span>{label}</span>
    </div>
  );
}
