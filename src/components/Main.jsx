import { useState, useEffect } from "react"
import AddFilmForm from "./AddFilmForm"
import FilterForm from "./FilterForm"


export default function Main() {

    const films = [
        { id: 1, title: 'Inception', genre: 'fantascienza' },
        { id: 2, title: 'Il Padrino', genre: 'thriller' },
        { id: 3, title: 'Titanic', genre: 'romantico' },
        { id: 4, title: 'Batman', genre: 'azione' },
        { id: 5, title: 'Interstellar', genre: 'fantascienza' },
        { id: 6, title: 'Pulp Fiction', genre: 'thriller' },
    ]


    const [genre, setGenre] = useState('')
    const [filmList, setFilmList] = useState(films)
    const [filteredFilm, setFilteredFilm] = useState(filmList)
    const [searchItem, setSearchItem] = useState('')
    const [addTitle, setAddTitle] = useState('')
    const [addGenre, setAddGenre] = useState('')


    useEffect(() => {

        console.log(genre);
        if (genre.length > 0 && searchItem.length > 0) {
            const filter = filmList.filter(film => film.genre === genre)
            const foundItems = filter.filter(film => film.title.toLowerCase().includes(searchItem))
            setFilteredFilm(foundItems)
        } else if (genre.length > 0) {
            const filter = filmList.filter(film => film.genre === genre)
            setFilteredFilm(filter)
        } else if (searchItem.length > 0) {
            const foundItems = filteredFilm.filter(film => film.title.toLowerCase().includes(searchItem))
            setFilteredFilm(foundItems)
        } else {
            setFilteredFilm(filmList)
        }
    }, [genre, searchItem, filmList])




    function handleSubmit(e) {

        console.log(addTitle);
        console.log(addGenre);


        e.preventDefault()
        const newFilm = {
            id: Date.now(),
            title: addTitle,
            genre: addGenre
        }
        getGenres()
        setFilmList([...filmList, newFilm])
    }

    function getGenres() {
        const newGenres = []
        filmList.forEach((film) => {
            if (!newGenres.includes(film.genre.toLowerCase())) {

                newGenres.push(film.genre)

            }
        })
        return newGenres
    }

    let genreList = getGenres()

    return (

        <main>
            <div className="container d-flex justify-content-center">
                <div className="col-6">
                    <div className="card">

                        <AddFilmForm handleSubmit={handleSubmit}
                            setAddTitle={setAddTitle} addTitle={addTitle}
                            setAddGenre={setAddGenre} addGenre={addGenre}
                        />

                        <FilterForm genre={genre} setGenre={setGenre}
                            genreList={genreList} searchItem={searchItem}
                            setSearchItem={setSearchItem}
                        />

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