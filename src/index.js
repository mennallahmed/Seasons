import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import summmerImg from "./images/summer-background.jpg"
import winterImg from "./images/winter-background.jpg"


class App extends React.Component {

  state = { lat: null, errorMessage: ''};

  componentDidMount() {
    // Get user location
    window.navigator.geolocation.getCurrentPosition(
      // Successful Callback
      (position) => this.setState({lat: position.coords.latitude}), 
      // Faliur Callback
      (error) => this.setState({errorMessage: error.message})    
    );
  }

  renderContent(){
    if(this.state.errorMessage && !this.state.lat) {
      return  <div>Error: {this.state.errorMessage} </div>
    }  
 
    if(!this.state.errorMessage && this.state.lat) {
     return  <SeasonDisplay lat={this.state.lat}/>
    }
    return <Spinner message="Please accept location request"/>
  }

  render() {
    return (
      <div>{this.renderContent()}</div>
    )
 
  }
}

export {
    summmerImg,
    winterImg
 }

ReactDOM.render(
  <App/>,
  document.querySelector("#root")
);