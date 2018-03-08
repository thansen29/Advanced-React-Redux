import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../actions/index';

const mapDispatchToProps = dispatch => {
  return {
    saveComment: (comment) => dispatch(saveComment(comment))
  };
};

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: ''});
  }

  render() {
    return (
      <form
        className="comment-box"
        onSubmit={ this.handleSubmit }>

        <h4>Add a comment</h4>

        <textarea
          onChange={ this.handleChange('comment') }
          value={ this.state.comment } />

        <div>
          <button>
            Submit Comment
          </button>
        </div>
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(CommentBox);
