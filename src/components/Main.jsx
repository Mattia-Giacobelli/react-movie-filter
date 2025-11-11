import { use } from "react"
import { useState, useEffect } from "react"


export default function Main() {

    const films = [
        { id: 1, title: 'Inception', genre: 'Fantascienza' },
        { id: 2, title: 'Il Padrino', genre: 'Thriller' },
        { id: 3, title: 'Titanic', genre: 'Romantico' },
        { id: 4, title: 'Batman', genre: 'Azione' },
        { id: 5, title: 'Interstellar', genre: 'Fantascienza' },
        { id: 6, title: 'Pulp Fiction', genre: 'Thriller' },
    ]

    const [genre, setGenre] = useState('')
    const [filmList, setFilmList] = useState(films)
    const [filteredFilm, setFilteredFilm] = useState(filmList)
    const [searchItem, setSearchItem] = useState('')

    useEffect(() => {

        console.log(genre);
        if (genre.length > 0) {
            const filter = filmList.filter(film => film.genre === genre)
            setFilteredFilm(filter)
        } else {
            setFilteredFilm(filmList)
        }
    }, [genre])

    useEffect(() => {
        if (searchItem.length > 0) {
            const foundItems = filteredFilm.filter(film => film.title.toLowerCase().includes(searchItem))
            setFilteredFilm(foundItems)
        } else {
            setFilteredFilm(filmList)
        }
    }, [searchItem])






    return (

        <main>
            <div className="container d-flex justify-content-center">
                <div className="col-6">
                    <div className="card">
                        <form
                            className="d-flex justify-content-between align-items-center p-3">
                            <select value={genre} onChange={e => setGenre(e.target.value)}
                                className="form-select w-25" aria-label="Default select example">
                                <option value="">Select a genre</option>
                                <option value="Fantascienza">Fantascienza</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Romantico">Romantico</option>
                                <option value="Azione">Azione</option>
                            </select>
                            <div className="input-group w-50">
                                <input value={searchItem} onChange={e => setSearchItem(e.target.value)}
                                    type="search" className="form-control"
                                    placeholder="Search by Name" aria-label="Recipient’s username"
                                    aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2">
                                    <i className="bi bi-search"></i>
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <ul>
                                {filteredFilm.map(film => {

                                    return (
                                        <li key={film.id} className={film.genre}>
                                            {film.title}
                                        </li>

                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </main>

    )
}