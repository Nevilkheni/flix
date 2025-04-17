// app/movie/page.js
import React from 'react';
import MovieCard from '@/Header/moviecard';
import styles from '@/styles/movie.module.css';

const MoviePage = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));

    const url = process.env.NEXT_PUBLIC_RAPID_URL;

    if (!url) throw new Error("Environment URL missing");

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': process.env.RAPID_API_KEY,
            'x-rapidapi-host': 'netflix54.p.rapidapi.com',
        },
    };

    let main_data = [];

    try {
        const res = await fetch(url, {
            ...options,
            next: { revalidate: 60 },
        });

        const data = await res.json();
        console.log(" Movie data:", data);

        main_data = data.titles || [];
    } catch (error) {
        console.error(" Failed to fetch movie data:", error);
    }

    return (
        <main className={styles.movieSection}>
            <div className={styles.container}>
                <h1> Series & Movies</h1>
                {main_data.length > 0 ? (
                    main_data.map((curElem) => (
                        <MovieCard
                            key={curElem.jawSummary.id}
                            jawSummary={curElem.jawSummary}
                        />
                    ))
                ) : (
                    <>
                        <p>No content available at the moment.</p>
                        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', background: '#f5f5f5', padding: '1rem', marginTop: '1rem' }}>
                                          Raw API Data:
                            {JSON.stringify(main_data, null, 2)}
            </pre>
                    </>
                )}
            </div>
        </main>
    );
};

export default MoviePage;
