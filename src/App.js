import './App.css';
import gif from './components/gif/data';
import Gif from './components/gif';
import Form from './components/form';

function App() {
  return (
    <div className="App">
      <h1>{gif.title}</h1>
      <Form/>
      <Gif url={gif.url}/>
    </div>
  );
}

export default App;
