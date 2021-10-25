import './Row.css'

import React, { useEffect, useState } from 'react'
import axios from './axios';

function Row({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const baseUrl = 'https://image.tmdb.org/t/p/original/';
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    console.log(movies)
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => {
                    return (

                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                key={movie.id}
                                className={`row_poster ${isLargeRow && "row_posterlarge"}`}
                                src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name}
                            />
                        )
                    )
                })}
            </div>

        </div>
    )
}

export default Row

