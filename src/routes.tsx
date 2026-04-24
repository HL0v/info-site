import { Route, Routes} from "react-router-dom"
import Portifolio from "./components/Portifolio/Portifolio.tsx"
import Home from "./components/Home/Home.tsx"
import Items from "./components/indidualPages/Items.tsx"

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/portifolio' element={
        <Portifolio />
      }/>
      <Route path='/portifolio/:slug' element={
        <Items/>
      }/>
      <Route path='/' element={
        <Home />
      }/>
    </Routes>
  )
}