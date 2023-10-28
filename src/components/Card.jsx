import React from "react";

const Card = ({item}) => {
  return (
    <div className="cards">
      <div className="image_box">
        <img src={item.img}/>
      </div>
    </div>
  );
};

export default Card;
