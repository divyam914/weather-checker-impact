import React from 'react';
import ZipForm from './ZipForm.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      zip = 00000
    }

    this.updateZip = this.updateZip.bind(this);
  }

  updateZip(zipcode) {
    this.setState({
      zip: zipcode;
    })

  }
  render() {
    return (
      <div className="container">
        <h1>What's the weather?</h1>
        <ZipForm/>
      </div>
    )
  }
}

export default App;
