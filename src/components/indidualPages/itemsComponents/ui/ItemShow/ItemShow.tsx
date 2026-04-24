import { useNavigate } from "react-router-dom";
import { contact } from "../../../../Home/HomeComponents/consts/contact/contact";
import  { type Project } from "../../../../Portifolio/PortifolioComponents/Data/projects";


export function ItemShow({ project }: { project: Project }){
  const img = project.fullPreview
  const navigate = useNavigate()
  
  return (
    <>
      {/* TOP SECTION: Information */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 max-w-5xl mx-auto p-8 font-sans">
        <div className="flex-1 md:w-2/3">
          <h2 className="text-4xl font-extrabold text-[#211f4d] mb-6">
            Sobre o projeto
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>{project.summary}</p>
          </div>
          <div className="space-x-6 pt-5">
            <button
              className="bg-brand-green-dark text-white px-6 py-2.5 rounded-lg text-m font-bold tracking-tight hover:opacity-90 transition-opacity active:scale-95"
              onClick={() => { navigate('/portifolio') }}
            >
              Voltar
            </button>
            <button className="signature-gradient text-white px-6 py-2.5 rounded-lg text-m font-bold tracking-tight hover:opacity-90 transition-opacity active:scale-95"
              onClick={contact}
            >
              Solicite um Orçamento
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:w-1/3 md:border-l md:border-gray-200 md:pl-10">
          <div>
            <h3 className="mb-2 text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Cliente
            </h3>
            <p className="text-[#211f4d] font-medium text-lg">{project.title}</p>
          </div>
          <div>
            <h3 className="mb-2 text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Ano
            </h3>
            <p className="text-[#211f4d] font-medium text-lg">{project.year}</p>
          </div>
          <div>
            <h3 className="mb-2 text-xs font-semibold tracking-widest text-gray-400 uppercase">
              Escopo
            </h3>
            <ul className="text-[#211f4d] font-medium text-lg space-y-1">
              {project.scope.map((scope) => (
                <li key={scope}>{scope}</li> 
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 py-10 px-5 div">
      </div>
      {/* BOTTOM SECTION: Scrollable Full Website Print */}
        <div className="max-w-5xl mx-auto px-8 pb-16">
          {/* 1. max-h-[70vh] restricts the box to 70% of the user's screen height.
            2. overflow-y-auto allows scrolling inside the box.
            3. overflow-x-hidden prevents accidental horizontal scrolling.
          */}
          <div className="relative w-full max-h-[70vh] overflow-y-auto overflow-x-hidden rounded-xl border border-gray-200 shadow-2xl">
            
            {/* Optional: A small hint that the user can scroll */}
            <div className="absolute top-4 right-6 px-3 py-1 bg-black/60 text-white text-xs font-bold rounded-full backdrop-blur-sm pointer-events-none z-10">
              Role para ver mais ↓
            </div>
      
            <img
              src={img}
              alt={project.title}
              loading="lazy"
              // The image stays w-full and h-auto to maintain its true proportions
              className="block w-full h-auto"
            />
          </div>
        </div>
    </>
  );
};
