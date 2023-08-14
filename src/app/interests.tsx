'use client'

import { useEffect, useState } from "react";

const STATS_URL = 'https://api.chess.com/pub/player/magnanimus1994/stats';

// TODO Chess
const getRatings = async () => {
    const response = await fetch(STATS_URL);
    const data = await response.json();
    console.log( { data } );
    return [data?.chess_bullet?.last?.rating, data?.chess_blitz?.last?.rating];
}

const Chess = (): JSX.Element => {
    const [ratings, setRatings] = useState({bullet_rating: 0, blitz_rating: 0});
    useEffect(() => {
        const fetchData = async () => {
            const [bullet_rating, blitz_rating] = await getRatings();
            setRatings({ bullet_rating, blitz_rating });
            console.log( { bullet_rating, blitz_rating } );
        };

        fetchData();
    }, []);

    return (
    <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">Chess</h2> 
        <div className="flex space-x-4">
            <div key="rapid" className="border p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Bullet Rating</h3>
                <p className="text-gray-600">{ratings.bullet_rating}</p>
            </div>
            <div key="blitz" className="border p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Blitz Rating</h3>
                <p className="text-gray-600">{ratings.blitz_rating}</p>
            </div> 
        </div>

    </div>
)};

// TODO Guitar

interface Film {
    title: string;
    year: number;
    director: string;
    imgUrl?: string;
    link?: string;
}

const favoriteFilms: Film[] = [
    {
        title: 'Persona',
        year: 1966,
        director: 'Ingmar Bergman',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/0/08/Persona_Poster.jpg',
        link: 'https://www.imdb.com/title/tt0060827/'
    },
    {
        title: 'A Bout de Souffle',
        year: 1960,
        director: 'Jean-Luc Godard',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3f/À_bout_de_souffle_%28movie_poster%29.jpg',
        link: 'https://www.imdb.com/title/tt0053472/'
    },
    {
        title: 'Cinema Paradiso',
        year: 1988,
        director: 'Giuseppe Tornatore',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/8/86/CinemaParadiso.jpg',
        link: 'https://www.imdb.com/title/tt0095765/'
    },
    {
        title: 'Black Orpheus',
        year: 1959,
        director: 'Marcel Camus',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0b/BlackOrpheusposter.jpg',
        link: 'https://www.imdb.com/title/tt0053146/'
    },
    {
        title: 'Fargo',
        year: 1996,
        director: 'Ethan & Joel Coen',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/3/33/Fargo_%281996_movie_poster%29.jpg',
        link: 'https://www.imdb.com/title/tt0116282/'
    },
    {
        title: 'The Royal Tenenbaums',
        year: 2001,
        director: 'Wes Anderson',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3b/The_Tenenbaums.jpg',
        link: 'https://www.imdb.com/title/tt0265666/'
    },
    {
        title: 'The Graduate',
        year: 1967,
        director: 'Mike Nichols',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Graduateposter67.jpg',
        link: 'https://www.imdb.com/title/tt0061722/'
    },
    {
        title: 'The Red Shoes',
        year: 1948,
        director: 'Michael Powell & Emeric Pressburger',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b4/The_Red_Shoes_%281948_movie_poster%29.jpg',
        link: 'https://www.imdb.com/title/tt0040725/'
    },
    {
        title: 'Amores Perros',
        year: 2000,
        director: 'Alejandro González Iñárritu',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Amores_Perros_poster.jpg',
        link: 'https://www.imdb.com/title/tt0245712/'
    },
    {
        title: 'The Juniper Tree',
        year: 1990,
        director: 'Nietzchka Keene',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d7/The_Juniper_Tree.jpg',
        link: 'https://www.imdb.com/title/tt0099902/'
    },
    {
        title: 'The Discreet Charm of the Bourgeoisie',
        year: 1972,
        director: 'Luis Buñuel',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Discreet-charm-poster.jpg',
        link: 'https://www.imdb.com/title/tt0068361/'
    },
    {
        title: 'Fanny and Alexander',
        year: 1982,
        director: 'Ingmar Bergman',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/5/56/Fanny%26Alexander.jpg',
        link: 'https://www.imdb.com/title/tt0083922/'
    },
    {
        title: 'A Serious Man',
        year: 2009,
        director: 'Ethan & Joel Coen',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/7/75/A_Serious_Man_%282009%29.png',
        link: 'https://www.imdb.com/title/tt1019452/'
    },
    {
        title: 'The Last Days of Disco',
        year: 1998,
        director: 'Whit Stillman',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/5/53/Lastdaysdiscoposter.jpg',
        link: 'https://www.imdb.com/title/tt0120728/'
    },
    { 
        title: '2001: A Space Odyssey',
        year: 1968,
        director: 'Stanley Kubrick',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/1/11/2001_A_Space_Odyssey_%281968%29.png',
        link: 'https://www.imdb.com/title/tt0062622/'
    },
    {
        title: 'The Fly',
        year: 1986,
        director: 'David Cronenberg',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Fly_poster.jpg',
        link: 'https://www.imdb.com/title/tt0091064/'
    },
    {
        title: 'La Strada',
        year: 1954,
        director: 'Federico Fellini',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/La_Strada.jpg',
        link: 'https://www.imdb.com/title/tt0047528/'
    }
];

const FavoriteMovies: React.FC = () => {
    return (
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Favorite Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {favoriteFilms.map((movie, index) => (
            <div key={index} className="border p-4 rounded-lg shadow">
                <a
                  href={movie.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                    <h3 className="text-lg font-semibold">{movie.title} ({movie.year})</h3>
                </a>
              <p className="text-gray-600 mb-2">{movie.director}</p>
              {movie.imgUrl && (
                <div className="flex flex-col  max-w-[220px]">
                    <img src={movie.imgUrl} alt={`${movie.title} Poster`} className="mb-2 max-h-[300px]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
};

interface Book {
    title: string;
    author: string;
}

const favoriteBooks: Book[] = [
    {
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky'
    },
    {
        title: 'For Whom the Bell Tolls',
        author: 'Ernest Hemingway'
    },
    {
        title: 'Sometimes a Great Notion',
        author: 'Ken Kesey'
    },
    {
        title: 'I, Claudius',
        author: 'Robert Graves'
    },
    {
        title: 'Bonfire of the Vanities',
        author: 'Tom Wolfe'
    },
    {
        title: 'The Joke',
        author: 'Milan Kundera'
    },
    {
        title: 'The Amazing Adventures of Kavalier and Clay',
        author: 'Michael Chabon'
    },
    {
        title: 'The Good Earth',
        author: 'Pearl S. Buck'
    },
    {
        title: 'Barabbas',
        author: 'Pär Lagerkvist'
    },
    {
        title: 'Lady Chatterley\'s Lover',
        author: 'D.H. Lawrence'
    },
    {
        title: 'Lolita',
        author: 'Vladimir Nabokov'
    },
    {
        title: 'Brave New World',
        author: 'Aldous Huxley'
    }
];

const FavoriteBooks: React.FC = () => {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Favorite Books</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favoriteBooks.map((book, index) => (
            <div key={index} className="border p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-600">By {book.author}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

// Exercise


const Interests = () => (
    <div>
        <Chess />
        <FavoriteMovies />
        <FavoriteBooks />
    </div>
);

export default Interests;