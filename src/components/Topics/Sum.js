import React, {Component} from 'react';

class Sum extends Component {
    constructor(props){
        super(props)

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    addTogether(){
        this.setState({
            sum: this.state.number1 + this.state.number2
        })
    }

    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input onChange={e => this.setState({number1: Number(e.target.value)})} className="inputLine" type="number"></input>
                <input onChange={e => this.setState({number2: Number(e.target.value)})} className="inputLine" type="number"></input>
                <button onClick={() => this.addTogether()} className="confirmationButton"> Add </button>
                <span className="resultsBox">Result: {this.state.sum}</span>
          </div>    
          )
    }
}

export default Sum;