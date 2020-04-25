import React from "react";
import Navbar from "../homepage/Navbar";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getCartProducts } from "../../actions/productActions";

class ShopingCart extends React.Component {
  componentDidMount() {
    this.props.getCartProducts();
  }
  render() {
    console.log(this.props.cart);
    if (!this.props.user.isAuthorizated) {
      return <Redirect to='/' />;
    }
    if (this.props.errors.status && this.props.errors.status !== 200) {
      return <Redirect to='/' />;
    }
    return (
      <div>
        <Navbar />
        <h1>Shopping Cart</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  errors: state.errors,
  cart: state.shoppingCart,
});
export default connect(mapStateToProps, { getCartProducts })(ShopingCart);
