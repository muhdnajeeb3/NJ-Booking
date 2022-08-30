
import { BrowserRouter , Routes ,Route} from 'react-router-dom';
import './App.css';
import List from './components/List';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hotels' element={<List/>}/>
      <Route path='/hotels/:id' element={<List/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
