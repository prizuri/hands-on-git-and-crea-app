import './App.css';
import React from "react"
import axios from "axios"

function App() {
  const [query, setQuery] = React.useState("")
  const [dataGif, setDataGif] = React.useState([])
  console.log("Rendering")

  //Use effect will run in every changes query
  React.useEffect(()=>{
    console.log("Use effect")
    fetchingDataGif()
  }, [query])
  const key=process.env.local.REACT_APP_GIPHY_KEY

  //Fetching API with axios and save the changes to setDataGif
  function fetchingDataGif(){
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
      
      {dataGif.map(data=>{
        return (<img key={data.id} src={data.images.fixed_width.url}/>)
        
      })}
    </div>
  );
}

export default App;
