export default function FilterForm({ genre, setGenre, genreList, searchItem, setSearchItem }) {


    return (
        <>
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
        </>
    )
}