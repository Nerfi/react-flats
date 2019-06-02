// adding lewagon solution

import React, { Component } from 'react';


class Flat extends Component {
    handleClick = () => {
      // ojo con selectflat
      this.props.selectFlat(this.props.index);
    }

    render(){
      return(
        <div className={`card${this.props.selected ? ' active' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')` }}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>


        );
    }
}


export default Flat;



/// all the react up will give us back
<div class="card" style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg';);">
  <div class="card-category">150 EUR</div>
  <div class="card-description">
    <h2>Super 60m2 in trendy neighborhood!</h2>
  </div>
  <a class="card-link" href="#"></a>
</div>
