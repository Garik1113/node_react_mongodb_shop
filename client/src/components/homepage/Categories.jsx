import React from "react";
import { connect } from "react-redux";
import { getCategories } from "../../actions/categoryActions";

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
                <li key={i} className="categories-item">
                  {e.name}
                </li>
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

export default connect(mapStateToProps, { getCategories })(Categories);
