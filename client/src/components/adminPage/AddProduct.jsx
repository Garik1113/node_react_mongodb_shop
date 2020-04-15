import React from 'react';
import { connect } from 'react-redux';
import {
  addProductName,
  addProductCategory,
  addProductPrice,
  addProductGender,
  addProductQuantity,
  addProductImages,
  addProduct,
} from '../../actions/productActions';

class AddProduct extends React.Component {
  render() {
    const { name, price, category, gender, quantity } = this.props.addedProduct;
    const {
      addProductName,
      addProductCategory,
      addProductPrice,
      addProductGender,
      addProductQuantity,
      addProductImages,
      addProduct,
      errors,
      productSuccess,
    } = this.props;

    return (
      <div className="col-4 offset-4 d-flex justify-content-center">
        <form className="addProduct-form">
          <h2 className="text-center">Add Product</h2>
          <h4 className="alert-success">{productSuccess}</h4>
          <input
            type="text"
            className="addProduct-input"
            placeholder="Name"
            value={name}
            onChange={(e) => addProductName(e.target.value)}
          />
          <small className="error-msg">{errors.name && errors.name.msg}</small>
          <input
            type="text"
            className="addProduct-input"
            placeholder="Category"
            value={category}
            onChange={(e) => addProductCategory(e.target.value)}
          />
          <small className="error-msg">
            {errors.category && errors.category.msg}
          </small>
          <input
            type="text"
            className="addProduct-input"
            placeholder="Price"
            value={price}
            onChange={(e) => addProductPrice(e.target.value)}
          />
          <small className="error-msg">
            {errors.price && errors.price.msg}
          </small>
          <input
            type="text"
            className="addProduct-input"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => addProductQuantity(e.target.value)}
          />
          <small className="error-msg">
            {errors.quantity && errors.quantity.msg}
          </small>
          <input
            type="text"
            className="addProduct-input"
            placeholder="Gender"
            value={gender}
            onChange={(e) => addProductGender(e.target.value)}
          />
          <small className="error-msg">
            {errors.gender && errors.gender.msg}
          </small>
          <input
            type="file"
            name="file"
            id="file"
            className="inputfile"
            onChange={(e) => addProductImages(e.target.files)}
            multiple
          />
          <label htmlFor="file">Add images</label>
          <small className="error-msg">
            {errors.imagePaths && errors.imagePaths.msg}
          </small>{' '}
          <br />
          <button
            type="button"
            className="addProduct-btn"
            onClick={() => addProduct()}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  addedProduct: state.addedProduct,
  errors: state.errors.addedProductErrors,
  productSuccess: state.errors.productSuccess,
});

const mapDispatchToProps = {
  addProductName,
  addProductCategory,
  addProductPrice,
  addProductGender,
  addProductQuantity,
  addProductImages,
  addProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
