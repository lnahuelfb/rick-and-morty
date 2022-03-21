import SearchBar from './components/SearchBar';
import './App.css';
import logo from './images/rick-and-morty.png'
import DataProvider from './context/DataContext';
import Card from './components/Card';
import Linkedin from './images/linkedin.svg'
import WhatsApp from './images/WhatsApp.svg'
import GitHub from './images/github.svg'

function App() {

  const items = [1, 2, 3, 4, 5, 6]

  return (
    <DataProvider>
      <header>
        <img src={logo} alt="Logo" className='logo' />
      </header>
      <main>
        <SearchBar />
        <div className="cards-container">
          {
            items.map(card => <Card />)
          }
        </div>
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
    </DataProvider>
  );
}

export default App;