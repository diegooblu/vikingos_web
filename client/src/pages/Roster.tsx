import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, TrendingUp, Share2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import playerPlaceholder from "@assets/generated_images/mono.png";

// Mock Data
const PLAYERS = [
  {
    id: 1,
    name: "Carlos 'El Rayo' Mendez",
    number: 23,
    position: "Pitcher",
    img: playerPlaceholder,
    stats: { ERA: "2.45", WHIP: "0.98", SO: 145 },
    bio: "Lanzador estrella con una recta de 98mph. Carlos ha sido el pilar de la rotación de los Vikingos desde 2023.",
    social: { instagram: "@carlosrayo", twitter: "@cmendez23" }
  },
  {
    id: 2,
    name: "David Torres",
    number: 12,
    position: "Catcher",
    img: playerPlaceholder,
    stats: { AVG: ".285", HR: 15, RBI: 64 },
    bio: "Un muro defensivo detrás del plato y un bate de poder en el clutch.",
    social: { instagram: "@dtorres12", twitter: "@davidt_catch" }
  },
  {
    id: 3,
    name: "Miguel Angel",
    number: 5,
    position: "Shortstop",
    img: playerPlaceholder,
    stats: { AVG: ".310", SB: 24, OBP: ".380" },
    bio: "Agilidad y precisión. Miguel lidera la liga en jugadas defensivas destacadas.",
    social: { instagram: "@miguelsstop", twitter: "@mikey5" }
  },
  {
    id: 4,
    name: "Roberto Gomez",
    number: 44,
    position: "First Base",
    img: playerPlaceholder,
    stats: { AVG: ".290", HR: 22, RBI: 88 },
    bio: "Poder puro. Roberto es la amenaza principal en el corazón de la alineación.",
    social: { instagram: "@rogomez44", twitter: "@bigrob44" }
  },
  {
    id: 5,
    name: "Alejandro Ruiz",
    number: 99,
    position: "Outfield",
    img: playerPlaceholder,
    stats: { AVG: ".275", HR: 18, OPS: ".850" },
    bio: "Un brazo de cañón desde los jardines y velocidad en las bases.",
    social: { instagram: "@aleluya99", twitter: "@aruiz99" }
  },
  {
    id: 6,
    name: "Javier Soto",
    number: 7,
    position: "Second Base",
    img: playerPlaceholder,
    stats: { AVG: ".305", Hits: 160, Runs: 90 },
    bio: "Consistencia es su segundo nombre. Javier siempre encuentra la manera de embasarse.",
    social: { instagram: "@javi7soto", twitter: "@jsoto7" }
  },
];

export default function Roster() {
  const [selectedPlayer, setSelectedPlayer] = useState<typeof PLAYERS[0] | null>(null);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 border-b border-white/10 pb-6"
        >
          <h1 className="text-6xl font-display font-bold text-white uppercase tracking-tighter">
            Roster <span className="text-primary">2026</span>
          </h1>
          <p className="text-muted-foreground mt-2 text-xl">Conoce a nuestros guerreros.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLAYERS.map((player) => (
            <PlayerCard 
              key={player.id} 
              player={player} 
              onClick={() => setSelectedPlayer(player)} 
            />
          ))}
        </div>
      </div>

      {/* Player Detail Modal */}
      <AnimatePresence>
        {selectedPlayer && (
          <Dialog open={!!selectedPlayer} onOpenChange={(open) => !open && setSelectedPlayer(null)}>
            <DialogContent className="max-w-4xl bg-black/90 border-white/10 p-0 overflow-hidden">
              <div className="grid md:grid-cols-2 h-full">
                <div className="relative h-[400px] md:h-full bg-gradient-to-br from-primary/20 to-black">
                  <img 
                    src={selectedPlayer.img} 
                    alt={selectedPlayer.name} 
                    className="w-full h-full object-cover mix-blend-overlay opacity-80"
                  />
                  <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
                    <span className="text-9xl font-display font-bold text-white/10 absolute -top-20 left-4 select-none">
                      {selectedPlayer.number}
                    </span>
                    <h2 className="relative text-3xl font-display font-bold text-white uppercase leading-none mb-1">
                      {selectedPlayer.name}
                    </h2>
                    <p className="relative text-accent font-medium uppercase tracking-widest">
                      {selectedPlayer.position}
                    </p>
                  </div>
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white/50 uppercase tracking-widest text-sm font-semibold mb-2">Biografía</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedPlayer.bio}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-white/50 uppercase tracking-widest text-sm font-semibold mb-4">Estadísticas Clave</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(selectedPlayer.stats).map(([key, value]) => (
                          <div key={key} className="bg-white/5 p-4 rounded-lg border border-white/5 text-center">
                            <div className="text-2xl font-bold text-white font-display">{value}</div>
                            <div className="text-xs text-primary uppercase mt-1">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white/50 uppercase tracking-widest text-sm font-semibold mb-4">Social</h3>
                      <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-primary/20 text-white transition-colors border border-white/10">
                          <Share2 className="w-4 h-4" /> Instagram
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-primary/20 text-white transition-colors border border-white/10">
                          <Share2 className="w-4 h-4" /> Twitter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}

function PlayerCard({ player, onClick }: { player: typeof PLAYERS[0], onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="group relative h-[400px] rounded-xl overflow-hidden cursor-pointer border border-white/5 bg-secondary/30"
    >
      <img 
        src={player.img} 
        alt={player.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
      
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
        <span className="text-accent font-display font-bold text-xl">#{player.number}</span>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-primary font-medium uppercase tracking-widest text-sm mb-1">{player.position}</p>
        <h3 className="text-3xl font-display font-bold text-white uppercase leading-none group-hover:text-accent transition-colors">
          {player.name}
        </h3>
        
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-sm text-gray-300">
          <span>Ver Estadísticas</span>
          <TrendingUp className="w-4 h-4 text-accent" />
        </div>
      </div>
    </motion.div>
  );
}
