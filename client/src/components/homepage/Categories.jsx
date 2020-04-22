import React from "react";
import { connect } from "react-redux";
import {
  getCategories,
  getProductByCategory,
} from "../../actions/categoryActions";
import { Link } from "react-router-dom";

class Categories extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center col-10 offset-1">
          <ul className="d-flex align-items-center ">
            {this.props.categories.map((e, i) => {
              return (
                <Link key={i} to={`/products/getByCatName/${e.name}`}>
                  <li
                    className="categories-item"
                    onClick={() => this.props.getProductByCategory(e.name)}
                  >
                    {e.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, {
  getCategories,
  getProductByCategory,
})(Categories);
