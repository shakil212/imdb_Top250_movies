import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import fetch_Movies from "../service/fetch_movies";

class App extends Component {
  state ={
    data: {}
  }

  componentDidMount = () => { this.setState({ ...this.state, data:fetch_Movies() }); }

  render() {
    const items = this.state.data.items || [];

    return (
      <div className="container">
        <table class="table">
            <thead>
              <tr>
                <th scope="col">Poster</th>
                <th scope="col">Sl</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
          <tbody>
              { items.map(
                    item=> {
                      const id = item.id;
                      const rank = item.rank;
                      const fullTitle = item.fullTitle;
                      const image = item.image;
                      const imDbRating  = item.imDbRating;
                      const like = parseInt(item.imDbRatingCount);

                      return (
                          <tr 
                              key = { id } >
                              <td>
                                  <img 
                                    style={{ height: '200px', width: '150px' }} src={image} alt={fullTitle} 
                                />
                              </td>
                              <th scope="row">{rank}</th>
                              <td>{ fullTitle }</td>
                              <td>{ imDbRating }</td>
                              <td>{ like }</td>
                              <td><i class="fa-regular fa-star"></i> </td>
                         </tr>
                            )}
                  )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
