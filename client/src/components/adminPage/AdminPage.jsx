import React from "react";
import AddProduct from "./AddProduct";
class AdminPage extends React.Component {
  render() {
    return (
      <div className="container-fluid vh-100 adminPage-wrapper ">
        <AddProduct />
      </div>
    );
  }
}

export default AdminPage;
