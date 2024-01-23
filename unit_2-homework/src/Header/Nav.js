import './Nav.css';

function Nav(props) {
  const data = props.nav;
  const listItems = data.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>);
  
  return(
    <nav>
      <ul className="main-navigation">
        {listItems}
      </ul>
    </nav>
  )
}

export default Nav;