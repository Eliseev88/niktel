import { Suspense } from 'react'
import './styles/App.css'
import Header from './components/Header'
import Intro from './components/Intro'

function App() {
  return (
    <>
      <Suspense fallback="">
        <Header />
        <main className="main">
          <div className="background"></div>
          <Intro />
        </main>
      </Suspense>
    </>
  )
}

export default App
