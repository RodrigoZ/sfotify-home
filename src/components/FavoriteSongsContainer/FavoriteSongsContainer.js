import React, { Component } from 'react';

class FavoriteSongsContainer extends Component {

  handleChange(event) {
    alert("click!");
  }

  render() {
// let names = this.props.names
console.log("El props!"+this.props.names);
    return (
      <div>
        {/* <ul>
          {this.props.names.map(function(listValue,i){
            return <li key={i}>{listValue}</li>;
          })}
        </ul> */}
        <ul>
          <li onClick={this.handleChange.bind(this)}>{this.props.names} </li>
        </ul>
      </div>
    );
  }
}

export default FavoriteSongsContainer;
