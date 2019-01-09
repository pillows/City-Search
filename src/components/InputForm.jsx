import React from "react";
import ZipCode from './components/ZipCode';
import City from './components/City';

class InputForm extends React.Component{

    constructor(props){
        super(props);

        this.state={
            formValue : this.props.searchTerm,
            searchFor: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){

        this.setState({
            formValue : event.target.value,
        });
    }

    handleClick(event) {
        this.setState({
            searchFor: event.target.id
        });
    }
    
    render(){
        return (
            <div className = "form-layout">
                <div>
                    <button id="zip" onClick={this.handleClick}>Zipcode</button>
                    <button id="city">City</button>
                </div>
                {console.log(this.state.searchFor)}
                {this.state.searchFor === "zip" ? <ZipCode /> : <City />}
                <label type= "text"> Enter search term:
                <input type="text" defaultValue={this.state.formValue} onChange={this.handleChange}/>
                <input type="submit" value="submit" onSubmit={this.handleChange}></input>
                </label>
            </div>
        );
    }
}

export default InputForm;