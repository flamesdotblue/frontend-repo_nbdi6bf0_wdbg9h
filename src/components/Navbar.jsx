import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 4);
      // Fade the bar very slightly as we scroll, but keep it visible
      const max = 260; // px range to reach min opacity
      const factor = Math.min(1, y / max);
      setScrollOpacity(1 - factor * 0.06); // fade by up to 6%
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = useMemo(
    () => [
      { label: 'Product', href: '#product' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Resources', href: '#resources' },
      { label: 'Blog', href: '#blog' },
    ],
    []
  );

  // Dynamic glass intensity: slightly more opaque with stronger blur when scrolled
  const glassClasses = scrolled
    ? 'bg-white/15 backdrop-blur-2xl shadow-[0_6px_30px_rgba(0,0,0,0.25)]'
    : 'bg-white/10 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.18)]';

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: scrollOpacity }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className="fixed inset-x-0 top-0 z-50"
      aria-label="Site Navigation"
    >
      {/* Outer container with responsive radii to achieve rounded mobile / fluid desktop */}
      <div className={`mx-auto mt-2 w-[95%] max-w-7xl ${glassClasses} supports-[backdrop-filter]:bg-white/10 rounded-2xl md:rounded-2xl lg:rounded-2xl xl:rounded-2xl ring-1 ring-white/15`}>
        {/* Subtle gradient reflection sweep (ultra-premium) */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
        >
          <motion.div
            className="absolute top-0 h-px w-1/3 bg-gradient-to-r from-white/40 via-white/10 to-transparent"
            animate={{ x: ['-20%', '120%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        {/* Soft border lines with gradient and inner glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-white/30 via-white/0 to-transparent" />
        <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_40px_rgba(255,255,255,0.06)]" />

        <div className="relative flex h-16 items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6">
          {/* Left: Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="relative">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#007AFF] via-[#2D9CFF] to-[#7AB8FF] shadow-[0_0_30px_rgba(45,156,255,0.55)]" />
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/30" />
            </div>
            <span className="font-medium tracking-wide text-white/90">VISIX<span className="text-white/80">.AI</span></span>
          </a>

          {/* Center: Nav links */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/80 tracking-wide"
                whileHover={{ y: -2, opacity: 1 }}
                transition={{ duration: 0.18 }}
              >
                <span className="hover:text-white/100 transition-colors">{item.label}</span>
              </motion.a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(255,255,255,0.18)' }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 tracking-wide shadow-[0_2px_12px_rgba(0,0,0,0.25)] hover:bg-white/10"
              onClick={() => (window.location.hash = '#contact')}
            >
              Contact Sales
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 36px rgba(45,156,255,0.65)' }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenAuth}
              className="rounded-full bg-gradient-to-r from-[#007AFF] to-[#2D9CFF] px-5 py-2 text-sm font-semibold text-white tracking-wide shadow-[0_6px_30px_rgba(45,156,255,0.55)] ring-1 ring-white/20"
            >
              Sign Up
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 text-white/90">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile sheet */}
        {open && (
          <div className="md:hidden px-3 pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="rounded-xl px-3 py-2 text-white/85 hover:bg-white/10 ring-1 ring-white/10">
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-2">
                <button
                  onClick={() => (window.location.hash = '#contact')}
                  className="flex-1 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 tracking-wide"
                >
                  Contact Sales
                </button>
                <button
                  onClick={onOpenAuth}
                  className="flex-1 rounded-full bg-gradient-to-r from-[#007AFF] to-[#2D9CFF] px-4 py-2 text-sm font-semibold text-white tracking-wide shadow-[0_6px_24px_rgba(45,156,255,0.45)]"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}
