import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Dummy from './pages/UserOutput'
import UserOutput from './pages/UserOutput';

function App() {  
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/user-output" element={<UserOutput />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
