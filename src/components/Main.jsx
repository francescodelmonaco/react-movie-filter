import { useState, useEffect } from "react";

// array di film
const films = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
];

const Main = () => {
    // filtro per genere
    const [selected, setSelected] = useState("");
    const [filtered, setFiltered] = useState(films);

    useEffect(() => {
        setFiltered((curr) => {
            if (selected === "") {
                return films;
            } else {
                return films.filter(film => film.genre === selected)
            }
        })
    }, [selected]);

    // visualizzare lista film per genere selezionato
    const handleGenre = (e) => {
        setSelected(e.target.value);
    };

    return (
        <main>
            <div className="margin-60">
                <div className="genre-selector">
                    <h2>Seleziona il genere:</h2>
                    <select
                        name="genre-list"
                        id="films"
                        value={selected}
                        onChange={handleGenre}
                    >
                        <option value=""></option>
                        {
                            filtered.map((film) => (
                                <option value={film.genre}>{film.genre}</option>
                            ))
                        }
                    </select>
                </div>

                <ul>
                    {
                        filtered.map((film, id) => (
                            <div className="list-row">
                                <li key={id} >{film.title}</li>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </main>
    )
};

export default Main;