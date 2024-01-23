import './Aside.css';
import articles from '../data/articles.json';

function Aside() {
  return(
    <div className="aside">
      <ul>
        {articles.map(item=> {
          return(
            <li><a href={item.href}>{item.title}</a></li>
          )
        })}
      </ul>
    </div>
  )
}

export default Aside;