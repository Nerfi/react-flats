import React { Component } from 'react';
// importing the odther folder to be able to use them here

import FlatList from './flat_list';
import GoogleMaps from './googlemap_react';


// somewhere here should go the google
// maps api
const GOOGLE_MAPS_API = '';

class  App extends Component {

  cosntructor(props) {
    super(props);

    this.state = { cliked: false}; // inintial state

    render() {
      return (
        <div>

        <div className="flat-list">
        <FlatList />
        </div>

        <div className="map-container">
        <GoogleMaps />

        </div>


        </div>

        );
    }

}

// dotn know why is not working
export default App;

//adding lewagon solution


import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats';
import FlatList from './flat_list';
import Marker from './marker';


class App extends component {

  cosntructor(props){
    super(props);

    this.state = {
      selectflat: flats[0], // fron where it comes selectflat?, maybe line 72?
      flats
    };
  }

  center(){
    return{
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    }
  };

selectFlat = (index) => {
  this.setState({selectedFlat: flats[index]});
}

render() {
  return (
   <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>



    );
}


}



export default App;
