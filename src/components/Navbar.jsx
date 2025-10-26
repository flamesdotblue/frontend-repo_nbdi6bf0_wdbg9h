import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Product', href: '#product' },
    { label: 'For Agencies', href: '#agencies' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#docs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-2xl bg-white/5 supports-[backdrop-filter]:bg-white/5 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="relative">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-300/80 via-blue-500 to-indigo-600 shadow-[0_0_30px_#2D9CFF]" />
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/30" />
            </div>
            <span className="font-semibold tracking-wide text-white">VISIX<span className="text-sky-300">.AI</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-slate-200/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(45,156,255,0.6)' }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenAuth}
              className="relative rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(45,156,255,0.6)] ring-1 ring-white/20"
            >
              Get Early Access
            </motion.button>
          </nav>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 text-white">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-slate-200/90 hover:text-white">
                  {item.label}
                </a>
              ))}
              <button onClick={onOpenAuth} className="rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20">
                Get Early Access
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
