import {useLocation, Link} from 'react-router-dom';

function Category(props) {
  let url = useLocation();
  const data = props.nav.map(item => <li key={item.title}><Link to={`${url.pathname}${item.path}`}>{item.title}</Link></li>);
  
  return (
    <>
      <Link to='/'>Назад</Link>
      {/* <ul>
        <li><Link to={`${url.pathname}/notebook`}>Ноутбуки</Link></li>
        <li><Link to={`${url.pathname}/monitor`}>Мониторы</Link></li>
        <li><Link to={`${url.pathname}/cellphone`}>Мобильные телефоны</Link></li>
      </ul> */}
      {data}
    </>
  )
}

export default Category;