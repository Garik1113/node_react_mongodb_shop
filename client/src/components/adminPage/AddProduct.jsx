import React from "react";
import { connect } from "react-redux";
import { addProductImages, addProduct } from "../../actions/productActions";
import { getCategories } from "../../actions/categoryActions";
class AddProduct extends React.Component {
  state = {
    name: "",
    price: "",
    category: "",
    gender: "",
    quantity: "",
    success: "",
  };
  componentDidMount() {
    this.props.getCategories();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, price, gender, quantity, category, success } = this.state;
    const {
      categories,
      addProduct,
      addProductImages,
      imagePaths,
      errors,
    } = this.props;
    return (
      <div className="col-3 d-flex justify-content-center add-product-wrapper mt-4 m-2">
        <form className="addProduct-form">
          <h2 className="text-center">Add Product</h2>
          <h4 className="alert-success">{success}</h4>
          <input
            type="text"
            className="addProduct-input"
            placeholder="Name"
            value={name}
            name="name"
            onChange={(e) => this.handleChange(e)}
          />
          <small className="error-msg">{errors.name && errors.name.msg}</small>
          <select
            className="select-css"
            name="category"
            onChange={(e) => this.handleChange(e)}
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
            name="price"
            value={price}
            onChange={(e) => this.handleChange(e)}
          />
          <small className="error-msg">
            {errors.price && errors.price.msg}
          </small>
          <input
            type="text"
            className="addProduct-input"
            placeholder="Quantity"
            value={quantity}
            name="quantity"
            onChange={(e) => this.handleChange(e)}
          />
          <small className="error-msg">
            {errors.quantity && errors.quantity.msg}
          </small>
          <input
            type="text"
            className="addProduct-input"
            placeholder="Gender"
            value={gender}
            name="gender"
            onChange={(e) => this.handleChange(e)}
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
            onClick={async () => {
              await addProduct({
                name,
                category,
                price,
                gender,
                quantity,
                imagePaths,
              });
              if (Object.keys(errors).length === 0) {
                this.setState({
                  name: "",
                  success: "Product has been successfuly adeed",
                  price: "",
                  category: "",
                  quantity: "",
                  gender: "",
                });
              }
            }}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
  imagePaths: state.addedProduct.imagePaths,
  errors: state.errors.data,
});

const mapDispatchToProps = {
  addProductImages,
  addProduct,
  getCategories,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
