import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Bot, Calendar, Star, Shield, CreditCard } from 'lucide-react';

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-2xl"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/0 via-blue-500/0 to-indigo-600/0 group-hover:from-sky-400/10 group-hover:via-blue-500/10 group-hover:to-indigo-600/10 transition-colors" />
      <div className="relative z-10">
        <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/10 p-3 ring-1 ring-white/20">
          <Icon className="h-6 w-6 text-sky-300" />
        </div>
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="mt-2 text-slate-200/80 text-sm">{desc}</p>
      </div>
    </motion.div>
  );
}

function Testimonial({ quote, name, flag }) {
  return (
    <div className="shrink-0 w-[320px] md:w-[420px] mr-6 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-2xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-300 to-indigo-600 ring-1 ring-white/30" />
        <div>
          <div className="text-white font-medium">{name}</div>
          <div className="text-slate-300/70 text-xs">{flag}</div>
        </div>
      </div>
      <div className="flex items-center gap-1 text-sky-300 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-sky-300 text-sky-300" />
        ))}
      </div>
      <p className="text-slate-200/90">“{quote}”</p>
    </div>
  );
}

export default function Showcase() {
  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((o) => (o - 1) % 10000);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="product" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <FeatureCard
          icon={Upload}
          title="Upload Documents"
          desc="Drop in your passport, invites, offers — we parse every field instantly."
        />
        <FeatureCard
          icon={Bot}
          title="AI Prefills Forms"
          desc="Embassy-specific forms filled with high accuracy using your data."
        />
        <FeatureCard
          icon={Calendar}
          title="Track Visa Slots"
          desc="Live monitoring with alerts when appointments open up."
        />
      </div>

      <div id="demo" className="mt-12 rounded-2xl border border-white/15 bg-white/5 p-2 backdrop-blur-2xl">
        <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,156,255,0.18),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(109,40,217,0.16),transparent_35%)]" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/20">
                <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
                Simulated demo — live version launching soon
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-white">Watch VISIX.AI auto‑fill your form</h3>
              <p className="mt-2 text-slate-200/80 max-w-prose">
                A realistic preview of our AI writing into embassy fields, validating documents, and highlighting missing info — with glass UI and neon blue focus states.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-200/70">
                <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/15"><Shield className="h-4 w-4 text-sky-300"/>Bank‑grade security</span>
                <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/15"><CreditCard className="h-4 w-4 text-sky-300"/>Stripe Ready</span>
              </div>
            </div>
            <div className="relative min-h-[280px] lg:min-h-[380px]">
              <VideoSim />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-white text-xl font-semibold mb-4">Loved by global movers</h3>
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex will-change-transform"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {testimonials.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
            {testimonials.map((t, i) => (
              <Testimonial key={`dup-${i}`} {...t} />
            ))}
          </div>
        </div>
      </div>

      <div id="agencies" className="sr-only">For Agencies</div>
      <div id="docs" className="sr-only">Docs</div>
      <div id="contact" className="sr-only">Contact</div>
    </section>
  );
}

function VideoSim() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#13203D] to-[#1B2B52]" />
      <div className="absolute inset-0 opacity-70" style={{ backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 6px)' }} />
      <div className="absolute inset-0">
        <div className="absolute left-6 top-6 right-6 h-6 rounded-md bg-white/10 ring-1 ring-white/15" />
        <div className="absolute left-6 right-6 top-16 h-3 rounded bg-white/10 ring-1 ring-white/10 animate-pulse" />
        <div className="absolute left-6 right-6 top-24 h-3 rounded bg-white/10 ring-1 ring-white/10 animate-pulse delay-100" />
        <div className="absolute left-6 right-6 top-32 h-3 rounded bg-white/10 ring-1 ring-white/10 animate-pulse delay-200" />
        <div className="absolute left-6 top-44 right-6 bottom-6 rounded-xl bg-black/30 ring-1 ring-white/10 shadow-[0_0_40px_rgba(45,156,255,0.4)_inset]" />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_40%_20%,rgba(45,156,255,0.3),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.25),transparent_40%)]" />
    </div>
  );
}

const testimonials = [
  { quote: 'VISIX.AI helped me get a visa 3x faster.', name: 'Aarav • Student', flag: 'IN → DE' },
  { quote: 'Cut our HR processing time from days to hours.', name: 'Lena • Mobility Lead', flag: 'US → UK' },
  { quote: 'Finally a clean, modern tool our clients love.', name: 'Marco • Agency', flag: 'BR → ES' },
];
