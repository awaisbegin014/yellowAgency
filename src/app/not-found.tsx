import Link from "next/link";
export default function NotFound() { return <main className="not-found"><div><strong>404</strong><h1>This page lost the plot.</h1><p>Let&apos;s get you back somewhere useful.</p><Link href="/" className="button button--dark">Return home <span>↗</span></Link></div></main>; }
