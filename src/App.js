import React, { Component } from 'react';
import './App.css';
import ZipCode from './components/ZipCode';
import City from './components/City';

class App extends Component {
  
	constructor() {
		super();

		this.state = {
			term: '',
			searchFor: '',
			startSearching: false
		}

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){

		var search = false;

		if((event.target.value.length === 5 && event.target.id === "zip")|| (event.target.id === "city" && event.target.value.length > 0)){
			search = true;
		}

		this.setState({
			term: event.target.value,
			startSearching: search
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
	                <input id= "zip" type="number" defaultValue={this.state.term} onChange={this.handleChange} placeholder="Enter a zip code"/>
	                </label>
	            :
	            	<label type= "text"> Enter search term:
	                <input id= "city" type="text" defaultValue={this.state.term} onChange={this.handleChange} placeholder="Enter a city"/>
	                </label>
				}

				{this.state.searchFor === "zip"? <ZipCode term={this.state.term} startSearching={this.state.startSearching}/>:  <City term={this.state.term} startSearching={this.state.startSearching}/>}
            </div>
		</div>
	);
	}
}
export default App;