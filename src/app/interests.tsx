'use client'

import { useEffect, useState } from "react";
import Loading from "./loading";

const STATS_URL = 'https://api.chess.com/pub/player/alexanderrodion/stats';

const Yale = (): JSX.Element => (
    <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Alumni Service</h2>
        <div className="flex flex-col p-4 border rounded-md shadow-md mb-4">
            <h3 className="text-lg font-semibold underline">The Yale Club of Boston</h3>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="my-2">
                    <h4 className="text-lg font-semibold pl-4">President</h4>
                    <p className="text-gray-600 pl-4">2022 - 2023</p>
                </div>
                <div className="my-2">
                    <h4 className="text-lg font-semibold pl-4">Vice President</h4>
                    <p className="text-gray-600 pl-4">2021 - 2022</p>
                </div>
                <div className="my-3">
                    <h4 className="text-lg font-semibold pl-4">Secretary</h4>
                    <p className="text-gray-600 pl-4">2019 - 2022</p>
                </div>
                <div className="my-2">
                    <h4 className="text-lg font-semibold pl-4">Head of Communications</h4>
                    <p className="text-gray-600 pl-4">2020 - 2023</p>
                </div>
                <div className="my-2">
                    <h4 className="text-lg font-semibold pl-4">Board Member</h4>
                    <p className="text-gray-600 pl-4">2019 - Present</p>
                </div>
            </div>
        </div>
    </div>
);

const getRatings = async () => {
    const response = await fetch(STATS_URL);
    const data = await response.json();
    return [data?.chess_bullet?.last?.rating, data?.chess_blitz?.last?.rating];
}

const Chess = (): JSX.Element => {
    const [ratings, setRatings] = useState({bullet_rating: 0, blitz_rating: 0});
    useEffect(() => {
        const fetchData = async () => {
            const [bullet_rating, blitz_rating] = await getRatings();
            setRatings({ bullet_rating, blitz_rating });
        };

        fetchData();
    }, []);

    return (
    <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-semibold mb-4">Chess</h2>
        <div className="flex space-x-4">
            <div key="rapid" className="border p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Bullet Rating</h3>
                {ratings.bullet_rating ? <p className="text-gray-600">{ratings.bullet_rating}</p> : <Loading size={20} />}
            </div>
            <div key="blitz" className="border p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Blitz Rating</h3>
                {ratings.blitz_rating ? <p className="text-gray-600">{ratings.blitz_rating}</p> : <Loading size={20} />}
            </div> 
        </div>
        <h3 className="mt-4">
            Play with me on chess.com: <a href="https://www.chess.com/member/alexanderrodion" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">alexanderrodion</a>
        </h3> 
    </div>
)};

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
        title: 'Night of the Hunter',
        year: 1955,
        director: 'Charles Laughton',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/The_Night_of_the_Hunter_%281955_poster%29.jpg',
        link: 'https://www.imdb.com/title/tt0048424/'
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
        title: 'Sansho the Bailiff',
        year: 1954,
        director: 'Kenji Mizoguchi',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Sansho_Dayu_poster.jpg',
        link: 'https://www.imdb.com/title/tt0047445/'
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
        title: 'The Lives of Others',
        year: 2006,
        director: 'Florian Henckel von Donnersmarck',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Leben_der_anderen.jpg',
        link: 'https://www.imdb.com/title/tt0405094/'
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
        title: 'Blow Out',
        year: 1981,
        director: 'Brian De Palma',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Blow_outENG.jpg',
        link: 'https://www.imdb.com/title/tt0082085/'
    },
    {
        title: 'Mishima: A Life in Four Chapters',
        year: 1985,
        director: 'Paul Schrader',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/a/ad/Mishima.jpg',
        link: 'https://www.imdb.com/title/tt0089603/'
    },
    {
        title: 'Fanny and Alexander',
        year: 1982,
        director: 'Ingmar Bergman',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/5/56/Fanny%26Alexander.jpg',
        link: 'https://www.imdb.com/title/tt0083922/'
    },
    {
        title: 'Anatomy of a Murder',
        year: 1959,
        director: 'Otto Preminger',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/AnatomyMurder2.jpg',
        link: 'https://www.imdb.com/title/tt0052561/'
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
        title: 'Grand Illusion',
        year: 1937,
        director: 'Jean Renoir',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/3/33/GrandeIllusion.jpg',
        link: 'https://www.imdb.com/title/tt0028950/'
    },
    {
        title: 'La Strada',
        year: 1954,
        director: 'Federico Fellini',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/La_Strada.jpg',
        link: 'https://www.imdb.com/title/tt0047528/'
    },
    {
        title: 'Y Tu Mamá También',
        year: 2001,
        director: 'Alfonso Cuarón',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/6/63/Y_tu_mamá_también_poster.png',
        link: 'https://www.imdb.com/title/tt0245574/'
    }
];

const FavoriteMovies: React.FC = () => {
    return (
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Top 25 Favorite Films</h2>
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
    },
    {
        title: 'The Master and Margarita',
        author: 'Mikhail Bulgakov'
    },
    {
        title: 'The Unbearable Lightness of Being',
        author: 'Milan Kundera'
    },
    {
        title: 'The Mezzanine',
        author: 'Nicholson Baker'
    },
    {
        title: 'East of Eden',
        author: 'John Steinbeck'
    },
    {
        title: 'Catch-22',
        author: 'Joseph Heller'
    },
    {
        title: 'Rabbit, Run',
        author: 'John Updike'
    },
    {
        title: 'American Psycho',
        author: 'Bret Easton Ellis'
    },
    {
        title: 'The Satanic Verses',
        author: 'Salman Rushdie'
    }
];

const FavoriteBooks: React.FC = () => {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Top 20 Favorite Books</h2>
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


const Interests = () => (
    <div>
        <Yale />
        <FavoriteMovies />
        <FavoriteBooks />
    </div>
);

export default Interests;