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
    // const bigcatId = props.match.params.id
    await deleteBigcat(id)
    navigate('/bigcat')
    // await deleteBigcat(bigcatId)
    // props.history.push('/bigcat')
  }

  
  // const { bigcat } = this.state
  // if ( !bigcat ) return null
  return (
    <section className="section-show">
      <div className="container">
        {
          bigcat && 
          <>
            <div className="box-show">
              <figure className="image-show">
                <img src={bigcat.image} alt={bigcat.name} />
              </figure>
            </div>
            <div className="">
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
              <div>
                <h5 className="title-show-small">
                  {bigcat.owner.username}
                </h5>
                <br />
                <h5>
                  <Link to={`/bigcat/${bigcat.id}/edit`} className="edit-button-show"><strong>Edit</strong></Link>
                  <br />
                  <button onClick={handleDelete} className="delete-button-show"><strong>Delete</strong></button>
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