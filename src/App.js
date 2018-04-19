import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      randomCell: Math.floor(Math.random() * 16)+1
    };
    this.check = this.check.bind(this);
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => {
        this.setState((prevState) => {
          document.getElementById(prevState.randomCell).style.backgroundColor = 'blue';
          return {
            randomCell : Math.floor(Math.random() * 16)+1 }
        }, function(){
          console.log(this.state);
          this.change();
        })
      },
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  change = () => {
    console.log(this.state.randomCell);
    document.getElementById(this.state.randomCell).style.backgroundColor="red";
  }

  check = (event) => {
    event.persist();
    var clicked = event.target.id;
    if(clicked == this.state.randomCell){
      console.log(clicked);
      this.setState((prevState) => {
        return { score: prevState.score + 1}
      }, function(){
        event.target.style.backgroundColor ="blue";
        console.log(this.state);
      })
    } else {
      this.setState((prevState) => {
        document.getElementById(prevState.randomCell).style.backgroundColor = 'blue';
        return {
          randomCell : Math.floor(Math.random() * 16)+1,
          score : 0 }
      }, function(){
        console.log(this.state);
        this.change();
      })
    }
  }

  render() {
    return (
      <div className="App">
        {/* <div className="container">
          <div>Home</div>
          <div>Search</div>
          <div className="logout">Logout</div>
        </div> */}
        <h1>Score = {this.state.score}</h1>
        <table>
          <tbody>
          <tr>
            <td><div className='cell' id='1' onClick={this.check}></div></td>
            <td><div className='cell ' id='2' onClick={this.check}></div></td>
            <td><div className='cell ' id='3' onClick={this.check}></div></td>
            <td><div className='cell ' id='4' onClick={this.check}></div></td>
          </tr>
          <tr>
            <td><div className='cell ' id='5' onClick={this.check}></div></td>
            <td><div className='cell ' id='6' onClick={this.check}></div></td>
            <td><div className='cell ' id='7' onClick={this.check}></div></td>
            <td><div className='cell ' id='8' onClick={this.check}></div></td>
          </tr>
          <tr>
            <td><div className='cell ' id='9' onClick={this.check}></div></td>
            <td><div className='cell ' id='10' onClick={this.check}></div></td>
            <td><div className='cell ' id='11' onClick={this.check}></div></td>
            <td><div className='cell ' id='12' onClick={this.check}></div></td>
          </tr>
          <tr>
            <td><div className='cell ' id='13' onClick={this.check}></div></td>
            <td><div className='cell ' id='14' onClick={this.check}></div></td>
            <td><div className='cell ' id='15' onClick={this.check}></div></td>
            <td><div className='cell ' id='16' onClick={this.check}></div></td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
