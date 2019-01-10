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
			<div id="header-layout">Zip-City Search Tool</div>
			<div id = "button-wrapper">
                <button id="zip-code" class="button-layout" onClick={this.handleClick}>Zip Code</button>
                <button id="city-name"  class="button-layout" onClick={this.handleClick}>City</button>
				<div id="empty-space"></div>
			</div>
            <div id="form-wrapper">
            	{this.state.searchFor === "zip-code" ?
	                <input id= "zip" type="number" defaultValue={this.state.term} onChange={this.handleChange} placeholder="Enter a zip code"/>
	                
	            :
	                <input id= "city" type="text" defaultValue={this.state.term} onChange={this.handleChange} placeholder="Enter a city"/>
				}

				{this.state.searchFor === "zip-code"? <ZipCode term={this.state.term} startSearching={this.state.startSearching}/>:  <City term={this.state.term} startSearching={this.state.startSearching}/>}
            </div>
		</div>
	);
	}
}
export default App;