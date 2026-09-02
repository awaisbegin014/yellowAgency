import Image from "next/image";

type MediaPlaceholderProps = {
  label?: string;
  type?: "image" | "video" | "portrait" | "logo";
  className?: string;
  priority?: boolean;
  src?: string;
};

export function MediaPlaceholder({
  label = "Image placeholder",
  type = "image",
  className = "",
  priority = false,
  src,
}: MediaPlaceholderProps) {
  const hasImage = Boolean(src && src.trim().length > 0);

  if (hasImage) {
    const imageSource = src!.trim();
    const isExternalCustom = !imageSource.startsWith("/images/");

    return (
      <div className={`media-placeholder media-placeholder--${type} ${className}`.trim()}>
        {isExternalCustom ? (
          <img
            className="media-placeholder__image"
            src={imageSource}
            alt={label}
            style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
            loading={priority ? "eager" : "lazy"}
          />
        ) : (
          <Image
            className="media-placeholder__image"
            src={imageSource}
            alt={label}
            fill
            priority={priority}
            sizes={type === "portrait" ? "(max-width: 580px) 100vw, (max-width: 1050px) 50vw, 30vw" : "(max-width: 800px) 100vw, 60vw"}
          />
        )}
      </div>
    );
  }

  // ── Branded Graphic Placeholder when no image is uploaded ──
  return (
    <div
      className={`media-placeholder media-placeholder--empty media-placeholder--${type} ${className}`.trim()}
      role="img"
      aria-label={label}
    >
      <div className="media-placeholder__graphic">
        <div className="media-placeholder__badge">
          <span className="media-placeholder__y-logo">Y</span>
        </div>
        <div className="media-placeholder__text">
          <span className="media-placeholder__brand">Yellow Agency</span>
          <span className="media-placeholder__sub">Insight & Strategy</span>
        </div>
      </div>
    </div>
  );
}

