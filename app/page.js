'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

import styles from './page.module.scss';

export default function Home() {
    const apiKey = '6dff64a731c5a6cee2b8a3eba1b1ab5d';
    const [movieData, setMovieData] = useState([]);
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {
        getTrendingMovieData('movie');
        getTopRatedMovieData('movie');
    }, []);

    async function getTrendingMovieData(type) {
        try {
            let resp = await axios.get(
                `https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}&media_type=movie`,
            );
            console.log(resp.data.results);
            setMovieData(resp.data.results);
        } catch (error) {
            alert('Error');
            console.error(error);
        }
    }

    async function getTopRatedMovieData() {
        try {
            let firstResp = await axios.get(
                `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&page=1`,
            );
            let secondResp = await axios.get(
                `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&page=2`,
            );
            let allResults = [...firstResp.data.results, ...secondResp.data.results];

            console.log(allResults);
            setTopRated(allResults);
        } catch (error) {
            alert('Error');
            console.log(error);
        }
    }

    return (
        <>
            <header className={styles.header}>
                <div className='bg'></div>
                <div className='container'>
                    <div className={styles.header__wrapper}>
                        <h1>
                            <a href='#'>BruhMDB</a>
                        </h1>
                        <div style={{ display: 'flex' }}>
                            <button className={styles.header__btn}>
                                <Image
                                    src='/search-icon.svg'
                                    width={24}
                                    height={24}
                                    alt='search-icon'
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className='container'>
                    <div className='wrapper'>
                        <h2>What are we looking for?</h2>
                        <input type='text' placeholder='Enter some movie title' />
                    </div>
                    {/* <div className=''>
                        {movieData.map(item => (
                            <div key={item.id} className=''>
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                    alt={
                                        item.original_title
                                            ? item.original_title
                                            : item.original_name
                                    }
                                    width={350}
                                    height={500}
                                />
                                <div className=''>
                                    {item.original_title ? item.original_title : item.original_name}
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>

                <div className='top-rated'>
                    {topRated
                        .map(item => (
                            <div key={item.id} className='top-rated-item'>
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                    alt={
                                        item.original_title
                                            ? item.original_title
                                            : item.original_name
                                    }
                                    width={350}
                                    height={500}
                                />
                            </div>
                        ))
                        .slice(0, 21)}
                    <div className='bgsec'></div>
                </div>
            </main>
        </>
    );
}
