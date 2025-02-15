import { useTranslation } from 'react-i18next'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Tittle from './components/Tittle'
import ReviewCarousel from './components/ReviewCarousel'
import Contact from './components/Contact'

function App() {
  const {t, i18n} = useTranslation()

  return (
    <div className="landing-page">
      <Header />
      <div className="content">
        <Tittle />
        <ReviewCarousel />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
