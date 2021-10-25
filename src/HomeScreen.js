import React from 'react'
import Banner from './Banner';
import './HomeScreen.css';
import Nav from './Nav';
import Row from './Row';
import requests from './Request';

export default function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Nav />
            <Banner />
            <Row
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row
                title='Trending'
                fetchUrl={requests.fetchTrending}
            />
            <Row
                title='Top Rated'
                fetchUrl={requests.fetchTopRated}
            />
            <Row
                title='Action Movies'
                fetchUrl={requests.fetchActionMovies}
            />
            <Row
                title='Comedy Movies'
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row
                title='Romantic Movies'
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row
                title='Horror Movies'
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row
                title='Documentaries'
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    )
}
