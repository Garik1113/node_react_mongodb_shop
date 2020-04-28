import React from "react";
import { connect } from "react-redux";
import { incrementProductQuantity } from "../../actions/productActions";

class CartProduct extends React.Component {
  render() {
    return (
      <div className='col-8 offset-2 cartProduct-wrapper mt-2'>
        <div className='cart-img-wrapper'>
          <img src={this.props.imgSrc} alt='' className='cart-img' />
        </div>
        <div className='cart-name-wrapper'>
          <h3 className='cart-name'>{this.props.name}</h3>
        </div>
        <div className='cart-price-wrapper'>
          <span className='cart-price'>{this.props.price}$</span>
        </div>
        <div className='cart-quantity-wrapper'>
          <button
            className='cart-quantity-add'
            onClick={() =>
              this.props.incrementProductQuantity(
                this.props.id,
                -1,
                this.props.cart_id
              )
            }
          >
            -
          </button>
          <span className='cart-quantity'>{this.props.quantity}</span>
          <button
            className='cart-quantity-add'
            onClick={() =>
              this.props.incrementProductQuantity(
                this.props.id,
                1,
                this.props.cart_id
              )
            }
          >
            +
          </button>
        </div>
        <span className='cart-total-price'>
          {this.props.price * this.props.quantity}$
        </span>
        <button className='delete-product-btn'>&times;</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  incrementProductQuantity,
};
export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);
