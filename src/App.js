import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    listItems: [],
    searchItems: [],
    searchHolder: '',

  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = (x) => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${x}`)
      .then(response => response.json())
      .then(data => this.setState({ listItems: data.hits }))
      .catch(error => console.log());
  };
  searchItems = (e) =>{
    e.preventDefault()
   //1. receive input of search
    const searchHolder = this.state.searchHolder
    console.log(searchHolder)
  //2. fetch with input of search
  this.fetchData(searchHolder);
  }  
  handleChange = (e) => {
    const searchHolder = e.target.value
    this.setState({searchHolder: searchHolder})
  }
  render() {
    //I need to create a state with an empty list
    return (
      <div>
        <form>
        <button type = 'submit' onClick={() => this.searchItems()}>search</button>
        <input onChange={this.handleChange}type = "text" value={this.state.searchHolder}></input>
        </form>
      </div>
    );
  }
}
export default App;
