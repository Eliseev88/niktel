import { Suspense } from 'react'
import './styles/App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Partners from './components/Partners'

function App() {
  return (
    <>
      <Suspense fallback="">
        <Header />
        <main className="main">
          <div className="background"></div>
          <Intro />
          <Partners />
        </main>
      </Suspense>
    </>
  )
}

export default App
