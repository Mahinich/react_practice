import { Link } from 'react-router-dom';

function Header(props) {
const data = props.nav.map(item => {
  return (
    <li key={item.title}><Link to={item.path}>{item.title}</Link></li>
  )
});


  return (
    <nav>
      <ul>
        {/* <li><Link to="/">Главная</Link></li>
        <li><Link to="/about">О сайте</Link></li>
        <li><Link to="/cat">Категории</Link></li> */}
        {data}
      </ul>
    </nav>
  )
}

export default Header;