import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  addProductToCart,
  deleteProductById,
} from "../../actions/productActions";
import { connect } from "react-redux";

class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Jeans",
      price: "2000",
      imagePaths: ["images/jeans.jpg"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum veritatieos ducimus voluptate quo cupiditate recusandae quibusdam maxime asperioresdolorem!",
    };
  }

  handleClick = () => {
    this.props.addProductViews();
    this.props.getProductPage();
  };
  render() {
    return (
      <div className="col-3 product-card">
        <img
          src={"/" + this.props.imagePaths[0]}
          alt=""
          className="product-card-img"
        />
        <div className="d-flex align-items-center justify-content-center">
          <Link to={`/products/getPage/${this.props.id}`}>
            <h2
              className="product-card-name"
              onClick={() => this.handleClick()}
            >
              {this.props.name}
            </h2>
          </Link>

          <span className="product-card-price">{this.props.price}$</span>
        </div>
        <p className="product-card-description">{this.state.description}</p>
        <div className="d-flex align-items-center">
          <button
            className="btn btn-success"
            onClick={() => this.props.addProductToCart(this.props.id)}
          >
            Add to cart
          </button>
          {this.props.isAdmin && (
            <div>
              <button
                className="btn btn-danger ml-2"
                onClick={() => this.props.deleteProductById(this.props.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-warning"
                onClick={() => this.props.showModal()}
              >
                Change
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  imagePaths: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart,
});

export default connect(mapStateToProps, {
  addProductToCart,
  deleteProductById,
})(ProductCard);
