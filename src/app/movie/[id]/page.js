import React from 'react';

const MovieDetail = ({ params }) => {
    return (
        <div>
            <h1>Movie Detail Page</h1>
            <p>Movie ID: {params.id}</p>
        </div>
    );
};

export default MovieDetail;
