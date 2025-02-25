const Main = () => {
    // array di film
    const filmsArray = [
        { title: 'Inception', genre: 'Fantascienza' },
        { title: 'Il Padrino', genre: 'Thriller' },
        { title: 'Titanic', genre: 'Romantico' },
        { title: 'Batman', genre: 'Azione' },
        { title: 'Interstellar', genre: 'Fantascienza' },
        { title: 'Pulp Fiction', genre: 'Thriller' },
    ];

    return (
        <main>
            <div className="margin-60">
                <div className="genre-selector">
                    <h2>Seleziona il genere:</h2>
                    <select name="genre-list" id="films">
                        {
                            filmsArray.map((film) => (
                                <option value={film.genre}>{film.genre}</option>
                            ))
                        }
                    </select>
                </div>

                <ul>
                    {
                        filmsArray.map((film, id) => (
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