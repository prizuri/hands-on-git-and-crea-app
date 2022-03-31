import './App.css';
import React from "react"
import axios from "axios"

function App() {
  const [query, setQuery] = React.useState("")
  const [dataGif, setDataGif] = React.useState([])

  //Use effect will run in every changes query
  React.useEffect(()=>{
    fetchingDataGif()
  }, [query])

  //Fetching API with axios and save the changes to setDataGif
  function fetchingDataGif(){
    const key=process.env.REACT_APP_GIPHY_KEY
    axios.get(`https://api.giphy.com/v1/gifs/search?&api_key=${key}&q=${query}&limit=12`)
      .then(response => {
        setDataGif(response.data.data)
      })
      .catch(error => alert(error))
  }

  function handleInput(event){
    setQuery(event.target.value)
  }

  return (
    <div className="App">
      <form>
        <input type="text" onChange={handleInput}/>
        <button>Submit</button>
      </form>
      
      {dataGif.length!==0 && dataGif.map(data=>{
        return (<img key={data.id} src={data.images.fixed_width.url}/>)
        
      })}
    </div>
  );
}

export default App;
