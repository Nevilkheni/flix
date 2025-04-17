// pages/movie.js

'use client';

import React, { useEffect, useState } from 'react';
import MovieCard from '@/Header/moviecard';

const MoviePage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [error, setError] = useState(null);

    const fetchMovies = async () => {
        try {
            // Check if data is cached
            const cachedData = localStorage.getItem('movies');
            if (cachedData) {
                setEpisodes(JSON.parse(cachedData)); // Use cached data
                return;
            }

            const res = await fetch('/api/movies');
            const json = await res.json();
            const items = json[0]?.episodes || [];
            setEpisodes(items);

            // Cache the data for future use
            localStorage.setItem('movies', JSON.stringify(items));
        } catch (err) {
            console.error('Error fetching movies:', err);
            setError('Failed to load movies.');
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []); // Fetch movies once when the component mounts

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Netflix Episodes</h1>
            {error && <p>{error}</p>}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                {episodes.map((episode) => (
                    <MovieCard key={episode.episodeId} jawSummary={episode.jawSummary} />
                ))}
            </div>
        </div>
    );
};

export default MoviePage;
