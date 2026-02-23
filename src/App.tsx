import { motion } from "motion/react";
import { ArrowRight, CreditCard, Landmark, Shield, RefreshCw, ArrowLeftRight, Building2, ArrowUpRight } from "lucide-react";

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
  return (
    <div className="snap-container bg-zinc-950 text-zinc-50 font-sans selection:bg-teal-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-zinc-950 rounded-sm transform rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-tight">Finpay</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#" className="hover:text-zinc-50 transition-colors">Productos</a>
            <a href="#" className="hover:text-zinc-50 transition-colors">Clientes</a>
            <a href="#" className="hover:text-zinc-50 transition-colors">Precios</a>
            <a href="#" className="hover:text-zinc-50 transition-colors">Aprender</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Iniciar sesión</button>
            <button className="text-sm font-medium bg-teal-500 text-zinc-950 px-5 py-2.5 rounded-full hover:bg-teal-400 transition-colors">Registrarse</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="snap-section pt-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={staggerContainer} className="max-w-2xl">
            <motion.h1 variants={fadeUp} className="text-6xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
              Cobra temprano<br />
              ahorra automáticamente<br />
              <span className="text-teal-400">todo tu sueldo.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-zinc-400 mb-10 max-w-lg leading-relaxed">
              Apoya a las pequeñas empresas con facturación simple, integraciones potentes y herramientas de gestión de flujo de caja.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input type="email" placeholder="Correo de tu empresa" className="flex-1 bg-zinc-900 border border-zinc-800 rounded-full px-6 py-4 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-teal-500/50 transition-colors" />
              <button className="bg-teal-500 text-zinc-950 px-8 py-4 rounded-full font-medium hover:bg-teal-400 transition-colors flex items-center justify-center gap-2 group">
                Empezar
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-16 flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-2xl font-bold font-serif">Klarna.</span>
              <span className="text-xl font-bold tracking-tight">coinbase</span>
              <span className="text-xl font-bold flex items-center gap-1"><span className="text-teal-500 text-2xl">✽</span>instacart</span>
            </motion.div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9, rotate: -5 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: false, amount: 0.3 }} className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-3xl blur-2xl" />
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center text-teal-400 font-bold">D</div>
                <div>
                  <h3 className="font-medium">Dipa Inhouse</h3>
                  <p className="text-sm text-zinc-500">dipainhouse@gmail.com</p>
                </div>
              </div>
              <div className="mb-8">
                <p className="text-sm text-zinc-500 mb-1">Factura</p>
                <h2 className="text-4xl font-bold">$1,876,580</h2>
                <p className="text-sm text-zinc-500 mt-1">21 de Abril, 2024</p>
              </div>
              <div className="space-y-3 mb-8">
                <div className="bg-zinc-950 border border-teal-500/30 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-teal-400" />
                    <span className="font-medium">Tarjeta de Crédito</span>
                  </div>
                  <div className="w-4 h-4 rounded-full border-2 border-teal-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  </div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex items-center justify-between opacity-50">
                  <div className="flex items-center gap-3">
                    <Landmark className="w-5 h-5" />
                    <span className="font-medium">Cuenta Bancaria</span>
                  </div>
                  <div className="w-4 h-4 rounded-full border-2 border-zinc-700" />
                </div>
              </div>
              <button className="w-full bg-zinc-100 text-zinc-900 py-4 rounded-xl font-medium hover:bg-white transition-colors">
                Pagar
              </button>
            </div>
            
            {/* Floating Card */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-12 -top-12 bg-teal-600 rounded-2xl p-6 w-64 shadow-2xl shadow-teal-900/50 border border-teal-400/20 backdrop-blur-xl">
              <p className="text-teal-100 text-sm mb-2">Tarjeta de Crédito</p>
              <p className="text-xl font-mono tracking-widest text-white mb-8">234 **** ****</p>
              <div className="flex justify-between items-end">
                <span className="text-2xl font-bold italic text-white">VISA</span>
                <div className="flex gap-1">
                  {[1,2,3].map(i => <div key={i} className="w-1 h-4 bg-teal-300 rounded-full opacity-50" />)}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="snap-section bg-zinc-900/50 relative">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={staggerContainer}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <motion.p variants={fadeUp} className="text-teal-400 text-sm font-semibold tracking-wider uppercase mb-4">Pagos Futuros</motion.p>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight">
                  Experiencia que crece<br />con tu escala.
                </motion.h2>
              </div>
              <motion.p variants={fadeUp} className="text-zinc-400 max-w-sm">
                Diseña un sistema operativo financiero que funcione para tu negocio y simplifique la gestión del flujo de caja.
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: RefreshCw, title: "Transferencias gratuitas", desc: "Crea una experiencia financiera y automatiza compras recurrentes programando pagos." },
                { icon: Landmark, title: "Múltiples cuentas", desc: "Ejecuta tus operaciones con efectivo de tu cuenta y genera rendimiento sobre los fondos almacenados." },
                { icon: Shield, title: "Seguridad inigualable", desc: "Gestiona tus finanzas de forma segura con MFA a nivel de organización, bloqueo de tarjetas y controles de cuenta." }
              ].map((feature, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-zinc-950 border border-zinc-800/50 p-8 rounded-3xl hover:border-teal-500/30 transition-colors group">
                  <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-500/10 transition-colors">
                    <feature.icon className="w-6 h-6 text-zinc-400 group-hover:text-teal-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Prefer Section */}
      <section className="snap-section relative">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={staggerContainer} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-teal-400 text-sm font-semibold tracking-wider uppercase mb-4">Por qué nosotros</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight">Por qué prefieren Finpay</motion.h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.3 }} className="bg-zinc-900 border border-zinc-800/50 p-12 rounded-[2rem] flex flex-col justify-center">
              <h3 className="text-7xl font-bold text-teal-400 mb-6">3k+</h3>
              <p className="text-2xl font-medium text-zinc-300">Empresas ya están operando en Finpay</p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.3 }} className="bg-zinc-900 border border-zinc-800/50 p-12 rounded-[2rem] flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-12">Retira tus fondos al instante en cualquier momento</h3>
              <div className="flex items-center justify-center gap-6">
                <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-zinc-950 rounded-sm transform rotate-45" />
                </div>
                <ArrowLeftRight className="w-8 h-8 text-zinc-500" />
                <div className="w-16 h-16 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center">
                  <Landmark className="w-8 h-8 text-zinc-400" />
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.3 }} className="md:col-span-2 bg-zinc-900 border border-zinc-800/50 p-12 rounded-[2rem] flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">Sin volatilidad de activos</h3>
                <p className="text-zinc-400 text-lg">Genera retornos sobre tus reservas de efectivo sin realizar ninguna inversión.</p>
              </div>
              <div className="flex-1 w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Resumen</p>
                    <h4 className="text-3xl font-bold">$1,876,580</h4>
                  </div>
                  <span className="text-sm text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full">6 Meses</span>
                </div>
                {/* Simple Chart Mockup */}
                <div className="h-32 relative flex items-end">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0,100 L0,80 Q20,70 40,60 T80,30 L100,20 L100,100 Z" fill="url(#gradient)" opacity="0.2" />
                    <path d="M0,80 Q20,70 40,60 T80,30 L100,20" fill="none" stroke="#2dd4bf" strokeWidth="2" />
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2dd4bf" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex justify-between mt-4 text-xs text-zinc-600">
                  <span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maximize Returns Section */}
      <section className="snap-section bg-teal-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/1920/1080')] opacity-5 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={staggerContainer}>
            <motion.p variants={fadeUp} className="text-teal-400 text-sm font-semibold tracking-wider uppercase mb-4">Paso a paso</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-16 max-w-2xl text-white">
              Maximiza tus retornos con una cuenta de Reserva que genera.
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: "1", title: "Abre tu cuenta", desc: "Regístrate en finpay y configura tu cuenta desde el panel de control." },
                { num: "2", title: "Transfiere tu dinero", desc: "Mueve dinero de otra cuenta a finpay y empieza a ganar." },
                { num: "3", title: "Mira tu saldo crecer", desc: "Accede al instante y mantente aislado de la volatilidad del mercado." }
              ].map((step, i) => (
                <motion.div key={i} variants={fadeUp} className="bg-teal-900/50 border border-teal-800/50 p-8 rounded-3xl relative overflow-hidden group hover:bg-teal-800/50 transition-colors">
                  <span className="absolute -top-6 -left-4 text-9xl font-black text-teal-950/50 group-hover:text-teal-900/50 transition-colors">{step.num}</span>
                  <div className="relative z-10 mt-16">
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-teal-200/70 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="snap-section relative">
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={staggerContainer}>
            <motion.p variants={fadeUp} className="text-teal-400 text-sm font-semibold tracking-wider uppercase mb-4">Nuestra Misión</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Hemos ayudado a<br />empresas innovadoras
            </motion.h2>
            <motion.p variants={fadeUp} className="text-zinc-400 max-w-2xl mx-auto mb-20 text-lg">
              Cientos de todos los tamaños y de todas las industrias han logrado grandes mejoras con nosotros.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
              <motion.div variants={fadeUp} className="flex flex-col items-center pt-8 md:pt-0">
                <h3 className="text-6xl font-bold mb-2">24%</h3>
                <p className="text-zinc-500 font-medium">Negocios de ingresos</p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col items-center pt-8 md:pt-0">
                <h3 className="text-6xl font-bold mb-2">180K</h3>
                <p className="text-zinc-500 font-medium">En ingresos anuales</p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col items-center pt-8 md:pt-0">
                <h3 className="text-6xl font-bold mb-2">10+</h3>
                <p className="text-zinc-500 font-medium">Meses de pista</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="snap-section relative bg-zinc-900/30">
        <div className="max-w-5xl mx-auto px-6 w-full">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={staggerContainer}>
            <motion.p variants={fadeUp} className="text-center text-sm font-semibold tracking-wider uppercase mb-12 text-zinc-500">Elige tu plan:</motion.p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} className="bg-zinc-900 border border-zinc-800 p-12 rounded-[2rem] flex flex-col justify-between min-h-[320px] group hover:border-teal-500/50 transition-colors cursor-pointer">
                <h3 className="text-4xl font-bold mb-8">Plus</h3>
                <div className="flex justify-between items-end">
                  <p className="text-3xl text-zinc-400 font-medium">£2.99<span className="text-lg text-zinc-600">/mes</span></p>
                  <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-teal-500 group-hover:bg-teal-500/10 transition-colors">
                    <ArrowUpRight className="w-6 h-6 text-zinc-500 group-hover:text-teal-400 transition-colors" />
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUp} className="bg-teal-600 p-12 rounded-[2rem] flex flex-col justify-between min-h-[320px] group cursor-pointer relative overflow-hidden shadow-2xl shadow-teal-900/20">
                <div className="absolute right-0 top-0 w-64 h-64 bg-teal-400 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 transition-transform group-hover:scale-110 duration-700" />
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold text-white mb-8">Premium</h3>
                </div>
                <div className="flex justify-between items-end relative z-10">
                  <p className="text-3xl text-teal-50 font-medium">£6.99<span className="text-lg text-teal-200">/mes</span></p>
                  <div className="w-12 h-12 rounded-full border border-teal-400 flex items-center justify-center group-hover:bg-teal-500 transition-colors">
                    <ArrowUpRight className="w-6 h-6 text-white transition-transform" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="snap-section relative px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={staggerContainer} className="max-w-7xl mx-auto w-full bg-teal-950 border border-teal-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 to-transparent" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <motion.p variants={fadeUp} className="text-teal-400 text-sm font-semibold tracking-wider uppercase mb-4">Pruébalo ahora</motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                ¿Listo para nivelar tu proceso de pagos?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-teal-200/70 text-lg">
                Apoya a las pequeñas empresas con facturación simple, integraciones potentes y herramientas de gestión de flujo de caja.
              </motion.p>
            </div>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button className="bg-teal-500 text-zinc-950 px-8 py-4 rounded-full font-medium hover:bg-teal-400 transition-colors whitespace-nowrap">
                Empezar Ahora
              </button>
              <button className="bg-transparent border border-teal-700 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-900/50 transition-colors whitespace-nowrap flex items-center justify-center gap-2">
                Saber Más <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="snap-section justify-end pb-12 pt-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-zinc-950 rounded-sm transform rotate-45" />
                </div>
                <span className="text-2xl font-bold tracking-tight">Finpay</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Soluciones</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Pequeñas Empresas</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Freelancers</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Clientes</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Impuestos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Compañía</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Carreras</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Aprender</h4>
              <ul className="space-y-4 text-sm text-zinc-500">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Ebooks</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Guías</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Plantillas</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
            <p>©Finpay 2024. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-teal-400 transition-colors">Twitter</a>
              <a href="#" className="hover:text-teal-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
