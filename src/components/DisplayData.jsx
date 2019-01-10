import React from "react";
import "../styles/DisplayData.css";

class DisplayData extends React.Component{

    render(){

        return(
            <div className="final-render-wrapper">
                <div id="list-header">{this.props.data["LocationText"]} </div>
            
                <div className="list-layout" id = "first-row">State: {this.props.data["State"]}</div>
                <div className="list-layout">Location:( {this.props.data["Lat"]},{this.props.data["Long"]})</div>
                <div className="list-layout">Population (Estimated): {this.props.data["EstimatedPopulation"]}</div>
                <div className="list-layout">Total Wages: {this.props.data["TotalWages"]}</div>
                
            </div>
        );
    }
}

export default DisplayData;