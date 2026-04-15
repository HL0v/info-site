import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="sobre" className="py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-green/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 space-y-8">
              <span className="text-sm font-bold text-brand-green-dark uppercase tracking-[0.2em]">O Espírito da Empresa Júnior</span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-brand-blue tracking-tighter leading-tight">
                Nascida na UNESP Rio Claro, <br/>Movida pela Inovação.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                A InfoJr é mais do que uma software house. Somos uma incubadora de talentos dentro do ecossistema da UNESP Rio Claro. Combinando o rigor da pesquisa acadêmica com a agilidade do mercado tecnológico, entregamos soluções tecnicamente sólidas e praticamente invencíveis.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <div className="text-4xl font-headline font-bold text-brand-blue">100%</div>
                  <div className="text-xs text-slate-400 uppercase mt-1 font-bold tracking-wider">Liderada por Estudantes</div>
                </div>
                <div>
                  <div className="text-4xl font-headline font-bold text-brand-green-dark">UNESP</div>
                  <div className="text-xs text-slate-400 uppercase mt-1 font-bold tracking-wider">Raiz Acadêmica</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                alt="Trabalho colaborativo na UNESP" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-blue p-8 rounded-2xl shadow-2xl text-white">
              <div className="text-[10px] uppercase tracking-widest opacity-60 mb-2 font-bold">Sede</div>
              <div className="text-3xl font-headline font-bold">UNESP RC</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
