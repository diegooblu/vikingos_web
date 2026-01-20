import { motion } from "framer-motion";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, AreaChart, Area } from "recharts";

const SCHEDULE = [
  { date: "15 Ene", opponent: "Bulldogs", location: "Home", time: "19:00", result: null },
  { date: "18 Ene", opponent: "Eagles", location: "Away", time: "15:00", result: null },
  { date: "22 Ene", opponent: "Sharks", location: "Home", time: "19:30", result: null },
  { date: "25 Ene", opponent: "Cobras", location: "Away", time: "12:00", result: null },
];

const BATTING_STATS = [
  { name: "J1", avg: 300 },
  { name: "J2", avg: 250 },
  { name: "J3", avg: 320 },
  { name: "J4", avg: 280 },
  { name: "J5", avg: 210 },
  { name: "J6", avg: 290 },
];

const TEAM_PERFORMANCE = [
  { month: "Abr", wins: 10, loss: 5 },
  { month: "May", wins: 12, loss: 8 },
  { month: "Jun", wins: 15, loss: 3 },
  { month: "Jul", wins: 8, loss: 4 },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4">
      <div className="container mx-auto space-y-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="border-b border-white/10 pb-6"
        >
          <h1 className="text-6xl font-display font-bold text-white uppercase tracking-tighter">
            Centro de <span className="text-accent">Mando</span>
          </h1>
          <p className="text-muted-foreground mt-2 text-xl">Datos, calendario y estrategia.</p>
        </motion.div>

        {/* Schedule Grid */}
        <section>
          <h2 className="text-3xl font-display font-bold text-white mb-8 border-l-4 border-primary pl-4">Próximos Partidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SCHEDULE.map((game, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors group"
              >
                <div className="text-sm text-primary uppercase font-bold tracking-widest mb-2">{game.location === "Home" ? "Casa" : "Visitante"}</div>
                <div className="text-3xl font-display font-bold text-white mb-1">VS {game.opponent}</div>
                <div className="flex justify-between items-end mt-4">
                  <span className="text-2xl font-light text-gray-300">{game.date}</span>
                  <span className="text-accent font-mono">{game.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Chart 1 */}
          <div className="bg-card/50 p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Rendimiento Mensual</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={TEAM_PERFORMANCE}>
                  <defs>
                    <linearGradient id="colorWins" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(270, 70%, 55%)" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(270, 70%, 55%)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', borderColor: '#333' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="wins" stroke="hsl(270, 70%, 55%)" fillOpacity={1} fill="url(#colorWins)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2 */}
          <div className="bg-card/50 p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Promedio de Bateo (Top 6)</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={BATTING_STATS}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip 
                    cursor={{fill: 'rgba(255,255,255,0.05)'}}
                    contentStyle={{ backgroundColor: '#111', borderColor: '#333' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="avg" fill="hsl(50, 100%, 50%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </section>

        {/* Field Alignment Visualization */}
        <section className="flex flex-col items-center">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Alineación Defensiva</h2>
          <div className="relative w-full max-w-3xl aspect-video bg-green-900/20 rounded-3xl border border-white/10 overflow-hidden flex justify-center items-end p-10">
            
            {/* Abstract Field */}
            <div className="absolute inset-0 flex justify-center items-end">
               {/* Diamond */}
               <div className="w-[400px] h-[400px] bg-white/5 rotate-45 transform translate-y-1/2 border border-white/10"></div>
            </div>

            {/* Positions */}
            <PositionDot label="C" x="50%" y="90%" />
            <PositionDot label="P" x="50%" y="70%" />
            <PositionDot label="1B" x="70%" y="65%" />
            <PositionDot label="2B" x="60%" y="50%" />
            <PositionDot label="SS" x="40%" y="50%" />
            <PositionDot label="3B" x="30%" y="65%" />
            <PositionDot label="LF" x="20%" y="30%" />
            <PositionDot label="CF" x="50%" y="20%" />
            <PositionDot label="RF" x="80%" y="30%" />

            <div className="absolute top-4 right-4 text-xs text-muted-foreground">
              *Alineación Estándar vs Diestros
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

function PositionDot({ label, x, y }: { label: string, x: string, y: string }) {
  return (
    <motion.div 
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      className="absolute w-12 h-12 bg-black border-2 border-primary rounded-full flex items-center justify-center z-10 hover:bg-primary hover:text-white transition-colors cursor-pointer shadow-[0_0_15px_rgba(147,51,234,0.5)]"
      style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
    >
      <span className="font-bold text-white font-display">{label}</span>
    </motion.div>
  );
}
