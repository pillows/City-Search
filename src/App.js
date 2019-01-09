import React, { Component } from 'react';
import './App.css';
import ZipCode from './components/ZipCode';
import City from './components/City';

class App extends Component {
  
	constructor() {
		super();

		this.state = {
			term: '',
			searchFor: ''
		}

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.setState({
			term: event.target.value
		});
	}

	handleClick(event) {
		this.setState({
			searchFor: event.target.id
		});
	}

	render() {
	return(
		<div>
			<div>
                <button id="zip" onClick={this.handleClick}>Zipcode</button>
                <button id="city" onClick={this.handleClick}>City</button>
            </div>
            <div>
            	{this.state.searchFor === "zip" ?
	                <label type= "number"> Enter search term:
	                <input type="number" defaultValue={this.state.term} onChange={this.handleChange} placeholder="Enter a zip code"/>
	                </label>
	            :
	            	<label type= "text"> Enter search term:
	                <input type="text" defaultValue={this.state.term} onChange={this.handleChange} placeholder="Enter a city"/>
	                </label>
            	}
            </div>

            {this.state.searchFor === "zip"? <ZipCode term={this.state.term}/> : <City term={this.state.term}/>}
		</div>
	);
	}
}
export default App;