import React from "react";
import { connect } from "react-redux";
import {
  addProductName,
  addProductCategory,
  addProductPrice,
  addProductGender,
  addProductQuantity,
  addProductImages,
  addProduct,
} from "../../actions/productActions";
import { getCategories } from "../../actions/categoryActions";
class AddProduct extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }
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
      categories,
    } = this.props;
    return (
      <div className="col-3 d-flex justify-content-center add-product-wrapper mt-4 m-2">
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
          <select
            className="select-css"
            onChange={(e) => addProductCategory(e.target.value)}
          >
            <option>Choose category</option>;
            {categories &&
              categories.map((e, i) => {
                return <option key={i}>{e.name}</option>;
              })}
          </select>
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
          </small>{" "}
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
  categories: state.categories,
});

const mapDispatchToProps = {
  addProductName,
  addProductCategory,
  addProductPrice,
  addProductGender,
  addProductQuantity,
  addProductImages,
  addProduct,
  getCategories,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
