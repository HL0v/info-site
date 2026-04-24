import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';
import { contact } from '../../consts/contact/contact';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate()
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-pattern -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green-dark text-xs font-semibold mb-6 border border-brand-green/30">
            <Terminal size={14} />
            <span className="tracking-wider">v2.0_ENGENHARIA_DE_PRECISÃO</span>
          </div>
          
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-brand-blue leading-[0.9] mb-8">
            Engenharia de Precisão para a <span className="text-brand-green-dark">Era Digital.</span>
          </h1>
          
          <p className="text-slate-600 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Empresa Júnior da UNESP Rio Claro. Unimos a excelência acadêmica a soluções de software de padrão industrial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="signature-gradient text-white px-8 py-4 rounded-xl text-md font-bold tracking-tight hover:opacity-90 transition-opacity active:scale-95" onClick={contact}>
              Solicite um Orçamento
            </button>
            <button className="bg-slate-200 text-brand-blue px-8 py-4 rounded-xl text-md font-bold tracking-tight hover:bg-slate-300  transition-all active:scale-95"
              onClick={() => {
                navigate('/portifolio')
              }}
            >
              Ver Portfólio
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute -top-12 -right-12 w-full h-full rounded-full border-[1.5px] border-slate-3000/50 -z-10"></div>
          <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
              alt="Código fonte de alta qualidade" 
        
              className="w-full h-full object-cover rounded-2xl transition-all hover:grayscale duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
