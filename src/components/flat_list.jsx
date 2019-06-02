import  Reac from 'react';

const FlatList = (props) => {
  return(
    <div className="flat-list">

    <div className="card">
    <images>{props.name}</images>

    </div>


  </div>
    );

};


export default FlatList;


// lewagon solution

import React from 'react';

// importamos el componente que queremos usar en
// la flat_list

import Flat from './flat';

const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
          selected={flat.name === props.selectedFlat.name}
          index={index}
          selectFlat={props.selectFlat}
        />
      );
    });
  };

  return (
    <div className="flat-list">
      {renderList()}
    </div>
  );
};

export default FlatList;
