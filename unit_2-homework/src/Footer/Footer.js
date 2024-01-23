import Nav from '../Header/Nav'
import './Footer.css';

function Footer(props) {
  return(
    <footer>
      <h3>{props.site.site_title}</h3>
      <Nav nav={props.site.nav}/>
    </footer>
  )
}

export default Footer;