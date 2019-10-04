import React from "react";
import "./Movie.css"

class Movie extends React.Component {
    state = { posterUrl: "" }

    componentDidMount() {
        console.log(this.props.movieInfo)
        // console.log(this.props.posterUrl)
      };

    render() {
        return (
            <div className="movie-container">
                <div className="movie-header">
                    <h3>{this.props.movieInfo.title}</h3>
                </div>
                <img 
                className="poster"
                src={this.props.posterUrl} 
                alt={`Poster of movie: ${this.props.movieInfo.title}`}
                />
                <div>
                    <button>Reserve tickets!</button>
                </div>
            </div>
        )
    }
}

export default Movie