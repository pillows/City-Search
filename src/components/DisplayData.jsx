import React from "react";
import "../styles/DisplayData.css";

class DisplayData extends React.Component{

    render(){

        return(
            <div className="final-render-wrapper">
                <div id="list-header">{this.props.data["LocationText"]} </div>
                <ul>
                    <li className="list-layout">State: {this.props.data["State"]}</li>
                    <li className="list-layout">Location:( {this.props.data["Lat"]},{this.props.data["Long"]})</li>
                    <li className="list-layout">Population (Estimated): {this.props.data["EstimatedPopulation"]}</li>
                    <li className="list-layout">Total Wages: {this.props.data["TotalWages"]}</li>
                </ul>  
            </div>
        );
    }
}

export default DisplayData;