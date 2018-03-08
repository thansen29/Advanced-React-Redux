import React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import * as actions from '../actions';

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

class UserList extends React.Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return (
      <div className="card card-block" key={ user.id }>
        <h4 className="card-title">{ user.name }</h4>
        <p className="card-text">{ user.company.name }</p>
        <a className="btn btn-primary" href={ user.website }>Website</a>
      </div>
    );
  }

  render() {
    let users;
    users = _.map(this.props.users, user => this.renderUser(user));
    return (
      <section className="user-list">
        { users }
      </section>
    );
  }
}

export default connect(mapStateToProps, actions)(UserList);
