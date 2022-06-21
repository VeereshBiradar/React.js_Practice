import React, { Component } from 'react'

export default class Ccomponent extends Component {

    state={
        message :"class component",
        time : new Date().toString(),
    }

    componentDidMount() {
        console.log("I am from did mount");
        this.interval = setInterval(this.showDate, 100);
    }

    componentDidUpdate(){
        console.log("I am from update")
    }

    componentWillUnmount(){
        console.log("I am from Unmount");
        clearInterval(this.interval);
    }

    showDate = () =>{
        this.setState({time :new Date().toString() })
    }
  render() {
    return (
      <div>
          {this.state.message}
          <div>{this.state.time}</div>
      </div>
    )
  }
}
