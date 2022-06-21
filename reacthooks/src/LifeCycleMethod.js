import React, { Component } from 'react'

class LifeCycleMethod extends Component {

    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    componentDidMount(){
        console.log("When component render at first time")
    }
    increment(){
        this.setState({count : this.state.count+1})
    }

     decrement = ()=>{
        this.state({count : this.state.count-1})
    }
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button type='button' onClick={this.increment.bind(this)}>Increment</button>

        <button onClick={()=>{this.decrement()}}>Decrement</button>
      </>
    )
  }
}

export default  LifeCycleMethod;
