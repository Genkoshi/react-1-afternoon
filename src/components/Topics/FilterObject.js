import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(props){
        super(props);

        this.state = {
            unFilteredArray: [
                {name: 'Bob', age: 24, hairColor: 'Brown', title: "Boss"}, 
                {name: 'Trevor', age: 78, hairColor: 'Black', status: "Senior Citizen"}, 
                {name: 'Batman', age: '???', hairColor: '???', title: "Vigilante"}],
            userInput: '',
            filteredArray: []
        }

    }
    
    filterObject(){
        var newUI = this.state.userInput;
        this.setState({
            filteredArray: this.state.unFilteredArray.filter(val => val[newUI]),
            userInput: ''
        })

    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input value={this.state.userInput} className="inputLine" onChange={(e) => this.setState({userInput: e.target.value})} ></input>
                <button className="confirmationButton" onClick={() => this.filterObject()} >FILTER FOR ME!!!!</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)} </span>
            </div>
        )
    }
}

export default FilterObject;