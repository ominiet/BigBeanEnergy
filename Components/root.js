import React from "react";
import {Component} from "react"
import ReactDOM from "react-dom";


class Root extends Component{
  render(){
        return (
          <div class="container text-center">
            <h1>Big Bean Energy</h1>
            <div class="justify-content-center">
              <img src="/assets/Jose.jpeg"
                alt="big bean" width="100%" />
            </div>
          </div>
        )
    }
}


ReactDOM.render(<Root />, document.getElementById('root'));
