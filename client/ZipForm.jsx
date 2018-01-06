import React from 'react';

class ZipForm extends React.Component{
  constructor() {
    super();
    this.state =
      {
          zipcode: 0
      }
      this.updateZip = this.updateZip.bind(this);
  }

  updateZip(zipCode){
      this.setState({zip:zipCode});
  }

  render() {
      console.log("RENDER ZIP");
      return (
        <div id="zip-form">
        <input placeholder='Enter your Zip Code' />
        <button>Go</button>
      </div>
    )
  }
}

export default ZipForm;