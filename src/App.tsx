import { Suspense } from 'react'
import './styles/App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Partners from './components/Partners'
import Statisctics from './components/Statisctics'
import Company from './components/Company'
import Competence from './components/Competence'

function App() {
  return (
    <>
      <Suspense fallback="">
        <Header />
        <main className="main">
          <div className="background"></div>
          <Intro />
          <Partners />
          <Statisctics />
          <Company />
          <Competence />
        </main>
      </Suspense>
    </>
  )
}

export default App
