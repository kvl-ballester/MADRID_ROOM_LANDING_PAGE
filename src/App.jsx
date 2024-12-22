import { useTranslation } from 'react-i18next'
import './App.css'

function App() {
  const {t, i18n} = useTranslation()

  return (
    <div className="landing-page">
      <h1>{t('welcome')}</h1>
    </div>
  )
}

export default App
