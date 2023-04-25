import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'


function App() {
  // rpx create-react-app visa-atm-locator

  //variable with your apiKey
  // const apiKey = "9ae68c5";

  //State to hold movie data
  const [atms, setAtms] = useState(null);

  //Function to getMovies
  const getATMs = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(`https://sandbox.api.visa.com/globalatmlocator/v1/localatms/totalsinquiry`,

      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setAtms(data);
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    console.log(atms)
  }, [atms])

  getATMs()

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
