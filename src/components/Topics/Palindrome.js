import React, {Component} from 'react';

class Palindrome extends Component {
    constructor(props){
        super(props)

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    isPalindrome(){
        var origin = this.state.userInput.toLowerCase();
        var palin = this.state.userInput.toLowerCase().split("").reverse().join("");
        if(palin === origin){
            this.setState({
                palindrome: "True",
            });
        }else this.setState({
            palindrome: 'False',
        })
    }
    
    render(){
        return(
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input value={this.state.userInput} 
                    onChange={e => this.setState({userInput: e.target.value})} 
                    className="inputLine" 
                    onClick={() => this.setState({userInput: ''})} ></input>
                <button onClick={() => this.isPalindrome()} className="confirmationButton" >Check</button>
                <span className="resultsBox" >Palindrome: {JSON.stringify(this.state.palindrome, null, 10)}</span>
            </div>
        )
    }
}

export default Palindrome;