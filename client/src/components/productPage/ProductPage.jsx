import React from "react";
import { connect } from "react-redux";
import { getProductPage } from "../../actions/productActions";

class ProductPage extends React.Component {
  componentDidMount() {
    const idParam = this.props.match.params;
    this.props.getProductPage(idParam.id);
  }
  render() {
    return (
      <div>
        <h1>{this.props.product.name}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.productPage,
});
export default connect(mapStateToProps, { getProductPage })(ProductPage);
