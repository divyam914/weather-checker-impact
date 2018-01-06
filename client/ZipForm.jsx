import React from 'react';

class ZipForm extends React.Component{
  constructor() {
    super();
  }

  render() {
    return (
      <div id="zip-form">
      <input placeholder='Enter your Zip Code' />
      <button>Go</button>
      </div>
    )
  }
}
