import type { Metadata } from "next";
import { MediaPlaceholder } from "@/components/media-placeholder";
import { AccentHeading, StandardCta } from "@/components/page-templates";

const projectDetails: Record<
  string,
  {
    name: string;
    heroImage: string;
    gallery: { label: string; src: string }[];
  }
> = {
  "northstar-identity": {
    name: "Northstar Dental",
    heroImage: "/images/unsplash/dental-03.jpg",
    gallery: [
      { label: "Brand system", src: "/images/unsplash/creative-design-01.jpg" },
      { label: "Campaign rollout", src: "/images/unsplash/dental-care.jpg" },
      { label: "Digital experience", src: "/images/unsplash/web-development.jpg" },
    ],
  },
  "kinetic-product-launch": {
    name: "Kinetic Cloud",
    heroImage: "/images/unsplash/digital-marketing.jpg",
    gallery: [
      { label: "Brand system", src: "/images/unsplash/creative-design-03.jpg" },
      { label: "Campaign rollout", src: "/images/unsplash/analytics-01.jpg" },
      { label: "Digital experience", src: "/images/unsplash/development-03.jpg" },
    ],
  },
  "kindred-commerce": {
    name: "Kindred Goods",
    heroImage: "/images/unsplash/brand-growth.jpg",
    gallery: [
      { label: "Brand system", src: "/images/unsplash/creative-design-04.jpg" },
      { label: "Campaign rollout", src: "/images/unsplash/social-media.jpg" },
      { label: "Digital experience", src: "/images/unsplash/development-02.jpg" },
    ],
  },
  "oak-stone-rebrand": {
    name: "Oak & Stone",
    heroImage: "/images/unsplash/creative-design-02.jpg",
    gallery: [
      { label: "Brand system", src: "/images/unsplash/creative-design-01.jpg" },
      { label: "Campaign rollout", src: "/images/unsplash/social-02.jpg" },
      { label: "Digital experience", src: "/images/unsplash/web-development.jpg" },
    ],
  },
  "harbor-legal-content": {
    name: "Harbor Legal",
    heroImage: "/images/unsplash/content-writing.jpg",
    gallery: [
      { label: "Brand system", src: "/images/unsplash/team-collaboration-02.jpg" },
      { label: "Campaign rollout", src: "/images/unsplash/analytics-03.jpg" },
      { label: "Digital experience", src: "/images/unsplash/development-04.jpg" },
    ],
  },
  "bright-air-campaign": {
    name: "Bright Air Co.",
    heroImage: "/images/unsplash/contractor-02.jpg",
    gallery: [
      { label: "Brand system", src: "/images/unsplash/contractor.jpg" },
      { label: "Campaign rollout", src: "/images/unsplash/analytics-02.jpg" },
      { label: "Digital experience", src: "/images/unsplash/team-collaboration-03.jpg" },
    ],
  },
};

export function generateStaticParams() { return Object.keys(projectDetails).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: PageProps<"/portfolio/[slug]">): Promise<Metadata> { const { slug } = await params; const name = projectDetails[slug]?.name ?? "Project"; return { title: `${name} Portfolio Project`, description: `Selected creative work for ${name}, designed and delivered by Yellow Clicks.` }; }
export default async function PortfolioDetailPage({ params }: PageProps<"/portfolio/[slug]">) {
  const { slug } = await params;
  const project = projectDetails[slug];
  const name = project?.name ?? slug.split("-").map((word) => `${word[0]?.toUpperCase()}${word.slice(1)}`).join(" ");
  const heroImage = project?.heroImage ?? "/images/unsplash/creative-design-01.jpg";
  const gallery = project?.gallery ?? [
    { label: "Brand system", src: "/images/unsplash/creative-design-02.jpg" },
    { label: "Campaign rollout", src: "/images/unsplash/digital-marketing.jpg" },
    { label: "Digital experience", src: "/images/unsplash/web-development.jpg" },
  ];

  return (
    <main id="top" className="inner-page">
      <section className="page-hero page-hero--dark">
        <div className="container article-header">
          <p className="eyebrow">Yellow portfolio / Selected project</p>
          <AccentHeading as="h1">{name}</AccentHeading>
          <p className="page-hero__lead">A bold, useful creative system designed to make every customer interaction feel unmistakably connected.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <MediaPlaceholder label={`${name} hero campaign`} src={heroImage} type="video" />
        </div>
      </section>
      <section className="section section--soft">
        <div className="container detail-outcomes">
          <div>
            <p className="eyebrow">The idea</p>
            <AccentHeading>A simple thought with room to travel.</AccentHeading>
          </div>
          <div>
            <p className="large-copy">The creative platform gave every channel one recognizable idea while leaving enough flexibility for the work to stay fresh.</p>
            <p>Final project copy, media, credits, and approved campaign details can replace this showcase placeholder content.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container collection-grid portfolio-gallery">
          {gallery.map(({ label, src }) => (
            <MediaPlaceholder key={label} label={`${label} showcase`} src={src} type="portrait" />
          ))}
        </div>
      </section>
      <StandardCta title="Let's make something worth showing off." />
    </main>
  );
}
