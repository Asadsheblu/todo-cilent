import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './Components/RequireAuth';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
 <Home></Home>
          </RequireAuth>
       }></Route>
       <Route path='signin' element={<SignIn />}></Route>
       <Route path='signUp' element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
