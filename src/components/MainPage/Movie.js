import React from "react";
import "./Movie.css"
import { Link } from "react-router-dom";

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
                    <button>
                        <Link 
                        to={`/reservation/${this.props.movieInfo.id}/${this.props.movieInfo.original_title}`}>
                            Reserve Tickets
                        </Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default Movie