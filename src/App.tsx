
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { MainRoutes } from './routes'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Layout>
          <main className="grow">
            <MainRoutes/>
          </main>
          </Layout>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
