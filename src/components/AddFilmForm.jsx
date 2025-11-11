export default function AddFilmForm({ handleSubmit, setAddTitle, addTitle, setAddGenre, addGenre }) {


    return (
        <>
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
        </>
    )
}