import './Main.css';
import articles from '../data/articles.json'

function Main() {
  return(
    <div className="main">
      {articles.map(item => {
        return(
          <section key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </section> 
        )
      })}
    </div>
  )
}

export default Main;