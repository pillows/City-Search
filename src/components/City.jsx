import React from "react";
import axios from "axios";
import "../styles/City.css";

class GetCity extends React.Component{

    constructor(props){
        super(props);
        this.state={
            dataVal: [],
        }

        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(){

        let cityName = this.props.term.toUpperCase();

        const finalURL = `http://ctp-zip-api.herokuapp.com/city/${cityName}`;

        axios.get(finalURL)

            .then(response =>{
                this.setState({dataVal: response.data});
            })

            .catch(err => {
                console.log(err);
                this.setState({dataVal: []});
            });
    }

    render(){
        
        if(this.props.startSearching){
            this.fetchData();
        }

        return(
            <div className= "zip-wrapper">         
                {this.state.dataVal.map((element) =>
                    (<div>{element}</div>)
                )}
            </div>
        );
    }
}

export default GetCity; 