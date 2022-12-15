import { createBigcat } from '../../lib/api'
import BigcatForm from './BigcatForm'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const BigcatCreate = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    species: '',
    food: '',
    image: '',
    habitat: 2,
  })
  
  const handleChange = event => {
    setFormData({
      ...formData, 
      [event.target.name]: event.target.name === 'habitat' ? parseInt(event.target.value) : event.target.value,
    })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const response = await createBigcat(formData)
    navigate(`/bigcat/${response.data.id}`)
  }

  return (
    <section className="bigcatcreate-section">
      <div className="bigcatcreate-container">
        <BigcatForm 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
        />
      </div>
    </section>
  )
  
}

export default BigcatCreate