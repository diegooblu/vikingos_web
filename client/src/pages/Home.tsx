import { motion } from "framer-motion";
import { ArrowDown, Instagram, Twitter, Facebook } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/dark_baseball_stadium_background.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Stadium" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-accent tracking-widest text-lg md:text-xl font-medium mb-4 uppercase">Est. 2025</h2>
            <h1 className="text-7xl md:text-9xl font-display font-bold tracking-tighter text-white mb-2 leading-none">
              VIKINGOS
            </h1>
            <h1 className="text-7xl md:text-9xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary to-purple-900 leading-none">
              BASEBALL
            </h1>
            <p className="mt-8 text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Profesionalismo. Pasión. Gloria.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Navigation Sections (Scroll Interaction) */}
      <div className="container mx-auto px-4 py-20 space-y-32">
        
        {/* Roster Preview */}
        <SectionPreview 
          title="Nuestros Jugadores"
          subtitle="Conoce a las estrellas que definen el juego."
          link="/roster"
          alignment="left"
          gradient="from-purple-900/20 to-transparent"
        />

        {/* Team Preview */}
        <SectionPreview 
          title="El Equipo"
          subtitle="Estadísticas, calendario y estrategia."
          link="/team"
          alignment="right"
          gradient="from-yellow-900/20 to-transparent"
        />

        {/* Staff Preview */}
        <SectionPreview 
          title="Staff Técnico"
          subtitle="Los estrategas detrás de cada victoria."
          link="/staff"
          alignment="left"
          gradient="from-gray-900/20 to-transparent"
        />

      </div>

      {/* Footer / Socials */}
      <footer className="relative bg-black py-20 mt-20 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-8">SÍGUENOS</h2>
          <div className="flex justify-center gap-8 mb-12">
            <SocialLink icon={Instagram} href="#" label="Instagram" />
            <SocialLink icon={Facebook} href="#" label="Facebook" />
          </div>
          <p className="text-muted-foreground text-sm">© 2025 Vikingos Baseball Team. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function SectionPreview({ title, subtitle, link, alignment, gradient }: { title: string, subtitle: string, link: string, alignment: "left" | "right", gradient: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`relative group cursor-pointer ${alignment === "right" ? "text-right" : "text-left"}`}
    >
      <Link href={link}>
        <div className={`absolute -inset-10 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl rounded-full`} />
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white group-hover:text-accent transition-colors duration-300">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mt-4 group-hover:text-white transition-colors duration-300">
            {subtitle}
          </p>
          <div className={`mt-6 inline-flex items-center gap-2 text-primary font-medium uppercase tracking-widest text-sm border-b border-primary/30 pb-1 group-hover:border-primary transition-all`}>
            Explorar <ArrowDown className="w-4 h-4 -rotate-90" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function SocialLink({ icon: Icon, href, label }: { icon: any, href: string, label: string }) {
  return (
    <a 
      href={href} 
      className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group"
      aria-label={label}
    >
      <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
    </a>
  );
}
