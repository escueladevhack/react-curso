import React, { PropTypes } from 'react';

const Item = (props) => {
  const { title } = props;

  return (
    <li style={{ listStyleType: 'none', fontSize: '2rem', lineHeight: '2.5rem' }}>{title}</li>
  );
};

Item.propTypes = {
  title: PropTypes.string,
};

export default Item;
