import React, { PropTypes } from 'react';

const postItem = (props) => {
  const { title, body } = props;

  return (
    <div><h2>{title}</h2><p>{body}</p></div>
  );
};

postItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default postItem;
