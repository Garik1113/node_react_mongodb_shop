import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../homepage/Navbar';
import {
  signupUserName,
  signupUserSurName,
  signupUserAge,
  signupUserEmail,
  signupUserPassword,
  signupUserConfirmPassword,
  signupNewUser,
} from '../../actions/userActions';
class SignUp extends React.Component {
  render() {
    const {
      name,
      surname,
      age,
      email,
      password,
      confirmPassword,
    } = this.props.user;
    const {
      signupUserName,
      signupUserSurName,
      signupUserAge,
      signupUserEmail,
      signupUserPassword,
      signupUserConfirmPassword,
      signupNewUser,
      errors,
      success,
    } = this.props;
    return (
      <div className="container-fluid signup-wrapper vh-100">
        <Navbar />
        <div className="row">
          <div className="col-4 offset-4 mt-5 d-flex justify-content-center">
            <form className="signup-form">
              <div className="form-header d-flex align-items-center justify-content-between">
                <h1 className="form-title">Sign Up</h1>
                <i className="fas fa-sign-in-alt user-icon"></i>
              </div>
              <input
                type="text"
                className="signup-input"
                placeholder="Name"
                value={name}
                onChange={(e) => signupUserName(e.target.value)}
              />
              <small className="error-msg">
                {errors.name && errors.name.msg}
              </small>
              <input
                type="text"
                className="signup-input"
                placeholder="Surname"
                value={surname}
                onChange={(e) => signupUserSurName(e.target.value)}
              />
              <small className="error-msg">
                {errors.surname && errors.surname.msg}
              </small>
              <input
                type="text"
                className="signup-input"
                placeholder="Age"
                value={age}
                onChange={(e) => signupUserAge(e.target.value)}
              />
              <small className="error-msg">
                {errors.age && errors.age.msg}
              </small>
              <input
                type="text"
                className="signup-input"
                placeholder="Email"
                value={email}
                onChange={(e) => signupUserEmail(e.target.value)}
              />
              <small className="error-msg">
                {errors.email && errors.email.msg}
              </small>
              <input
                type="text"
                className="signup-input"
                placeholder="Password"
                value={password}
                onChange={(e) => signupUserPassword(e.target.value)}
              />
              <small className="error-msg">
                {errors.password && errors.password.msg}
              </small>
              <input
                type="text"
                className="signup-input"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => signupUserConfirmPassword(e.target.value)}
              />
              <small className="error-msg">
                {errors.confirmPassword && errors.confirmPassword.msg}
              </small>
              <button
                className="signup-btn"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  signupNewUser();
                  if (success) {
                    this.props.history.push('/admin');
                  }
                }}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.signupUser,
  errors: state.errors.userErrors,
  success: state.errors.signupSuccess,
});
const mapDispatchToProps = {
  signupUserName,
  signupUserSurName,
  signupUserAge,
  signupUserEmail,
  signupUserPassword,
  signupUserConfirmPassword,
  signupNewUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
