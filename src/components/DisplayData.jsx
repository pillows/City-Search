import React from "react";

class DisplayData extends React.Component{

    render(){

        console.log(this.props.data["EstimatedPopulation"]);
        let required =[
            "State",
            "Location",
            "EstimatedPopulation",
            "TotalWages"
        ];
        
        console.log(this.props.data.Lat);
        
        return(
            <div>
                {required.map((element) => 
                    <h1>{this.props.data[element]}</h1>
                )}
            </div>
        );
    }
}

export default DisplayData;