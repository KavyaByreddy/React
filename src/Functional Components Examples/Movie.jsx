let Movie = () => {
    let movieName = "Mirchi"
    let movieImage = 'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/old_images/MOVIE/6891/1000056891/1000056891-h'
    return <div>
        <h1>Movie Component</h1>
        <hr />
        <h3>Movie Name:{movieName}</h3>
        <img src={movieImage} alt="" />
    </div>
}

export default Movie;