import React from 'react';
import { Zap, ArrowUpRight, ChevronRight, Layout, Code, Layers } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* 1. STICKY MODERN NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 px-6 md:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <div className="bg-gradient-to-br from-indigo-600 to-violet-600 p-2 rounded-xl shadow-lg shadow-indigo-200">
            <Zap size={18} color="white" fill="white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-indigo-600">clever</span>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-zinc-500">
          <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
          <a href="#features" className="hover:text-indigo-600 transition-colors">Components</a>
          <a href="#templates" className="hover:text-indigo-600 transition-colors">Templates</a>
          <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-sm font-bold text-zinc-600 hover:text-black transition-colors hidden sm:block">Sign in</button>
          <button className="bg-indigo-600 text-white px-7 py-2.5 rounded-full text-sm font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all active:scale-95">
            Get Started
          </button>
        </div>
      </nav>

      {/* 2. ARCHITECTURAL HERO SECTION */}
      <header className="relative pt-20 h-screen w-full flex flex-col overflow-hidden bg-zinc-50">
        {/* Abstract Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="border-[0.5px] border-zinc-200" />
            ))}
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-12 h-full w-full">
          {/* Main Title Block */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center px-8 md:px-20">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full w-fit mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest">Version 3.0 Now Live</span>
            </div>
            <h1 className="text-7xl md:text-[110px] font-black leading-[0.85] tracking-tighter mb-8 text-zinc-950">
              Build fast.<br />
              <span className="text-indigo-600 italic">Scale</span> hard.
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-zinc-500 font-medium leading-relaxed mb-10">
              The ultimate React UI Kit for developers who care about aesthetics and performance. 70+ components ready to ship.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-zinc-900 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-black transition-all group">
                Browse Library <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Image/Graphic Block */}
          <div className="hidden lg:block lg:col-span-5 relative bg-white border-l border-zinc-100 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
              className="h-full w-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700"
              alt="Dashboard Preview"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </header>

      {/* 3. CORE VALUE STATS SECTION */}
      <section className="py-24 px-6 md:px-20 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            {/* Stat 1 */}
            <div className="group space-y-6">
              <div className="h-14 w-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <Code size={28} />
              </div>
              <div>
                <h3 className="text-5xl font-black text-zinc-950 mb-2 tracking-tighter">70+</h3>
                <p className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-3">Coded Elements</p>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                  Fully customizable React components from buttons to complex dashboards, optimized for every screen size.
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group space-y-6">
              <div className="h-14 w-14 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                <Layers size={28} />
              </div>
              <div>
                <h3 className="text-5xl font-black text-zinc-950 mb-2 tracking-tighter">15+</h3>
                <p className="text-xs font-black uppercase tracking-widest text-violet-600 mb-3">Design Blocks</p>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                  Modular sections that snap together perfectly. Build unique landing pages by mixing and matching blocks.
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group space-y-6">
              <div className="h-14 w-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <Layout size={28} />
              </div>
              <div>
                <h3 className="text-5xl font-black text-zinc-950 mb-2 tracking-tighter">4</h3>
                <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-3">Full Templates</p>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                  Complete production-ready pages designed to save you weeks of work. Just plug in your data and launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-zinc-50 py-16 px-6 md:px-20 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
             <div className="bg-zinc-950 p-2 rounded-xl">
               <Zap size={16} color="white" fill="white" />
             </div>
             <span className="text-xl font-black tracking-tighter">clever.io</span>
          </div>

          <div className="flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">
            <a href="#" className="hover:text-indigo-600 transition-colors">Documentation</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Github</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Community</a>
          </div>

          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
            © 2026 Clever UI — Build with Passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Hero;