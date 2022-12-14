import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleBigcat, updateBigcat } from '../../lib/api'
import BigcatForm from './BigcatForm'

const BigcatEdit = () => {

  const navigate = useNavigate()
  const { id } = useParams()

  const [formData, setFormData] = useState({
    name: '',
    species: '',
    food: '',
    image: '',
    habitat: 2,
    owner: '',
  })

  useEffect(() => {
    const getData = async () => {
      const response = await getSingleBigcat(id)
      response.data.habitat = response.data.habitat.id
      response.data.owner = response.data.owner.id
      setFormData(response.data)
      console.log(response.data)
    }
    getData()
  },[]) 

  
  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await updateBigcat(id, formData)
      navigate(`/bigcat/${response.data.id}`)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = event => {
    setFormData({
      ...formData, 
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className="container">
      <BigcatForm 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />
    </div>
  )



}

export default BigcatEdit