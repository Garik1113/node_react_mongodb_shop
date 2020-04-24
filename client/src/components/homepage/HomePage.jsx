import React from "react";
import Navbar from "./Navbar";
import Categories from "./Categories";
import TrendingNow from "../trendingNow/TrendingNow";
import ProductCard from "../productPage/ProductCard";
import { Modal, Button } from "react-bootstrap";

import {
  getTopProducts,
  getProductPage,
  addProductViews,
  searchProducts,
  changeProductName,
  saveProductChanges,
} from "../../actions/productActions";
import { connect } from "react-redux";
class HomePage extends React.Component {
  state = {
    show: false,
  };
  componentDidMount() {
    this.props.getTopProducts();
  }
  render() {
    return (
      <div
        className="container-fluid"
        onClick={() => this.props.searchProducts("")}
      >
        <Navbar />
        <Categories />
        <TrendingNow />
        <div className="col-10 d-flex flex-wrap justify-content-center offset-1">
          {/* <div className="col-10">
            <h1 className="text-center">Top Products</h1>
          </div> */}

          {this.props.topProducts.map((e, i) => {
            return (
              <div key={i}>
                <ProductCard
                  id={e._id}
                  name={e.name}
                  price={e.price}
                  addProductViews={() => this.props.addProductViews(e._id)}
                  imagePaths={e.imagePaths}
                  getProductPage={() => this.props.getProductPage(e._id)}
                  isAdmin={this.props.user.isAdmin || false}
                  showModal={() => this.setState({ show: true })}
                />

                <Modal show={this.state.show}>
                  <Modal.Header closeButton>
                    <Modal.Title>Change product properties</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <input
                      type="text"
                      // value={e.name}

                      onChange={(n) => changeProductName(n.target.name, e._id)}
                      className="form-control mb-2"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      // value={e.category}
                      className="form-control  mb-2"
                      placeholder="Category"
                    />
                    <input
                      type="text"
                      // value={e.price}
                      className="form-control  mb-2"
                      placeholder="Price"
                    />
                    <input
                      type="text"
                      // value={e.quantity}
                      className="form-control mb-2"
                      placeholder="Quantity"
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => this.setState({ show: false })}
                    >
                      Close
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => this.props.saveProductChanges()}
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  topProducts: state.topProducts,
  user: state.user.user,
});

export default connect(mapStateToProps, {
  getTopProducts,
  getProductPage,
  addProductViews,
  searchProducts,
  changeProductName,
  saveProductChanges,
})(HomePage);
