import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MoviesList from "./MainPage/MoviesList";
import Header from "./Header";
import Reservation from "./ReservationPage/Reservation";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <BrowserRouter>
                    <Route path="/" exact component={MoviesList}></Route>
                    <Route path="/reservation" component={Reservation}></Route>
                </BrowserRouter>
            </div>
        );
    };  
};

export default App;