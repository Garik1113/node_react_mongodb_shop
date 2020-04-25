import React from "react";
import { connect } from "react-redux";
import Navbar from "../homepage/Navbar";
import { getProductByCategory } from "../../actions/categoryActions";
import { addProductViews, getProductPage } from "../../actions/productActions";
import ProductCard from "../productPage/ProductCard";

class Products extends React.Component {
  state = {
    title: "",
  };
  componentDidMount() {
    const name = this.props.match.params.name;
    if (name) {
      this.setState({ title: name });
      this.props.getProductByCategory(name);
    }
  }
  render() {
    const { products } = this.props;
    return (
      <div className='container-fluid'>
        <Navbar />
        <h1 className='text-center mt-2 mb-2'>{this.state.title}</h1>
        <div className='container d-flex flex-wrap justify-content-center'>
          {products.map((e, i) => {
            return (
              <ProductCard
                key={i}
                id={e._id}
                name={e.name}
                price={e.price}
                imagePaths={e.imagePaths}
                addProductViews={this.props.addProductViews}
                getProductPage={this.props.getProductPage}
                isAdmin={this.props.user.isAdmin || false}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.productsByCatName,
  user: state.user.user,
});

export default connect(mapStateToProps, {
  getProductByCategory,
  addProductViews,
  getProductPage,
})(Products);
