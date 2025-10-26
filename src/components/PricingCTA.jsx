import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: '$19',
    note: 'per user / month',
    features: ['5 applications', 'AI prefills', 'Email support'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$49',
    note: 'per user / month',
    features: ['Unlimited apps', 'Priority slot tracking', 'Team workspace'],
    highlight: true,
  },
  {
    name: 'Agency',
    price: '$199',
    note: 'per 10 seats / month',
    features: ['SLA & support', 'Custom workflows', 'API & SSO'],
    highlight: false,
  },
];

function TierCard({ name, price, note, features, highlight }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`relative rounded-2xl border p-6 backdrop-blur-2xl ${
        highlight
          ? 'border-sky-300/40 bg-gradient-to-br from-sky-400/10 via-blue-500/10 to-indigo-600/10 shadow-[0_0_50px_rgba(45,156,255,0.25)]'
          : 'border-white/15 bg-white/5'
      }`}
    >
      <div className="mb-4 text-sm uppercase tracking-[0.15em] text-slate-200/70">{name}</div>
      <div className="flex items-end gap-2">
        <div className="text-4xl font-semibold text-white">{price}</div>
        <div className="text-slate-200/70 text-xs mb-2">{note}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-200/85">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-300" /> {f}
          </li>
        ))}
      </ul>
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href="#checkout"
        className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 px-4 py-2 text-white ring-1 ring-white/20"
      >
        Choose {name}
      </motion.a>
    </motion.div>
  );
}

export default function PricingCTA() {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="uppercase tracking-[0.2em] text-slate-200/70 text-xs">Transparent pricing</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-white">Plans for students, teams, and agencies</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <TierCard key={t.name} {...t} />
        ))}
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_20%_10%,rgba(45,156,255,0.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(109,40,217,0.12),transparent_35%)] p-8 text-center ring-1 ring-white/20">
        <h3 className="text-2xl font-semibold text-white">Making Global Mobility Paperless</h3>
        <p className="mt-2 text-slate-200/80">Join early access and help shape VISIX.AI</p>
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href="#join"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 px-6 py-3 text-white ring-1 ring-white/20 shadow-[0_0_24px_rgba(45,156,255,0.6)]"
        >
          Join Early Access →
        </motion.a>
        <div className="mt-8 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 text-sm text-slate-300/80 sm:grid-cols-3">
          <a href="#privacy" className="hover:text-white">Privacy</a>
          <a href="#terms" className="hover:text-white">Terms</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </section>
  );
}
