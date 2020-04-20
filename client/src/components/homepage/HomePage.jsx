import React from 'react';
import Navbar from './Navbar';
import Categories from './Categories';
import TrendingNow from '../trendingNow/TrendingNow';
import ProductCard from '../productPage/ProductCard';

import {
  getTopProducts,
  getProductPage,
  addProductViews,
} from '../../actions/productActions';
import { connect } from 'react-redux';
class HomePage extends React.Component {
  componentDidMount() {
    this.props.getTopProducts();
  }
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <Categories />
        <TrendingNow />
        <div className="col-10 d-flex flex-wrap justify-content-center offset-1">
          <div className="col-10">
            <h1 className="text-center">Top Products</h1>
          </div>

          {this.props.topProducts.map((e, i) => {
            return (
              <ProductCard
                key={i}
                id={e._id}
                name={e.name}
                price={e.price}
                addProductViews={() => this.props.addProductViews(e._id)}
                imagePaths={e.imagePaths}
                getProductPage={() => this.props.getProductPage(e._id)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  topProducts: state.topProducts,
  user: state.user,
});

export default connect(mapStateToProps, {
  getTopProducts,
  getProductPage,
  addProductViews,
})(HomePage);
