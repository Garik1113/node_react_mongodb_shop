import React from "react";

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [
        "shoes",
        "shoes",
        "shoes",
        "shoes",
        "shoes",
        "shoes",
        "shoes",
        "shoes",
        "shoes",
      ],
    };
  }
  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center col-10 offset-1">
          <ul className="d-flex align-items-center ">
            {this.state.categories.map((e, i) => {
              return (
                <li key={i} className="categories-item">
                  {e}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Categories;
