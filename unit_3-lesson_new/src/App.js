import Header from './Header';
import About from './About';
import Users from './Users';
import Main from './Main';
import UserId from './UserId';
import Error from './Error';
import './App.css';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/users/:userName' element={<UserId/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
