import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Cell } from 'react-mdl';
import './style.css';

const CommentDetail = (props) => {
  const { comment } = props;

  return (
    <Cell col={10} component="article" className="comment-detail">
      <header>
        <h1>
          {comment.get('name')}
        </h1>
        <span>{comment.get('email')}</span>
      </header>
      <p>
        {comment.get('body')}
      </p>
    </Cell>
  );
};

CommentDetail.propTypes = {
  comment: ImmutablePropTypes.map,
};

export default CommentDetail;
