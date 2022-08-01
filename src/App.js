import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  let nombre=["Outfit hombre 1","Outfit hombre 2","Outfit hombre 3"]
  let stock=[5,10,9]
  return (
    <div>
      <header>
        <Header/>
      </header>
      <body>
      <ItemListContainer items={nombre} stock={stock}></ItemListContainer>
      <Footer/>
      </body>
    </div>
  );
}

export default App;
