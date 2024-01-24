import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import RegistrationPage from './components/Registration';
import Home from './components/Home'



const App = () => {
  return (
    <Router>
      <div>
        <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Registration"  element={<RegistrationPage/>}/>
      <Route path="/Home" element={<Home/>} />
     
      </Routes>
      </div>
      
      
    </Router>
  );
};

export default App;