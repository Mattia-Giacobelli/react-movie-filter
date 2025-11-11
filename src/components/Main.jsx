import { useState, useEffect } from "react"


export default function Main() {

    const films = [
        { title: 'Inception', genre: 'Fantascienza' },
        { title: 'Il Padrino', genre: 'Thriller' },
        { title: 'Titanic', genre: 'Romantico' },
        { title: 'Batman', genre: 'Azione' },
        { title: 'Interstellar', genre: 'Fantascienza' },
        { title: 'Pulp Fiction', genre: 'Thriller' },
    ]

    const [genre, setGenre] = useState('Select a genre')



    return (

        <main>
            <div className="container d-flex justify-content-center">
                <div className="col-6">
                    <div className="card">
                        <form className="d-flex justify-content-between align-items-center p-3">
                            <select value={genre} onChange={e => setGenre(e.target.value)}
                                class="form-select w-25" aria-label="Default select example">
                                <option value="Fantascienza">Fantascienza</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Romantico">Romantico</option>
                                <option value="Azione">Azione</option>
                            </select>
                            <div class="input-group w-50">
                                <input type="text" class="form-control"
                                    placeholder="Search by Name" aria-label="Recipient’s username"
                                    aria-describedby="basic-addon2" />
                                <span class="input-group-text" id="basic-addon2">
                                    <i class="bi bi-search"></i>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </main>

    )
}