import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import Add from './components/Add';
import Login from './components/Login';
import Settings from './components/Settings';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/Add' element={<Add/>}/>
      <Route path='/Search' element={<Search/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/ViewAll' element={<ViewAll/>}/>
      <Route path='/Settings' element={<Settings/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
