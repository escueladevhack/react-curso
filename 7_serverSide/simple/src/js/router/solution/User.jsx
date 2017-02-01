import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const User = (props) => {
  const { id, name } = props;

  return (
    <div><Link to={`posts/${id}`}>{name}</Link></div>
  );
};

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default User;
