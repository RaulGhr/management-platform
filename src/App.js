import './App.css';
import {Routes, Route} from 'react-router-dom';

import Landpage from './routes/Landpage/landpage.component.jsx';
import Navigation from './routes/Navigation/navigation.component.jsx';
import LogIn from './routes/LogIn/login.component.jsx';
import Register from './routes/Register/register.component.jsx';
import EmployePage from './routes/EmployePage/employepage.component.jsx';
import ManagerPage from './routes/ManagerPage/managerpage.component.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Landpage/>} />
        <Route path="login" element={<LogIn/>} />
        <Route path="register" element={<Register/>} />
        <Route path="employe" element={<EmployePage/>} />
        <Route path="manager" element={<ManagerPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
