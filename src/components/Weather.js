import React from "react";

class Weather extends React.Component {
  render() {
    return(
      <div>
        { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.huminity && <p>Huminity:{this.props.huminity}</p>}
        {this.props.description && <p>Description:{this.props.description}</p>}
        { this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
};

export default Weather;