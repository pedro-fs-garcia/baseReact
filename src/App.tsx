import Header from './components/Header'
import Footer from './components/Footer'
import MainRouter from './routers/MainRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <main className="main-container bg-background text-text">
          <MainRouter />
        </main>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App
