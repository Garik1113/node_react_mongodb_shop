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
    } = this.props;
    return (
      <div className="col-4 offset-4 d-flex justify-content-center">
        <form className="addProduct-form">
          <h2 className="text-center">Add Product</h2>
          <input
            type="text"
            className="addProduct-input"
            placeholder="Name"
            value={name}
            onChange={(e) => addProductName(e.target.value)}
          />
          <input
            type="text"
            className="addProduct-input"
            placeholder="Category"
            value={category}
            onChange={(e) => addProductCategory(e.target.value)}
          />
          <input
            type="text"
            className="addProduct-input"
            placeholder="Price"
            value={price}
            onChange={(e) => addProductPrice(e.target.value)}
          />
          <input
            type="text"
            className="addProduct-input"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => addProductQuantity(e.target.value)}
          />
          <input
            type="text"
            className="addProduct-input"
            placeholder="Gender"
            value={gender}
            onChange={(e) => addProductGender(e.target.value)}
          />

          <input
            type="file"
            className="addProduct-input"
            placeholder="Image"
            onChange={(e) => addProductImages(e.target.files)}
            multiple
          />
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
