import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
const path = require('path');
//const express = require('express');
// const appl = express();

class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={};
    };


    render() {

        return (
                <div>
                    <aside>
                        <Link to={`/`}>Dashboard</Link>
                        <br/>
                        <Link to={`/about`}>About</Link>
                    </aside>

                    <main>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/about" component={About} />
                    </main>


                </div>
                
        )
    }
}

const Dashboard = () => (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
  
  const About = () => (
    <div>
      <h2>About</h2>
    </div>
  )



export default App;

ReactDOM.render(<Router><App /></Router>, document.getElementById("app"))