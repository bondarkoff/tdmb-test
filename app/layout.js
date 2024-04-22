import './globals.scss';

export const metadata = {
    title: 'Movie database',
    description: 'The number one movie database',
};

const API_KEY = 'api_key=6dff64a731c5a6cee2b8a3eba1b1ab5d';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

getMovies(API_URL);

function getMovies(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            showMovies(data.results);
        });
}

function showMovies(data) {
    console.log(data);
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
