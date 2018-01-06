import React from 'react';
import ZipForm from './ZipForm.jsx';

class App extends React.Component {
  constructor() {
    super();
    console.log("HERE");
    this.updateZip = this.updateZip.bind(this);
  }

  updateZip(zipCode) {
      this.setState({
        zip: zipCode
      })
  }

  render() {
    console.log("RENDER APP");
    return (
      <div className="container">
        <h1>What's the weather?</h1>
        {/* <ZipForm updateZip =  */}
        <ZipForm updateZip = {this.updateZip} />
      </div>
    )
  }
}

export default App;
