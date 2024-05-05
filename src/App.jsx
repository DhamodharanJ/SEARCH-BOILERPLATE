import React, { useState } from 'react'
import Data from './assets/Data.json'
import '../src/App.css'
function App() {
  const [search, setSearch] = useState('');
  const [searchlist, setSearchlist] = useState('');
  const [showSuggestion,setShowSuggestion]  = useState(true)

  const del = function () {
    setShowSuggestion(!showSuggestion)
  }


  function written(event) {
    setSearch(event.target.value);
    if(search!=" "){
    const a= Data.filter((value)=>{ return value.name.toLowerCase().startsWith(event.target.value.toLowerCase())})
    setSearchlist(a.map((value,index)=>{ return <li key={index}>{value.name}</li>}));
    }
  }


  return (
    <div>
      <div className="container">
      
      <input type='text' 
      onChange={written} 
      value={search}
      onKeyUp={(e) => { e.key == 'Escape' && del() }} />
      <button>search</button> 
      {
        showSuggestion &&
      <p>{searchlist}</p>
      
      }
      </div>
    </div>
  )
}

export default App
