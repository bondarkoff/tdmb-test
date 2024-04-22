'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

import styles from './page.module.scss';

export default function Home() {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        getTrendingMovieData('movie');
    }, []);

    async function getTrendingMovieData(type) {
        try {
            const apiKey = '6dff64a731c5a6cee2b8a3eba1b1ab5d';
            let resp = await axios.get(
                `https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}&media_type=movie`,
            );
            console.log(21, resp.data.results);
            setMovieData(resp.data.results);
        } catch (error) {
            alert('Error');
            console.error(error);
        }
    }

    return (
        <>
            <header className='header'>
                <h1 className='title'>BruhMDB</h1>
            </header>
            {/* <div className=''>
                {movieData.map(item => (
                    <div key={item.id} className=''>
                        <Image
                            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                            alt={item.original_title ? item.original_title : item.original_name}
                            width={350}
                            height={500}
                        />
                        <div className=''>
                            {item.original_title ? item.original_title : item.original_name}
                        </div>
                    </div>
                ))}
            </div> */}
        </>
    );
}
