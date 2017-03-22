/**
 * Reusable stateless form component for Product
 */

// import primary libraries
import React, { PropTypes } from 'react'
import { Link } from 'react-router';

// import form components
import { TextInput, TextAreaInput } from '../../../global/components/forms';

function ProductForm({
  cancelLink
  , formTitle
  , formType
  , handleFormChange
  , handleFormSubmit
  , product
}) {

  // set the button text
  const buttonText = formType === "create" ? "Create Product" : "Update Product";

  // set the form header
  const header = formTitle ? <div className="formHeader"><h1> {formTitle} </h1><hr/></div> : <div/>;

  return (
    <div className="yt-container">
      {header}
      <div className="yt-row center-horiz">
        <div className="form-container">
          <form name="productForm" className="card product-form" onSubmit={handleFormSubmit}>
            <TextInput
              name="title"
              label="Title"
              value={product.title}
              change={handleFormChange}
              placeholder="Title (required)"
              required={true}
            />
            <TextAreaInput
              name="description"
              label="Description"
              value={product.description}
              change={handleFormChange}
              required={false}
              rows="3"
              placeholder="This is where the content goes..."
            />
            <div className="input-group">
              <div className="yt-row space-between">
                <Link className="yt-btn link" to={cancelLink}>Cancel</Link>
                <button className="yt-btn " type="submit" > {buttonText} </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

ProductForm.propTypes = {
  cancelLink: PropTypes.string.isRequired
  , formTitle: PropTypes.string
  , formType: PropTypes.string.isRequired
  , handleFormChange: PropTypes.func.isRequired
  , handleFormSubmit: PropTypes.func.isRequired
  , product: PropTypes.object.isRequired
}

ProductForm.defaultProps = {
  formTitle: ''
}

export default ProductForm;
