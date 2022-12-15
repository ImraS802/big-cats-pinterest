import React, { Component } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { deleteBigcat, getSingleBigcat } from '../../lib/api'

const BigcatShow = () => {

  const navigate = useNavigate()
  const { id } = useParams()

  const [bigcat, setBigcat] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const response = await getSingleBigcat(id)
      setBigcat(response.data)
      console.log(response.data)
    }
    getData()
  }, []) 



  const handleDelete = async () => {
    await deleteBigcat(id)
    navigate('/bigcat')
  }

  
  return (
    <section className="section-show">
      <div className="bicat-show-container">
        {
          bigcat && 
          <>
            <div className="box-show">
              <figure className="image-show">
                <img src={bigcat.image} alt={bigcat.name}  height="400"/>
              </figure>
            </div>
            <div className="show-title">
              <h4 className="title-show">
                Name
              </h4>
              <h5 className="title-show-small">{bigcat.name}</h5>
            </div>
            <div className="show-title">
              <h4 className="title-show">
                Species
              </h4>
              <h5 className="title-show-small">{bigcat.species}</h5>
            </div>
            <div className="show-title">
              <h4 className="title-show">
                Food
              </h4>
              <h5 className="title-show-small">{bigcat.food}</h5>
            </div>
            <div className="show-title">
              <h4 className="title-show">
                Added by 
              </h4>
              <div className="two-show-buttons">
                <h5 className="title-show-small">
                  {bigcat.owner.username}
                </h5>
                <br />
                <h5>
                  <Link to={`/bigcat/${bigcat.id}/edit`} className="edit-button-show">Edit</Link>
                  <br />
                  <button onClick={handleDelete} className="delete-button-show">Delete</button>
                </h5>
              </div>
            </div>
          </>
        }
      </div>
    </section>
  )
}


export default BigcatShow