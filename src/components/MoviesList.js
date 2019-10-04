import React from 'react';
import Movie from './Movie';
import "./MovieList.css";

class MovieList extends React.Component {
    render () {
        return (
            <div className="movie-list">
                {this.props.movies.map(movie => (
                    <Movie 
                    movieInfo = {movie}
                    key = {movie.id}
                    posterUrl= {"https://image.tmdb.org/t/p/w342" + movie.poster_path}
                    />
                ))}
            </div>
        )
    }
}

export default MovieList