import React from "react";
import Navbar from "../homepage/Navbar";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { getCartProducts } from "../../actions/productActions";
import CartProduct from "./cartProduct";
class ShopingCart extends React.Component {
  componentDidMount() {
    this.props.getCartProducts();
  }
  render() {
    console.log(this.props.cart);
    if (!this.props.user.isAuthorizated) {
      return <Redirect to='/' />;
    }
    return (
      <div>
        <Navbar />
        <h3 className='text-center mt-2 mb-2'>Shopping Cart</h3>

        <div>
          {this.props.cart.map((e, i) => {
            return (
              <CartProduct
                key={i}
                name={e.pro?.name}
                price={e.pro?.price}
                quantity={e.cart.quantity}
                cart_id={e.cart._id}
                imgSrc={e.pro?.imagePaths[0]}
                id={e.pro?._id}
              />
            );
          })}
        </div>
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
