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
      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/users/:userName' element={<UserId/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
