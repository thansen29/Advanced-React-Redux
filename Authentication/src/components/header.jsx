import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends React.Component {
  renderLinks() {
    if(this.props.loggedIn) {
      return <li className="nav-item">
        <Link className="nav-link" to="/signout">Signout</Link>
      </li>;
    } else {
      return [
        <li className="nav-item" key={ 1 }>
          <Link to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={ 2 }>
          <Link to="/signup">Sign Up</Link>
        </li>
      ];
    }

  }

  render() {
    return (
      <nav className="navbar navbar-light">

        <Link to="/" className="navbar-brand">Redux Auth</Link>

        <ul className="nav navbar-nav">
          { this.renderLinks() }
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(Header);
