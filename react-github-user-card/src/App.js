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
        <h1>Harvey's Github Assignment</h1>
        <div>{console.log(typeof this.state.user)}</div>
      </div>
    );
  }
}

export default App;
