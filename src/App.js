import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import projects from "./projects.json";
import request from "request";

class App extends Component {
  state = {};

  go() {
	  localStorage.setItem("status", "true");
	  request.post("https://neon-work-1.glitch.me/", {json: {name: document.getElementById("name").value, desc: document.getElementById("desc").value}, headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept"}}, (e, r, b) => {
		  if (!e && r.statusCode === 200) {
			  	  alert("go");
		  }
		  else alert(e);
	  });
  }
  render() {
	  if (!localStorage.getItem("status")) return (
		  <div className="App">
			<header className="App-header">
			  <h1>Register your project!</h1>
			  <form id="get">
				Name: <input type="text" id="name"></input><br />
				Description: <input type="text" id="desc"></input>
			  </form>
				<button type="submit" onClick={this.go} form="get">Submit</button>
			</header>
		  </div>
		)
	  else {
		  localStorage.removeItem("status");
		  return (
			  <div className="App">
				<header className="App-header">
				  <h1>Register your project!</h1>
				  <h2>Registered!</h2>
				</header>
			  </div>
	  	  )
	  }
  }
}

export default App;
