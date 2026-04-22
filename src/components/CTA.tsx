import { motion } from 'motion/react';
import { ArrowRight, Rocket } from 'lucide-react';
import { contact } from '../const/contact';

export default function CTA() {
  return (
    <section id="contato" className="pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 signature-gradient rounded-3xl p-8 md:p-12 text-white flex flex-col justify-between min-h-400 shadow-xl"
          >
            <div>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Pronto para compilar sua próxima grande ideia?
              </h2>
              <p className="text-blue-200 text-lg max-w-md mb-8">
                Vamos conversar sobre como a engenharia de precisão pode elevar sua estratégia digital.
              </p>
            </div>
            <div>
              <button className="bg-brand-green text-brand-blue-light px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:gap-5 transition-all group active:scale-95" onClick={contact}>
                Começar seu Projeto
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-slate-100 rounded-3xl p-12 flex flex-col justify-center items-center text-center shadow-inner"
          >
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm mb-6">
              <Rocket className="text-brand-blue" size={40} />
            </div>
            <h3 className="font-headline text-2xl font-bold text-brand-blue mb-2">Via Rápida</h3>
            <p className="text-slate-500 text-sm">Lance seu MVP em semanas, não meses.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}