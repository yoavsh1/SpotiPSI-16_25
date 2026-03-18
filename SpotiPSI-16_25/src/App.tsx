import { useState, useEffect } from 'react'
import type { Song } from "./components/Types"
import AllSongsPage from "./components/AllSongsPage"
import './App.css'

function App() {
const [songList, setSongList] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const fetchSongs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5001/api/songs")
      const data = await response.json();
    
      setSongList(data);
    }
    catch (error) {
      setError("Something went worng");
      console.error(error);
      return;
    }
    finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
      <h1>Songs List:</h1>
      {isLoading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && (<AllSongsPage songs={songList}/>)}
    </div>
  )
}

export default App
