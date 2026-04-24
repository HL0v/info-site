import { Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-400 bg-slate-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="text-2xl font-headline font-bold text-brand-blue mb-6">InfoJr</div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Engenharia de soluções digitais direto do coração da UNESP Rio Claro. Software de alta performance para pessoas de alto impacto.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Empresa</span>
            <a href="#sobre" className="text-slate-500 hover:text-brand-blue transition-colors text-sm">Sobre</a>
            <a href="#servicos" className="text-slate-500 hover:text-brand-blue transition-colors text-sm">Serviços</a>
            <a href="#contato" className="text-slate-500 hover:text-brand-blue transition-colors text-sm">Contato</a>
          </div>

          {/*<div className="flex flex-col space-y-4">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Legal</span>
            <a href="#" className="text-slate-500 hover:text-brand-blue transition-colors text-sm">Privacidade</a>
            <a href="#" className="text-slate-500 hover:text-brand-blue transition-colors text-sm">Termos de Uso</a>
          </div>*/}

          <div>
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-4">Localização</span>
            <p className="text-slate-500 text-sm leading-relaxed">
              UNESP - Campus Rio Claro<br />
              Rio Claro, SP, Brasil
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-blue hover:bg-brand-green hover:border-brand-green transition-all">
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-xs font-medium">
            © {new Date().getFullYear()} InfoJr UNESP Rio Claro. Engenharia de Precisão.
          </div>
          <div className="flex space-x-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span>TypeScript</span>
            <span>React</span>
            <span>Node.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
