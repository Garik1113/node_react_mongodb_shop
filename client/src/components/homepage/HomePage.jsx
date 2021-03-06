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
import { getUserData } from "../../actions/userActions";
class HomePage extends React.Component {
  state = {
    show: false,
  };
  componentDidMount() {
    this.props.getUserData();
    try {
      this.props.getTopProducts();
    } catch (error) {
      console.log(error);
    }
  }
  componentWillUnmount() {
    return null;
  }

  render() {
    return (
      <div
        className='container-fluid'
        onClick={() => this.props.searchProducts("")}
      >
        <Navbar />
        <Categories />
        <TrendingNow />

        <div className='col-10 d-flex flex-wrap justify-content-center offset-1'>
          <div className='col-10'>
            <h1 className='text-center'>Top Products</h1>
          </div>

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
                  isAdmin={
                    (this.props.user && this.props.user.isAdmin) || false
                  }
                  showModal={() => this.setState({ show: true })}
                />

                <Modal
                  show={this.state.show}
                  onHide={() => this.setState({ show: false })}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Change product properties</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <input
                      type='text'
                      value={e.name}
                      onChange={() =>
                        changeProductName(
                          "new Name",
                          "5ea29bceb216453310bd864b"
                        )
                      }
                      className='form-control mb-2'
                      placeholder='Name'
                    />
                    <input
                      type='text'
                      // value={e.category}
                      className='form-control  mb-2'
                      placeholder='Category'
                    />
                    <input
                      type='text'
                      // value={e.price}
                      className='form-control  mb-2'
                      placeholder='Price'
                    />
                    <input
                      type='text'
                      // value={e.quantity}
                      className='form-control mb-2'
                      placeholder='Quantity'
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant='secondary'
                      // onClick={() => this.setState({ show: false })}
                      onClick={() =>
                        this.props.changeProductName(
                          "name",
                          "5ea29bceb216453310bd864b"
                        )
                      }
                    >
                      Close
                    </Button>
                    <Button
                      variant='primary'
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
  errors: state.errors,
});

export default connect(mapStateToProps, {
  getTopProducts,
  getProductPage,
  addProductViews,
  searchProducts,
  changeProductName,
  saveProductChanges,
  getUserData,
})(HomePage);
