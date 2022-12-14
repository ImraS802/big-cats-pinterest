import axios from 'axios'

const baseUrl = '/api'

const withHeaders = () => {
  if (!localStorage.getItem('token')) return
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
}

//bigcats

export const getAllBigcats = () => {
  return axios.get(`${baseUrl}/bigcat/`)
}

export const getSingleBigcat = bigcatId => {
  return axios.get(`${baseUrl}/bigcat/${bigcatId}/`)
}

export const createBigcat = formData => {
  return axios.post(`${baseUrl}/bigcat/`, formData, withHeaders())
}

export const updateBigcat = (id, formData) => {
  return axios.put(`${baseUrl}/bigcat/${id}/`, formData, withHeaders())
}

export const deleteBigcat = id => {
  return axios.delete(`${baseUrl}/bigcat/${id}/`, withHeaders())
} 

//authentication

export const registerUser = formData => {
  return axios.post(`${baseUrl}/auth/register/`, formData)
}

export const loginUser = formData => {
  return axios.post(`${baseUrl}/auth/login/`, formData)
}

//profile

export const getUserProfile = () => {
  return axios.get(`${baseUrl}/auth/profile/`, withHeaders())
}
