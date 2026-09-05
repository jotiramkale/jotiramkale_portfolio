import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AmbientBackground from './components/common/AmbientBackground'
import BackToTop from './components/common/BackToTop'
import Home from './pages/Home'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AmbientBackground />
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
