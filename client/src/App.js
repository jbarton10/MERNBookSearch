import React from 'react';
import axios from "axios";

import './App.css';

class App extends React.Component {

  callDB = () => {
    axios.get("http://localhost:3001/books").then(function(res){
      console.log(res.data);
    })
  }

  componentDidMount(){
    this.callDB();
  }
  render(){
    return<div></div>
  }
} 

export default App;