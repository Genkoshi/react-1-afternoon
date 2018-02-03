import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor(props){
        super(props);

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }

    }

    filterNums(){
        var nums = this.state.userInput.split(",").map(val => Number(val));
        
        this.setState({
            evenArray: nums.filter(val => val%2 == 0),
            oddArray: nums.filter(val => val%2 !==0),
            userInput: ''
        })

    }

    render(){
        return(
            <div className="puzzleBox evenAndOddPB" >
                <h4>Evens And Odds</h4>
                <input className="inputLine" onChange={(e) => this.setState({userInput: e.target.value})} ></input>
                <button className="confirmationButton" onClick={(e) => this.filterNums() } >Filter for me!!!</button>
                <span className="resultsBox" >Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox" >Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd;