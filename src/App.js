import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/Navigation/Navigation';
import Home from './routes/Home/Home';
import Add from './routes/Add/Add';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path='add' element={<Add/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
