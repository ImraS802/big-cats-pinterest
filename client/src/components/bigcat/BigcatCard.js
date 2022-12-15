import React from 'react'
import { Link } from 'react-router-dom'

const BigcatCard = ({ id, image, name, species, food }) => {
  return (
    <div id={id} className="column-bigcatcard">
      <Link to={`/bigcat/${id}`}>
        <div className="card-container">
          <div className="card-header">
            <h3 className="card-header-title">{name}</h3>
          </div>
          <div className="card-details-container">
            <figure className="card-image">
              <img src={image} alt={name} loading="lazy" width="260" height="300" />
            </figure>
            <div className="card-content">
              <h5 className="card-species-title">{species}</h5>
              <h6 className="card-food-title">{food}</h6>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BigcatCard