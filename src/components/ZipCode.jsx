import React from "react";
import axios from "axios";
import DisplayData from "../components/DisplayData"

class GetCity extends React.Component{

    constructor(props){
        super(props);

        this.state={
            dataVal: []
        }

        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(){

        const finalURL = `http://ctp-zip-api.herokuapp.com/zip/${this.props.term}`;

        axios.get(finalURL)

            .then(response =>{
                this.setState({dataVal: response.data});
                
            })

            .catch(err => console.log(err));
    }


    render(){
        console.log(this.state.dataVal);

        return(
            <div>
            <button type="submit" onClick={this.fetchData}>Submit</button>
            
            {this.state.dataVal.map((element) =>
                (<DisplayData data= {element}/>)
            )}
            </div>
        );
    }
}

export default GetCity; 