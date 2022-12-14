import React from 'react'

const BigcatForm = props => {
  const { name, species, food, image, habitat } = props.formData
  const { handleChange, handleSubmit } = props

  return (
    <div className="column-form">
      <form onSubmit={handleSubmit} className="column-submitform">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input 
              className="input"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Species</label>
          <div className="control">
            <input 
              className="input"
              placeholder="Species"
              name="species"
              value={species}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Food</label>
          <div className="control">
            <input 
              className="input"
              placeholder="Small Mammals, Large Mammals, Fish, Birds"
              name="food"
              value={food}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Habitat</label>
          <div className="control">
            <select name="habitat" value={habitat} onChange={handleChange}>
              <option value="2" >
                Grassland
              </option>
              <option value="1" >
                Rainforest
              </option>
              <option value="3" >
                Rocky Areas
              </option>
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input 
              className="input"
              placeholder="Insert Image Address"
              name="image"
              value={image}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button-form">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default BigcatForm