import React from "react";
import AddProduct from "./AddProduct";
import AddCategories from "./AddCategories";
class AdminPage extends React.Component {
  render() {
    return (
      <div className="container-fluid vh-100 d-flex justify-content-center adminPage-wrapper ">
        <AddProduct />
        <AddCategories />
      </div>
    );
  }
}

export default AdminPage;
