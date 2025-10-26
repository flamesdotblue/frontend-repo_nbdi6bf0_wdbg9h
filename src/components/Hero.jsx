import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onOpenAuth }) {
  return (
    <section className="relative overflow-hidden pt-28" aria-label="Hero">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(45,156,255,0.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(109,40,217,0.12),transparent_35%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative z-10">
          <p className="uppercase tracking-[0.2em] text-slate-200/70 text-xs mb-4">Visa automation made effortless</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1]">
            Get Your Visa Faster with AI
          </h1>
          <p className="mt-5 text-slate-200/80 text-lg max-w-xl">
            Upload documents, and VISIX.AI fills your embassy forms automatically — 90% faster than manual work.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(45,156,255,0.7)' }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenAuth}
              className="rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 px-6 py-3 text-white font-medium ring-1 ring-white/20 shadow-[0_0_24px_rgba(45,156,255,0.6)]"
            >
              Try Demo
            </motion.button>
            <motion.a
              whileHover={{ y: -2 }}
              href="#agencies"
              className="rounded-xl bg-white/10 px-6 py-3 text-white/90 ring-1 ring-white/20 backdrop-blur-xl hover:bg-white/15"
            >
              For Agencies
            </motion.a>
          </div>
        </div>

        <div className="relative h-[480px] w-full rounded-2xl ring-1 ring-white/20 overflow-hidden">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0F19]/60" />
        </div>
      </div>
    </section>
  );
}
