import Header from '../Header/Header';
import Main from '../Main/Main';
import Aside from '../Aside/Aside';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return(
    <div className='container'>
      <Header/>
      <Main/>
      <Aside/>
      <Footer/>
    </div>
  ) 
}

export default App;