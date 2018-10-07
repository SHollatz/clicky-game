import React from "react";

const Image = props => {
  // console.log(props);

  return (
    <div className="card">
      <div className="img-container">
        <img id={props.id} name={props.alt} alt={props.alt} src={props.image} onClick={props.onClick} />
      </div>
    </div>
  );
};

export default Image;