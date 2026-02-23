import { motion } from "motion/react";
import { 
  Calendar, 
  Link as LinkIcon, 
  Clock, 
  Gift, 
  Star, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  Quote, 
  Timer,
  ArrowUpRight,
  Download
} from "lucide-react";
import { useState, useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 58, seconds: 23 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="snap-container bg-zinc-950 text-zinc-50 font-sans selection:bg-orange-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-zinc-950" />
            </div>
            <span className="text-xl font-bold tracking-tight">TribuHackers</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#problema" className="hover:text-zinc-50 transition-colors">El Problema</a>
            <a href="#solucion" className="hover:text-zinc-50 transition-colors">El Sistema</a>
            <a href="#testimonios" className="hover:text-zinc-50 transition-colors">Casos de Éxito</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-bold bg-orange-500 text-zinc-950 px-5 py-2.5 rounded-full hover:bg-orange-400 transition-colors shadow-[0_0_15px_rgba(249,115,22,0.4)]">
              Descargar Ahora
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="snap-section pt-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={staggerContainer} className="max-w-2xl">
            <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-green-500 text-sm font-bold mb-6">
              “Tu Mejor Versión Empieza con 1% Mejor Cada Día”
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-6">
              ¡2026 será EL AÑO en que por fin dejas de procrastinar y te conviertes en <span className="text-green-500">tu mejor versión!</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-zinc-400 mb-10 max-w-lg leading-relaxed">
              El Habit Tracker en Excel que ya usan <strong className="text-zinc-200">+8.247 personas</strong> para construir hábitos atómicos que se pegan de verdad. Basado 100% en "Hábitos Atómicos" y "El Poder de los Hábitos".
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col gap-4 max-w-md">
              <button className="bg-orange-500 text-zinc-950 px-8 py-5 rounded-full font-bold text-lg hover:bg-orange-400 transition-all flex items-center justify-center gap-2 group animate-pulse shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] hover:scale-105">
                DESCARGAR AHORA EL HABIT TRACKER 2026
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
              <p className="text-center text-zinc-300 font-medium">
                Solo <span className="line-through text-zinc-500">17 €</span> → <span className="text-green-500 font-bold text-xl">Hoy 9,90 €</span> (sube en 48 h)
              </p>
              <p className="text-center text-xs text-zinc-500 mt-2">
                Entrega inmediata · Funciona en PC, Mac, Google Sheets · Sin suscripciones · Garantía 60 días
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9, rotate: 2 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: false, amount: 0.3 }} className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent rounded-3xl blur-2xl" />
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4">
                <h3 className="font-bold text-xl text-zinc-100">Tracker 2026</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
              </div>
              
              {/* Mockup of Excel Grid */}
              <div className="space-y-2">
                <div className="grid grid-cols-8 gap-2 mb-4">
                  <div className="col-span-2 text-xs text-zinc-500 font-medium">Hábito</div>
                  {[1,2,3,4,5,6].map(d => <div key={d} className="text-center text-xs text-zinc-500">{d}</div>)}
                </div>
                
                {[
                  { name: "Leer 10 págs", color: "bg-green-500", progress: 6 },
                  { name: "Gimnasio", color: "bg-green-500", progress: 5 },
                  { name: "Meditar 5m", color: "bg-green-500", progress: 6 },
                  { name: "Sin azúcar", color: "bg-green-500", progress: 4 },
                ].map((habit, i) => (
                  <div key={i} className="grid grid-cols-8 gap-2 items-center">
                    <div className="col-span-2 text-sm font-medium text-zinc-300 truncate">{habit.name}</div>
                    {[1,2,3,4,5,6].map(d => (
                      <motion.div 
                        key={d}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + (i * 0.1) + (d * 0.05) }}
                        className={`w-full aspect-square rounded-md ${d <= habit.progress ? habit.color : 'bg-zinc-800'} flex items-center justify-center`}
                      >
                        {d <= habit.progress && <CheckCircle2 className="w-4 h-4 text-zinc-900" />}
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
              
              {/* Chain animation */}
              <motion.div 
                animate={{ x: [-10, 10, -10] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
                className="absolute -right-6 -bottom-6 bg-zinc-800 border border-zinc-700 rounded-2xl p-4 shadow-2xl flex items-center gap-3"
              >
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <LinkIcon className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400">Racha actual</p>
                  <p className="font-bold text-xl text-white">42 Días🔥</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problema" className="snap-section bg-zinc-900 relative">
        <div className="max-w-4xl mx-auto px-6 w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={staggerContainer}>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-red-500 flex items-center gap-4">
              <AlertCircle className="w-10 h-10" />
              ¿Te suena esto?
            </motion.h2>
            
            <div className="space-y-6 mb-16">
              {[
                "Enero empiezas como loco… y en febrero ya abandonaste todo.",
                "Tienes mil apps de hábitos pero ninguna te dura más de 9 días.",
                "Sabes exactamente lo que tienes que hacer… pero nunca lo haces.",
                "Ves a otros avanzar y tú sigues siendo la misma versión de siempre."
              ].map((text, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-start gap-4 bg-zinc-950/50 p-6 rounded-2xl border border-zinc-800/50">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-red-500 font-bold">✕</span>
                  </div>
                  <p className="text-xl text-zinc-300">{text}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div variants={fadeUp} className="text-center">
              <h3 className="text-5xl font-black text-white tracking-tight">
                Eso se acabó en <span className="text-green-500">2026.</span>
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solucion" className="snap-section relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[100px] -z-10" />
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={staggerContainer} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold tracking-tight text-green-500 mb-6 max-w-4xl mx-auto leading-tight">
              El método que James Clear y Charles Duhigg llevan años gritándonos…
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-zinc-400 max-w-2xl mx-auto">
              pero que nadie te había empaquetado tan simple y tan brutalmente efectivo. Este no es otro habit tracker bonito. Es el sistema que hace que los hábitos se queden contigo aunque tengas <strong className="text-white">cero fuerza de voluntad.</strong>
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: LinkIcon, title: "La Cadena Irrompible", desc: "Visualizas tu racha día a día. No romper la cadena se vuelve más importante que el propio hábito." },
              { icon: Timer, title: "Regla de los 2 Minutos", desc: "Transformas cualquier hábito grande en una versión de menos de 120 segundos. Así nunca fallas." },
              { icon: Gift, title: "Bucle de Recompensa", desc: "Mini-celebración + contador de recompensas semanales. Tu cerebro se vuelve adicto al progreso." },
              { icon: Star, title: "Hábitos Keystone", desc: "7 hábitos clave pre-cargados que arrastran al resto (ejercicio, dormir 8h, leer 10 págs…)." },
              { icon: CheckCircle2, title: "Revisión Semanal", desc: "Cada domingo el Excel te obliga a responder las 4 preguntas que usa James Clear. Imposible mentirte." },
              { icon: TrendingUp, title: "Efecto Compuesto 2026", desc: "Gráfico que te muestra cuánto habrás mejorado en diciembre 2026 si solo mejoras 1% diario." }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:border-green-500/30 transition-colors group">
                <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-zinc-100">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonios" className="snap-section bg-zinc-900/30 relative">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={staggerContainer} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-green-500 text-sm font-bold tracking-wider uppercase mb-4">Lanzamiento Beta Nov 2025</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Lo que dicen quienes ya lo están usando
            </motion.h2>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-xl font-bold text-white">+8.247</span>
              <span className="text-zinc-400">descargas en menos de 60 días</span>
            </motion.div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "En 43 días llevo 41 días seguidos de gimnasio. Nunca había pasado de 8.", author: "Marcos" },
              { text: "Dejé de procrastinar mi curso de inglés. Ahora llevo 67 días seguidos. Estoy flipando.", author: "Laura" },
              { text: "Es el primer año que no abandono en febrero. Este Excel es oro puro.", author: "Javi" }
            ].map((testimonial, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-zinc-800" />
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 text-green-500 fill-green-500" />)}
                </div>
                <p className="text-lg text-zinc-300 mb-6 relative z-10">"{testimonial.text}"</p>
                <p className="font-bold text-white">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Offer Section */}
      <section className="snap-section bg-black relative px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={staggerContainer} className="max-w-4xl mx-auto w-full bg-zinc-900/80 border border-zinc-800 rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black text-red-500 mb-8">
            Precio normal: <span className="line-through opacity-50">37 €</span><br/>
            <span className="text-white">Precio lanzamiento solo 48 h: 9,90 €</span>
          </motion.h2>
          
          <motion.div variants={fadeUp} className="bg-zinc-950 rounded-2xl p-8 mb-10 text-left border border-zinc-800">
            <h3 className="text-2xl font-bold mb-6 text-center">Lo que te llevas hoy por solo 9,90 €:</h3>
            <ul className="space-y-4 max-w-2xl mx-auto">
              {[
                { text: "Habit Tracker Excel 2026 edición definitiva", value: "37 €" },
                { text: "Plantilla adicional “Mañana Millonaria 5 am”", value: "19 €" },
                { text: "Lista 77 Hábitos Atómicos probados", value: "15 €" },
                { text: "Acceso al grupo privado Telegram 2026 (coaching)", value: "97 €" }
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-between border-b border-zinc-800/50 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-zinc-300">{item.text}</span>
                  </div>
                  <span className="text-zinc-500 font-mono text-sm">(valor {item.value})</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-zinc-800 text-center">
              <p className="text-xl text-zinc-400">Valor total: <span className="line-through">168 €</span></p>
              <p className="text-3xl font-black text-green-500 mt-2">Hoy todo por solo 9,90 €</p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-6">
            <button className="w-full md:w-auto bg-orange-500 text-zinc-950 px-10 py-6 rounded-full font-black text-xl md:text-2xl hover:bg-orange-400 transition-all animate-pulse shadow-[0_0_40px_rgba(249,115,22,0.6)] hover:scale-105">
              SÍ, QUIERO MI MEJOR VERSIÓN EN 2026
            </button>
            <p className="text-zinc-400">Descarga inmediata – Últimas unidades a 9,90 € (sube a 37 € en…)</p>
            
            <div className="flex items-center gap-4 text-4xl md:text-6xl font-black font-mono text-white">
              <div className="flex flex-col items-center">
                <span className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-xs text-zinc-500 mt-2 font-sans uppercase tracking-widest">Horas</span>
              </div>
              <span className="text-zinc-700 pb-6">:</span>
              <div className="flex flex-col items-center">
                <span className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-xs text-zinc-500 mt-2 font-sans uppercase tracking-widest">Minutos</span>
              </div>
              <span className="text-zinc-700 pb-6">:</span>
              <div className="flex flex-col items-center">
                <span className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl text-red-500">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-xs text-zinc-500 mt-2 font-sans uppercase tracking-widest">Segundos</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer & Guarantee */}
      <footer className="snap-section justify-end pb-12 pt-24 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 w-full text-center">
          <div className="bg-zinc-900/50 border border-green-500/30 rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500/0 via-green-500 to-green-500/0" />
            <Shield className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Garantía “Resultados o Te Devuelvo el Doble”</h3>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Usa el tracker 60 días. Si el 1 de marzo 2026 no tienes al menos 3 hábitos nuevos consolidados… <strong className="text-green-500">te devuelvo el doble de lo que pagaste.</strong> Palabra.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center">
              <TrendingUp className="w-3 h-3 text-zinc-950" />
            </div>
            <span className="text-lg font-bold tracking-tight text-zinc-500">TribuHackers</span>
          </div>
          
          <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
            <p>© 2026 TribuHackers. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-green-500 transition-colors">Términos</a>
              <a href="#" className="hover:text-green-500 transition-colors">Privacidad</a>
              <a href="#" className="hover:text-green-500 transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Dummy Shield icon since it wasn't imported initially
function Shield(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.5 0 4.5 1 6.5 2a1 1 0 0 1 1 1z" />
    </svg>
  )
}
