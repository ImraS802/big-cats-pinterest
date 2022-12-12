import React from 'react'
import { registerUser } from '../../lib/api'

class Register extends React.Component {
  state = {
    formData: {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      profile_image: '',
      password: '',
      password_confirmation: ''
    },
    errors: {}
  }


  handleChange = event => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }
    const errors = {
      ...this.state.errors,
      [event.target.name]: ''
    }
    this.setState({ formData, errors })
    console.log(event.target.name, event.target.value)
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await registerUser(this.state.formData)
      console.log(response)
    } catch (err) {
      console.log(err.response)
      this.setState({ errors: err.response.data.errors })
    }
  }

  render () {
    const { username, first_name, last_name, email, profile_image, password, password_confirmation } = this.state.formData
    return ( 
      <section className="register-form-background">
        <div className="container">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="register-form-column">
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                </div>
                { this.state.errors.username && <p className="help is-danger">{ this.state.errors.username }</p> }
              </div>
              <div className="field">
                <label className="label">First Name</label>
                <div className="control">
                  <input
                    className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                    placeholder="First Name"
                    name="first_name"
                    value={first_name}
                    onChange={this.handleChange}
                  />
                </div>
                { this.state.errors.username && <p className="help is-danger">{ this.state.errors.username }</p> }
              </div>
              <div className="field">
                <label className="label">Last Name</label>
                <div className="control">
                  <input
                    className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                    placeholder="Last Name"
                    name="last_name"
                    value={last_name}
                    onChange={this.handleChange}
                  />
                </div>
                { this.state.errors.username && <p className="help is-danger">{ this.state.errors.username }</p> }
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className={`input ${this.state.errors.email ? 'is-danger' : ''}`}
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
                { this.state.errors.email && <p className="help is-danger">{ this.state.errors.email }</p> }
              </div>
              <div className="field">
                <label className="label">Profile Image</label>
                <div className="control">
                  <input
                    className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                    placeholder="Profile Image"
                    name="profile_image"
                    value={profile_image}
                    onChange={this.handleChange}
                  />
                </div>
                { this.state.errors.username && <p className="help is-danger">{ this.state.errors.username }</p> }
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    className={`input ${this.state.errors.password ? 'is-danger' : ''}`}
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
                { this.state.errors.password && <p className="help is-danger">{ this.state.errors.password }</p> }
              </div>
              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input
                    type="password"
                    className={`input ${this.state.errors.passwordConfirmation ? 'is-danger' : ''}`}
                    placeholder="Password Confirmation"
                    name="passwordConfirmation"
                    value={password_confirmation}
                    onChange={this.handleChange}
                  />
                </div>
                { this.state.errors.passwordConfirmation && <p className="help is-danger">{ this.state.errors.passwordConfirmation }</p> }
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
}


export default Register