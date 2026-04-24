import type { ReactNode } from "react";
import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"
interface LayoutProps{
  
  children: ReactNode
  
}

const Layout = ({children}:LayoutProps) => {
  
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  )
};
export default Layout