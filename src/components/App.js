import React from "react";
import themoviedb from "../api/themoviedb";
import MoviesList from "./MoviesList";
import Header from "./Header";

class App extends React.Component {
    state = { movies: [] }

    componentDidMount() {
        themoviedb
          .get()
          .then(resp => {
            this.setState({ movies: resp.data.results.slice(0, 10) });
            //console.log(resp.data.results);
            //console.log(resp.data.results.slice(0, 10))
          })
          .catch(err => console.log(err))
      };


    render() {
        return (
            <div>
                <Header />
                <MoviesList 
                    movies={this.state.movies}
                />
            </div>
        );
    };  
};

export default App;