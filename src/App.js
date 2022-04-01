import './App.css';
import React from "react"
import axios from "axios"

function App() {
  const [dataGif, setDataGif] = React.useState([])
  const [query, setQuery] = React.useState("")

  //fetching API and set the gif data
  function fetchingAPI() {
    const key = process.env.REACT_APP_GIPHY_KEY
    const limit = 12
    const baseURL = `https://api.giphy.com/v1/gifs/search?&api_key=${key}&q=${query}&limit=${limit}`
    axios.get(baseURL)
      .then(response => {
        setDataGif(response.data.data)
      })
      .catch(error => alert(error))
  }

  //when the input change, the query will be set
  function handleInput(event) {
    setQuery(event.target.value)
  }

  React.useEffect(() => {
    fetchingAPI()
  }, [query])

  return (
    <div className="App">
      <form>
        <input type="text" onChange={handleInput} />
        <button onClick={e => e.preventDefault}>Search</button>
      </form>
      {dataGif.length !== 0 && dataGif.map(data => {
        return (
          <div key={data.id}>
            <h2>{data.title}</h2>
            <img src={data.images.fixed_width.url} alt={data.title} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
