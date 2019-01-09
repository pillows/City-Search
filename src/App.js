import React, { Component } from 'react';
import './App.css';
import ZipCode from './components/ZipCode';
import City from './components/City';

class App extends Component {
  
	constructor() {
		super();

		this.state = {
			searchFor: ""
		}

		this.handleClick = this.handleClick.bind(this);
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
	                <input type="number" defaultValue={this.state.formValue} onChange={this.handleChange} placeholder="Enter a zip code"/>
	                </label>
	            :
	            	<label type= "text"> Enter search term:
	                <input type="text" defaultValue={this.state.formValue} onChange={this.handleChange} placeholder="Enter a city"/>
	                </label>
            	}
                <input type="submit" value="submit" onSubmit={this.handleChange}></input>
            </div>

            {this.state.searchFor === "zip"? <ZipCode/> : <City/>}
		</div>
	);
	}
}

export default App;