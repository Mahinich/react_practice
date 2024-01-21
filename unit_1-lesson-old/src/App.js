import './App.css';

let text = 'test variable'
const style = {
  fontSize: '24px',
  fontStyle : 'italic',
  color: 'red'
}

function App() {
  let text2 = '222';
  return (
    
    <>
    <h1 style={style} className='container'> some text</h1>
      
      <img src="images/playing_card.png" alt="card" title='playing card'/>
      <ul>
        <li>Hello</li>
        <li>{text+text2}</li>
      </ul>
    </>
  );
}

export default App;
