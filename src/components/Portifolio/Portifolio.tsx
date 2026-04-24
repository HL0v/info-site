import { motion } from "motion/react";
import { projects } from "./PortifolioComponents/Data/projects";
import { ProjectCard } from "./PortifolioComponents/ui/ProjectCard/ProjectCard";
import { contact } from "../Home/HomeComponents/consts/contact/contact";


const Portifolio = () => {
  
  return (
      <section id="servicos" className="py-48 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-brand-blue mb-6">
                Portifólio Digital<br />
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-green-600 to-brand-blue">
                Criando Interfaces Vivas</h2>
                Para Marcas e Instituições
              </h2>          
            </div>
            <div className="">
              <button className="signature-gradient text-white px-6 py-2.5 rounded-lg text-m font-bold tracking-tight hover:opacity-90 transition-opacity active:scale-95"
                onClick={contact}
              >
                Solicite um Orçamento
            </button>
            </div>

          </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((projects, index) => (
          <motion.div
            key={projects.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-brand-green/20"
          >
            <div>
              <ProjectCard project={projects}/>
            </div>
            
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  )
};
export default Portifolio;