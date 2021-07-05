import React from 'react';
import CardList from './components/CardList';
import './App.css';

class App extends React.Component {
  state = {
    followers: []
  }

  componentDidMount() {
    fetch("https://api.github.com/users/taniarascia/followers")
    .then((res) =>  res.json())
    .then((json) => {
      this.setState({ followers: json });
    })

    .catch((err) => console.error("fail: ", err.message));
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.id !== this.state.followers.id) {
      fetch("https://api.github.com/users/taniarascia/followers")
      .then((res) =>  res.json())
      .then((json) => {
        console.log(json)
        this.setState({ followers: json });
      })
    }
  }

  handleUserChange = (e) => {}

  handleSubmit = (e) => {}

  render() {
    return (
      
    <div className="App">
      <h1>Harvey's Github Assignment</h1>
        <div>
          {console.log(this.state.followers)}
          <CardList followers={this.state.followers} />
        </div>
    </div>
    )
  }
}

export default App;
