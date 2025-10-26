import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import PricingCTA from './components/PricingCTA';

function AuthModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl border border-white/15 bg-white/10 p-6 text-white backdrop-blur-2xl ring-1 ring-white/20">
        <h3 className="text-xl font-semibold">Welcome to VISIX.AI</h3>
        <p className="mt-1 text-slate-200/80 text-sm">Create your account or sign in to try the demo.</p>
        <form className="mt-4 space-y-3">
          <input type="email" placeholder="Email" className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-slate-300/60 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          <input type="password" placeholder="Password" className="w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-slate-300/60 ring-1 ring-white/15 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          <button type="button" className="w-full rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 px-4 py-3 font-medium ring-1 ring-white/20 shadow-[0_0_24px_rgba(45,156,255,0.6)]">Continue</button>
        </form>
        <button onClick={onClose} className="absolute right-3 top-3 rounded-lg bg-white/10 px-2 py-1 text-xs ring-1 ring-white/20">Esc</button>
      </div>
    </div>
  );
}

function App() {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0B0F19] to-[#1B2B52]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_700px_at_20%_0%,rgba(45,156,255,0.25),transparent),radial-gradient(circle_600px_at_80%_0%,rgba(99,102,241,0.2),transparent)]" />

      <Navbar onOpenAuth={() => setAuthOpen(true)} />

      <main className="relative z-0 space-y-16 pb-24">
        <Hero onOpenAuth={() => setAuthOpen(true)} />
        <Showcase />
        <PricingCTA />
      </main>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}

export default App;
