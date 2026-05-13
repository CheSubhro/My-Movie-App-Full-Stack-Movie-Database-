import { useState, useEffect } from 'react';
import API from '../api';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const res = await API.get('/movies?populate=poster');
      console.log('Full API response:', res.data);
      setMovies(res.data.data || []);
      setError(null);
    } catch (err) {
      console.error('Fetch movies error:', err);
      setError('Failed to load movies. Check console.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) return <p style={{ textAlign: 'center', fontSize: '1.2em' }}>Loading movies...</p>;
  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>All Movies ({movies.length})</h2>
      {movies.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>No movies added yet. Add some!</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', marginTop: '20px' }}>
          {movies.map((movie) => {
            const movieData = movie.attributes || movie; // Strapi v5 fallback

            const poster = movieData.poster;
            const posterUrl = poster?.url
              ? `http://localhost:1337${poster.url}`
              : 'https://via.placeholder.com/220x300?text=No+Poster';

            const title = movieData.title || 'Untitled';
            const year = movieData.releaseYear || 'N/A';
            const descText = movieData.description?.[0]?.children?.[0]?.text?.substring(0, 120) || 'No description';

            return (
              <div 
                key={movie.id || movie.documentId} 
                style={{ 
                  border: '1px solid #ddd', 
                  padding: '15px', 
                  width: '240px', 
                  borderRadius: '12px',
                  background: '#f9f9f9',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }}
              >
                <img 
                  src={posterUrl} 
                  alt={title} 
                  style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '8px' }}
                  onError={(e) => e.target.src = 'https://via.placeholder.com/220x300?text=Error'}
                />
                <h3 style={{ margin: '12px 0 6px', fontSize: '1.25em', textAlign: 'center' }}>{title}</h3>
                <p style={{ color: '#555', fontSize: '0.95em', textAlign: 'center' }}>Year: {year}</p>
                <p style={{ fontSize: '0.9em', color: '#666', lineHeight: '1.4', textAlign: 'left' }}>
                  {descText}...
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MovieList;