"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Tags used across these primitives' `as` prop. Kept to what the site actually needs. */
type MotionTagName = "div" | "span" | "li" | "article" | "textarea" | "label" | "form" | "h1" | "h2" | "p";

/** Shared fade+slide-up variants — reused directly by call sites that need a motion-capable element these primitives can't wrap (see MotionLink). */
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
const revealVariants = staggerItemVariants;

/**
 * A Next `<Link>` that also accepts motion props (variants, whileHover, etc). Use this instead of
 * StaggerItem for card grids where the whole card IS the link (`<Link className="collection-card">`) —
 * StaggerItem would either strand the card's className on an inert wrapper div or (via `as="a"`) drop
 * Link's client-side routing/prefetching. `motion.create` preserves Link's behavior while adding motion.
 */
export const MotionLink = motion.create(Link);

/**
 * Fades + slides content up once when it scrolls into view. Renders as the element itself (not a
 * wrapper, default `div`) so it can safely take over an existing element's className without adding
 * DOM nesting that would break direct-child CSS selectors (e.g. `.hc-services > .hc-shell > h2`).
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  ...rest
}: { children: React.ReactNode; delay?: number; className?: string; as?: MotionTagName } & Record<string, unknown>) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={revealVariants}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

/** Reveals its StaggerItem children one after another when scrolled into view. */
export function StaggerGroup({
  children,
  className,
  as = "div",
  ...rest
}: { children: React.ReactNode; className?: string; as?: MotionTagName } & Record<string, unknown>) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className} {...rest}>{children}</Tag>;
  }

  return (
    <MotionTag className={className} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainerVariants} {...rest}>
      {children}
    </MotionTag>
  );
}

/**
 * A single item inside a StaggerGroup. Renders as the element itself (not a wrapper) so it can
 * safely replace an existing div/textarea/label/etc. without changing DOM structure or breaking
 * direct-child CSS selectors (e.g. `.hc-lead-form > div:not(.hc-options)`).
 */
export function StaggerItem({
  children,
  className,
  as = "div",
  ...rest
}: { children?: React.ReactNode; className?: string; as?: MotionTagName } & Record<string, unknown>) {
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={revealVariants} {...rest}>
      {children}
    </MotionTag>
  );
}

/** A slow, subtle continuous float for decorative accents. Disabled entirely under reduced motion. */
export function FloatLoop({ children, className, delay = 0, distance = 8, duration = 4.5 }: { children: React.ReactNode; className?: string; delay?: number; distance?: number; duration?: number }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} animate={{ y: [0, -distance, 0] }} transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}>
      {children}
    </motion.div>
  );
}

/** A button with subtle hover/tap scale feedback. Disabled entirely under reduced motion. */
export function PressButton({ children, className, type = "button" }: { children: React.ReactNode; className?: string; type?: "button" | "submit" }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <button className={className} type={type}>{children}</button>;

  return (
    <motion.button className={className} type={type} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.15 }}>
      {children}
    </motion.button>
  );
}

/** A slow opacity/scale "breathing" pulse, used to suggest flow direction on connectors/arrows. */
export function PulseLoop({ children, className, delay = 0, duration = 2.6, as = "div" }: { children: React.ReactNode; className?: string; delay?: number; duration?: number; as?: "div" | "span" }) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag className={className} animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.06, 1] }} transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}>
      {children}
    </MotionTag>
  );
}
