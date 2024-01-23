import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Header from './Header/Header';
import Goods from './Goods'

const headerData = {
  site_name: 'Test site name from object',
  nav: [
    {link: 'nav1', text: 'my link1'},
    {link: 'nav2', text: 'my link2'},
    {link: 'nav3', text: 'my link3'},
  ]
}

const goods = [
  {title: 'apple', cost: 330, image: 'https://cdn3.iconfinder.com/data/icons/education-209/64/apple-fruit-science-school-256.png'},
  {title: 'pear', cost: 430, image: 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Pear-256.png'},
  {title: 'watermelon', cost: 530, image: 'https://cdn0.iconfinder.com/data/icons/fruity-3/512/Watermelon-256.png'},
]

function App() {
  return (
    <>
      <Header data={headerData}/>
      <Test/>
      {goods.map(item => {
        return (
          <Goods key={item.title} title={item.title} cost={item.cost} image={item.image}/>
        )
      })}
    </>
  );
}

export default App;