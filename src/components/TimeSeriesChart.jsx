import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function formatTime(v) {
  try {
    const date = new Date(v);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  } catch (e) {
    return "";
  }
}

export default function TimeSeriesChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center bg-amber-950/10 border border-amber-500/10 rounded-2xl" style={{ height: '360px' }}>
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin mx-auto" />
          <p className="text-amber-700 font-bold text-[10px] uppercase tracking-[0.3em]">Establishing Nexus Stream...</p>
        </div>
      </div>
    );
  }

  const chartData = data.map((d) => ({
    x: d.time instanceof Date ? d.time.getTime() : new Date(d.time).getTime(),
    value: d.value,
  }));

  return (
    <div className="w-full relative" style={{ height: '400px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#f97316" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity={0.2}/>
              <stop offset="100%" stopColor="#fbbf24" stopOpacity={0}/>
            </linearGradient>
          </defs>
          
          <CartesianGrid stroke="rgba(251,191,36,0.03)" strokeDasharray="5 5" vertical={false} />

          <XAxis
            dataKey="x"
            type="number"
            domain={["auto", "auto"]}
            tickFormatter={formatTime}
            stroke="#92400e"
            fontSize={9}
            fontWeight={900}
            tickLine={false}
            axisLine={false}
            minTickGap={60}
          />

          <YAxis 
            domain={["auto", "auto"]} 
            stroke="#92400e"
            fontSize={9}
            fontWeight={900}
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            cursor={{ stroke: 'rgba(251,191,36,0.6)', strokeWidth: 2 }}
            contentStyle={{ 
              backgroundColor: 'rgba(10, 10, 15, 0.98)', 
              borderRadius: '16px', 
              border: '2px solid rgba(251,191,36,0.5)', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.9)',
              backdropFilter: 'blur(16px)',
              padding: '12px'
            }}
            itemStyle={{ color: '#fbbf24', fontSize: '14px', fontWeight: 900, textTransform: 'uppercase', filter: 'saturate(1.5)' }}
            labelStyle={{ color: '#f59e0b', fontSize: '10px', fontWeight: 900, marginBottom: '4px', letterSpacing: '0.15em' }}
            labelFormatter={v => `SYNC_TIME: ${formatTime(v)}`}
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#fbbf24"
            strokeWidth={4}
            fillOpacity={1}
            fill="url(#fillGradient)"
            isAnimationActive={true}
            animationDuration={1200}
            animationEasing="ease-out"
            filter="drop-shadow(0 0 8px rgba(251,191,36,0.4))"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}