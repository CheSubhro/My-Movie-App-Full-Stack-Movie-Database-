import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

function App() {

  const [refresh, setRefresh] = useState(0);

  return (
      <>
          <div style={{ padding: '20px' }}>
            <h1>My Movie List</h1>
            <MovieForm onMovieAdded={() => setRefresh(r => r + 1)} />
            <MovieList key={refresh} />
          </div>
      </>
  )
}

export default App
