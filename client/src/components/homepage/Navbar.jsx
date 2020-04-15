import React from 'react';
import { Link } from 'react-router-dom';
import { searchProducts, getProductPage } from '../../actions/productActions';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  render() {
    const { searchingProducts } = this.props;

    return (
      <div className="container-fluid">
        <nav>
          <div className="row bg-light d-flex align-items-center navbar-wrapper ">
            <div className="col-4 d-flex justify-content-center">
              <div className="logo-wrapper">
                <Link to="/">
                  <img
                    src="/images/logo.png"
                    alt=""
                    className="img-fluid navbar-logo"
                  />
                </Link>
              </div>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <div className="search-wrapper d-flex align-items-center">
                <img
                  src="/images/navbar-search.png"
                  alt=""
                  className="search-icon"
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                  onChange={(e) => this.props.searchProducts(e.target.value)}
                />
              </div>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <div className="signup-wrapper">
                <Link to="/users/login" className="signup-link">
                  Sign in
                </Link>
                <span className="link-slesh">/</span>
                <Link to="/users/create" className="signup-link">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="offset-4 col-4 d-flex align-items-center justify-content-center">
            <ul className="searching-list">
              {searchingProducts.map((e, i) => {
                return (
                  <Link to={`/products/getPage/${e._id}`} key={i}>
                    <li
                      className="searching-list-item"
                      onClick={() => {
                        this.props.searchProducts('');
                        getProductPage(e._id);
                      }}
                    >
                      {e.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchingProducts: state.searchingProducts,
});

export default connect(mapStateToProps, { searchProducts, getProductPage })(
  Navbar
);
