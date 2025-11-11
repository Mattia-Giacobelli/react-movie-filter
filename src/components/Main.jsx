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
    const [addTitle, setAddTitle] = useState('')
    const [addGenre, setAddGenre] = useState('')


    useEffect(() => {

        console.log(genre);
        if (genre.length > 0) {
            const filter = filmList.filter(film => film.genre === genre)
            setFilteredFilm(filter)
        } else {
            setFilteredFilm(filmList)
        }

        if (searchItem.length > 0) {
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
        genreList = getGenres()
        setFilmList([...filmList, newFilm])
    }


    function getGenres() {
        const newGenres = []
        filmList.forEach((film) => {
            if (!newGenres.includes(film.genre)) {

                newGenres.push(film.genre)

            }
        })
        console.log(newGenres);
        return newGenres
    }

    let genreList = getGenres()

    return (

        <main>
            <div className="container d-flex justify-content-center">
                <div className="col-6">
                    <div className="card">

                        <form onSubmit={e => { handleSubmit(e) }}
                            className="d-flex flex-column align-items-center  bg-light">

                            <div className="mb-2 pt-3 w-75 text-center">
                                <label className="form-label">Title</label>
                                <input
                                    onChange={e => { setAddTitle(e.target.value) }}
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    id="title"
                                    placeholder='Film title here'
                                    value={addTitle}
                                />
                                <label className="form-label">Genre</label>
                                <input
                                    onChange={e => { setAddGenre(e.target.value) }}
                                    type="text"
                                    className="form-control"
                                    name="genre"
                                    id="genre"
                                    placeholder='Film genre here'
                                    value={addGenre}
                                />
                            </div>
                            <button type="submit" className="mb-3 btn btn-primary">Add</button>


                        </form>

                        <form
                            className="d-flex justify-content-between align-items-center p-3">
                            <select value={genre} onChange={e => setGenre(e.target.value)}
                                className="form-select w-25" aria-label="Default select example">
                                <option value="">Select a genre</option>
                                {genreList.map((genre, index) => {
                                    return (
                                        <option key={index} value={genre}>{genre}</option>
                                    )
                                })}
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