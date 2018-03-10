import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Feature extends React.Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div>
        { this.props.message }
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    message: state.auth.message
  };
};

export default connect(mapStateToProps, actions)(Feature);
