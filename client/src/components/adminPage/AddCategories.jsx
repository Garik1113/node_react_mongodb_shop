import React from "react";
import { addNewCategory } from "../../actions/categoryActions";
import { connect } from "react-redux";

class AddCategories extends React.Component {
  state = {
    newCategory: "",
  };
  render() {
    let { newCategory } = this.state;
    const { error, success } = this.props;
    return (
      <div className="col-3 mt-4 add-category-wrapper">
        <h2 className="mt-4">Add New Category</h2>
        <span className="text-center green">{success}</span>
        <label htmlFor="category">Add Category name</label>
        <input
          type="text"
          id="category"
          placeholder=""
          value={newCategory}
          onChange={(e) => this.setState({ newCategory: e.target.value })}
          className="signup-input"
        />
        <button
          type="button"
          className="signup-btn"
          onClick={() => {
            this.props.addNewCategory(newCategory);
            this.setState({ newCategory: "" });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  error: state.errors.categoryErrors,
  success: state.errors.categorySuccess,
});
export default connect(mapStateToProps, { addNewCategory })(AddCategories);
