import React, {Component} from 'react';
import Request from 'superagent';
import FavSong from '../FavoriteSongsContainer/FavoriteSongsContainer';

class InputSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      songs: []
    }
  }

  handleChange(event) {
    const query = event.target.value
    this.setState({query: query})
    this.submitSearch(query)
  }

  submitSearch(keyword) {
    const url = `https://api.spotify.com/v1/search?type=artist&q=${keyword}`;
    Request.get(url).then((response) => {
      //Pass the parameters to another component to render the images?
      console.log("El del submit: " + response.body.artists.items[0].name);
      console.log(response.body.artists.items[0]);

      var arr = [];

      for (var i in response.body.artists.items) {
        arr.push(response.body.artists.items[i].name);
      }

      console.log("El array: " + arr);

      this.setState({songs: arr});

      console.log("El songs: " + this.state.songs);
    });
  }

  render() {
    return (
      <div>
        <input type="text" ref="val" onChange={this.handleChange.bind(this)} id="inputSearch" placeholder="Search the name of your favorite artist"/> {this.state.query}
        {/* {this.state.query} */}
        {this.state.songs}
      </div>

    )
  }
}

export default InputSearch;
