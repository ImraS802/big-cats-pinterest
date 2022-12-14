import { useState } from 'react'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()


  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  
  const handleChange = event => {
    const formdata = {
      ...formData,
      [event.target.name]: event.target.value,
    }
    setFormData(formdata)
  }
  
  const handleSubmit = async event => {
    event.preventDefault()
    const response = await loginUser(formData)
    console.log(response)
    setToken(response.data.token)
    navigate('/bigcat')
  }
  
  return (
    <section className="login-form-background">
      <div className="container">
        <div className="columns">
          <form onSubmit={handleSubmit} className="login-form">
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="login-button">Login</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )

}

export default Login