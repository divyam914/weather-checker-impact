import React from 'react';

class ZipForm extends React.Component{
  constructor() {
    super();
    this.state =
      {
          zip: 0
      }

      this.handleClick = this.handleClick.bind(this);
  }



  handleClick(e) {
    e.preventDefault();
    this.props.updateZip(e.target.previousSibling.value);
    console.log(e.target.previousSibling.value);
  }

  render() {
      console.log("RENDER ZIP");
      return (
        <div id="zip-form">
        <input placeholder='Enter your Zip Code' />
        <button onClick= {this.handleClick}>
          Go
        </button>
      </div>
    )
  }
}

export default ZipForm;
