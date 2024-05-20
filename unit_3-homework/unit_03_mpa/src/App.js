
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Category from './Category';
import CategoryDescription from './CategoryDescription';
import Footer from './Footer';
import Error404 from './Error404';
import './App.css';

function App() {
  return (
   <>
    <Header/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cat/' element={<Category/>}/>
        <Route path='cat/:userName' element={<CategoryDescription/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </Router>
    <Footer/>
   </>
  );
}

export default App;
