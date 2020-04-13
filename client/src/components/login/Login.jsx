import React from 'react';
import { connect } from 'react-redux';
import {
  loginUserEmail,
  loginUserPassword,
  loginUser,
} from '../../actions/userActions';
class Login extends React.Component {
  render() {
    const { email, password } = this.props.user;
    const { loginUserEmail, loginUserPassword, loginUser } = this.props;
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => loginUserEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => loginUserPassword(e.target.value)}
          />
          <button type="button" onClick={() => loginUser()}>
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
