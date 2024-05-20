
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
import CategoryDescription from './CategoryDescription';
import Footer from './Footer';
import Error404 from './Error404';
import './App.css';

const mainNav = [
  {path: '/', title: 'Главная'},
  {path:'/about', title:'О сайте'},
  {path:'/cat', title: 'Категории'},
]

const categoryNav = [
  {path:'/notebook', title: 'Ноутбуки'},
  {path: '/monitor', title: 'Мониторы'},
  {path: '/cellphone', title:'Мобильные телефоны',},
]

function App() {
  return (
   <>
    <Router>
      <Header nav={mainNav}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cat/' element={<Category nav={categoryNav}/>}/>
        <Route path='cat/:userName' element={<CategoryDescription/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </Router>
    <Footer/>
   </>
  );
}

export default App;
