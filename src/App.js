import './App.css';
import Form from './components/form';
import data from './data/data';
import Gif from './components/gif';

function App() {
  const filteredData = data.filter((value=> value.rating!=="g"))
  const getData = filteredData.map(data=>{
    return <Gif key={data.id} url={data.url} title={data.title}/>
  })
  return (
    <div className="App">
      <Form />
      {getData}
    </div>
  );
}

export default App;
