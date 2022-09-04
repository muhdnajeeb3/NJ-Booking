
import { BrowserRouter , Routes ,Route} from 'react-router-dom';
import './App.css';
import Hotel from './components/Hotels/Hotel';
import List from './list/List';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hotels' element={<List/>}/>
      <Route path='/hotels/:id' element={<Hotel/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
