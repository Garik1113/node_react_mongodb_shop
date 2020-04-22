import React from "react";
import { connect } from "react-redux";
import { getProductPage } from "../../actions/productActions";
import Navbar from "../homepage/Navbar";

class ProductPage extends React.Component {
  constructor() {
    super();
    this.state = {
      activeImg: "",
    };
  }
  componentDidMount() {
    const idParam = this.props.match.params;
    this.props.getProductPage(idParam.id);
  }
  render() {
    const { product } = this.props;
    const { activeImg } = this.state;
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="row">
          <div className="col-5 offset-1 mt-5">
            <div className="images-wrapper">
              <div className="general-image-wrappper">
                {!activeImg && (
                  <img
                    src={product.imagePaths && "/" + product.imagePaths[0]}
                    className="general-image"
                    alt=""
                  />
                )}
                <img src={activeImg} className="general-image" alt="" />
              </div>
              <div className="image-list">
                {product.imagePaths &&
                  product.imagePaths.map((e, i) => {
                    return (
                      <img
                        src={"/" + e}
                        alt=""
                        className="img-list-item"
                        key={i}
                        onClick={() => this.setState({ activeImg: `/${e}` })}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="col-5 mt-5">
            <div className="product-description">
              <h1 className="pro-name">{product.name && product.name}</h1>
              <span className="pro-price">
                {product.price && product.price}$
              </span>

              <hr />
              <p className="pro-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates deleniti ex error, maiores dignissimos hic autem
                repellendus laudantium perspiciatis cumque.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.productPage,
});
export default connect(mapStateToProps, { getProductPage })(ProductPage);
