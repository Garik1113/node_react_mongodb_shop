import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../homepage/Navbar';
import {
  loginUserEmail,
  loginUserPassword,
  loginUser,
} from '../../actions/userActions';
class Login extends React.Component {
  render() {
    const { email, password } = this.props.user;
    const { errors, success } = this.props;
    const { loginUserEmail, loginUserPassword, loginUser } = this.props;
    return (
      <div className="container-fluid">
        <Navbar />
        <form className="col-4 offset-4 mt-5 signup-form">
          <h1 className="text-center">Login</h1>
          <input
            type="text"
            placeholder="Email"
            className="signup-input "
            value={email}
            onChange={(e) => loginUserEmail(e.target.value)}
          />
          <small className="error-msg">
            {errors.email && errors.email.msg}
          </small>
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
            value={password}
            onChange={(e) => loginUserPassword(e.target.value)}
          />
          <small className="error-msg">
            {errors.password && errors.password.msg}
          </small>
          <button
            type="button"
            className="signup-btn"
            onClick={() => {
              loginUser();
              console.log(this.props);
              if (success) {
                this.props.history.push('/');
              }
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
  user: state.loginUser,
  errors: state.errors.userErrors,
  success: state.errors.loginSuccess,
});
const mapDispatchToProps = {
  loginUserEmail,
  loginUserPassword,
  loginUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
