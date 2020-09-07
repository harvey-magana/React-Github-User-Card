import React from 'react';
import CardList from './components/CardList';
import './App.css';

class App extends React.Component {
  state = {
    user: []
  }

  componentDidMount() {
    fetch("https://api.github.com/users/harvey-magana")
    .then((res) =>  res.json())
    .then((json) => {
      console.log(json);
      this.setState({ user: json });
    })

    .catch((err) => console.error("fail: ", err.message));
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.id !== this.state.user.id) {
      fetch("https://api.github.com/users/harvey-magana/followers")
      .then((res) =>  res.json())
      .then((json) => {
        console.log(json);
        this.setState({ user: json });
      })
    }
  }

  handleUserChange = (e) => {}

  handleSubmit = (e) => {}

  render() {
    return (
    <div className="App">
      <h1>Harvey's Github Assignment</h1>
        <CardList users={this.state.user} />
    </div>
    )
  }
}

export default App;
