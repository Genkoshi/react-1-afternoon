import React, {Component} from 'react';

class FilterString extends Component {
    constructor(props){
        super(props)

        this.state = {
            unfilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }
    }
    filterMyString(){
        this.setState({
            filteredArray: this.state.unfilteredArray.filter(val => val.includes(this.state.userInput)),
            userInput: ''
        })
    }

    render(){
        return(
        <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span className="puzzleText">Unfiltered Array: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
            <input value={this.state.userInput} className="inputLine" onChange={e => this.setState({userInput: e.target.value})} ></input>
            <button className="confirmationButton" onClick={() => this.filterMyString()} > FILTER MY STING!!!!! </button>
            <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
        </div>
        )
    }
}

export default FilterString;