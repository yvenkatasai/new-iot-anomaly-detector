import { useEffect, useState } from "react";
import { useFirestore } from "./hooks/useFirestore";
import { useStats } from "./hooks/useStats";
import TimeSeriesChart from "./components/TimeSeriesChart";

export default function Dashboard() {
  const { data, connected } = useFirestore();

  const [paused, setPaused] = useState(false);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    if (!paused) {
      setDisplayData(data);
    }
  }, [data, paused]);

  const { total, anomalies, rate, avg } = useStats(displayData);

  return (
    <div className="min-h-screen text-amber-50 selection:bg-amber-500/30">
      <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/5 sticky top-0 bg-[#0a0a0f]/80 backdrop-blur-[20px] z-50">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/20 rounded-lg shadow-[0_0_20px_rgba(251,191,36,0.5)] border border-amber-400/30">
                <div className="text-2xl brightness-125 contrast-125">✨🛡️</div>
              </div>
              <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-[#fbbf24] via-[#fcd34d] to-[#f59e0b] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]">
                Sensor Sentinel
              </h1>
            </div>
            <p className="text-amber-400 font-bold ml-14 uppercase tracking-[0.2em] text-[10px] drop-shadow-sm">IoT Anomaly Detection V4.0</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className={`px-4 py-2 rounded-xl glass-panel flex items-center gap-3 text-xs font-bold uppercase tracking-widest transition-all ${connected ? 'text-amber-400 border-amber-500/30 shadow-[0_0_20px_rgba(251,191,36,0.2)]' : 'text-red-400 border-red-500/20'}`}>
              <div className={`w-2 h-2 rounded-full ${connected ? 'bg-amber-400 animate-pulse' : 'bg-red-500'}`} />
              {connected ? "NEXUS ACTIVE" : "NEXUS OFFLINE"}
            </div>
            
            <button
              onClick={() => setPaused((p) => !p)}
              className={`px-6 py-2.5 rounded-xl text-xs font-black tracking-widest transition-all duration-500 transform active:scale-95 border ${paused ? 'bg-amber-600 border-amber-400 text-white shadow-2xl shadow-amber-500/40' : 'glass-panel border-amber-500/20 text-amber-200 hover:text-white hover:bg-amber-500/10'}`}
            >
              {paused ? "▶ RESUME STREAM" : "⏸ PAUSE BUFFER"}
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Processed Nodes" value={total} trend="+12.6%" trendColor="text-[#84cc16]" />
          <StatCard title="Total Anomalies" value={anomalies} trend="Critical" trendColor="text-[#ef4444]" />
          <StatCard title="Average Reading" value={avg.toFixed(2)} trend="-2.4%" trendColor="text-[#f97316]" />
          <StatCard title="Anomaly Rate" value={`${rate.toFixed(2)}%`} trend="Optimal" trendColor="text-[#84cc16]" />
        </div>

        {/* Main Chart Area */}
        <div className="glass-panel rounded-3xl overflow-hidden group border-amber-500/40 shadow-2xl">
          <div className="px-8 py-6 flex items-center justify-between border-b border-white/10 bg-amber-950/20">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-white tracking-wide drop-shadow-md">Signal Topology</h2>
              <p className="text-[10px] text-amber-400 font-mono tracking-widest opacity-80">ENCRYPTED DATA LINK: SENSOR_01_FEED</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 bg-black/40 rounded-full border border-red-500/30">
              <div className="live-dot" />
              <span className="text-[10px] font-black text-red-500 uppercase tracking-widest drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]">Live</span>
            </div>
          </div>
          <div className="p-8">
            <TimeSeriesChart data={displayData} />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-16 pb-12 text-center space-y-6 border-t border-amber-500/10 bg-gradient-to-b from-transparent to-[#0a0a0f]/50">
           <div className="flex flex-col items-center gap-3">
             <div className="text-3xl">🛡️</div>
             <div className="text-amber-500 font-black tracking-[0.4em] uppercase text-xs">Sensor Sentinel</div>
             <p className="text-amber-200/30 text-[11px] font-medium max-w-xs mx-auto">Enterprise IoT Anomaly Detection</p>
           </div>
           
           <div className="flex justify-center gap-8 text-amber-500/40 text-xl">
             <span className="hover:text-amber-400 cursor-pointer transition-all hover:scale-125">𝕏</span>
             <span className="hover:text-amber-400 cursor-pointer transition-all hover:scale-125">🔗</span>
             <span className="hover:text-amber-400 cursor-pointer transition-all hover:scale-125">👾</span>
             <span className="hover:text-amber-400 cursor-pointer transition-all hover:scale-125">📧</span>
           </div>

           <div className="space-y-2">
             <p className="text-amber-200/60 text-sm font-mono hover:text-amber-400 transition-colors cursor-pointer tracking-wider">iot_anomali_detector@gmail.com</p>
             <p className="text-amber-200/20 text-[10px] tracking-widest">SECURING IOT NETWORKS WORLDWIDE • 24/7 SUPPORT</p>
           </div>

           <div className="pt-8 border-t border-white/5 max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-bold text-amber-200/10 tracking-[0.2em] uppercase">
             <p>© 2026 SENSOR SENTINEL ALL RIGHTS RESERVED</p>
             <div className="flex gap-6">
               <span className="hover:text-amber-200/40 cursor-pointer transition-colors">Privacy Policy</span>
               <span className="hover:text-amber-200/40 cursor-pointer transition-colors">Terms of Service</span>
               <span className="hover:text-amber-200/40 cursor-pointer transition-colors">Docs</span>
             </div>
           </div>
        </footer>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, trendColor }) {
  return (
    <div className="glass-card rounded-3xl p-8 relative overflow-hidden group min-h-[180px] border-amber-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-black text-amber-400 uppercase tracking-[0.15em] drop-shadow-md">{title}</span>
          <span className={`text-[10px] font-bold px-3 py-1 rounded-full bg-black/40 border border-white/10 animate-pulse-gold shadow-lg ${trendColor}`}>
            {trend}
          </span>
        </div>
        <div className="text-6xl font-black tabular-nums tracking-tighter text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] contrast-125">
          {value}
        </div>
      </div>
    </div>
  );
}