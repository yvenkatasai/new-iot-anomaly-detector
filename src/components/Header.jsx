import React from 'react';

export default function Header() {
  return (
    <header className="glass-panel sticky top-0 z-50 px-8 py-4 flex items-center justify-between border-b border-white/5">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
          <span className="text-white font-black text-lg">N</span>
        </div>
        <h1 className="text-lg font-black tracking-widest uppercase text-white">NeuralStream</h1>
      </div>
      <div className="flex items-center gap-6">
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-[10px] font-bold text-blue-400 tracking-[0.2em] uppercase">Nodes</a>
          <a href="#" className="text-[10px] font-bold text-slate-500 hover:text-white transition-colors tracking-[0.2em] uppercase">Archive</a>
          <a href="#" className="text-[10px] font-bold text-slate-500 hover:text-white transition-colors tracking-[0.2em] uppercase">Settings</a>
        </nav>
        <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10" />
      </div>
    </header>
  );
}
