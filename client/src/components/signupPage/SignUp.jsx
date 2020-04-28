import React from "react";
import { connect } from "react-redux";
import Navbar from "../homepage/Navbar";
import { signupNewUser } from "../../actions/userActions";
class SignUp extends React.Component {
  state = {
    name: "",
    surname: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  hello = () => {
    this.props.history.push("/");
  };
  render() {
    const { name, surname, age, email, password, confirmPassword } = this.state;
    const { signupNewUser, errors } = this.props;
    return (
      <div className='container-fluid signup-wrapper vh-100'>
        <Navbar />
        <div className='row'>
          <div className='col-4 offset-4 mt-5 d-flex justify-content-center'>
            <form className='signup-form'>
              <div className='form-header d-flex align-items-center justify-content-between'>
                <h1 className='form-title'>Sign Up</h1>
                <i className='fas fa-sign-in-alt user-icon'></i>
              </div>
              <input
                type='text'
                className='signup-input'
                placeholder='Name'
                name='name'
                value={name}
                onChange={this.handleChange}
              />
              <small className='error-msg'>
                {errors.data.name && errors.data.name.msg}
              </small>
              <input
                type='text'
                className='signup-input'
                name='surname'
                placeholder='Surname'
                value={surname}
                onChange={this.handleChange}
              />
              <small className='error-msg'>
                {errors.data.surname && errors.data.surname.msg}
              </small>
              <input
                type='text'
                className='signup-input'
                name='age'
                placeholder='Age'
                value={age}
                onChange={this.handleChange}
              />
              <small className='error-msg'>
                {errors.data.age && errors.data.age.msg}
              </small>
              <input
                type='text'
                className='signup-input'
                name='email'
                placeholder='Email'
                value={email}
                onChange={this.handleChange}
              />
              <small className='error-msg'>
                {errors.data.email && errors.data.email.msg}
              </small>
              <input
                type='text'
                className='signup-input'
                placeholder='Password'
                name='password'
                value={password}
                onChange={this.handleChange}
              />
              <small className='error-msg'>
                {errors.data.password && errors.data.password.msg}
              </small>
              <input
                type='text'
                className='signup-input'
                name='confirmPassword'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={this.handleChange}
              />
              <small className='error-msg'>
                {errors.data.confirmPassword && errors.data.confirmPassword.msg}
              </small>
              <button
                className='signup-btn'
                type='submit'
                onClick={async (e) => {
                  e.preventDefault();
                  await signupNewUser({
                    name,
                    surname,
                    age,
                    email,
                    password,
                    confirmPassword,
                  });
                  if (!errors.hasErrors) {
                    this.props.history.push("/");
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
  errors: state.errors,
});
const mapDispatchToProps = {
  signupNewUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
