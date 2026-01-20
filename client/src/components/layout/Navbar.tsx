import { Link, useLocation } from "wouter";
import { Menu, X, Home, Users, Calendar, UserCog } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", path: "/", icon: Home },
    { name: "Jugadores", path: "/roster", icon: Users },
    { name: "Equipo", path: "/team", icon: Calendar },
    { name: "Staff", path: "/staff", icon: UserCog },
  ];

  // On Home page, hide button when scrolled. On other pages, always show (or show solid).
  // The user requested: "desaparece cuando bajas en la pagina"
  const isHome = location === "/";
  const shouldHideButton = isHome && scrolled && !isOpen;

  return (
    <>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: shouldHideButton ? 0 : 1, pointerEvents: shouldHideButton ? "none" : "auto" }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed top-6 left-6 z-50 p-3 rounded-full transition-all duration-300 backdrop-blur-md border border-white/10 group",
          (scrolled || !isHome || isOpen) ? "bg-black/80 text-white" : "bg-white/10 text-white hover:bg-white/20"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        <span className="sr-only">Menu</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-80 bg-background/95 backdrop-blur-xl border-r border-white/10 z-40 p-8 shadow-2xl flex flex-col justify-between"
          >
            <div className="mt-20 space-y-8">
              <div className="text-primary font-display text-4xl font-bold tracking-tighter mb-12">
                VIKINGOS
                <span className="text-accent text-6xl block -mt-2">BASEBALL</span>
              </div>

              <nav className="space-y-4">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <div
                      className={cn(
                        "flex items-center gap-4 text-xl font-medium p-4 rounded-xl transition-all cursor-pointer group hover:bg-white/5",
                        location === item.path ? "text-accent bg-white/5" : "text-muted-foreground hover:text-white"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className={cn("w-6 h-6 transition-colors", location === item.path ? "text-accent" : "text-muted-foreground group-hover:text-white")} />
                      {item.name}
                    </div>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="mb-8">
               <p className="text-sm text-muted-foreground">
                 © 2026 Vikingos Baseball
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Overlay to close menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
