import React from 'react';

const Card = (props) => {

  const{id,
    name,
    preview,
    photos,
    description,
    size,
    isAccessory,
    brand,
    price} = props;

    return ( 
    
          <div className="card m-2 card-width" key={id}>
            <img src={preview} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <a href="{}" className="btn btn-primary">{price}</a>
            </div>
          </div>
     
        
     );
}
 
export default Card;