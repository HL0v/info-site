import { motion } from 'motion/react';
import { Settings, Globe, Code2 } from 'lucide-react';

const services = [
  {
    title: "Desenvolvimento de Sistemas Web",
    description: "Arquitetando sistemas complexos orientados a dados usando React e TypeScript. Focamos em lógica de alta performance que se mantém robusta sob carga.",
    icon: Settings,
    tags: ["Corporativo", "Escalável"],
    color: "bg-brand-blue",
    iconColor: "text-white"
  },
  {
    title: "Sites em WordPress",
    description: "Presença web escalável e fácil de gerenciar. Temas personalizados construídos com padrões modernos de engenharia para garantir segurança e velocidade.",
    icon: Globe,
    tags: ["Otimizado SEO", "CMS"],
    color: "bg-brand-green",
    iconColor: "text-brand-green-dark"
  },
  {
    title: "Websites com React + TypeScript",
    description: "Soluções de frontend modernas, seguras em tipos e robustas. Aproveitando o poder do ecossistema React para criar experiências fluidas e dinâmicas.",
    icon: Code2,
    tags: ["Type-Safe", "UI Moderna"],
    color: "bg-brand-blue-light",
    iconColor: "text-white"
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-brand-blue mb-6">
              Artesanato Digital de<br/>Alta Performance
            </h2>
            <p className="text-slate-600 text-lg">
              Não apenas construímos sites; compilamos experiências que escalam com a lógica do seu negócio.
            </p>
          </div>
          <div className="hidden md:block h-px flex-grow mx-12 bg-slate-200 mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-brand-green/20"
            >
              <div className={`w-12 h-12 rounded-xl ${service.color} ${service.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={24} />
              </div>
              <h3 className="font-headline text-xl font-bold text-brand-blue mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 rounded bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
