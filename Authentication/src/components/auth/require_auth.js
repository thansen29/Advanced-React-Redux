import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default (ComposedComponent) => {
  class Authentication extends React.Component {

    static contextTypes = {
      router: PropTypes.object
    };

    componentWillMount() {
      if(!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent { ...this.props } />;
    }
  }

  const mapStateToProps = state => {
    return {
      authenticated: state.auth.authenticated
    };
  };

  return connect(mapStateToProps)(Authentication);
};



//This is a generic skeleton for any HOC
// export default (ComposedComponent) => {
//   class Authentication extends React.Component {
//     render() {
//       return <ComposedComponent { ...this.props } />;
//     }
//   }
//
//   return Authentication;
// };
