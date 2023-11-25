import articles from '../data/articles.json'
import './Sidebar.css'

function Sidebar () {
  return (
    <aside className="sidebar-block">
      {articles.map(item => 
      <ul key={item.title}>
        <li><a href={item.link}>{item.title}</a></li>
      </ul>)}
    </aside>
  )
}

export default Sidebar;