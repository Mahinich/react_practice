import './Main.css';
import articles from '../data/articles.json'

function Main () {
  return (
    <main className="main-block">
      {articles.map(item => 
      <section key={item.title}>
        <h2>{item.title}</h2>
        <a href={item.link}>Link to the full material</a>
        <div>{item.body}</div>
      </section>)}
    </main>
  )
}

export default Main;