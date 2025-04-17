import React from 'react';
import styles from '@/styles/movie.module.css';
import Image from 'next/image';

const MovieCard = ({ jawSummary }) => {
    const { title, synopsis, backgroundImage, id } = jawSummary;

    return (
        <div className={styles.card}>
            <Image
                src={backgroundImage?.url || '/fallback-image.jpg'}
                alt={title}
                className={styles.image}
                priority 
                width={500} 
                height={300}
            />
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{synopsis?.substring(0, 100)}...</p>
                <button className={styles.button}>Read More</button>
            </div>
        </div>
    );
};

export default MovieCard;
