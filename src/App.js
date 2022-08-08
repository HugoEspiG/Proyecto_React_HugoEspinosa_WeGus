import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <body>
      <ItemListContainer></ItemListContainer>
      <Footer/>
      </body>
    </div>
  );
}

export default App;
