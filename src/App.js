import './App.css';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path='add' element={<Add/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
