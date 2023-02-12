import './styles/reset.css';
import './styles/app.css';
import Header from './components/header';
import Footer from './components/footer';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  )
}

export default App