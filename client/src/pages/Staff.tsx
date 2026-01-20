import { motion } from "framer-motion";

const STAFF = [
  { role: "Manager", name: "Roberto Alomar", exp: "15 Años" },
  { role: "Coach de Pitcheo", name: "Pedro Martinez", exp: "20 Años" },
  { role: "Coach de Bateo", name: "David Ortiz", exp: "12 Años" },
  { role: "Preparador Físico", name: "Luis Fernandez", exp: "8 Años" },
];

export default function Staff() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 border-b border-white/10 pb-6"
        >
          <h1 className="text-6xl font-display font-bold text-white uppercase tracking-tighter">
            Staff <span className="text-gray-500">Técnico</span>
          </h1>
          <p className="text-muted-foreground mt-2 text-xl">La mente maestra detrás del juego.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {STAFF.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary/20 border border-white/5 p-8 rounded-xl flex items-center gap-6 group hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-2xl font-bold text-primary border border-white/10 group-hover:bg-primary group-hover:text-white transition-colors">
                {member.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">{member.name}</h3>
                <div className="text-accent uppercase font-bold text-sm tracking-widest mb-1">{member.role}</div>
                <div className="text-muted-foreground text-sm">Experiencia: {member.exp}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
