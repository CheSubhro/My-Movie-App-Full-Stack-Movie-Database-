import { useState } from 'react';
import API from '../api';
import axios from 'axios';

const MovieForm = ({ onMovieAdded }) => {

    const [form, setForm] = useState({
            title: '',
            description: '',
            releaseYear: '',
        });
    const [poster, setPoster] = useState(null);
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            let posterId = null;
    
            if (poster) {
                const imageFormData = new FormData();
                imageFormData.append('files', poster);
                const uploadRes = await axios.post('http://localhost:1337/api/upload', imageFormData);
                posterId = uploadRes.data[0].id; 
            }
    
            const moviePayload = {
                data: {
                    title: form.title,
                    description: form.description,
                    releaseYear: Number(form.releaseYear),
                    publishedAt: new Date(),
                    // poster: posterId 
                }
            };
    
            await axios.post('http://localhost:1337/api/movies', moviePayload);
    
            alert('Success! Movie Added.');
            onMovieAdded();
        } catch (err) {
            alert('Error: ' + err.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Movie Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
            />
            <textarea
                placeholder="Description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
            <input
                type="number"
                placeholder="Release Year"
                value={form.releaseYear}
                onChange={(e) => setForm({ ...form, releaseYear: e.target.value })}
            />
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setPoster(e.target.files[0])}
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Adding...' : 'Add Movie'}
            </button>
        </form>
    )
}

export default MovieForm