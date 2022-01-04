import './App.css';
import JSONDATA from './MOCK_DATA.json';
import {useState} from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  function filterNames(arr) {

    const results = arr.filter((val) => {
      if(searchTerm == "") {
        return val;
      } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      } 
    })
    return results;
  }

  const displayName = filterNames(JSONDATA).map((val, key) => {
    return <div className='user' key={key}>
      <p>{val.first_name}</p>
    </div>
  })
  

  return (
    <div className="App">

      <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}} />
      <div>{displayName}</div>

    </div>
  );
}
export default App;
