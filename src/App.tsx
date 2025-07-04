import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
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
