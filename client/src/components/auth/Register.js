import { useState } from 'react'
import { registerUser } from '../../lib/api'
import { useNavigate } from 'react-router-dom'


const Register = () => {

  const navigate = useNavigate()

  const [errors, setErrors] = useState({})

  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    profile_image: '',
    password: '',
    password_confirmation: '',
  })


  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
    setErrors({
      ...errors,
      [event.target.name]: '',
    })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await registerUser(formData)
      console.log(response)
    } catch (err) {
      console.log(err.response)
      setErrors(err.response.data.errors)
    }
  }

  return ( 
    <section className="register-form-background">
      <div className="container">
        <div className="columns">
          <form onSubmit={handleSubmit} className="register-form-column">
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className={`input ${errors.username ? 'is-given' : ''}`}
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              { errors.username && <p className="hint is-given">{ errors.username }</p> }
            </div>
            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
                <input
                  className={`input ${errors.username ? 'is-given' : ''}`}
                  placeholder="First Name"
                  name="first_name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              { errors.username && <p className="hint is-given">{ errors.username }</p> }
            </div>
            <div className="field">
              <label className="label">Last Name</label>
              <div className="control">
                <input
                  className={`input ${errors.username ? 'is-given' : ''}`}
                  placeholder="Last Name"
                  name="last_name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              { errors.username && <p className="hint is-given">{ errors.username }</p> }
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className={`input ${errors.email ? 'is-given' : ''}`}
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              { errors.email && <p className="hint is-given">{ errors.email }</p> }
            </div>
            <div className="field">
              <label className="label">Profile Image</label>
              <div className="control">
                <input
                  className={`input ${errors.username ? 'is-given' : ''}`}
                  placeholder="Profile Image"
                  name="profile_image"
                  value={formData.profileImage}
                  onChange={handleChange}
                />
              </div>
              { errors.username && <p className="hint is-given">{ errors.username }</p> }
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  className={`input ${errors.password ? 'is-given' : ''}`}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              { errors.password && <p className="hint is-given">{ errors.password }</p> }
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control">
                <input
                  type="password"
                  className={`input ${errors.passwordConfirmation ? 'is-given' : ''}`}
                  placeholder="Password Confirmation"
                  name="passwordConfirmation"
                  value={formData.passwordConfirmation}
                  onChange={handleChange}
                />
              </div>
              { errors.passwordConfirmation && <p className="hint is-given">{ errors.passwordConfirmation }</p> }
            </div>
            <div className="field">
              <button type="submit" className="register-button">Register</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}



export default Register