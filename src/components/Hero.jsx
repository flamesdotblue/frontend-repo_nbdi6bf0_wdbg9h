import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onOpenAuth }) {
  return (
    <section className="relative overflow-hidden pt-28" aria-label="Hero">
      {/* Ambient color washes inspired by VEED's vibrant gradients */}
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-10%,rgba(56,189,248,0.18),transparent),radial-gradient(900px_500px_at_110%_-10%,rgba(168,85,247,0.16),transparent)]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left: Headline + CTAs */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/85 ring-1 ring-white/20 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            New: AI autofill for embassy forms
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-white">
            Create visa applications
            <br />
            <span className="bg-gradient-to-r from-sky-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent">
              10x faster with AI
            </span>
          </h1>
          <p className="mt-5 text-slate-200/85 text-lg max-w-xl">
            VISIX.AI parses your documents and auto‑fills embassy forms with stunning accuracy. Track appointment slots and submit with confidence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(99,102,241,0.45)' }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenAuth}
              className="rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-500 to-violet-600 px-6 py-3 text-white font-medium ring-1 ring-white/20 shadow-[0_0_24px_rgba(56,189,248,0.45)]"
            >
              Try the demo
            </motion.button>
            <motion.a
              whileHover={{ y: -2 }}
              href="#pricing"
              className="rounded-full bg-white/10 px-6 py-3 text-white/90 ring-1 ring-white/20 backdrop-blur-xl hover:bg-white/15"
            >
              See pricing
            </motion.a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-200/80">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">No credit card</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">Bank‑grade security</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">Interactive 3D</span>
          </div>
        </div>

        {/* Right: 3D Spline object */}
        <div className="relative h-[520px] w-full rounded-3xl ring-1 ring-white/20 overflow-hidden">
          <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Soft bottom fade so UI layers feel grounded; ensure interaction isn't blocked */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0F19]/50" />
        </div>
      </div>

      {/* Decorative gradient bar reminiscent of VEED's colorful accents */}
      <div className="pointer-events-none mx-auto mt-14 h-[2px] w-[92%] max-w-7xl rounded-full bg-gradient-to-r from-sky-300 via-fuchsia-400 to-violet-500 opacity-60" />
    </section>
  );
}
