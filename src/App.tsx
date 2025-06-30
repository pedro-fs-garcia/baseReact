import Header from './components/Header'
import Footer from './components/Footer'
import MainRouter from './routers/MainRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <main className='pt-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800'>
          <MainRouter />
        </main>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App
