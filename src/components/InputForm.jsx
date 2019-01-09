import React from "react";

class InputForm extends React.Component{

    constructor(props){
        super(props);

        this.state={
            formValue : this.props.searchTerm,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){

        this.setState({
            formValue : event.target.value,
        });
    }
    
    render(){
        return (
            <div className = "form-layout">
                <label type= "text"> Enter search term:
                <input type="text" defaultValue={this.state.searchTerm} onChange={this.handleChange}/>
                </label>
            </div>
        );
    }
}

export default InputForm;