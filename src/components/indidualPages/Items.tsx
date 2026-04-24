import { Navigate, useParams } from "react-router-dom";
import { projects } from "../Portifolio/PortifolioComponents/Data/projects";
import {ItemShow} from "./itemsComponents/ui/ItemShow/ItemShow";

const Items = () => {
  const { slug } = useParams<{slug: string}>();
  const proj = projects.find(proj => proj.slug === slug)
  if (!proj) {
   return <Navigate to ='/portifolio' replace/>
  }
  return (
    <section id="items" className="py-30 bg-slate-50">
      {
        <ItemShow project={proj} />
      }
    </section>
  );
  
};
export default Items;
