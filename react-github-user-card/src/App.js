import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    user: []
  }

  componentDidMount() {
    fetch("https://api.github.com/users/harvey-magana")
      .then((data) => {
        console.log(data)
        this.setState({ user: data });
      })
      .catch((err) => console.error("fail: ", err.message));
  }
  
  componentDidUpdate() {}

  handleUserChange = (e) => {}

  handleSubmit = (e) => {}

  render() {
    return (
      <div className="App">
        Start here...
      </div>
    );
  }
}

export default App;
