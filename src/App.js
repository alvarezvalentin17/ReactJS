import './App.css';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
      
    
  );
}

export default App;
