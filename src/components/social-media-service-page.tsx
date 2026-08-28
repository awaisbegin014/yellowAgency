import Link from "next/link";
import { CheckList, ContentSection, DashboardMock, ServiceHeading } from "@/components/facebook-ads-service-page";
import { LeadForm } from "@/components/interactive";

const socialMediaFaqs = [
  {
    question: "What are white-label social media management services?",
    answer: "White-label social media management gives agencies a behind-the-scenes team for strategy, planning, copy, creative coordination, publishing, community workflows, monitoring, and reporting. Your agency keeps ownership of the client relationship and presents the work under its own brand.",
  },
  {
    question: "Which social platforms can Yellow manage?",
    answer: "Scopes can include Instagram, Facebook, LinkedIn, TikTok, Pinterest, YouTube, and selected emerging channels. We recommend the platforms that fit the client’s audience, business model, available content, and commercial goals instead of publishing everywhere by default.",
  },
  {
    question: "What content will our agency receive for approval?",
    answer: "Depending on scope, your team can receive content pillars, monthly calendars, captions, static graphics, carousel concepts, short-form video briefs, story ideas, hashtags, calls to action, and publishing notes. Approval points are agreed before production begins.",
  },
  {
    question: "How do client approvals and revisions work?",
    answer: "Yellow prepares content inside a clear calendar and approval workflow. Your agency reviews the batch, consolidates client feedback, and sends changes through the agreed channel. Defined review windows and revision limits keep publishing consistent and predictable.",
  },
  {
    question: "Can you handle community and reputation monitoring?",
    answer: "Yes. A scope can include comment and message monitoring, response recommendations, escalation rules, review awareness, and sentiment reporting. Sensitive issues are routed to your agency or the client according to a documented response plan.",
  },
  {
    question: "How do you report social media progress?",
    answer: "Agency-ready reports explain reach, engagement, audience growth, content performance, traffic, conversions where trackable, completed work, and upcoming priorities. We focus on useful context and decisions rather than presenting vanity metrics without explanation.",
  },
  {
    question: "Will Yellow sign an NDA before onboarding?",
    answer: "Yes. Confidentiality is fundamental to white-label delivery. We can complete the appropriate agreement and confirm account access, brand handling, approval, communication, and client-contact expectations before work begins.",
  },
];

export function SocialMediaServicePage() {
  return (
    <main id="top" className="inner-page facebook-service social-media-service">
      <section className="facebook-service__hero">
        <div className="container">
          <p className="eyebrow">White-label social media management</p>
          <h1>Social Media <span>Management Services</span></h1>
          <p>Channel strategy, content calendars, copy, creative coordination, publishing, community workflows, and reporting—delivered quietly behind your agency.</p>
          <Link href="/book-appointment" className="button button--yellow">Free 20-Min Consultation <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="facebook-service__section facebook-service__intro">
        <div className="container facebook-service__content">
          <p className="eyebrow">Build a presence people recognize</p>
          <ServiceHeading>Attract new customers with a useful online presence.</ServiceHeading>
          <p>Social media works when a brand shows up consistently with ideas its audience actually values. That requires more than filling a calendar: each channel needs a clear role, recognizable creative, relevant conversations, dependable approvals, and reporting that connects activity with the client’s wider marketing goals.</p>
          <p>Yellow gives your agency a coordinated social team without adding the fixed cost of strategists, writers, designers, editors, and community specialists in-house. We plan and deliver behind your name while your team leads the client relationship.</p>
          <Link href="/book-appointment" className="button button--dark">Schedule a consultation <span aria-hidden="true">↗</span></Link>
          <DashboardMock variant="performance" channel="social" />
        </div>
      </section>

      <ContentSection
        title="Develop a social media strategy with a clear purpose."
        paragraphs={[
          "Every engagement begins by defining what social media should accomplish for the client. We review the audience, business model, offers, customer journey, competitors, brand voice, existing content, internal resources, and measurement options before recommending channels and content priorities.",
          "The result is a practical roadmap your agency can explain: channel roles, content pillars, publishing rhythm, creative requirements, engagement workflows, approval points, success measures, and the first opportunities to test.",
        ]}
        items={["Audience and competitor research", "Platform selection and channel roles", "Content pillars and publishing cadence", "Voice, visual, and approval guidance", "Organic traffic and awareness objectives", "Branded reporting and review rhythm"]}
        dashboard="proposal"
        channel="social"
        soft
      />

      <ContentSection
        title="All-in-one white-label social media management."
        paragraphs={[
          "Yellow coordinates the moving parts that make social delivery difficult to scale: planning, ideas, copy, design, production notes, scheduling, approvals, publishing, community workflows, quality review, and monthly reporting. Your agency receives one accountable system instead of managing disconnected freelancers.",
          "The model is channel-specific. A professional-services brand may need authoritative LinkedIn content, while a consumer business may benefit from visual storytelling, short-form video, community participation, and stronger Instagram or TikTok consistency. We recommend the mix that fits the audience rather than forcing every brand into the same template.",
        ]}
        items={["Instagram and Facebook management", "LinkedIn content and company-page support", "TikTok and short-form video planning", "YouTube and Pinterest coordination", "Monthly calendars and approval workflows", "Publishing, monitoring, and performance reviews"]}
        dashboard="campaigns"
        channel="social"
      />

      <section className="facebook-service__form-section">
        <div className="container facebook-service__form-grid">
          <div><p className="eyebrow">Grow without growing overhead</p><ServiceHeading>Power up and join other ambitious agencies.</ServiceHeading><p>Add dependable social-media capacity while your internal team stays focused on relationships, sales, and strategic leadership.</p><CheckList items={["Expand your content and social offering", "Generate revenue without increasing fixed costs", "Save and reallocate your team’s time", "Support different client niches and channels", "Gain practical content insight and reporting"]} /></div>
          <LeadForm />
        </div>
      </section>

      <section className="facebook-service__benefits-intro"><div className="container"><p className="eyebrow">A complete social delivery model</p><ServiceHeading>Benefits of Yellow’s white-label social media services.</ServiceHeading><p>Strategy, production, publishing, engagement, and reporting stay connected through one workflow designed to protect your agency’s standards.</p><p>Every calendar is shaped around the client’s audience, offer, voice, and objectives, while clear approvals and performance reviews keep the work useful, consistent, and easy to manage.</p></div></section>

      <ContentSection
        title="Strategy development that keeps content relevant."
        paragraphs={[
          "A useful social plan translates research into decisions your production team can follow. Yellow turns audience interests, customer questions, proof, brand expertise, seasonal moments, and commercial priorities into focused content pillars and repeatable formats.",
          "The roadmap stays flexible as performance, feedback, and market conditions change. Monthly reviews identify which topics and formats should expand, which need refinement, and where the next creative opportunity is emerging.",
        ]}
        dashboard="audience"
        channel="social"
      />

      <ContentSection
        title="Engagement solutions that strengthen community."
        paragraphs={[
          "Engagement is more than a total under a post. Comments, messages, saves, shares, profile actions, and recurring questions reveal what the audience cares about and where the brand can be more useful. Yellow organizes those signals into a consistent engagement workflow.",
          "Response guidance, escalation rules, conversation themes, and community observations help your agency protect the client’s tone while turning everyday interactions into content insight, reputation value, and qualified next steps.",
        ]}
        dashboard="reporting"
        channel="social"
        soft
      />

      <ContentSection
        title="User-generated content that builds credible proof."
        paragraphs={[
          "Customer stories, reviews, demonstrations, reactions, and real-world use can make a brand more believable than polished promotional content alone. Yellow helps identify appropriate user-generated content opportunities and turns them into repeatable campaign ideas.",
          "We can support prompts, submission guidance, permission workflows, creator briefs, repurposing plans, and branded presentation so useful customer content reaches more people without losing its authenticity.",
        ]}
        dashboard="creative"
        channel="social"
      />

      <ContentSection
        title="Content customized around each client’s real needs."
        paragraphs={[
          "The right mix depends on what the client can credibly talk about and what the audience wants from the channel. Yellow plans educational posts, proof, founder insight, culture, product storytelling, carousels, short-form video, stories, polls, and promotional moments around that intersection.",
          "Writers and designers work from shared briefs, brand references, content pillars, and format requirements. Every batch passes a quality review for message, visual consistency, accuracy, platform fit, and a clear reason for the audience to pay attention.",
        ]}
        dashboard="landing"
        channel="social"
        soft
      />

      <section className="facebook-service__section">
        <div className="container facebook-service__content">
          <ServiceHeading>Dedicated reputation monitoring behind your brand.</ServiceHeading>
          <p>Social channels are often where customers raise concerns first. Yellow can monitor agreed comments, mentions, messages, and reputation signals, then route issues through a documented response and escalation process before they are ignored or handled inconsistently.</p>
          <p>Your agency keeps control of sensitive decisions. We provide organized observations, response recommendations, recurring issue themes, and monthly context that helps the client improve communication and protect trust over time.</p>
          <CheckList items={["Comment, mention, and message monitoring", "Response guidance aligned with brand voice", "Clear escalation paths for sensitive issues", "Sentiment and recurring-theme observations", "Agency-ready reputation context"]} />
        </div>
      </section>

      <section className="facebook-service__faq">
        <div className="container facebook-service__faq-grid">
          <div><p className="eyebrow">Frequently asked questions</p><ServiceHeading>Everything you need to know before we begin.</ServiceHeading><p>These are the questions agencies ask most often before adding white-label social media support.</p></div>
          <div className="facebook-service__faq-list">
            {socialMediaFaqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="facebook-service__final-cta"><div className="container"><div><p className="eyebrow">Your social team behind the scenes</p><ServiceHeading>Ready to add social-media capacity?</ServiceHeading><p>Let’s map the right white-label content and channel-management model for your agency and clients.</p></div><Link href="/book-appointment" className="button button--dark">Book a free strategy call <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
