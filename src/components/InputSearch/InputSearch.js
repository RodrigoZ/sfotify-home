import React, {Component} from 'react';
import Request from 'superagent';

class InputSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  handleChange(event) {
    const query = event.target.value
    this.setState({query})
    this.submitSearch(query)
  }

  submitSearch(keyword) {
    const url = `https://api.spotify.com/v1/search?type=artist&q=${keyword}`;
    Request.get(url).then((response) => {
      //Pass the parameters to another component to render the images?
      console.log(response.body.artists.items[0].name);
        });
  }

  render() {
    return (
      <div>
        <input type="text" ref="val" onChange={this.handleChange.bind(this)} id="inputSearch" placeholder="Search the name of your favorite artist"/>
      </div>

    )
  }
}

export default InputSearch;
