import Image from "next/image";

type MediaPlaceholderProps = {
  label?: string;
  type?: "image" | "video" | "portrait" | "logo";
  className?: string;
};

type MediaAsset = {
  src: string;
  photographer: string;
};

const asset = (filename: string, photographer = "Unsplash contributor"): MediaAsset => ({
  src: `/images/unsplash/${filename}`,
  photographer,
});

const mediaPools = {
  agency: [
    asset("agency-team.jpg", "Vitaly Gariev"),
    asset("team-collaboration-01.jpg"),
    asset("team-collaboration-02.jpg"),
    asset("team-collaboration-03.jpg"),
    asset("team-collaboration-04.jpg"),
  ],
  social: [
    asset("social-media.jpg", "Detail.co"),
    asset("social-02.jpg"),
    asset("digital-marketing.jpg", "Swello"),
  ],
  marketing: [
    asset("digital-marketing.jpg", "Swello"),
    asset("analytics-01.jpg"),
    asset("analytics-02.jpg"),
    asset("analytics-03.jpg"),
  ],
  creative: [
    asset("brand-growth.jpg", "SumUp"),
    asset("creative-design-01.jpg"),
    asset("creative-design-02.jpg"),
    asset("creative-design-03.jpg"),
    asset("creative-design-04.jpg"),
  ],
  development: [
    asset("web-development.jpg", "Bayu Syaits"),
    asset("development-02.jpg"),
    asset("development-03.jpg"),
    asset("development-04.jpg"),
  ],
  writing: [
    asset("content-writing.jpg", "MJ Duford"),
    asset("creative-design-01.jpg"),
    asset("analytics-03.jpg"),
  ],
  portraits: [
    asset("portrait-01.jpg"),
    asset("portrait-02.jpg"),
    asset("portrait-03.jpg"),
    asset("portrait-04.jpg"),
  ],
  healthcare: [
    asset("dental-care.jpg", "Harold Hisona"),
    asset("dental-02.jpg"),
    asset("dental-03.jpg"),
  ],
  contractor: [
    asset("contractor.jpg", "Josh Marty"),
    asset("contractor-02.jpg"),
    asset("contractor-03.jpg"),
    asset("landscaping-01.jpg"),
  ],
} satisfies Record<string, MediaAsset[]>;

const fallbackAssets = Object.values(mediaPools).flat();

function pickAsset(pool: readonly MediaAsset[], context: string) {
  let hash = 2166136261;
  for (const character of context) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return pool[(hash >>> 0) % pool.length];
}

function getMediaAsset(label: string, type: MediaPlaceholderProps["type"]): MediaAsset {
  const context = label.toLowerCase();

  if (type === "portrait" && /team (portrait|image)/.test(context)) {
    if (/partner success|strategy & insight/.test(context)) return mediaPools.portraits[0];
    if (/campaign strategy|creative & content/.test(context)) return mediaPools.portraits[1];
    if (/creative fulfillment|media & performance/.test(context)) return mediaPools.portraits[2];
    if (/technical support|experience & technology/.test(context)) return mediaPools.portraits[3];
    return pickAsset(mediaPools.portraits, context);
  }
  if (/dental|dentist|surgeon|medical|health/.test(context)) return pickAsset(mediaPools.healthcare, context);
  if (/hvac|pest|floor|landscap|plumb|roof|contractor|home service/.test(context)) return pickAsset(mediaPools.contractor, context);
  if (/facebook|instagram|social/.test(context)) return pickAsset(mediaPools.social, context);
  if (/web|developer|development|technical|technology|coding|digital experience/.test(context)) return pickAsset(mediaPools.development, context);
  if (/content|writing|editorial|insight|blog|article|copy/.test(context)) return pickAsset(mediaPools.writing, context);
  if (/google|seo|ppc|performance|analytics|media|advertising/.test(context)) return pickAsset(mediaPools.marketing, context);
  if (/growth|campaign|brand|creative|design|portfolio/.test(context)) return pickAsset(mediaPools.creative, context);
  if (/team|agency|partner|specialist|testimonial|strategy|success|fulfillment/.test(context)) return pickAsset(mediaPools.agency, context);

  return pickAsset(fallbackAssets, context);
}

function getAltText(label: string) {
  return label
    .replace(/\s+(image|video|portrait|reel)?\s*placeholder/gi, "")
    .trim();
}

export function MediaPlaceholder({
  label = "Image placeholder",
  type = "image",
  className = "",
}: MediaPlaceholderProps) {
  const selectedAsset = getMediaAsset(label, type);
  const alt = getAltText(label);

  return (
    <div className={`media-placeholder media-placeholder--${type} ${className}`.trim()}>
      <Image
        className="media-placeholder__image"
        src={selectedAsset.src}
        alt={alt}
        fill
        sizes={type === "portrait" ? "(max-width: 580px) 100vw, (max-width: 1050px) 50vw, 30vw" : "(max-width: 800px) 100vw, 60vw"}
      />
      <span className="media-placeholder__credit">Photo by {selectedAsset.photographer} · Unsplash</span>
    </div>
  );
}
