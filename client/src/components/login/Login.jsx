import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import Navbar from "../homepage/Navbar";
import { loginUser } from "../../actions/userActions";
class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  render() {
    const { loginUser, errors, user } = this.props;
    if (user.isAuthorizated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container-fluid">
        <Navbar />
        <form className="col-4 offset-4 mt-5 signup-form">
          <h1 className="text-center">Login</h1>
          <input
            type="text"
            placeholder="Email"
            className="signup-input "
            onChange={(e) => this.setState({ email: e.target.value })}
            onKeyPress={(e) => {
              if (e.charCode === 13) {
                return loginUser(this.state.email, this.state.password);
              }
            }}
          />
          <small className="error-msg">
            {errors.data.email && errors.data.email.msg}
          </small>
          <input
            type="password"
            placeholder="Password"
            onKeyPress={(e) => {
              if (e.charCode === 13) {
                return loginUser(this.state.email, this.state.password);
              }
            }}
            className="signup-input"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <small className="error-msg">
            {errors.data.password && errors.data.password.msg}
          </small>
          <button
            type="button"
            className="signup-btn"
            onClick={() => {
              loginUser(this.state.email, this.state.password);
            }}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
