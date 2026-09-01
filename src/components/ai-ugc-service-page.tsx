import Image from "next/image";
import Link from "next/link";
import { CheckList, ContentSection, DashboardMock, ServiceHeading } from "@/components/facebook-ads-service-page";
import { LeadForm } from "@/components/interactive";

const aiUgcFaqs = [
  {
    question: "What are white-label AI UGC services?",
    answer: "White-label AI UGC (User Generated Content) services provide your agency with a complete behind-the-scenes video creation engine. We write viral scripts, generate photorealistic AI avatars, apply natural voiceovers, edit engaging captions, and produce multi-platform video ads—all delivered under your agency's brand.",
  },
  {
    question: "How realistic are the AI avatars and creator videos?",
    answer: "We utilize state-of-the-art AI video synthesis models combined with human video editors to ensure natural gestures, realistic lip-syncing, dynamic lighting, and authentic voice tonality that seamlessly mimics real human content creators.",
  },
  {
    question: "Which platforms and video formats do you support?",
    answer: "We deliver vertical (9:16) videos optimized for TikTok, Instagram Reels, Facebook Stories, and YouTube Shorts, as well as square (1:1) and landscape (16:9) formats tailored for paid ad placements and organic feeds.",
  },
  {
    question: "How are video scripts and viral hooks created?",
    answer: "Our direct-response copywriters research client target audiences, analyze top-performing competitor ad hooks, and draft custom scripts using proven psychological frameworks (AIDA, PAS, Hook-Body-CTA) before AI video generation begins.",
  },
  {
    question: "How does white-label delivery work for AI UGC assets?",
    answer: "Every video script, raw export, and final edited asset is delivered with full commercial rights and zero Yellow branding. Your agency presents the finished creatives directly to your client or uploads them straight into campaign ad managers.",
  },
  {
    question: "What is the typical turnaround time for AI UGC video packages?",
    answer: "Because we combine AI video generation with structured editing workflows, we can deliver batch video ad packages (e.g. 5–15 creative variations) in 48 to 72 hours, significantly faster than traditional creator outreach and shipping schedules.",
  },
  {
    question: "Will Yellow sign an NDA before we start?",
    answer: "Yes. Confidentiality is fundamental to our white-label agency partnerships. We sign comprehensive NDAs protecting all client assets, campaign data, and brand identity.",
  },
];

export function AiUgcServicePage() {
  return (
    <main id="top" className="inner-page facebook-service ai-ugc-service">
      <section className="facebook-service__hero">
        <div className="container">
          <p className="eyebrow">White-label video creative production</p>
          <h1>High-Converting White Label <span>AI UGC Services</span></h1>
          <p>Viral AI creator videos, high-converting ad hooks, and vertical social content—planned, generated, edited, and delivered quietly under your agency brand.</p>
          <Link href="/book-appointment" className="button button--yellow">Free 20-Min Consultation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="facebook-service__section facebook-service__intro">
        <div className="container facebook-service__content">
          <p className="eyebrow">Creator-style video ads at AI speed</p>
          <ServiceHeading>Scale authentic video ad creative without creator headaches.</ServiceHeading>
          <p>Modern social media audiences scroll past polished corporate ads and engage with authentic creator-style videos. Yellow brings AI video synthesis, viral scriptwriting, motion graphics, and rapid performance testing into one white-label video engine for your agency.</p>
          <p>We craft high-converting video variations around audience pain points and proven ad hooks. Every batch arrives fully edited with captions, sound effects, and calls to action ready to drive conversions across Meta, TikTok, and YouTube.</p>
          <Link href="/book-appointment" className="button button--dark">Schedule a consultation <span aria-hidden="true">↗</span></Link>
          <DashboardMock variant="performance" channel="ai-ugc" />
        </div>
      </section>

      <section className="facebook-service__proof">
        <div className="container">
          <div className="facebook-service__proof-heading">
            <ServiceHeading>Hear what our agency partners say about us.</ServiceHeading>
            <div><p>Agencies rely on Yellow for rapid creative testing, high-hook video ads, and reliable fulfillment delivered on schedule.</p><CheckList items={["Scale video ad output 5× faster without hiring talent", "Maintain 100% white-label privacy and ownership", "Deliver high-performing UGC creatives across Meta & TikTok"]} /></div>
          </div>
          <div className="facebook-service__videos">
            <article><Image src="/images/unsplash/portrait-02.jpg" alt="Agency owner talking about Yellow AI UGC service" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Seth Brown</h3><p>Agency Owner</p></div></article>
            <article><Image src="/images/unsplash/portrait-04.jpg" alt="Agency partner discussing AI UGC performance" fill sizes="(max-width: 760px) 100vw, 50vw" /><span aria-hidden="true">▶</span><div><h3>Josh Radford</h3><p>Agency Owner</p></div></article>
          </div>
        </div>
      </section>

      <ContentSection
        title="Viral hook research and psychological scriptwriting."
        paragraphs={[
          "Great video ads live or die in the first 3 seconds. Yellow analyzes winning creative trends, audience triggers, and competitor ads to write compelling hooks that stop the scroll.",
          "Our copywriters develop tailored scripts that guide viewers smoothly from the hook through problem demonstration, social proof, and a clear call to action.",
        ]}
        dashboard="creative"
        channel="ai-ugc"
        soft
      />

      <ContentSection
        title="Hyper-realistic AI avatars & voice synthesis."
        paragraphs={[
          "Eliminate the delays, shipping costs, and unpredictable quality of traditional creator outreach. We leverage cutting-edge AI avatars and realistic voice models across diverse demographics, languages, and accents.",
          "Every AI creator performance is refined by human video editors to ensure natural expressions, pacing, and visual authenticity.",
        ]}
        dashboard="proposal"
        channel="ai-ugc"
      />

      <ContentSection
        title="Multi-platform vertical ad variations for Meta, TikTok & Shorts."
        paragraphs={["Offer your clients a full suite of vertical video ad formats optimized for high-converting social media placements. Each batch includes multiple hook variations to test in ad accounts."]}
        items={["TikTok & Reels UGC video ads", "Product unboxing & demonstration AI videos", "Problem-solution testimonial style ads", "Problem-solving visual explainer clips", "Dynamic auto-captions & kinetic text overlays", "Multi-angle hook & CTA testing variations"]}
        dashboard="campaigns"
        channel="ai-ugc"
        soft
      />

      <section className="facebook-service__form-section">
        <div className="container facebook-service__form-grid">
          <div><p className="eyebrow">Grow without expanding overhead</p><ServiceHeading>Power up and join ambitious growth agencies.</ServiceHeading><p>Add a dedicated AI UGC video production lab while your internal team focuses on client management, strategy, and scaling retainers.</p><CheckList items={["Expand ad creative offerings with zero overhead", "Deliver batch video variations in 48-72 hours", "Lower video production costs by up to 70%", "Support e-commerce, local service, & B2B brands", "Improve client ad account ROAS with fresh creative"]} /></div>
          <LeadForm />
        </div>
      </section>

      <section className="facebook-service__benefits-intro"><div className="container"><p className="eyebrow">A complete AI video fulfillment engine</p><ServiceHeading>Benefits of Yellow’s white-label AI UGC services.</ServiceHeading><p>Your agency gets flexible video production capacity, script strategy, AI avatar generation, professional post-production editing, and performance-driven creative iterations.</p><p>We help you provide continuous fresh video ads to prevent ad fatigue and keep performance metrics climbing across all client channels.</p></div></section>

      <ContentSection
        title="Rapid creative iteration to conquer ad fatigue."
        paragraphs={[
          "High-volume paid social campaigns require constant creative refresh. Yellow enables your agency to quickly swap video hooks, background music, captions, and creator avatars without re-shooting.",
          "This iterative workflow keeps client ad accounts healthy, reduces cost-per-acquisition (CPA), and maximizes client retainer longevity.",
        ]}
        dashboard="landing"
        channel="ai-ugc"
      />

      <ContentSection
        title="Agency-branded video delivery & performance metrics."
        paragraphs={[
          "Receive clean, presentation-ready video files and performance breakdowns that highlight hook rates, watch-through rates, and conversion impacts.",
          "Your team gets the exact insights and assets needed to show clients measurable creative performance under your agency brand.",
        ]}
        items={["Full commercial licensing & rights", "Batch delivery in 9:16, 1:1, & 16:9 ratios", "Auto-captioning & custom brand color integration", "Hook-rate & conversion-focused reporting", "Continuous creative refresh packages"]}
        dashboard="reporting"
        channel="ai-ugc"
        soft
      />

      <section className="facebook-service__faq">
        <div className="container facebook-service__faq-grid">
          <div><p className="eyebrow">Frequently asked questions</p><ServiceHeading>Everything you need to know before we begin.</ServiceHeading><p>These are the questions agencies ask most often before adding white-label AI UGC services.</p></div>
          <div className="facebook-service__faq-list">
            {aiUgcFaqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="facebook-service__final-cta"><div className="container"><div><p className="eyebrow">Your AI video team behind the scenes</p><ServiceHeading>Ready to add AI UGC video capacity?</ServiceHeading><p>Let’s map the right white-label AI video production model for your agency and clients.</p></div><Link href="/book-appointment" className="button button--dark">Book a free strategy call <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
