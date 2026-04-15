import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">
          <Hero />
          <Services />
          <About />
          <CTA />
        </main>
        <Footer />
        </div>
    </>
  )
}

export default App
