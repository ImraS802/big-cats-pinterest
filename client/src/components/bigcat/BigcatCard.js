import React from 'react'
import { Link } from 'react-router-dom'

const BigcatCard = ({ id, image, name, species, food }) => {
  return (
    <div id={id} className="column-card">
      <Link to={`/bigcat/${id}`}>
        <div className="card-container">
          <div className="card-header">
            <h3 className="card-header-title">{name}</h3>
          </div>
          <div className="card-image">
            <figure className="image">
              <img src={image} alt={name} loading="lazy" width="255" height="255" />
            </figure>
            <div className="card-content">
              <h5 className="species-title"><strong>{species}</strong></h5>
              <h6 className="food-title">{food}</h6>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BigcatCard