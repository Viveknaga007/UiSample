import React from 'react';



function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  function A() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }

  export default A;  