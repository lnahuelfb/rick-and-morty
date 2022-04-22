import SearchBar from './components/SearchBar';
import './App.css';
import logo from './images/rick-and-morty.png'
import { DataContext } from './context/DataContext';
import { useContext } from 'react';
import Card from './components/Card';
import Linkedin from './images/linkedin.svg'
import WhatsApp from './images/WhatsApp.svg'
import GitHub from './images/github.svg'
import Loading from './components/Loading';
import Pagination from './components/Pagination';

function App() {

  const {
    data,
    info,
    onPrevious,
    onNext
  } = useContext(DataContext)

  return (
    <>
      <header>
        <img src={logo} alt="Logo" className='logo' />
      </header>

      <main>
        <SearchBar />
        <Pagination next={info.next} prev={info.prev} onPrevious={onPrevious} onNext={onNext} />
        <div className="cards-container">
          {
            data.length <= 0
              ? <Loading />
              : data.map(card => <Card key={card.id} data={card} />)
          }
        </div>
        <Pagination next={info.next} prev={info.prev} onPrevious={onPrevious} onNext={onNext} />
      </main>

      <footer>

        <h3>Nahuel Fernandez Beschtedt</h3>

        <div className="social">
          <a href='https://www.linkedin.com/in/nahuel-fernandez-beschtedt/' target='_blank' rel="noopener noreferrer">
            <img className='social-icons' src={Linkedin} alt="LinkedIn" />
          </a>

          <a href="https://github.com/lnahuelfb" target='_blank' rel="noopener noreferrer">
            <img className='social-icons' src={GitHub} alt='GitHub' />
          </a>

          <a href="https://api.whatsapp.com/send?phone=541163783961" target='_blank' rel="noopener noreferrer">
            <img className='social-icons' src={WhatsApp} alt='WhatsApp' />
          </a>
        </div>

      </footer>
    </>
  );
}

export default App;