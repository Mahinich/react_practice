import './Header.css';

function Header(props) {
  return(
    <header>
      <h1>My header Component; Props:</h1>
      <h2>Second header text; Props: </h2>
      <Nav nav={props.data.nav}/>
    </header>
  )
}

function Nav(props) {
  let data = props.nav;
  const listItem = data.map(item => {
    return <li key={item.link}><a href={item.link}>{item.text}</a></li>
  })
  return(
    <nav>
      <ul>
        {listItem}
      </ul>
    </nav>
  )
}

export default Header;